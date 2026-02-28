export default function Footer() {
    const scrollTo = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="relative border-t border-white/[0.06] bg-surface-950/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                    <polyline points="16 7 22 7 22 13" />
                                </svg>
                            </div>
                            <span className="text-xl font-display font-bold text-white">
                                Invest<span className="text-primary-400">Aware</span>
                            </span>
                        </div>
                        <p className="text-surface-400 text-sm leading-relaxed max-w-md mb-4">
                            A free, beginner-friendly platform to learn about investing, stocks, and mutual funds.
                            Built for college students and anyone starting their financial journey.
                        </p>
                        <p className="text-xs text-surface-500">
                            ⚠️ Disclaimer: This website is for educational purposes only.
                            We do not provide financial advice. Always consult a certified financial advisor.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { label: 'Stocks', href: '#stocks' },
                                { label: 'Mutual Funds', href: '#mutual-funds' },
                                { label: 'Investment Basics', href: '#basics' },
                                { label: 'Common Mistakes', href: '#mistakes' },
                                { label: 'Calculators', href: '#calculators' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="text-sm text-surface-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-2">
                            {[
                                { label: 'SEBI Official', url: 'https://www.sebi.gov.in' },
                                { label: 'NSE India', url: 'https://www.nseindia.com' },
                                { label: 'BSE India', url: 'https://www.bseindia.com' },
                                { label: 'AMFI India', url: 'https://www.amfiindia.com' },
                            ].map((link) => (
                                <li key={link.url}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-surface-400 hover:text-accent-400 transition-colors duration-300 inline-flex items-center gap-1"
                                    >
                                        {link.label}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-surface-500">
                        © {new Date().getFullYear()} InvestAware. Made with ❤️ for financial literacy.
                    </p>
                    <div className="flex items-center gap-4">
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-xs text-surface-400 hover:text-primary-400 transition-colors flex items-center gap-1">
                            Back to Top
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="18 15 12 9 6 15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
