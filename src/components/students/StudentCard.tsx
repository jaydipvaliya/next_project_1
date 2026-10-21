import Link from "next/link";
import type { Student } from "@/types/student";

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  const deptBadgeStyle =
    student.departmentSlug === "computer-science"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : student.departmentSlug === "design"
      ? "bg-purple-50 text-purple-700 border-purple-200"
      : "bg-amber-50 text-amber-700 border-amber-200";

  return (
    <div className="group flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-2xs transition-all hover:border-blue-300 hover:shadow-xs">
      <div>
        <div className="flex items-start justify-between">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${student.avatarColor.bg} ${student.avatarColor.text}`}
          >
            {student.initials}
          </div>
          <span className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 font-mono text-xs font-medium text-gray-600">
            {student.id}
          </span>
        </div>

        <h3 className="mt-3 text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {student.name}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span
            className={`inline-block rounded border px-2 py-0.5 text-xs font-medium ${deptBadgeStyle}`}
          >
            {student.department}
          </span>
          <span className="text-xs text-gray-500">{student.yearLabel}</span>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-100 pt-3">
        <Link
          href={`/students/${student.id}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          View profile <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </div>
  );
}
