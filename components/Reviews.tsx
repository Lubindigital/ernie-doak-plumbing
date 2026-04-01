const reviews = [
  {
    name: "Mari Selli",
    text: "Ernie and his team are always quick to respond and extremely attentive. When managing a multi million dollar home, you definitely need someone who is willing to go above and beyond to make sure our needs are met.",
  },
  {
    name: "Robin Johnston",
    text: "Ernie Doak Plumbing is a family owned business and they really put quality workmanship into their projects. I have had them on several major appliance installs as well as plumbing modifications and repairs. Only good things to say.",
  },
  {
    name: "Karl Fooks",
    text: "I have worked with Ernie over 10 years. He and his team did all the plumbing work on a complicated new construction project. All work was done professionally, on time and on budget. Highly recommended.",
  },
  {
    name: "1955kkp",
    text: "BEST PLUMBER! Ernie and Brandon have done over 40 projects for me, some big, some small. Every time their work was meticulously completed on time and done correctly. Their rates are very, very competitive.",
  },
  {
    name: "Dawn Bruns",
    text: "My husband and I highly recommend Ernie Doak Plumbing. He has been our plumber at Sunset Beach for over 20 years. His attention to detail and customer satisfaction are superior. You won't find anyone better!",
  },
  {
    name: "Darren Radcliffe",
    text: "These guys are super professional and do really clean work. Ernie and his guys helped us with all of the plumbing work for our bathroom remodel. The work that they did looks super clean.",
  },
  {
    name: "Gail Brooks",
    text: "Ernie and Brandon were a pleasure to work with. Ernie gave us great ideas ahead of time on how to save $$ on our project and we saved quite a bit off the original quote. They showed up promptly and work was done quickly.",
  },
  {
    name: "John Clemems",
    text: "Ernie and Brandon have helped me several times since 2011. They don't use shortcuts, they do the job right the first time with the correct materials. You're in great hands with Ernie and Brandon!",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded px-4 py-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-green-100">
              Perfect 5.0 &mdash; 22 Google Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            What Our Clients Say
          </h2>
          <p className="text-green-200 max-w-lg mx-auto">
            Over 35 years of trusted service on Oahu&apos;s North Shore.
          </p>
        </div>

        {/* Masonry-style layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="break-inside-avoid bg-white/10 backdrop-blur-sm rounded-xl p-5"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-green-50 text-sm leading-relaxed mb-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="text-green-200 text-sm font-medium">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Ernie+Doak+Plumbing+Inc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light font-semibold inline-flex items-center gap-1 transition-colors text-sm"
          >
            View All Reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
