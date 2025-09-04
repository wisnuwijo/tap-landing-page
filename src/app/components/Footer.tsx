import React from "react";

const footerLinks = [
  {
    title: "Platform",
    links: ["Enterprise", "Uptime", "Telemetry"],
  },
  {
    title: "Resources",
    links: ["Help & Support", "Uptime docs", "Logs docs"],
  },
  {
    title: "Company",
    links: ["Work at Better Stack", "Engineering", "Security"],
  },
  {
    title: "From the community",
    links: [
      "What Is Incident Management? Beginner’s Guide",
      "How to Create a Developer-Friendly On-Call Schedule in 7 steps",
      "8 Best Free & Open Source Status Page Tools in 2024",
      "10 Best API Monitoring Tools in 2024",
      "5 Most Used Incident Management Tools (Reviewed & Ranked)",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Log management",
      "Tracing",
      "Infrastructure monitoring",
      "Uptime monitoring",
      "Website monitoring",
      "Incident management",
    ],
  },
  {
    title: "Community",
    links: ["Guides", "Questions", "Comparisons", "Blog", "Write for us"],
  },
  {
    title: "Compare",
    links: [
      "Pingdom",
      "Pagerduty",
      "StatusPage.io",
      "Uptime Robot",
      "StatusCake",
      "Opsgenie",
      "VictorOps",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#23243a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-8 text-left">
          {footerLinks.map((section, idx) => (
            <div key={section.title}>
              <div className="font-semibold text-gray-200 mb-4 text-base">
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-200 text-sm transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
