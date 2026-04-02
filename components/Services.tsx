const services = [
  {
    title: "New Construction",
    description:
      "Complete plumbing systems for new residential and commercial builds. From rough-in to finish, we handle every phase with precision.",
    category: "Build",
  },
  {
    title: "Remodels & Renovations",
    description:
      "Kitchen and bathroom remodel plumbing. We work with your contractor to ensure everything is done right, on time, and on budget.",
    category: "Build",
  },
  {
    title: "Solar Hot Water Systems",
    description:
      "Installation, service, and repair of solar water heating systems. Take advantage of Hawaii's sunshine and lower your energy bills.",
    category: "Specialty",
  },
  {
    title: "Water Heaters",
    description:
      "Electric, gas, hybrid, and on-demand water heater installation and repair. We'll help you choose the right system for your home.",
    category: "Specialty",
  },
  {
    title: "Gas Piping",
    description:
      "Safe, code-compliant gas line installation and repair. We're certified to work with natural gas and propane systems across Oahu.",
    category: "Specialty",
  },
  {
    title: "System Repiping",
    description:
      "Full water, sewer, and gas repiping for aging systems. Upgrade your home's plumbing infrastructure with modern, reliable materials.",
    category: "Repair",
  },
  {
    title: "Backflow Prevention",
    description:
      "Backflow preventer installation, testing, and certification. Protect your water supply from contamination.",
    category: "Repair",
  },
  {
    title: "General Plumbing Repairs",
    description:
      "Leaks, clogs, fixture replacements, and everything in between. No job is too small for our team.",
    category: "Repair",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-lg">
              Residential and commercial plumbing services across Oahu&apos;s
              North Shore and beyond.
            </p>
          </div>
          <a
            href="tel:8086388620"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors self-start"
          >
            Request a quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Alternating card grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="p-6 rounded-xl transition-all duration-300 hover:shadow-md bg-primary text-white"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded bg-accent/20 text-accent-light">
                  {service.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-green-100">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
