import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-page text-center">
        <p className="section-eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-text">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
