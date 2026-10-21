import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

export default function NotFoundView() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Directory", href: "/students" },
          { label: "Not Found" },
        ]}
      />

      <div className="mt-12 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold tracking-wider text-gray-600 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
          404 · ROUTE NOT FOUND
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Student or department not found
        </h1>

        <p className="mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
          The requested directory entry or path could not be located. It may
          have moved or the identifier might be invalid.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/students"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-xs transition hover:bg-blue-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Return to Students Directory
          </Link>
          <Link
            href="/departments"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-2xs transition hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Browse All Departments
          </Link>
        </div>

        <div className="mt-12 w-full max-w-2xl rounded-lg border border-gray-200 bg-white text-left shadow-2xs">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50/60 px-5 py-3">
            <span className="text-xs font-bold tracking-wider text-gray-600 uppercase">
              SUGGESTED STARTING POINTS
            </span>
            <span className="text-xs font-medium text-gray-400">
              Internal Routes
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            <Link
              href="/departments/computer-science"
              className="flex items-center justify-between px-5 py-3.5 text-sm transition hover:bg-blue-50/40"
            >
              <div className="flex items-center gap-3 font-medium text-gray-800">
                <span className="text-base">🏛️</span>
                <span>Computer Science Department</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-xs text-gray-500">
                <span>/departments/cs</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/departments/computer-science/web-development"
              className="flex items-center justify-between px-5 py-3.5 text-sm transition hover:bg-blue-50/40"
            >
              <div className="flex items-center gap-3 font-medium text-gray-800">
                <span className="text-base">💻</span>
                <span>Web Development Specialization Track</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-xs text-gray-500">
                <span>/departments/computer-science/web-development</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/departments/design"
              className="flex items-center justify-between px-5 py-3.5 text-sm transition hover:bg-blue-50/40"
            >
              <div className="flex items-center gap-3 font-medium text-gray-800">
                <span className="text-base">🎨</span>
                <span>Design Department</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-xs text-gray-500">
                <span>/departments/design</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/departments/business"
              className="flex items-center justify-between px-5 py-3.5 text-sm transition hover:bg-blue-50/40"
            >
              <div className="flex items-center gap-3 font-medium text-gray-800">
                <span className="text-base">📈</span>
                <span>Business Department</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-xs text-gray-500">
                <span>/departments/business</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/students"
              className="flex items-center justify-between px-5 py-3.5 text-sm transition hover:bg-blue-50/40"
            >
              <div className="flex items-center gap-3 font-medium text-gray-800">
                <span className="text-base">🎓</span>
                <span>All Enrolled Students Directory</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-xs text-gray-500">
                <span>/students</span>
                <span>→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
