export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 border-2 border-accent rounded-sm flex items-center justify-center">
                <span className="text-accent font-bold text-sm">ED</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-sm tracking-wide">ERNIE DOAK</span>
                <span className="block text-[10px] text-gray-400 tracking-[0.2em] uppercase">Plumbing Inc</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Family-owned plumber serving Oahu&apos;s North Shore since 1989.
              New construction, remodels, solar, gas, and general plumbing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Services</h3>
            <ul className="space-y-1.5 text-gray-400 text-sm">
              <li>New Construction</li>
              <li>Remodels &amp; Renovations</li>
              <li>Solar Hot Water Systems</li>
              <li>Water Heaters</li>
              <li>Gas Piping</li>
              <li>System Repiping</li>
              <li>Backflow Prevention</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Contact</h3>
            <ul className="space-y-1.5 text-gray-400 text-sm">
              <li>
                <a href="tel:8086388620" className="hover:text-white transition-colors">
                  (808) 638-8620
                </a>
              </li>
              <li>
                58-109 Iwia Pl
                <br />
                Haleiwa, HI 96712
              </li>
              <li className="pt-1">
                Mon&ndash;Fri: 8AM&ndash;4PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ernie Doak Plumbing Inc. All rights reserved.</p>
          <p className="mt-1">Serving Haleiwa, Sunset Beach, Pupukea, Waialua, Laie, Kahuku &amp; all of North Shore Oahu.</p>
        </div>
      </div>
    </footer>
  );
}
