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

const mistakes = [
    {
        title: 'Emotional Investing',
        icon: '😰',
        color: 'from-red-500/20 to-rose-500/20',
        border: 'border-red-500/20',
        problem: "Buying stocks when excited, selling when scared. Emotions cloud judgment.",
        solution: 'Create an investment plan and stick to it. Set clear rules before investing.',
        tip: "If you feel FOMO or panic, wait 24 hours before deciding.",
    },
    {
        title: 'Following Social Media Tips',
        icon: '📱',
        color: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/20',
        problem: "Blindly following tips from Instagram or WhatsApp. Most 'experts' have no accountability.",
        solution: 'Do your own research (DYOR). Understand the company before investing.',
        tip: "If someone guarantees returns, run the other way!",
    },
    {
        title: 'No Financial Planning',
        icon: '📋',
        color: 'from-amber-500/20 to-orange-500/20',
        border: 'border-amber-500/20',
        problem: "Investing without goals or timelines. Like driving without a destination.",
        solution: 'Define goals (short/mid/long-term) and match investments accordingly.',
        tip: "Write down financial goals with amounts and timelines first.",
    },
    {
        title: 'Panic Selling',
        icon: '📉',
        color: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/20',
        problem: "Selling during crashes, locking in losses. Markets always recover historically.",
        solution: 'Stay invested. Market dips are opportunities, not threats.',
        tip: "2020 COVID crash: markets recovered within 6 months!",
    },
]

export default function CommonMistakes() {
    const sectionRef = useRef(null)
    const inView = useInView(sectionRef)

    return (
        <section id="mistakes" ref={sectionRef} className="section-padding relative">
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-500/[0.04] rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative">
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium mb-4">
                        ⚠️ Avoid These Pitfalls
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                        Common <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-400">Mistakes</span> to Avoid
                    </h2>
                    <p className="text-surface-400 text-lg max-w-2xl mx-auto">
                        Learn from others' mistakes so you don't have to make them yourself.
                    </p>
                </div>

                <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {mistakes.map((m, i) => (
                        <div key={i} className={`glass-card p-6 md:p-8 bg-gradient-to-br ${m.color} border ${m.border} group hover:bg-white/[0.06] transition-all duration-500`}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{m.icon}</span>
                                <div>
                                    <h3 className="text-xl font-display font-bold text-white">{m.title}</h3>
                                    <span className="text-xs text-surface-400">Mistake #{i + 1}</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/15">
                                    <p className="text-xs font-semibold text-red-400 mb-1">💔 The Problem</p>
                                    <p className="text-sm text-surface-300">{m.problem}</p>
                                </div>
                                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/15">
                                    <p className="text-xs font-semibold text-green-400 mb-1">✅ The Solution</p>
                                    <p className="text-sm text-surface-300">{m.solution}</p>
                                </div>
                                <div className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.03]">
                                    <span className="text-yellow-400 text-xs mt-0.5">💡</span>
                                    <p className="text-xs text-surface-400 italic">{m.tip}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-12 glass-card p-6 md:p-8 text-center transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-xl font-display font-bold text-white mb-3">🧠 The Golden Rule</h3>
                    <p className="text-surface-300 max-w-2xl mx-auto">
                        <strong className="text-white">"Invest in knowledge before you invest in the market."</strong> Start small, stay consistent, think long-term. The best investment is in yourself!
                    </p>
                </div>
            </div>
        </section>
    )
}
