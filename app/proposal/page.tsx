import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Proposal — Ernie Doak Plumbing | Lubin Digital",
  description: "Custom website proposal for Ernie Doak Plumbing Inc by Lubin Digital.",
};

const packages = [
  {
    name: "Basic",
    subtitle: "Get Online Fast",
    oneTime: 800,
    monthly: 85,
    popular: false,
    features: [
      "Custom mobile-responsive website",
      "Contact & quote request form",
      "Click-to-call button on every page",
      "Fast Vercel hosting",
      "SSL security certificate",
      "1 monthly content update",
      "Live within a few days of deposit",
    ],
    notIncluded: [
      "SEO setup & Google optimization",
      "Dedicated services pages",
      "Google schema markup",
      "Google Business Profile setup",
    ],
    stripeLink: "https://buy.stripe.com/14A14m82s4Rb9ib1kMcQU00",
  },
  {
    name: "Standard",
    subtitle: "Built to Rank & Convert",
    oneTime: 1200,
    monthly: 100,
    popular: true,
    features: [
      "Everything in Basic, plus:",
      "Full SEO setup & optimization",
      "Google schema markup",
      "Dedicated services pages",
      "Google reviews section",
      "XML sitemap & robots.txt",
      "3 monthly content updates",
      "Ongoing maintenance & security",
    ],
    notIncluded: [
      "Google Business Profile setup",
      "Professional photo optimization",
      "Quarterly SEO report",
    ],
    stripeLink: "https://buy.stripe.com/bJe00i1E44RbfGzd3ucQU01",
  },
  {
    name: "Premium",
    subtitle: "Dominate Local Search",
    oneTime: 1800,
    monthly: 150,
    popular: false,
    features: [
      "Everything in Standard, plus:",
      "Google Business Profile setup & optimization",
      "Professional photo optimization",
      "Unlimited monthly content updates",
      "Quarterly SEO performance report",
      "Priority same-day response",
      "The complete package for local dominance",
    ],
    notIncluded: [],
    stripeLink: "https://buy.stripe.com/7sY28qgyY5VfeCv6F6cQU02",
  },
];

export default function Proposal() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Prepared by
            </span>
            <h2 className="text-xl font-bold text-gray-900">Lubin Digital</h2>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">Proposal for</span>
            <h2 className="text-xl font-bold text-primary">
              Ernie Doak Plumbing Inc
            </h2>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your New Website is Ready
          </h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-8">
            I&apos;ve built a custom website for Ernie Doak Plumbing.
            Here&apos;s what it looks like and how we can get it live.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            View Your Preview Site
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            The Opportunity
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-red-50 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Website Right Now</h3>
              <p className="text-sm text-gray-600">
                Your Google listing says &ldquo;Add website.&rdquo; Potential customers searching for a North Shore plumber have nowhere to learn about your 35+ years of experience.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50 border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Perfect 5-Star Rating</h3>
              <p className="text-sm text-gray-600">
                22 Google reviews with a perfect 5.0 score, plus top 4% of Hawaii contractors on BuildZoom. Your reputation deserves a home online.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-amber-50 border border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ROI Is Clear</h3>
              <p className="text-sm text-gray-600">
                One extra construction or remodel project from the website pays for the entire year. The site works for you 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
            Choose Your Package
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            All packages include a custom-built website, fast hosting, and ongoing support.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  pkg.popular
                    ? "bg-gray-900 text-white ring-4 ring-gray-900/20 scale-[1.02]"
                    : "bg-white border border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-accent text-gray-900 text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1 self-start mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-gray-400" : "text-gray-500"}`}>
                  {pkg.subtitle}
                </p>
                <div className="mb-1">
                  <span className={`text-4xl font-bold ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                    ${pkg.oneTime.toLocaleString()}
                  </span>
                  <span className={`text-sm ml-1 ${pkg.popular ? "text-gray-400" : "text-gray-400"}`}>
                    one-time
                  </span>
                </div>
                <div className="mb-6">
                  <span className={`text-lg font-semibold ${pkg.popular ? "text-gray-300" : "text-gray-600"}`}>
                    + ${pkg.monthly}/mo
                  </span>
                  <span className={`text-sm ml-1 ${pkg.popular ? "text-gray-400" : "text-gray-400"}`}>
                    hosting &amp; maintenance
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-accent" : "text-primary"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${pkg.popular ? "text-gray-300" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2 ${pkg.popular ? "opacity-40 text-gray-400" : "opacity-40 text-gray-400"}`}>
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={pkg.stripeLink}
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-accent hover:bg-accent-light text-gray-900"
                      : "bg-primary hover:bg-primary-dark text-white"
                  }`}
                >
                  Get Started — ${pkg.oneTime.toLocaleString()}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works + Customization */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            From signup to launch in just a few days.
          </p>
          <div className="grid sm:grid-cols-4 gap-8 mb-16">
            {[
              { step: "1", title: "Pick a Package", desc: "Choose the plan that fits your goals and budget." },
              { step: "2", title: "Deposit & Kickoff", desc: "Secure payment via Stripe. I'll start building immediately." },
              { step: "3", title: "Customization Session", desc: "Send me your logo, photos, and any changes — I'll make it yours." },
              { step: "4", title: "Launch & Support", desc: "We go live. I handle hosting, updates, and maintenance ongoing." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Customization callout */}
          <div className="bg-warm rounded-2xl p-8 sm:p-10">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary text-sm font-semibold rounded-full px-4 py-1.5 mb-4">
                  Included With Every Package
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Launch Customization Session
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The preview site is just the starting point. Before we go live,
                  I&apos;ll customize everything to make it truly yours &mdash;
                  included in your build fee.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Your logo (any format works)",
                  "3-5 photos of your team or completed work",
                  "Wording and content changes",
                  "Layout and structure tweaks",
                  "Color and style preferences",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Your website is already built and waiting. Choose a package above or reach out with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5303864145"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Westan
            </a>
            <a
              href="mailto:westan@lubindigital.com"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors border border-white/30"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-sm">
          <p className="font-medium text-white mb-1">Lubin Digital</p>
          <p>Custom websites for home service businesses</p>
          <p className="mt-2">This proposal was prepared exclusively for Ernie Doak Plumbing Inc.</p>
        </div>
      </footer>
    </div>
  );
}
