import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getStudentByIdOrSlug, getAllStudents } from "@/libs/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";

interface StudentDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: StudentDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const student = getStudentByIdOrSlug(id);

  if (!student) {
    return {
      title: "Student Not Found | Campus Directory",
    };
  }

  return {
    title: `${student.name} (${student.id}) | Campus Directory`,
    description: `Academic profile for ${student.name}, enrolled in ${student.department}.`,
  };
}

export async function generateStaticParams() {
  const allStudents = getAllStudents();
  return allStudents.map((student) => ({
    id: student.id,
  }));
}

export default async function StudentDetailPage({
  params,
}: StudentDetailPageProps) {
  const { id } = await params;
  const student = getStudentByIdOrSlug(id);

  if (!student) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Students", href: "/students" },
          { label: student.name },
        ]}
      />

      <div className="mb-6">
        <Link
          href="/students"
          className="inline-flex items-center text-xs font-medium text-gray-600 transition hover:text-gray-900"
        >
          <span className="mr-1.5">←</span> Back to students
        </Link>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-2xs">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-bold shadow-2xs ${student.avatarColor.bg} ${student.avatarColor.text}`}
          >
            {student.initials}
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {student.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded border border-gray-200 bg-gray-50 px-2.5 py-0.5 font-mono text-xs font-medium text-gray-600">
                {student.id}
              </span>
              <span className="rounded border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                {student.status}
              </span>
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-gray-200" />

        <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:grid-cols-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              DEPARTMENT
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              <Link
                href={`/departments/${student.departmentSlug}`}
                className="hover:text-blue-600 hover:underline"
              >
                {student.department}
              </Link>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              STUDY YEAR
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              {student.studyYear}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              EMAIL
            </p>
            <p className="mt-1 text-sm font-medium text-blue-600 hover:underline">
              <a href={`mailto:${student.email}`}>{student.email}</a>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              ENROLLED
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              {student.enrolled}
            </p>
          </div>
        </div>

        <div className="my-6 border-t border-gray-200" />

        <div>
          <h2 className="text-base font-bold text-gray-900">About</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {student.about}
          </p>
        </div>

        <div className="my-6 border-t border-gray-200" />

        <div>
          <h2 className="text-base font-bold text-gray-900">
            Academic Details
          </h2>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Department</span>
              <span className="font-semibold text-gray-900">
                {student.department}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Current Academic Standing</span>
              <span className="font-semibold text-gray-900">
                {student.standing}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              ENROLLED SUBJECTS
            </p>

            <div className="overflow-hidden rounded-md border border-gray-200 bg-white divide-y divide-gray-100">
              {student.subjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-4 py-3 text-sm transition hover:bg-gray-50/50"
                >
                  <span className="font-medium text-gray-800">
                    <span className="font-semibold">{sub.code}:</span>{" "}
                    {sub.title}
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    {sub.credits}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between px-2 text-xs text-gray-500">
        <span>System Record ID: {student.systemRecordId}</span>
        <span>Last validated: {student.lastValidated}</span>
      </div>
    </main>
  );
}
