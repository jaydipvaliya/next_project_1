import { students } from "@/data/students";
import { departments } from "@/data/departments";
import type { Student } from "@/types/student";
import type { Department, Specialization } from "@/types/department";

export function getAllStudents(): Student[] {
  return students;
}

export function getStudentByIdOrSlug(identifier: string): Student | undefined {
  if (!identifier) return undefined;
  const cleanId = decodeURIComponent(identifier).trim().toLowerCase();
  
  return students.find((s) => {
    return (
      s.id.toLowerCase() === cleanId ||
      s.slug.toLowerCase() === cleanId ||
      s.id.replace("stu-", "").toLowerCase() === cleanId ||
      s.id.replace("-", "").toLowerCase() === cleanId ||
      s.name.toLowerCase().replace(/\s+/g, "-") === cleanId
    );
  });
}

export function getStudentsByDepartment(departmentQuery: string): Student[] {
  if (!departmentQuery || departmentQuery === "all") return students;
  const clean = departmentQuery.toLowerCase().trim();
  return students.filter(
    (s) =>
      s.department.toLowerCase() === clean ||
      s.departmentSlug.toLowerCase() === clean
  );
}

export function getStudentsBySpecialization(
  departmentSlug: string,
  specializationSlug: string
): Student[] {
  const dept = getDepartmentBySlug(departmentSlug);
  if (!dept) return [];

  const spec = dept.specializations.find(
    (sp) => sp.slug.toLowerCase() === specializationSlug.toLowerCase()
  );
  if (!spec) return [];

  return students.filter(
    (s) =>
      s.departmentSlug === dept.slug &&
      (s.specializationSlug === spec.slug || spec.studentIds.includes(s.id))
  );
}

export function getAllDepartments(): Department[] {
  return departments;
}

export function getDepartmentBySlug(slug: string): Department | undefined {
  if (!slug) return undefined;
  const clean = decodeURIComponent(slug).toLowerCase().trim();

  const aliasMap: Record<string, string> = {
    cs: "computer-science",
    des: "design",
    bus: "business",
  };

  const resolvedSlug = aliasMap[clean] || clean;

  return departments.find(
    (d) =>
      d.slug.toLowerCase() === resolvedSlug ||
      d.id.toLowerCase() === resolvedSlug ||
      d.code.toLowerCase() === resolvedSlug
  );
}

export function getSpecialization(
  departmentSlug: string,
  specializationSlug: string
): { department: Department; specialization: Specialization } | undefined {
  const department = getDepartmentBySlug(departmentSlug);
  if (!department) return undefined;

  const cleanSpec = decodeURIComponent(specializationSlug).toLowerCase().trim();
  const specialization = department.specializations.find(
    (s) => s.slug.toLowerCase() === cleanSpec
  );

  if (!specialization) return undefined;

  return { department, specialization };
}
