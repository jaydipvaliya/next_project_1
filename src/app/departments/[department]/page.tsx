import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDepartmentBySlug, getAllDepartments, getStudentsByDepartment } from "@/libs/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import StudentCard from "@/components/students/StudentCard";

interface DepartmentOverviewPageProps {
  params: Promise<{ department: string }>;
}

export async function generateMetadata({
  params,
}: DepartmentOverviewPageProps): Promise<Metadata> {
  const { department: deptSlug } = await params;
  const dept = getDepartmentBySlug(deptSlug);

  if (!dept) {
    return {
      title: "Department Not Found | Campus Directory",
    };
  }

  return {
    title: `${dept.name} Faculty | Campus Directory`,
    description: dept.description,
  };
}

export async function generateStaticParams() {
  const depts = getAllDepartments();
  return depts.map((d) => ({
    department: d.slug,
  }));
}

export default async function DepartmentOverviewPage({
  params,
}: DepartmentOverviewPageProps) {
  const { department: deptSlug } = await params;
  const department = getDepartmentBySlug(deptSlug);

  if (!department) {
    notFound();
  }

  const deptStudents = getStudentsByDepartment(department.slug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          { label: department.name },
        ]}
      />

      <div className="mb-6">
        <Link
          href="/departments"
          className="inline-flex items-center text-xs font-medium text-gray-600 transition hover:text-gray-900"
        >
          <span className="mr-1.5">←</span> Back to Departments
        </Link>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded border border-blue-200 bg-blue-50 px-2.5 py-0.5 font-mono text-xs font-bold text-blue-700">
                {department.code}
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {department.name}
              </h1>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              {department.description}
            </p>
          </div>

          <div className="text-left sm:text-right">
            <span className="block text-xs font-bold tracking-wider text-gray-400 uppercase">
              FACULTY HEAD
            </span>
            <span className="mt-1 block text-sm font-bold text-gray-900">
              {department.academicLead || "Academic Chair"}
            </span>
          </div>
        </div>

        <div className="my-6 border-t border-gray-200" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-xs font-medium text-gray-500">
          <div>
            <span className="block text-gray-400">SPECIALIZATIONS</span>
            <span className="mt-1 block text-base font-bold text-gray-900">
              {department.specializationsCount} Tracks
            </span>
          </div>
          <div>
            <span className="block text-gray-400">TOTAL ENROLLMENT</span>
            <span className="mt-1 block text-base font-bold text-gray-900">
              {department.enrolledStudentsCount} Students
            </span>
          </div>
          <div>
            <span className="block text-gray-400">SAMPLE DIRECTORY</span>
            <span className="mt-1 block text-base font-bold text-gray-900">
              {deptStudents.length} Profiles
            </span>
          </div>
          <div>
            <span className="block text-gray-400">ACADEMIC YEAR</span>
            <span className="mt-1 block text-base font-bold text-gray-900">
              2024–2025
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900">
          Specialization Tracks
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {department.specializations.map((spec) => (
            <Link
              key={spec.slug}
              href={`/departments/${department.slug}/${spec.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-2xs transition hover:border-blue-300 hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-blue-600">
                    {spec.trackCode}
                  </span>
                  <span className="text-xs text-gray-400">
                    {spec.totalEnrollment}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-gray-900 group-hover:text-blue-600">
                  {spec.name}
                </h3>
                <p className="mt-1.5 text-xs text-gray-500 line-clamp-2">
                  {spec.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
                <span className="text-gray-500">Lead: {spec.academicLead}</span>
                <span className="font-medium text-blue-600 group-hover:underline">
                  View track →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            Enrolled Students in {department.name}
          </h2>
          <span className="text-xs font-medium text-gray-500">
            {deptStudents.length} students
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deptStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </main>
  );
}
