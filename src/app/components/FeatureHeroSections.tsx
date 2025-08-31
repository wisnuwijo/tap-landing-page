import React from 'react';

const features = [
    {
        icon: '👥',
        title: 'Employee Management',
        desc: 'All your employee records in one secure, organized place.',
    },
    {
        icon: '⏱',
        title: 'Attendance & Leave Tracking',
        desc: 'Clock in, request time off, and approve in seconds—no spreadsheets needed.',
    },
    {
        icon: '💰',
        title: 'Automated Payroll',
        desc: 'Accurate salaries, taxes, and digital payslips in just a few clicks.',
    },
    {
        icon: '🎉',
        title: 'Easy Onboarding',
        desc: 'Get new hires started fast with simple, paperless onboarding.',
    },
    {
        icon: '📊',
        title: 'Smart Reports',
        desc: 'Real-time insights on attendance, payroll, and workforce trends.',
    },
    {
        icon: '🛠',
        title: 'Made for Small Teams',
        desc: 'Simple to set up, easy to use, and grows with your business.',
    },
];

export default function FeatureHeroSections() {
    return (
        <>
            <section className="w-full px-0 py-0 bg-[#181922]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch min-h-[600px]">
                    {/* Left Side: Headline, Subheadline, CTA, Stats */}
                    <div className="flex-1 flex flex-col justify-center px-8 py-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">At a fraction of<br />your current costs</h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">Get an unrivaled price-to-performance ratio. Decrease your budget by 30x or keep your current budget but actually instrument all of your services, without sampling.</p>
                        <button className="bg-[#23243a] text-white font-semibold px-6 py-3 rounded-xl mb-12 w-fit flex items-center gap-2 hover:bg-[#23243a]/80 transition">Explore pricing <span className="text-xl">→</span></button>
                        <div className="flex flex-col md:flex-row gap-8 mt-8">
                            <div>
                                <span className="text-xs text-gray-400">Ingest up to</span>
                                <div className="text-3xl font-bold text-white">33x more data</div>
                                <span className="text-xs text-gray-400">with the same budget</span>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400">or save up to</span>
                                <div className="text-3xl font-bold text-white">97%</div>
                                <span className="text-xs text-gray-400">of your costs</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Side: Feature Comparison Card */}
                    <div className="flex-1 flex items-center justify-center px-8 py-20">
                        <div className="bg-[#1d1e2b] rounded-2xl shadow-lg w-full max-w-xl p-8">
                            <div className="flex flex-row justify-between items-center border-b border-[#23243a] pb-6 mb-6">
                                <div className="text-2xl font-bold text-white">1 TB</div>
                                <div className="text-2xl font-bold text-white">1 TB</div>
                                <div className="text-2xl font-bold text-white">150B</div>
                            </div>
                            <div className="flex flex-row justify-between items-center text-xs text-gray-400 mb-8">
                                <div>traces per month<br />30-day retention</div>
                                <div>logs per month<br />30-day retention</div>
                                <div>metrics data points<br />13-month retention</div>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center"><span className="text-white text-xs">DD</span></span>
                                    <span className="text-white font-semibold">Datadog</span>
                                    <div className="flex-1 mx-4 h-2 bg-[#23243a] rounded-full" />
                                    <span className="text-gray-400">approx. $28,000 per month</span>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center"><span className="text-white text-xs">BS</span></span>
                                    <span className="text-white font-semibold">Better Stack</span>
                                    <span className="ml-4 text-blue-400 font-semibold">$879 per month</span>
                                </div>
                            </div>
                            <div className="text-[10px] text-gray-500 mt-4">
                                Placeholder for estimate details. Assumes annual payments, European data location, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Feature Hero Section: Log Management Style */}
            <section className="w-full px-0 py-0 bg-[#181922]">
                <div className="max-w-7xl mx-auto flex flex-col gap-8 py-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 px-8">Log management</h2>
                    <div className="flex flex-col md:flex-row gap-8 px-8">
                        {/* Left Card */}
                        <div className="flex-1 bg-[#1d1e2b] rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[340px]">
                            <div>
                                <div className="mb-4">
                                    <span className="inline-block bg-gray-800 rounded-lg px-4 py-2 text-gray-200 text-sm font-semibold">Custom S3-compatible bucket</span>
                                </div>
                                <div className="mb-2">
                                    <span className="inline-block bg-gray-900 rounded-lg px-4 py-2 text-white text-base font-semibold">bucket_a2 ▼</span>
                                </div>
                                <div className="text-xs text-gray-400 mb-6">Google Cloud · us-east</div>
                                <div className="text-white font-semibold mb-2">Store logs in your own S3 bucket</div>
                                <div className="text-gray-400 text-sm">Store all your logs in your own cloud. Stay compliant & in control of your data.</div>
                            </div>
                        </div>
                        {/* Right Card */}
                        <div className="flex-1 bg-[#1d1e2b] rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[340px]">
                            <div>
                                <div className="mb-4">
                                    <span className="inline-block bg-gray-800 rounded-lg px-4 py-2 text-gray-200 text-sm font-semibold">pid=42</span>
                                    <span className="ml-4 text-gray-400 text-xs">17TB of 61TB</span>
                                    <span className="ml-4 text-gray-400 text-xs">1.1TB/s · 40 seconds left · 140 instances</span>
                                    <span className="ml-4 text-gray-400 text-xs">Last 3 hours ▼</span>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                                    <div className="text-gray-400 text-xs mb-2">Suggestions</div>
                                    <div className="flex flex-col gap-2">
                                        <span className="bg-gray-800 rounded px-2 py-1 text-white text-xs font-mono">current_pid <span className="text-gray-400">string</span></span>
                                        <span className="bg-gray-800 rounded px-2 py-1 text-white text-xs font-mono">message.appid <span className="text-gray-400">string</span></span>
                                    </div>
                                </div>
                                <div className="text-white font-semibold mb-2">No hot and cold storage. All of your data always available</div>
                                <div className="text-gray-400 text-sm">Customize retention per source to retain and query everything you want. No need for archiving anymore. Search all your logs anytime.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6 mt-8 px-8">
                        <span className="text-gray-400 text-xs">Replaces</span>
                        <span className="text-gray-400 text-xs">elastic</span>
                        <span className="text-gray-400 text-xs">DATADOG</span>
                        <span className="text-gray-400 text-xs">MEZMO</span>
                    </div>
                </div>
            </section>

            {/* New Section: Market Presence Style */}
            <section className="w-full px-0 py-0 bg-[#181922]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center min-h-[600px] py-24">
                    {/* Left Side: Headline, Subheadline, Email, CTA, Link */}
                    <div className="flex-1 flex flex-col justify-center px-8">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Happy customers, growing<br />market presence</h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">Ship higher-quality software faster. Be the hero of your engineering teams.</p>
                        <form className="flex flex-row gap-4 mb-6">
                            <input type="email" placeholder="Your work e-mail" className="flex-1 bg-[#23243a] text-gray-200 px-6 py-4 rounded-xl text-lg focus:outline-none" />
                            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition">Start for free</button>
                        </form>
                        <div className="text-gray-400 text-base">
                            Start monitoring for free or <a href="#" className="underline text-gray-200">book a demo</a>
                        </div>
                    </div>
                    {/* Right Side: Chart Placeholder */}
                    <div className="flex-1 flex items-center justify-center px-8">
                        <div className="bg-[#1d1e2b] rounded-2xl shadow-lg w-full max-w-xl h-[340px] flex items-center justify-center">
                            <span className="text-gray-500 text-lg">[Market Presence Chart Placeholder]</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
