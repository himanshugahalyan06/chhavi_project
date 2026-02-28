import { useEffect, useRef, useState } from 'react'

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

function CompoundingDemo() {
    const [years, setYears] = useState(10)
    const principal = 10000
    const rate = 12

    const compoundAmount = principal * Math.pow(1 + rate / 100, years)
    const simpleAmount = principal + (principal * rate * years) / 100

    return (
        <div className="glass-card p-6 md:p-8">
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-bold">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                </span>
                Compounding in Action
            </h3>
            <p className="text-surface-400 text-sm mb-6">
                See how ₹10,000 grows at 12% annually. Drag the slider to change the time period.
            </p>

            <div className="mb-6">
                <label className="flex items-center justify-between mb-2">
                    <span className="text-sm text-surface-300">Time Period</span>
                    <span className="text-sm font-bold text-primary-400">{years} years</span>
                </label>
                <input
                    type="range"
                    min="1"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-2 bg-surface-700 rounded-full appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500
                     [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary-500/30
                     [&::-webkit-slider-thumb]:cursor-pointer"
                />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-surface-800/50 border border-white/[0.06]">
                    <p className="text-xs text-surface-400 mb-1">Without Compounding</p>
                    <p className="text-xl font-bold text-surface-300">₹{simpleAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="p-4 rounded-xl bg-accent-500/10 border border-accent-500/20">
                    <p className="text-xs text-accent-300 mb-1">With Compounding ✨</p>
                    <p className="text-xl font-bold text-accent-400">₹{compoundAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
            </div>

            <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
                <p className="text-sm text-primary-300">
                    <strong>Extra earned: </strong>
                    <span className="text-white font-bold">
                        ₹{(compoundAmount - simpleAmount).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </span>
                    {' '}more through compounding alone!
                </p>
            </div>
        </div>
    )
}

const concepts = [
    {
        title: 'Risk vs Return',
        icon: '⚖️',
        gradient: 'from-amber-500/20 to-orange-500/20',
        border: 'border-amber-500/20',
        content: (
            <div className="space-y-3 text-surface-300 text-sm leading-relaxed">
                <p>In investing, risk and return go hand in hand. <strong className="text-white">Higher potential returns usually come with higher risk.</strong></p>
                <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-green-500/10">
                        <span className="text-green-400 font-bold text-xs w-16">Low Risk</span>
                        <div className="flex-1 h-2 bg-surface-700 rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                        </div>
                        <span className="text-xs text-surface-400">FDs, Bonds</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-yellow-500/10">
                        <span className="text-yellow-400 font-bold text-xs w-16">Medium</span>
                        <div className="flex-1 h-2 bg-surface-700 rounded-full overflow-hidden">
                            <div className="h-full w-1/2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full" />
                        </div>
                        <span className="text-xs text-surface-400">Mutual Funds</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-red-500/10">
                        <span className="text-red-400 font-bold text-xs w-16">High</span>
                        <div className="flex-1 h-2 bg-surface-700 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-gradient-to-r from-red-500 to-red-400 rounded-full" />
                        </div>
                        <span className="text-xs text-surface-400">Stocks, Crypto</span>
                    </div>
                </div>
                <p className="text-xs text-surface-400 italic">Rule of thumb: Only invest what you can afford to keep for 5+ years in risky assets.</p>
            </div>
        ),
    },
    {
        title: 'Long-Term Investing',
        icon: '🏔️',
        gradient: 'from-blue-500/20 to-indigo-500/20',
        border: 'border-blue-500/20',
        content: (
            <div className="space-y-3 text-surface-300 text-sm leading-relaxed">
                <p><strong className="text-white">Time in the market beats timing the market.</strong> Historically, markets always recover from crashes and go higher.</p>
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-blue-300 text-xs font-medium mb-2">📊 Historical Perspective</p>
                    <p className="text-xs">
                        The Sensex was <strong className="text-white">100</strong> in 1979 and crossed <strong className="text-blue-400">72,000</strong> in 2024.
                        Patient investors who stayed invested for 20+ years have rarely ever lost money.
                    </p>
                </div>
                <p className="text-xs text-surface-400 italic">
                    "The stock market is a device for transferring money from the impatient to the patient." — Warren Buffett
                </p>
            </div>
        ),
    },
    {
        title: 'Emergency Fund',
        icon: '🆘',
        gradient: 'from-red-500/20 to-rose-500/20',
        border: 'border-red-500/20',
        content: (
            <div className="space-y-3 text-surface-300 text-sm leading-relaxed">
                <p>
                    <strong className="text-white">Before investing, build an emergency fund</strong> covering 3-6 months of expenses. This money should be easily accessible.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                        <p className="text-xs text-green-400 font-bold">✅ Keep In</p>
                        <p className="text-xs text-surface-400 mt-1">Savings Account or Liquid Fund</p>
                    </div>
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
                        <p className="text-xs text-red-400 font-bold">❌ Don't Keep In</p>
                        <p className="text-xs text-surface-400 mt-1">Stocks, FDs with lock-in, or Property</p>
                    </div>
                </div>
                <p className="text-xs text-surface-400 italic">
                    Your emergency fund is your financial safety net. Build it first, invest second!
                </p>
            </div>
        ),
    },
]

export default function InvestmentBasics() {
    const sectionRef = useRef(null)
    const inView = useInView(sectionRef)

    return (
        <section id="basics" ref={sectionRef} className="section-padding relative">
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-4">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        Investment Fundamentals
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                        Investment <span className="gradient-text">Basics</span>
                    </h2>
                    <p className="text-surface-400 text-lg max-w-2xl mx-auto">
                        Master these essential concepts before you start investing. They'll be your foundation for making smart financial decisions.
                    </p>
                </div>

                <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Left Column: Interactive Compounding */}
                    <CompoundingDemo />

                    {/* Right Column: Concept Cards */}
                    <div className="space-y-4">
                        {concepts.map((concept, i) => (
                            <div
                                key={i}
                                className={`glass-card p-6 bg-gradient-to-br ${concept.gradient} border ${concept.border} hover:bg-white/[0.06] transition-all duration-300`}
                            >
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="text-2xl">{concept.icon}</span>
                                    {concept.title}
                                </h3>
                                {concept.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
