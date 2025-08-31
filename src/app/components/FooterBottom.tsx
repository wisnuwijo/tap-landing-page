import React from "react";

export default function FooterBottom() {
    return (
        <div className="w-full bg-[#181922] border-t border-[#23243a] py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                {/* Left: Logo and description */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 flex-1">
                    <div className="flex items-center gap-2 mb-2 md:mb-0">
                        {/* Placeholder for logo */}
                        <img
                            src="/tap-light.png"
                            alt="Tap Logo"
                            className="w-sm mr-2"
                        />
                    </div>
                    <div className="text-gray-300 text-base max-w-xl">
                        AI-native platform for on-call and incident response with effortless monitoring, status pages, tracing, infrastructure monitoring and log management.
                    </div>
                </div>
                {/* Right: Contact and social icons */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6 md:mt-0">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-base">+1 (628) 900-3830</span>
                        <span className="text-gray-400 text-base">hello@betterstack.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Social icons as placeholders */}
                        <span className="text-gray-400 text-xl">&#x1F4F7;</span>
                        <span className="text-gray-400 text-xl">&#x1F3A5;</span>
                        <span className="text-gray-400 text-xl">&#x1F4F1;</span>
                        <span className="text-gray-400 text-xl">&#x1F4F2;</span>
                        <span className="text-gray-400 text-xl">&#x1F426;</span>
                        <span className="text-gray-400 text-xl">&#x1F5C3;</span>
                        <span className="text-gray-400 text-xl">&#x1F4FA;</span>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-[#23243a] pt-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
                <div className="flex flex-wrap gap-6 mb-2 md:mb-0">
                    <a href="#" className="hover:text-gray-200">Terms of Use</a>
                    <a href="#" className="hover:text-gray-200">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-200">GDPR</a>
                    <span className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                        System status
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span>&copy; 2025 Better Stack, Inc.</span>
                    <span className="text-gray-400">&#x1F5A5;</span>
                </div>
            </div>
        </div>
    );
}
