import React, { useState } from "react";
import { Section, caseStudyText } from "../components/CaseStudy";

import { LAMORE_CASE_STUDY } from "../constants";
import PhoneFrame from "../components/PhoneFrame";
import { motion } from "framer-motion";

const LAmoreUXCaseStudy = () => {
    const {
        title,
        subtitle,
        role,
        timeline,
        client,
        liveUrl,
        repoUrl,
        overview,
        brief,
        research,
        approach,
        screenshots,
        highlights,
        outcomes,
        reflection,
    } = LAMORE_CASE_STUDY;

    const [activeShot, setActiveShot] = useState(screenshots[0].id);
    const shot = screenshots.find((s) => s.id === activeShot);

    return (
        <div className="relative z-10 bg-white text-neutral-800 rounded-2xl shadow-xl shadow-black/20">
            <div className="max-w-5xl mx-auto px-4 py-10 md:px-8">
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 border-b border-neutral-200 pb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3">
                        {title}
                    </h1>
                    <p className={`text-lg ${caseStudyText.muted} mb-5 max-w-2xl`}>
                        {subtitle}
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-purple-700 text-sm md:text-base font-medium mb-5">
                        <p>
                            <span className={caseStudyText.label}>Role:</span>{" "}
                            {role}
                        </p>
                        <p>
                            <span className={caseStudyText.label}>Timeline:</span>{" "}
                            {timeline}
                        </p>
                        <p>
                            <span className={caseStudyText.label}>Client:</span>{" "}
                            {client}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {liveUrl && (
                            
                                <a href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                            >
                                View live site ↗
                            </a>
                        )}
                        {repoUrl && (
                            
                            <a href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg text-sm font-medium border border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:text-neutral-900 transition-colors"
                            >
                                View repo
                            </a>
                        )}
                    </div>
                </motion.header>

                <Section title="Overview">
                    <p className={`${caseStudyText.body} text-lg leading-relaxed bg-neutral-50 p-6 rounded-xl border border-neutral-200`}>
                        {overview}
                    </p>
                </Section>

                <Section title="The brief vs. what I shipped">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                            <h3 className={`text-lg font-medium ${caseStudyText.label} mb-4`}>
                                Asked for
                            </h3>
                            <ul className="space-y-2">
                                {brief.required.map((item) => (
                                    <li
                                        key={item}
                                        className={`flex gap-2 text-sm ${caseStudyText.secondary}`}
                                    >
                                        <span aria-hidden="true">◆</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                            <h3 className="text-lg font-medium text-purple-700 mb-4">
                                Added
                            </h3>
                            <ul className="space-y-2">
                                {brief.added.map((item) => (
                                    <li
                                        key={item}
                                        className={`flex gap-2 text-sm ${caseStudyText.body}`}
                                    >
                                        <span
                                            className="text-purple-500"
                                            aria-hidden="true"
                                        >
                                            ◆
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section title="Research">
                    <blockquote className={`border-l-4 border-purple-500 pl-5 ${caseStudyText.body} text-lg leading-relaxed italic bg-neutral-50 p-6 rounded-xl`}>
                        {research}
                    </blockquote>
                </Section>

                <Section title="Key decisions">
                    <div className="grid md:grid-cols-2 gap-6">
                        {approach.map((item) => (
                            <div
                                key={item.title}
                                className="bg-neutral-50 border border-neutral-200 rounded-xl p-6"
                            >
                                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                                    {item.title}
                                </h3>
                                <p className={`${caseStudyText.secondary} text-sm leading-relaxed`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Getting to a reservation">
                    <div className="bg-neutral-50 p-5 md:p-6 rounded-xl border border-neutral-200">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {[
                                "Home",
                                "Menu",
                                "Atmosphere",
                                "Testimonials",
                                "Location",
                            ].map((step) => (
                                <div
                                    key={step}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className={`w-full rounded-lg border border-neutral-200 bg-white px-3 py-3 text-center text-sm ${caseStudyText.secondary}`}>
                                        {step}
                                    </div>
                                    <span
                                        className="text-purple-400 text-sm"
                                        aria-hidden="true"
                                    >
                                        ↓
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-1 rounded-lg border border-purple-300 bg-purple-50 px-4 py-3 text-center text-sm font-medium text-purple-700">
                            Reserve a Table — one tap away from anywhere
                        </div>
                        <p className={`${caseStudyText.secondary} text-sm leading-relaxed mt-4`}>
                            Every screen leads back to the same CTA — there's no
                            page where booking is more than one tap away.
                        </p>
                    </div>
                </Section>

                <Section title="Desktop and mobile">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                        {screenshots.map((s) => (
                            <button
                                key={s.id}
                                type="button"
                                onClick={() => setActiveShot(s.id)}
                                aria-pressed={s.id === activeShot}
                                className={`px-4 py-2 rounded-lg text-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                                    s.id === activeShot
                                        ? "bg-purple-600 border-purple-600 text-white"
                                        : `bg-white border-neutral-200 ${caseStudyText.label} hover:text-neutral-900 hover:border-neutral-300`
                                }`}
                            >
                                {s.aspect}
                            </button>
                        ))}
                    </div>

                    <div className="bg-neutral-50 p-5 md:p-6 rounded-xl border border-neutral-200">
                        <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-start">
                            <figure className="rounded-xl border border-sky-200 bg-sky-50 p-3">
                                <img
                                    src={shot.desktop.src}
                                    alt={shot.desktop.alt}
                                    loading="lazy"
                                    className="w-full rounded-lg border border-neutral-200"
                                />
                                <figcaption className="mt-3 text-xs font-medium text-sky-700">
                                    {shot.desktop.caption}
                                </figcaption>
                            </figure>

                            <div className="flex justify-center">
                                <PhoneFrame
                                    src={shot.mobile.src}
                                    alt={shot.mobile.alt}
                                    caption={shot.mobile.caption}
                                    tone="amber"
                                />
                            </div>
                        </div>

                        <p className={`${caseStudyText.secondary} text-sm leading-relaxed mt-5`}>
                            {shot.note}
                        </p>
                    </div>
                </Section>
                <Section title="More highlights">
                    <div className="grid md:grid-cols-2 gap-6">
                        {highlights.map((item) => (
                            <figure
                                key={item.title}
                                className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full border-b border-neutral-200"
                                />
                                <figcaption className="p-5">
                                    <h3 className="text-base font-semibold text-purple-700 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className={`${caseStudyText.secondary} text-sm leading-relaxed`}>
                                        {item.desc}
                                    </p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </Section>

                <Section title="Outcome">
                    <ul className={`space-y-2 text-sm ${caseStudyText.body} leading-relaxed bg-neutral-50 border border-neutral-200 rounded-xl p-6`}>
                        {outcomes.map((item) => (
                            <li key={item} className="flex gap-2">
                                <span
                                    className="text-purple-500"
                                    aria-hidden="true"
                                >
                                    ◆
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="What I took from it">
                    <blockquote className={`border-l-4 border-purple-500 pl-5 ${caseStudyText.body} text-lg leading-relaxed italic`}>
                        {reflection}
                    </blockquote>
                </Section>
            </div>
        </div>
    );
};

export default LAmoreUXCaseStudy;