export default function Loading() {
  return (
    <div className="container-page flex min-h-[50vh] items-center justify-center">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-teal/25 border-t-teal"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
