import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0e0e11] flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <span className="text-7xl font-heading uppercase text-[#ffc526] block">
          404
        </span>
        <div>
          <h1 className="text-3xl font-heading uppercase text-[#f3f4f2]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#b3b2b2] mt-2 font-body">
            The page you are looking for does not exist or has been moved. Let’s get you back on track to your training.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="h-11 px-6 bg-[#ffc526] text-[#0e0e11] border border-[#ffc526] rounded font-body font-bold text-xs uppercase tracking-[0.08em] flex items-center justify-center hover:bg-[#ffd76a] hover:border-[#ffd76a] transition-colors shadow-sm"
          >
            Return to Homepage
          </Link>
          <Link
            href="/programmes"
            className="h-11 px-6 bg-transparent text-[#f3f4f2] border border-[#414045] rounded font-body font-bold text-xs uppercase tracking-[0.08em] flex items-center justify-center hover:bg-[#1c1b20] hover:border-[#8e8e8e] transition-colors"
          >
            View Programmes
          </Link>
        </div>
      </div>
    </div>
  );
}
