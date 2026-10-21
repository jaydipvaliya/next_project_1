import type { Metadata } from "next";
import { getAllStudents } from "@/libs/data";
import StudentDirectory from "@/components/students/StudentDirectory";

export const metadata: Metadata = {
  title: "Students | Campus Directory",
  description: "Browse students and view their academic profiles.",
};

export default function StudentsPage() {
  const allStudents = getAllStudents();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Students
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Browse students and view their profiles.
        </p>
      </div>

      <StudentDirectory initialStudents={allStudents} />
    </main>
  );
}
