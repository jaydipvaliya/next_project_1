"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isStudentsActive =
    pathname === "/students" ||
    pathname.startsWith("/students/") ||
    pathname === "/";

  const isDepartmentsActive =
    pathname === "/departments" || pathname.startsWith("/departments/");

  const isAboutActive = pathname === "/about";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/students"
            className="flex items-center gap-2.5 py-4 text-gray-900 transition hover:opacity-90"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              Campus Directory
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/students"
              className={`relative py-4 text-sm font-medium transition-colors ${
                isStudentsActive
                  ? "font-semibold text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Students
              {isStudentsActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </Link>

            <Link
              href="/departments"
              className={`relative py-4 text-sm font-medium transition-colors ${
                isDepartmentsActive
                  ? "font-semibold text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Departments
              {isDepartmentsActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </Link>

            <Link
              href="/about"
              className={`relative py-4 text-sm font-medium transition-colors ${
                isAboutActive
                  ? "font-semibold text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
              {isAboutActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <span className="inline-flex items-center rounded-md border border-blue-200/80 bg-blue-50/60 px-3 py-1 text-xs font-medium text-blue-700 shadow-xs">
            Frontend Practice
          </span>
        </div>
      </div>
    </header>
  );
}
