import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "About | Campus Directory",
  description: "Learn about the architecture and implementation of the Campus Directory.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Directory", href: "/students" },
          { label: "About" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          About Campus Directory
        </h1>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          The Campus Directory is an academic informatics portal providing centralized
          access to student records, academic departments, faculty tracks, and enrolled
          curriculum subjects.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold text-gray-900">
            Routing Architecture & Next.js App Router
          </h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            This project is structured around modern Next.js App Router conventions:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-4">
              <span className="font-mono text-xs font-semibold text-blue-600">
                /students
              </span>
              <h3 className="mt-1 text-sm font-bold text-gray-900">
                Directory & Filter
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Browse student profiles with real-time text query and department filtering.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-4">
              <span className="font-mono text-xs font-semibold text-blue-600">
                /students/[id]
              </span>
              <h3 className="mt-1 text-sm font-bold text-gray-900">
                Dynamic Student Detail
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Displays academic standing, enrolled credit subjects, record verification, and bio.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-4">
              <span className="font-mono text-xs font-semibold text-blue-600">
                /departments
              </span>
              <h3 className="mt-1 text-sm font-bold text-gray-900">
                Academic Faculties
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Overview of university departments, specialization counts, and student enrollments.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-4">
              <span className="font-mono text-xs font-semibold text-blue-600">
                /departments/[dept]/[spec]
              </span>
              <h3 className="mt-1 text-sm font-bold text-gray-900">
                Specialization Tracks
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Deep dive into tracks like Web Development (<code className="text-xs">CS-SPEC-04</code>) with core lab and enrolled students.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold text-gray-900">
            Technical Implementation Highlights
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">✓</span>
              <span>
                <strong>Next.js 16 Server Components:</strong> Pages render on the server with static parameter generation (<code className="text-xs font-mono bg-gray-100 px-1 py-0.5 rounded">generateStaticParams</code>) for maximum speed and SEO efficiency.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">✓</span>
              <span>
                <strong>Dynamic Route Handling:</strong> Asynchronous Promise-based <code className="text-xs font-mono bg-gray-100 px-1 py-0.5 rounded">params</code> and <code className="text-xs font-mono bg-gray-100 px-1 py-0.5 rounded">searchParams</code> matching the latest Next.js conventions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">✓</span>
              <span>
                <strong>Comprehensive Error Handling:</strong> Missing student or department identifiers trigger <code className="text-xs font-mono bg-gray-100 px-1 py-0.5 rounded">notFound()</code> leading directly to the custom 404 UI.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">✓</span>
              <span>
                <strong>Type-Safe Data Contracts:</strong> Structured TypeScript interfaces for students, faculty departments, curriculum subjects, and specialization tracks.
              </span>
            </li>
          </ul>

          <div className="mt-6 border-t border-gray-100 pt-5">
            <Link
              href="/students"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              ← Return to Students Directory
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
