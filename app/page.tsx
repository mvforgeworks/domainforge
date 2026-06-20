export default function DomainForge() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-semibold text-xl tracking-tight">DomainForge</div>
          <nav className="flex gap-8 text-sm">
            <a href="#how" className="hover:text-white/80 transition">How it works</a>
            <a href="#pricing" className="hover:text-white/80 transition">Pricing</a>
            <a href="mailto:forge@mvforge.io" className="hover:text-white/80 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs tracking-[2px] mb-6">
            DOMAIN INTELLIGENCE
          </div>
          <h1 className="text-6xl font-semibold tracking-tighter leading-[1.05] mb-6">
            Find. Value.<br />Monetize.
          </h1>
          <p className="max-w-lg mx-auto text-xl text-white/70 mb-10">
            Practical tools to scan, value, and act on domains. Built for operators who want results without the noise.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#pricing" className="inline-block bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/90 transition">
              Get started
            </a>
            <a href="mailto:forge@mvforge.io" className="inline-block border border-white/30 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/5 transition">
              Talk to us
            </a>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-t border-white/10 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="text-xs tracking-[2px] text-white/50 mb-2">NO FLUFF</div>
              <h2 className="text-4xl font-semibold tracking-tighter">How DomainForge works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-4">01</div>
                <h3 className="font-medium mb-3">Scan</h3>
                <p className="text-white/70 text-sm leading-relaxed">Daily scans of expiring and undervalued domains with clean filters.</p>
              </div>
              <div>
                <div className="text-3xl mb-4">02</div>
                <h3 className="font-medium mb-3">Value</h3>
                <p className="text-white/70 text-sm leading-relaxed">AI-assisted valuation based on real sales data and market signals.</p>
              </div>
              <div>
                <div className="text-3xl mb-4">03</div>
                <h3 className="font-medium mb-3">Act</h3>
                <p className="text-white/70 text-sm leading-relaxed">One-click outreach, auction tracking, and portfolio management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-t border-white/10 py-20 bg-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-12">
              <div className="text-xs tracking-[2px] text-white/50 mb-2">PRICING</div>
              <h2 className="text-4xl font-semibold tracking-tighter">Simple. No surprises.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="border border-white/15 rounded-2xl p-8 text-left bg-black">
                <div className="text-sm text-white/60 mb-2">STARTER</div>
                <div className="text-5xl font-semibold tracking-tighter mb-1">$29</div>
                <div className="text-sm mb-6">per month</div>
                <ul className="space-y-3 text-sm mb-8 text-white/80">
                  <li>Daily domain scans</li>
                  <li>Basic valuation</li>
                  <li>Portfolio tracking</li>
                  <li>Email support</li>
                </ul>
                <a href="mailto:forge@mvforge.io" className="block text-center w-full border border-white/50 hover:bg-white hover:text-black py-3 rounded-full text-sm font-medium transition">Start 14-day trial</a>
              </div>
              <div className="border border-white/15 bg-white text-black rounded-2xl p-8 text-left">
                <div className="text-sm text-black/60 mb-2">PROFESSIONAL</div>
                <div className="text-5xl font-semibold tracking-tighter mb-1">$79</div>
                <div className="text-sm mb-6">per month</div>
                <ul className="space-y-3 text-sm mb-8 text-black/80">
                  <li>Everything in Starter</li>
                  <li>Advanced AI valuation</li>
                  <li>Automated outreach</li>
                  <li>Priority support</li>
                  <li>API access</li>
                </ul>
                <a href="mailto:forge@mvforge.io" className="block text-center w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-black/80 transition">Start 14-day trial</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-xs text-white/50">
          © {new Date().getFullYear()} MVForge Systems LLC · Practical tools for operators.
        </div>
      </footer>
    </div>
  );
}
