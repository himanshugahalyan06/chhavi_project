import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StocksSection from './components/StocksSection'
import MutualFundsSection from './components/MutualFundsSection'
import InvestmentBasics from './components/InvestmentBasics'
import CommonMistakes from './components/CommonMistakes'
import Calculators from './components/Calculators'
import Footer from './components/Footer'

function App() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Ambient background effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/[0.07] rounded-full blur-[128px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500/[0.05] rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/[0.08] rounded-full blur-[128px]" />
            </div>

            {/* Grid overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative z-10">
                <Navbar scrollY={scrollY} />
                <main>
                    <Hero />
                    <StocksSection />
                    <MutualFundsSection />
                    <InvestmentBasics />
                    <CommonMistakes />
                    <Calculators />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default App
