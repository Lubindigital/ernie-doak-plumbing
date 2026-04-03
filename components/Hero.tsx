import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[500px] sm:min-h-[600px]">
          {/* Left — Content */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded px-3 py-1.5 mb-6 self-start">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-primary">5.0 Stars &mdash; 22 Reviews</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              North Shore&apos;s
              <br />
              <span className="text-primary">Trusted Plumber</span>
              <br />
              Since 1989
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Family-owned and operated for over 35 years. From new construction
              to solar water heaters, Ernie Doak Plumbing delivers quality
              craftsmanship Oahu&apos;s North Shore counts on.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:8086388620"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (808) 638-8620
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3.5 rounded transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>

          {/* Right — Image panel */}
          <div className="relative hidden lg:block overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80"
              alt="Professional plumber working on copper pipes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { num: "Est. 1984", label: "Founded in SoCal" },
                  { num: "Since 1989", label: "Serving North Shore" },
                  { num: "5.0", label: "Star Rating" },
                  { num: "Top 4%", label: "Of HI Contractors" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-base font-bold text-accent">{stat.num}</div>
                    <div className="text-xs text-green-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stats bar */}
      <div className="lg:hidden bg-primary text-white">
        <div className="grid grid-cols-3 divide-x divide-green-800">
          {[
            { num: "35+", label: "Years" },
            { num: "5.0", label: "Stars" },
            { num: "Top 4%", label: "In Hawaii" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-4">
              <div className="text-xl font-bold text-accent">{stat.num}</div>
              <div className="text-xs text-green-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
