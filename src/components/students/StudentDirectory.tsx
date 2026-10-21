"use client";

import { useState, useMemo } from "react";
import type { Student } from "@/types/student";
import StudentCard from "./StudentCard";

interface StudentDirectoryProps {
  initialStudents: Student[];
}

export default function StudentDirectory({
  initialStudents,
}: StudentDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");

  const filteredStudents = useMemo(() => {
    return initialStudents.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        student.specialization.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase().trim());

      const matchesDept =
        selectedDept === "all" ||
        student.departmentSlug.toLowerCase() === selectedDept.toLowerCase() ||
        student.department.toLowerCase() === selectedDept.toLowerCase();

      return matchesSearch && matchesDept;
    });
  }, [initialStudents, searchTerm, selectedDept]);

  return (
    <div>
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-2xs">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search students"
              className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="dept-filter"
              className="text-sm font-medium text-gray-700 whitespace-nowrap"
            >
              Department:
            </label>
            <div className="relative">
              <select
                id="dept-filter"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="cursor-pointer appearance-none rounded-md border border-gray-200 bg-white py-2 pl-3 pr-8 text-sm font-medium text-gray-800 focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">All departments</option>
                <option value="computer-science">Computer Science</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-gray-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-300 bg-white py-12 text-center">
          <p className="text-sm font-medium text-gray-900">
            No students found matching your filters.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Try adjusting your search query or department selection.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedDept("all");
            }}
            className="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            Reset filters
          </button>
        </div>
      )}

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-gray-900">{filteredStudents.length}</span> of{" "}
          <span className="font-semibold text-gray-900">{initialStudents.length}</span> students
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled
            type="button"
            className="cursor-not-allowed rounded border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-400 shadow-2xs"
          >
            Previous
          </button>
          <button
            disabled
            type="button"
            className="cursor-not-allowed rounded border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-400 shadow-2xs"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
