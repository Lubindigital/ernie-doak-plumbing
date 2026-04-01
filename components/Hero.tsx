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

          {/* Right — Visual panel */}
          <div className="relative bg-primary hidden lg:flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
              />
            </div>
            <div className="relative text-center text-white px-12">
              <div className="text-7xl font-bold text-accent mb-2">35+</div>
              <div className="text-xl font-medium text-green-100 mb-8">Years on Oahu</div>
              <div className="grid grid-cols-2 gap-6 text-left">
                {[
                  { num: "Est. 1984", label: "Founded in SoCal" },
                  { num: "Since 1989", label: "Serving North Shore" },
                  { num: "5.0", label: "Star Rating" },
                  { num: "Top 4%", label: "Of HI Contractors" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-lg p-4">
                    <div className="text-lg font-bold text-accent">{stat.num}</div>
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
