'use client';

import { useState, useEffect } from 'react';

const headlines = [
    'Manage Your People, Not Paperwork.',
    'All-in-One HR Solution for Growing Teams.'
];
const subheadline = 'Streamline HR tasks, payroll, and employee engagement in one smart platform.';
const ctas = [
    'Start Free Trial',
    'Book Consultation'
];

// Ripple animation CSS
const rippleStyle = `
    .hero-ripple-bg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
        pointer-events: none;
    }
    .hero-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(101, 158, 249, 1);
        animation: ripple 2.5s linear infinite;
    }
    .hero-ripple-1 { width: 400px; height: 400px; animation-delay: 0s; }
    .hero-ripple-2 { width: 600px; height: 600px; animation-delay: 0.8s; }
    .hero-ripple-3 { width: 800px; height: 800px; animation-delay: 1.6s; }
    @keyframes ripple {
        0% { opacity: 0.5; transform: scale(0.8); }
        70% { opacity: 0.2; transform: scale(1.2); }
        100% { opacity: 0; transform: scale(1.5); }
    }
`;

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (typing) {
            if (displayed.length < headlines[current].length) {
                timeout = setTimeout(() => {
                    setDisplayed(headlines[current].slice(0, displayed.length + 1));
                }, 50);
            } else {
                timeout = setTimeout(() => setTyping(false), 1200);
            }
        } else {
            timeout = setTimeout(() => {
                setTyping(true);
                setDisplayed('');
                setCurrent((prev) => (prev + 1) % headlines.length);
            }, 1800);
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, current]);

    return (
        <section className="relative flex flex-col items-start justify-center min-h-[60vh] text-left px-0 py-12 overflow-hidden bg-[#181922] before:absolute before:inset-0 before:z-0 before:pointer-events-none before:bg-[linear-gradient(transparent_23px,#23243a_1px),linear-gradient(90deg,transparent_23px,#23243a_1px)] before:bg-[length:24px_24px]">
            <style>{rippleStyle}</style>
            {/* Gradient overlay above grid, below ripple */}
            <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255, 0) 0%, rgba(24,25,34,1) 50%, rgba(24,25,34,0.85) 100%)" }} />
            <div className="hero-ripple-bg z-[2]">
                <div className="hero-ripple hero-ripple-1"></div>
                <div className="hero-ripple hero-ripple-2"></div>
                <div className="hero-ripple hero-ripple-3"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 h-16 flex items-center mt-30">
                    {displayed}
                    <span className="ml-1 animate-pulse">|</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                    {subheadline}
                </p>
                <div className="mb-20 w-full">
                    <div className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Key Features</div>
                    <div className="flex flex-wrap gap-6">
                        <span className="font-bold text-xs text-gray-700 dark:text-gray-200">Employee Management</span>
                        <span className="font-bold text-xs text-gray-700 dark:text-gray-200">Time & Attendance Management</span>
                        <span className="font-bold text-xs text-gray-700 dark:text-gray-200">Leave Management</span>
                        <span className="font-bold text-xs text-gray-700 dark:text-gray-200">Shift Management</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-2 mb-30">
                    <button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-md transition">
                        {ctas[0]}
                    </button>
                    <button className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold text-lg shadow-md transition">
                        {ctas[1]}
                    </button>
                </div>
            </div>
        </section>
    );
}
