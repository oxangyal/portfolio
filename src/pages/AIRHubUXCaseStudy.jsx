import React, { useState } from "react";
import { Section, caseStudyText } from "../components/CaseStudy";

import { AIRHUB_CASE_STUDY } from "../constants";
import ImageLightbox from "../components/ImageLightbox";
import { motion } from "framer-motion";

const AIRHubUXCaseStudy = () => {
    const [lightboxImage, setLightboxImage] = useState(null);
    const {
        title,
        subtitle,
        role,
        timeline,
        client,
        liveUrl,
        repoUrl,
        overview,
        problems,
        approach,
        screenshots,
        comparisonPoints,
        outcomes,
        reflection,
    } = AIRHUB_CASE_STUDY;

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

                <Section title="What was wrong">
                    <div className="grid md:grid-cols-2 gap-4">
                        {problems.map((item) => (
                            <div
                                key={item.title}
                                className="bg-neutral-50 border border-neutral-200 rounded-xl p-5"
                            >
                                <h3 className="text-base font-semibold text-red-600 mb-2">
                                    {item.title}
                                </h3>
                                <p className={`${caseStudyText.secondary} text-sm leading-relaxed`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Approach">
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

                <Section title="Before and after">
                    <p className={`text-sm ${caseStudyText.muted} mb-4`}>
                        Click either screen to view it full-size.
                    </p>
                    <div className="bg-neutral-50 p-5 md:p-6 rounded-xl border border-neutral-200">
                        <div className="grid md:grid-cols-2 gap-5">
                            <button
                                type="button"
                                onClick={() =>
                                    setLightboxImage(screenshots.before)
                                }
                                className="text-left rounded-xl border border-red-200 bg-red-50 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 group"
                            >
                                <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-white">
                                    <img
                                        src={screenshots.before.src}
                                        alt={screenshots.before.alt}
                                        loading="lazy"
                                        className="w-full transition-transform group-hover:scale-[1.02]"
                                    />
                                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
                                        <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-black/60 px-3 py-1.5 rounded-full transition-opacity">
                                            View full size
                                        </span>
                                    </span>
                                </div>
                                <p className="mt-3 text-xs font-medium text-red-600">
                                    {screenshots.before.caption}
                                </p>
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setLightboxImage(screenshots.after)
                                }
                                className="text-left rounded-xl border border-emerald-200 bg-emerald-50 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 group"
                            >
                                <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-white">
                                    <img
                                        src={screenshots.after.src}
                                        alt={screenshots.after.alt}
                                        loading="lazy"
                                        className="w-full transition-transform group-hover:scale-[1.02]"
                                    />
                                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
                                        <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-black/60 px-3 py-1.5 rounded-full transition-opacity">
                                            View full size
                                        </span>
                                    </span>
                                </div>
                                <p className="mt-3 text-xs font-medium text-emerald-600">
                                    {screenshots.after.caption}
                                </p>
                            </button>
                        </div>
                    </div>
                </Section>

                <Section title="Old vs new, point by point">
                    <div className="space-y-4">
                        {comparisonPoints.map((point) => (
                            <div
                                key={point.id}
                                className="bg-neutral-50 p-5 rounded-xl border border-neutral-200"
                            >
                                <h3 className="text-lg font-medium text-purple-700 mb-3">
                                    {point.aspect}
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div className={`bg-red-50 p-3 rounded border border-red-200 ${caseStudyText.secondary}`}>
                                        <strong className="text-red-600 block mb-1">
                                            AI Reviewer
                                        </strong>
                                        {point.legacy}
                                    </div>
                                    <div className={`bg-emerald-50 p-3 rounded border border-emerald-200 ${caseStudyText.body}`}>
                                        <strong className="text-emerald-600 block mb-1">
                                            AIRHub
                                        </strong>
                                        {point.redesign}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Outcome">
                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-emerald-600 mb-3">
                            What changed
                        </h3>
                        <ul className={`space-y-2 text-sm ${caseStudyText.body} leading-relaxed`}>
                            {outcomes.map((item) => (
                                <li key={item} className="flex gap-2">
                                    <span
                                        className="text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        ◆
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Section>

                <Section title="What I took from it">
                    <blockquote className={`border-l-4 border-purple-500 pl-5 ${caseStudyText.body} text-lg leading-relaxed italic`}>
                        {reflection}
                    </blockquote>
                </Section>
            </div>

            <ImageLightbox
                image={lightboxImage}
                onClose={() => setLightboxImage(null)}
            />
        </div>
    );
};

export default AIRHubUXCaseStudy;