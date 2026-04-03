import Image from "next/image";

export default function Legacy() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline layout */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">
            A Family Legacy in Plumbing
          </h2>
          <p className="text-center text-gray-500 mb-8">
            From Southern California to Oahu&apos;s North Shore
          </p>

          {/* About image */}
          <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
              alt="Construction and plumbing work on a residential build"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="space-y-0">
            {[
              {
                year: "1984",
                title: "Founded in Southern California",
                desc: "Ernie Doak started his plumbing company in SoCal, building a reputation for meticulous craftsmanship and honest pricing.",
              },
              {
                year: "1989",
                title: "Relocated to Oahu's North Shore",
                desc: "The Doak family moved to Hawaii, bringing their expertise to the North Shore community. What started as a small operation quickly grew through word of mouth.",
              },
              {
                year: "2000s",
                title: "Brandon Joins the Team",
                desc: "Brandon became a key part of the team, carrying on the Doak tradition of quality workmanship. Together, Ernie and Brandon handle everything from new construction to complex remodels.",
              },
              {
                year: "Today",
                title: "35+ Years of Trusted Service",
                desc: "With a perfect 5-star rating and hundreds of satisfied customers, Ernie Doak Plumbing is the North Shore's go-to plumber for residential and commercial projects.",
              },
            ].map((item, i) => (
              <div key={item.year} className="flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">{item.year}</span>
                  </div>
                  {i < 3 && <div className="w-0.5 bg-primary/20 flex-grow min-h-[40px]" />}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Values strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
            {[
              { label: "Family Owned", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { label: "On Time, On Budget", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Clean Workmanship", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { label: "Licensed & Insured", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            ].map((val) => (
              <div key={val.label} className="text-center p-3">
                <svg className="w-6 h-6 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={val.icon} />
                </svg>
                <span className="text-sm font-medium text-gray-700">{val.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
