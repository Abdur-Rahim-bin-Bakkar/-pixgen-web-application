import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"></div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">

        {/* 404 */}
        <h1 className="text-8xl font-extrabold drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-white/80 mt-3 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl 
          bg-white text-purple-600 font-semibold 
          shadow-lg hover:shadow-xl hover:scale-105 
          transition-all duration-300"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}
