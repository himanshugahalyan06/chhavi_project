import { useEffect, useRef, useState } from 'react'

const keyTerms = [
    {
        term: 'IPO',
        full: 'Initial Public Offering',
        desc: 'When a company sells its shares to the public for the first time. Think of it as a company\'s "grand opening" on the stock market.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        color: 'from-blue-500 to-cyan-400',
    },
    {
        term: 'Bull Market',
        full: 'Rising Market',
        desc: 'When stock prices are going up over time. Investors are optimistic and confident — like a bull thrusting its horns upward!',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
        color: 'from-green-500 to-emerald-400',
    },
    {
        term: 'Bear Market',
        full: 'Falling Market',
        desc: 'When prices fall 20% or more from recent highs. Think of a bear swiping its paw downward — the market mood is gloomy.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                <polyline points="16 17 22 17 22 11" />
            </svg>
        ),
        color: 'from-red-500 to-orange-400',
    },
    {
        term: 'Market Cap',
        full: 'Market Capitalization',
        desc: 'Total value of a company\'s shares. It\'s like the company\'s "price tag" in the stock market (Share Price × Total Shares).',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v12M8 10h8M8 14h8" />
            </svg>
        ),
        color: 'from-purple-500 to-pink-400',
    },
    {
        term: 'Dividend',
        full: 'Profit Sharing',
        desc: 'A portion of the company\'s profit shared with shareholders. Like getting a bonus for owning shares — extra cash in your pocket!',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        color: 'from-amber-500 to-yellow-400',
    },
]

function useInView(ref, threshold = 0.15) {
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true) },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [ref, threshold])
    return inView
}

export default function StocksSection() {
    const sectionRef = useRef(null)
    const inView = useInView(sectionRef)

    return (
        <section id="stocks" ref={sectionRef} className="section-padding relative">
            {/* Section glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-4">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                            <polyline points="16 7 22 7 22 13" />
                        </svg>
                        Understanding Stocks
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                        What is the <span className="gradient-text">Stock Market</span>?
                    </h2>
                    <p className="text-surface-400 text-lg max-w-2xl mx-auto">
                        Think of the stock market as a marketplace — but instead of buying goods, you buy tiny pieces of companies.
                    </p>
                </div>

                {/* How Stocks Work */}
                <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="glass-card p-8 glow-blue">
                        <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>
                            </span>
                            How Stocks Work
                        </h3>
                        <div className="space-y-4 text-surface-300 leading-relaxed">
                            <p>
                                A <strong className="text-white">stock</strong> represents ownership in a company. When you buy stock in a company, you become a <strong className="text-primary-400">shareholder</strong> — literally, a part-owner!
                            </p>
                            <p>
                                Companies issue stocks to raise money. In return, investors get the chance to earn money through:
                            </p>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0" />
                                    <span><strong className="text-accent-400">Price Appreciation</strong> — sell the stock later at a higher price</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                                    <span><strong className="text-primary-400">Dividends</strong> — receive a share of the company's profits</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-card p-8 glow-green">
                        <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center text-accent-400">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </span>
                            Real-Life Example
                        </h3>
                        <div className="space-y-4 text-surface-300 leading-relaxed">
                            <div className="p-4 rounded-xl bg-accent-500/10 border border-accent-500/20">
                                <p className="text-accent-300 font-medium mb-2">☕ The Coffee Shop Analogy</p>
                                <p className="text-sm">
                                    Imagine your friend opens a coffee shop and needs ₹10,00,000. She divides the ownership into <strong className="text-white">1,000 shares</strong> at ₹1,000 each.
                                </p>
                            </div>
                            <p>
                                You buy <strong className="text-white">10 shares for ₹10,000</strong>. Now you own 1% of the shop!
                            </p>
                            <p>
                                If the shop grows popular and each share becomes worth ₹2,000, your ₹10,000 investment is now worth <strong className="text-accent-400">₹20,000</strong>. That's a <strong className="text-accent-400">100% return</strong>!
                            </p>
                            <p className="text-sm text-surface-400 italic">
                                This is exactly how the stock market works — but with listed companies like TCS, Infosys, or Reliance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Terms */}
                <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-2xl font-display font-bold text-center mb-8">
                        Key Terms You Should Know
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {keyTerms.map((item, i) => (
                            <div
                                key={i}
                                className="glass-card-hover p-6 group"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-white">{item.term}</h4>
                                    <span className="text-xs text-surface-400 font-medium px-2 py-0.5 rounded-full bg-white/[0.06]">{item.full}</span>
                                </div>
                                <p className="text-surface-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
