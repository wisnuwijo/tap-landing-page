'use client';

import React from 'react';

const TapHeroSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {/* Left gradient beam - emerald/teal */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 blur-3xl transform -rotate-45 -translate-x-1/2"></div>

                {/* Right gradient beam - teal/cyan */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-teal-500/25 to-cyan-500/25 blur-3xl transform rotate-45 translate-x-1/2"></div>

                {/* Center gradient orb */}
                <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 blur-3xl rounded-full"></div>

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full opacity-50 animate-float"></div>
                    <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full opacity-40 animate-float-delayed"></div>
                    <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-float"></div>
                    <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-emerald-400 rounded-full opacity-30 animate-float-delayed"></div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="relative z-10 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo and navigation */}
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <img src="/tap-light.png" alt="Tap Logo" className="h-8 w-auto" />
                        </div>

                        <div className="hidden md:flex items-center space-x-6 text-sm">
                            <div className="text-emerald-100/70 hover:text-white cursor-pointer flex items-center space-x-1 transition-colors">
                                <span>Products</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div className="text-emerald-100/70 hover:text-white cursor-pointer flex items-center space-x-1 transition-colors">
                                <span>Solutions</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <span className="text-emerald-100/70 hover:text-white cursor-pointer transition-colors">Pricing</span>
                            <span className="text-emerald-100/70 hover:text-white cursor-pointer transition-colors">Resources</span>
                            <div className="text-emerald-100/70 hover:text-white cursor-pointer flex items-center space-x-1 transition-colors">
                                <span>Company</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <span className="text-emerald-100/70 hover:text-white cursor-pointer transition-colors">Enterprise</span>
                        </div>
                    </div>

                    {/* Auth buttons */}
                    <div className="flex items-center space-x-3">
                        <button className="text-emerald-100/70 hover:text-white text-sm px-4 py-2 transition-colors">
                            Sign in
                        </button>
                        <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-emerald-500/25">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main hero content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-32">
                {/* Badge */}
                <div className="mb-8">
                    <div className="inline-flex items-center space-x-2 bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="text-sm text-emerald-100">AI-Powered HR Platform</span>
                    </div>
                </div>

                {/* Main heading */}
                <div className="text-center mb-8 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
                        <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                            Hire smarter.
                        </span>
                    </h1>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
                            Grow faster.
                        </span>
                    </h1>
                </div>

                {/* Subtitle */}
                <p className="text-emerald-100/70 text-lg md:text-xl text-center max-w-3xl mb-12 leading-relaxed">
                    Transform your HR operations with AI-native talent acquisition, intelligent employee management,
                    automated onboarding, performance tracking, and predictive analytics—all in one unified platform.
                </p>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                    <input
                        type="email"
                        placeholder="Your work email"
                        className="w-full sm:w-80 px-4 py-3 bg-emerald-950/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50"
                    />
                    <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all whitespace-nowrap shadow-xl shadow-emerald-500/25 transform hover:scale-105">
                        Start 14-day free trial
                    </button>
                </div>

                {/* Enterprise link */}
                <p className="text-emerald-200/60 text-sm">
                    Need a custom solution? {' '}
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 underline transition-colors">
                        Talk to our team
                    </a>
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-8 mt-12 text-center">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white">10k+</span>
                        <span className="text-xs text-emerald-200/60 uppercase tracking-wider">Companies</span>
                    </div>
                    <div className="w-px h-8 bg-emerald-800/50"></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white">2M+</span>
                        <span className="text-xs text-emerald-200/60 uppercase tracking-wider">Employees</span>
                    </div>
                    <div className="w-px h-8 bg-emerald-800/50"></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white">50%</span>
                        <span className="text-xs text-emerald-200/60 uppercase tracking-wider">Time Saved</span>
                    </div>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-3xl">
                    <div className="px-4 py-2 bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 rounded-full text-sm text-emerald-100 hover:border-emerald-500/50 hover:bg-emerald-900/50 transition-all cursor-pointer">
                        ✨ AI Recruiting
                    </div>
                    <div className="px-4 py-2 bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 rounded-full text-sm text-emerald-100 hover:border-emerald-500/50 hover:bg-emerald-900/50 transition-all cursor-pointer">
                        🚀 Smart Onboarding
                    </div>
                    <div className="px-4 py-2 bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 rounded-full text-sm text-emerald-100 hover:border-emerald-500/50 hover:bg-emerald-900/50 transition-all cursor-pointer">
                        📊 Performance Analytics
                    </div>
                    <div className="px-4 py-2 bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 rounded-full text-sm text-emerald-100 hover:border-emerald-500/50 hover:bg-emerald-900/50 transition-all cursor-pointer">
                        🎯 Talent Matching
                    </div>
                    <div className="px-4 py-2 bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 rounded-full text-sm text-emerald-100 hover:border-emerald-500/50 hover:bg-emerald-900/50 transition-all cursor-pointer">
                        💡 Predictive Insights
                    </div>
                </div>
            </div>

            {/* Chat widget placeholder - AI Assistant */}
            <div className="fixed bottom-6 right-6 z-20">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white p-3 rounded-full shadow-xl shadow-emerald-500/30 transition-all transform hover:scale-110 group relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                    </span>
                </button>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
};

export default TapHeroSection;