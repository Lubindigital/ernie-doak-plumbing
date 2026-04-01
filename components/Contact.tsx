export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact cards — 3 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>

            <a
              href="tel:8086388620"
              className="flex items-center gap-4 p-5 bg-warm rounded-xl hover:shadow-md transition-shadow group"
            >
              <div className="w-11 h-11 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Call us</div>
                <div className="text-primary font-bold text-lg">(808) 638-8620</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-warm rounded-xl">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="text-gray-900 font-medium">
                  58-109 Iwia Pl, Haleiwa, HI 96712
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-warm rounded-xl">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Hours</div>
                <div className="text-gray-900 font-medium">
                  Mon &ndash; Fri: 8:00 AM &ndash; 4:00 PM
                </div>
                <div className="text-gray-500 text-sm">
                  Sat &ndash; Sun: Closed
                </div>
              </div>
            </div>

            <div className="p-5 bg-primary/5 rounded-xl border border-primary/10">
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-primary">Service Area:</span>{" "}
                Haleiwa, Sunset Beach, Pupukea, Waialua, Laie, Kahuku,
                and all of Oahu&apos;s North Shore.
              </div>
            </div>
          </div>

          {/* Map — 3 cols */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg h-[350px] lg:h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.5!2d-158.1064!3d21.6539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s58-109+Iwia+Pl%2C+Haleiwa%2C+HI+96712!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ernie Doak Plumbing Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
