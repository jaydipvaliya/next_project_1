import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSpecialization, getAllDepartments, getStudentsBySpecialization } from "@/libs/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SpecializationStudentCard from "@/components/students/SpecializationStudentCard";

interface SpecializationPageProps {
  params: Promise<{
    department: string;
    specialization: string;
  }>;
}

export async function generateMetadata({
  params,
}: SpecializationPageProps): Promise<Metadata> {
  const { department: deptSlug, specialization: specSlug } = await params;
  const result = getSpecialization(deptSlug, specSlug);

  if (!result) {
    return {
      title: "Specialization Not Found | Campus Directory",
    };
  }

  const { department, specialization } = result;

  return {
    title: `${specialization.name} (${specialization.trackCode}) - ${department.name} | Campus Directory`,
    description: specialization.description,
  };
}

export async function generateStaticParams() {
  const depts = getAllDepartments();
  const paths: { department: string; specialization: string }[] = [];

  for (const dept of depts) {
    for (const spec of dept.specializations) {
      paths.push({
        department: dept.slug,
        specialization: spec.slug,
      });
    }
  }

  return paths;
}

export default async function SpecializationPage({
  params,
}: SpecializationPageProps) {
  const { department: deptSlug, specialization: specSlug } = await params;
  const result = getSpecialization(deptSlug, specSlug);

  if (!result) {
    notFound();
  }

  const { department, specialization } = result;
  const studentsInSpec = getStudentsBySpecialization(department.slug, specialization.slug);

  const currentPath = `/departments/${department.slug}/${specialization.slug}`;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          { label: department.name, href: `/departments/${department.slug}` },
          { label: specialization.name },
        ]}
      />

      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <Link
          href={`/departments/${department.slug}`}
          className="inline-flex items-center text-xs font-medium text-blue-600 transition hover:text-blue-700"
        >
          <span className="mr-1.5">←</span> Return to {department.name} Department
        </Link>

        <Link
          href="/students"
          className="inline-flex items-center text-xs font-medium text-gray-500 transition hover:text-blue-600"
        >
          View all students <span className="ml-1">→</span>
        </Link>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {specialization.name}
              </h1>
              <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600">
                Specialization under {department.name}
              </span>
            </div>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
              {specialization.description}
            </p>
          </div>

          <div className="shrink-0 text-left sm:text-right">
            <span className="block text-xs font-bold tracking-wider text-gray-400 uppercase">
              DEPARTMENT TRACK
            </span>
            <span className="mt-1 inline-block rounded border border-gray-300 bg-gray-50 px-2.5 py-1 font-mono text-xs font-bold text-gray-800">
              {specialization.trackCode}
            </span>
          </div>
        </div>

        <div className="my-6 border-t border-gray-200" />

        <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:grid-cols-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Academic Lead
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              {specialization.academicLead}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Primary Core Lab
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              {specialization.primaryCoreLab}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Total Enrollment
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              {specialization.totalEnrollment}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Curriculum Cycle
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              {specialization.curriculumCycle}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-gray-900">
              Students in this Specialization
            </h2>
            <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-bold text-gray-700">
              {studentsInSpec.length}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <span>Filtered by Track:</span>
            <span className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 font-medium text-gray-700">
              {specialization.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {studentsInSpec.map((student) => (
            <SpecializationStudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
        <span>Campus Directory © Academic Informatics Core</span>
        <span className="flex items-center gap-2 font-mono">
          Path: {currentPath}
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </div>
    </main>
  );
}
