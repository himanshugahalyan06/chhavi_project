import { useEffect, useRef } from 'react'

export default function Hero() {
    const heroRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in')
                }
            },
            { threshold: 0.1 }
        )
        if (heroRef.current) observer.observe(heroRef.current)
        return () => observer.disconnect()
    }, [])

    const scrollTo = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32">
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px] animate-float" />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-500/10 rounded-full blur-[100px] animate-float-delayed" />

            {/* Floating financial icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[15%] left-[10%] animate-float opacity-20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-400">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                </div>
                <div className="absolute top-[25%] right-[15%] animate-float-delayed opacity-15">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-400">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                    </svg>
                </div>
                <div className="absolute bottom-[20%] left-[20%] animate-float opacity-15" style={{ animationDelay: '1s' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-300">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                </div>
                <div className="absolute bottom-[30%] right-[10%] animate-bounce-gentle opacity-15">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-300">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                    </svg>
                </div>
            </div>

            <div className="max-w-5xl mx-auto text-center relative">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8 animate-slide-up">
                    <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                    Free Financial Education for Everyone
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    Learn Before{' '}
                    <span className="gradient-text">You Invest</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl text-surface-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light text-balance animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Your beginner-friendly guide to understanding stocks, mutual funds, and building a smart financial future — no jargon, just clarity.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <button onClick={() => scrollTo('#stocks')} className="btn-primary text-base">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                            <polyline points="16 7 22 7 22 13" />
                        </svg>
                        Learn Stocks
                    </button>
                    <button onClick={() => scrollTo('#mutual-funds')} className="btn-accent text-base">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            <path d="M2 12h20" />
                        </svg>
                        Mutual Funds
                    </button>
                    <button onClick={() => scrollTo('#calculators')} className="btn-secondary text-base">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                            <line x1="8" y1="6" x2="16" y2="6" />
                            <line x1="8" y1="10" x2="10" y2="10" />
                            <line x1="14" y1="10" x2="16" y2="10" />
                            <line x1="8" y1="14" x2="10" y2="14" />
                            <line x1="14" y1="14" x2="16" y2="14" />
                            <line x1="8" y1="18" x2="10" y2="18" />
                            <line x1="14" y1="18" x2="16" y2="18" />
                        </svg>
                        Start Investing
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    {[
                        { value: '5+', label: 'Topics Covered', icon: '📚' },
                        { value: '2', label: 'Calculators', icon: '🧮' },
                        { value: '100%', label: 'Free & Open', icon: '🎓' },
                        { value: '0', label: 'Jargon Overload', icon: '✨' },
                    ].map((stat, i) => (
                        <div key={i} className="glass-card p-4 md:p-6 text-center group hover:bg-white/[0.06] transition-all duration-300">
                            <div className="text-2xl mb-2">{stat.icon}</div>
                            <div className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-surface-400 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
                <button onClick={() => scrollTo('#stocks')} className="text-surface-500 hover:text-primary-400 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
            </div>
        </section>
    )
}
