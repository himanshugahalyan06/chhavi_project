import { useEffect, useRef, useState } from 'react'

const fundTypes = [
    {
        name: 'Equity Funds',
        risk: 'High',
        riskColor: 'text-red-400',
        returns: 'High',
        desc: 'Invest primarily in stocks. Best for long-term goals (5+ years). Higher risk, but historically higher returns.',
        icon: '📈',
        gradient: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/20',
    },
    {
        name: 'Debt Funds',
        risk: 'Low',
        riskColor: 'text-green-400',
        returns: 'Moderate',
        desc: 'Invest in bonds and fixed-income securities. Safer option for conservative investors with shorter horizons.',
        icon: '🛡️',
        gradient: 'from-green-500/20 to-emerald-500/20',
        border: 'border-green-500/20',
    },
    {
        name: 'Hybrid Funds',
        risk: 'Medium',
        riskColor: 'text-yellow-400',
        returns: 'Moderate-High',
        desc: 'A balanced mix of equity and debt. Perfect for beginners who want a taste of both worlds!',
        icon: '⚖️',
        gradient: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/20',
    },
    {
        name: 'Index Funds',
        risk: 'Medium',
        riskColor: 'text-yellow-400',
        returns: 'Market Returns',
        desc: 'Passively track a market index like Nifty 50. Low fees, no need to pick stocks — great for passive investors.',
        icon: '🎯',
        gradient: 'from-amber-500/20 to-orange-500/20',
        border: 'border-amber-500/20',
    },
]

const sipBenefits = [
    { title: 'Start Small', desc: 'Begin with just ₹500/month', icon: '💰' },
    { title: 'Rupee Cost Averaging', desc: 'Buy more units when prices drop', icon: '📊' },
    { title: 'Power of Compounding', desc: 'Earnings generate more earnings', icon: '🔄' },
    { title: 'Disciplined Investing', desc: 'Automatic monthly investment', icon: '📋' },
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

export default function MutualFundsSection() {
    const sectionRef = useRef(null)
    const inView = useInView(sectionRef)

    return (
        <section id="mutual-funds" ref={sectionRef} className="section-padding relative">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium mb-4">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            <path d="M2 12h20" />
                        </svg>
                        Mutual Funds Made Simple
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                        What are <span className="gradient-text">Mutual Funds</span>?
                    </h2>
                    <p className="text-surface-400 text-lg max-w-3xl mx-auto">
                        A mutual fund pools money from many investors and invests it in stocks, bonds, or other assets.
                        It's like a group of friends sharing a pizza — everyone gets a slice based on what they paid!
                    </p>
                </div>

                {/* Fund Types */}
                <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {fundTypes.map((fund, i) => (
                        <div
                            key={i}
                            className={`glass-card-hover p-6 bg-gradient-to-br ${fund.gradient} border ${fund.border}`}
                        >
                            <div className="text-4xl mb-4">{fund.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-1">{fund.name}</h3>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/[0.08]">
                                    Risk: <span className={fund.riskColor}>{fund.risk}</span>
                                </span>
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/[0.08]">
                                    Returns: {fund.returns}
                                </span>
                            </div>
                            <p className="text-surface-400 text-sm leading-relaxed">{fund.desc}</p>
                        </div>
                    ))}
                </div>

                {/* SIP Section */}
                <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center text-accent-400">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </span>
                            What is SIP?
                        </h3>
                        <div className="space-y-4 text-surface-300 leading-relaxed">
                            <p>
                                <strong className="text-white">SIP (Systematic Investment Plan)</strong> is a method of investing a fixed amount in mutual funds at regular intervals — typically monthly.
                            </p>
                            <div className="p-4 rounded-xl bg-accent-500/10 border border-accent-500/20">
                                <p className="text-accent-300 font-medium mb-2">💡 Think of it like...</p>
                                <p className="text-sm">
                                    A recurring subscription — just like Netflix! But instead of paying for entertainment, you're investing in your future. You set a fixed monthly amount (say ₹1,000), and it auto-invests every month.
                                </p>
                            </div>
                            <p className="text-sm text-surface-400 italic">
                                SIP helps you avoid the pressure of timing the market. You invest consistently, rain or shine!
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400">🌟</span>
                            Why SIP Works for Beginners
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {sipBenefits.map((benefit, i) => (
                                <div key={i} className="glass-card p-4 text-center hover:bg-white/[0.06] transition-all duration-300">
                                    <div className="text-2xl mb-2">{benefit.icon}</div>
                                    <h4 className="text-sm font-bold text-white mb-1">{benefit.title}</h4>
                                    <p className="text-xs text-surface-400">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Diversification */}
                <div className={`glass-card p-8 md:p-10 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center border border-white/[0.08]">
                                <span className="text-5xl md:text-6xl">🧺</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white mb-3">
                                The Power of Diversification
                            </h3>
                            <p className="text-surface-300 leading-relaxed mb-4">
                                <strong className="text-white">"Don't put all your eggs in one basket"</strong> — this age-old advice is the core of diversification. By spreading your money across different types of investments, you reduce the risk of losing everything if one investment fails.
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                                    <div className="text-lg font-bold text-blue-400">Stocks</div>
                                    <div className="text-xs text-surface-400">Growth</div>
                                </div>
                                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                                    <div className="text-lg font-bold text-green-400">Bonds</div>
                                    <div className="text-xs text-surface-400">Stability</div>
                                </div>
                                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                                    <div className="text-lg font-bold text-amber-400">Gold</div>
                                    <div className="text-xs text-surface-400">Safety</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
