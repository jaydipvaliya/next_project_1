export default function StudentDetailLoading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 animate-pulse">
      <div className="mb-4 h-4 w-48 rounded bg-gray-200" />
      <div className="mb-6 h-4 w-28 rounded bg-gray-200" />

      <div className="rounded-xl border border-gray-200 bg-white p-8 space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-xl bg-gray-200" />
          <div className="space-y-2">
            <div className="h-7 w-48 rounded bg-gray-200" />
            <div className="flex gap-2">
              <div className="h-4 w-16 rounded bg-gray-100" />
              <div className="h-4 w-20 rounded bg-gray-100" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-16 rounded bg-gray-200" />
                <div className="h-4 w-24 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 space-y-2">
          <div className="h-4 w-16 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-100" />
          <div className="h-4 w-4/5 rounded bg-gray-100" />
        </div>
      </div>
    </div>
  );
}
