import { useEffect, useRef, useState, useMemo } from 'react'

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

function SIPCalculator() {
    const [monthly, setMonthly] = useState(5000)
    const [rate, setRate] = useState(12)
    const [years, setYears] = useState(10)

    const result = useMemo(() => {
        const n = years * 12
        const r = rate / 100 / 12
        const invested = monthly * n
        const futureValue = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
        const gains = futureValue - invested
        return { invested, futureValue, gains }
    }, [monthly, rate, years])

    const investedPercent = (result.invested / result.futureValue) * 100

    return (
        <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-400 flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-xl font-display font-bold text-white">SIP Calculator</h3>
                    <p className="text-xs text-surface-400">Plan your systematic investment</p>
                </div>
            </div>

            <div className="space-y-5 mb-6">
                <div>
                    <label className="flex justify-between mb-2">
                        <span className="text-sm text-surface-300">Monthly Investment</span>
                        <span className="text-sm font-bold text-accent-400">₹{monthly.toLocaleString('en-IN')}</span>
                    </label>
                    <input type="range" min="500" max="100000" step="500" value={monthly}
                        onChange={(e) => setMonthly(Number(e.target.value))}
                        className="w-full h-2 bg-surface-700 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-500
              [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-accent-500/30 [&::-webkit-slider-thumb]:cursor-pointer" />
                </div>
                <div>
                    <label className="flex justify-between mb-2">
                        <span className="text-sm text-surface-300">Expected Return Rate</span>
                        <span className="text-sm font-bold text-primary-400">{rate}% p.a.</span>
                    </label>
                    <input type="range" min="1" max="30" step="0.5" value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="w-full h-2 bg-surface-700 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500
              [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary-500/30 [&::-webkit-slider-thumb]:cursor-pointer" />
                </div>
                <div>
                    <label className="flex justify-between mb-2">
                        <span className="text-sm text-surface-300">Time Period</span>
                        <span className="text-sm font-bold text-white">{years} years</span>
                    </label>
                    <input type="range" min="1" max="40" value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-full h-2 bg-surface-700 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer" />
                </div>
            </div>

            {/* Visual Bar */}
            <div className="mb-4">
                <div className="h-4 rounded-full overflow-hidden bg-surface-700 flex">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-500" style={{ width: `${investedPercent}%` }} />
                    <div className="bg-gradient-to-r from-accent-500 to-accent-400 transition-all duration-500" style={{ width: `${100 - investedPercent}%` }} />
                </div>
                <div className="flex justify-between mt-1">
                    <span className="text-xs text-primary-400">Invested</span>
                    <span className="text-xs text-accent-400">Returns</span>
                </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 text-center">
                    <p className="text-xs text-primary-300 mb-1">Invested</p>
                    <p className="text-sm font-bold text-white">₹{result.invested.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="p-3 rounded-xl bg-accent-500/10 border border-accent-500/20 text-center">
                    <p className="text-xs text-accent-300 mb-1">Gains</p>
                    <p className="text-sm font-bold text-accent-400">₹{result.gains.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-center">
                    <p className="text-xs text-surface-300 mb-1">Total Value</p>
                    <p className="text-sm font-bold text-white">₹{result.futureValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
            </div>
        </div>
    )
}

function CompoundInterestCalc() {
    const [principal, setPrincipal] = useState(100000)
    const [rate, setRate] = useState(10)
    const [years, setYears] = useState(5)
    const [frequency, setFrequency] = useState(1)

    const result = useMemo(() => {
        const n = frequency
        const amount = principal * Math.pow(1 + rate / (100 * n), n * years)
        const interest = amount - principal
        return { amount, interest }
    }, [principal, rate, years, frequency])

    return (
        <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                        <line x1="8" y1="6" x2="16" y2="6" />
                        <line x1="8" y1="10" x2="10" y2="10" />
                        <line x1="14" y1="10" x2="16" y2="10" />
                        <line x1="8" y1="14" x2="10" y2="14" />
                        <line x1="14" y1="14" x2="16" y2="14" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-xl font-display font-bold text-white">Compound Interest</h3>
                    <p className="text-xs text-surface-400">See the power of compounding</p>
                </div>
            </div>

            <div className="space-y-5 mb-6">
                <div>
                    <label className="flex justify-between mb-2">
                        <span className="text-sm text-surface-300">Principal Amount</span>
                        <span className="text-sm font-bold text-primary-400">₹{principal.toLocaleString('en-IN')}</span>
                    </label>
                    <input type="range" min="1000" max="10000000" step="1000" value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value))}
                        className="w-full h-2 bg-surface-700 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500
              [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary-500/30 [&::-webkit-slider-thumb]:cursor-pointer" />
                </div>
                <div>
                    <label className="flex justify-between mb-2">
                        <span className="text-sm text-surface-300">Interest Rate</span>
                        <span className="text-sm font-bold text-accent-400">{rate}% p.a.</span>
                    </label>
                    <input type="range" min="1" max="30" step="0.5" value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="w-full h-2 bg-surface-700 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-500
              [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-accent-500/30 [&::-webkit-slider-thumb]:cursor-pointer" />
                </div>
                <div>
                    <label className="flex justify-between mb-2">
                        <span className="text-sm text-surface-300">Time Period</span>
                        <span className="text-sm font-bold text-white">{years} years</span>
                    </label>
                    <input type="range" min="1" max="30" value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-full h-2 bg-surface-700 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer" />
                </div>
                <div>
                    <label className="text-sm text-surface-300 mb-2 block">Compounding Frequency</label>
                    <div className="grid grid-cols-4 gap-2">
                        {[
                            { label: 'Yearly', val: 1 },
                            { label: 'Half-Yr', val: 2 },
                            { label: 'Quarterly', val: 4 },
                            { label: 'Monthly', val: 12 },
                        ].map((f) => (
                            <button key={f.val}
                                onClick={() => setFrequency(f.val)}
                                className={`py-2 px-2 text-xs font-medium rounded-lg transition-all duration-300 ${frequency === f.val
                                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                        : 'bg-white/[0.06] text-surface-400 hover:bg-white/[0.1] hover:text-white'
                                    }`}>
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-surface-800/50 border border-white/[0.06] text-center">
                    <p className="text-xs text-surface-400 mb-1">Principal</p>
                    <p className="text-sm font-bold text-white">₹{principal.toLocaleString('en-IN')}</p>
                </div>
                <div className="p-3 rounded-xl bg-accent-500/10 border border-accent-500/20 text-center">
                    <p className="text-xs text-accent-300 mb-1">Interest</p>
                    <p className="text-sm font-bold text-accent-400">₹{result.interest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 text-center">
                    <p className="text-xs text-primary-300 mb-1">Total</p>
                    <p className="text-sm font-bold text-primary-400">₹{result.amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-xs text-surface-400 text-center">
                    Your money grows <strong className="text-accent-400">{((result.amount / principal - 1) * 100).toFixed(1)}%</strong> in {years} years at {rate}% with {frequency === 1 ? 'yearly' : frequency === 2 ? 'half-yearly' : frequency === 4 ? 'quarterly' : 'monthly'} compounding
                </p>
            </div>
        </div>
    )
}

export default function Calculators() {
    const sectionRef = useRef(null)
    const inView = useInView(sectionRef)

    return (
        <section id="calculators" ref={sectionRef} className="section-padding relative">
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative">
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium mb-4">
                        🧮 Interactive Tools
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                        Financial <span className="gradient-text">Calculators</span>
                    </h2>
                    <p className="text-surface-400 text-lg max-w-2xl mx-auto">
                        Play with numbers and visualize how your investments will grow over time.
                    </p>
                </div>

                <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <SIPCalculator />
                    <CompoundInterestCalc />
                </div>
            </div>
        </section>
    )
}
