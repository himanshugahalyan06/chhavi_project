import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Stocks', href: '#stocks' },
    { label: 'Mutual Funds', href: '#mutual-funds' },
    { label: 'Basics', href: '#basics' },
    { label: 'Mistakes', href: '#mistakes' },
    { label: 'Calculators', href: '#calculators' },
]

export default function Navbar({ scrollY }) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const isScrolled = scrollY > 50

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection('#' + entry.target.id)
                    }
                })
            },
            { rootMargin: '-40% 0px -60% 0px' }
        )

        navLinks.forEach(({ href }) => {
            const el = document.querySelector(href)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const handleNavClick = (href) => {
        setMobileOpen(false)
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-surface-950/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                <polyline points="16 7 22 7 22 13" />
                            </svg>
                        </div>
                        <span className="text-xl font-display font-bold text-white">
                            Invest<span className="text-primary-400">Aware</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ label, href }) => (
                            <button
                                key={href}
                                onClick={() => handleNavClick(href)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === href
                                        ? 'text-primary-400'
                                        : 'text-surface-300 hover:text-white'
                                    }`}
                            >
                                {label}
                                {activeSection === href && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary-400 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => handleNavClick('#calculators')}
                            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40"
                        >
                            Try Calculator
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        id="mobile-menu-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-surface-300 hover:text-white transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {mobileOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="8" x2="21" y2="8" />
                                    <line x1="3" y1="16" x2="21" y2="16" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-surface-950/95 backdrop-blur-2xl border-b border-white/[0.06] transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="px-4 py-4 space-y-1">
                    {navLinks.map(({ label, href }) => (
                        <button
                            key={href}
                            onClick={() => handleNavClick(href)}
                            className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${activeSection === href
                                    ? 'text-primary-400 bg-primary-500/10'
                                    : 'text-surface-300 hover:text-white hover:bg-white/[0.04]'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavClick('#calculators')}
                        className="w-full mt-2 px-4 py-3 text-sm font-semibold bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl"
                    >
                        Try Calculator
                    </button>
                </div>
            </div>
        </nav>
    )
}
