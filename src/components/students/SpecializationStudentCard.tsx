import Link from "next/link";
import type { Student } from "@/types/student";

interface SpecializationStudentCardProps {
  student: Student;
}

export default function SpecializationStudentCard({
  student,
}: SpecializationStudentCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-2xs transition-all hover:border-blue-300 hover:shadow-xs">
      <div>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${student.avatarColor.bg} ${student.avatarColor.text}`}
            >
              {student.initials}
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">
                {student.name}
              </h3>
              <p className="font-mono text-xs text-gray-500">{student.id}</p>
            </div>
          </div>

          <span className="rounded border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600">
            Year {student.year}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-xs font-medium text-gray-600">
          {student.trackFocus}
        </span>
        <Link
          href={`/students/${student.id}`}
          className="inline-flex items-center text-xs font-medium text-blue-600 transition hover:text-blue-700"
        >
          View profile <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}
