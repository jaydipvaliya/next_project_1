export default function StudentsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 animate-pulse">
      <div className="mb-6 space-y-2">
        <div className="h-8 w-44 rounded-md bg-gray-200" />
        <div className="h-4 w-72 rounded bg-gray-100" />
      </div>

      <div className="mb-6 h-16 rounded-lg border border-gray-200 bg-gray-50" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-44 rounded-lg border border-gray-200 bg-white p-5 space-y-4"
          >
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 rounded-xl bg-gray-200" />
              <div className="h-5 w-16 rounded bg-gray-100" />
            </div>
            <div className="space-y-2">
              <div className="h-5 w-32 rounded bg-gray-200" />
              <div className="h-4 w-24 rounded bg-gray-100" />
            </div>
            <div className="pt-2 border-t border-gray-100">
              <div className="h-4 w-20 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
