import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-champagne-900 px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
          <span className="material-icons-round text-white text-5xl">search_off</span>
        </div>
        <h1 className="text-6xl font-black text-black mb-4">404</h1>
        <p className="text-xl text-black-700 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
        >
          <span className="material-icons-round">home</span>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
