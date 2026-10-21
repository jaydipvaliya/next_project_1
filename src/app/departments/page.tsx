import type { Metadata } from "next";
import { getAllDepartments } from "@/libs/data";
import DepartmentCard from "@/components/departments/DepartmentCard";

export const metadata: Metadata = {
  title: "Departments | Campus Directory",
  description: "Explore academic faculties, programs, and enrolled students.",
};

export default function DepartmentsPage() {
  const departmentsList = getAllDepartments();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Departments
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          {departmentsList.length} Active Academic Faculties
        </div>
      </div>

      <div className="space-y-4">
        {departmentsList.map((dept) => (
          <DepartmentCard key={dept.id} department={dept} />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
        <span>Curriculum Year 2024–2025</span>
        <span>Updated daily via Campus Records API</span>
      </div>
    </main>
  );
}
