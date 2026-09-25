import { Flow, Section, Shot, caseStudyText } from "../components/CaseStudy";
import React, { useState } from "react";

import { ANGELEYE_CASE_STUDY } from "../constants";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { motion } from "framer-motion";

const AngelEyeUXCaseStudy = () => {
    const {
        title,
        subtitle,
        role,
        timeline,
        client,
        overview,
        problems,
        goals,
        stack,
        approach,
        userJourney,
        screenshots,
        comparisonPoints,
        outcomes,
        nextSteps,
        reflection,
        sitemap,
        visualDesign,
    } = ANGELEYE_CASE_STUDY;

    const [activeShot, setActiveShot] = useState(screenshots[0].id);
    const [sideBySide, setSideBySide] = useState(false);
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
                    <p
                        className={`text-lg ${caseStudyText.muted} mb-5 max-w-2xl`}
                    >
                        {subtitle}
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-purple-700 text-sm md:text-base font-medium">
                        <p>
                            <span className={caseStudyText.label}>Role:</span>{" "}
                            {role}
                        </p>
                        <p>
                            <span className={caseStudyText.label}>
                                Timeline:
                            </span>{" "}
                            {timeline}
                        </p>
                        <p>
                            <span className={caseStudyText.label}>Client:</span>{" "}
                            {client}
                        </p>
                    </div>
                </motion.header>

                <Section title="Overview">
                    <p
                        className={`${caseStudyText.body} text-lg leading-relaxed bg-neutral-50 p-6 rounded-xl border border-neutral-200`}
                    >
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
                                <p
                                    className={`${caseStudyText.secondary} text-sm leading-relaxed`}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Goals">
                    <ul className="space-y-3">
                        {goals.map((goal) => (
                            <li
                                key={goal}
                                className={`flex gap-3 ${caseStudyText.body} leading-relaxed`}
                            >
                                <span
                                    className="text-purple-500 mt-1"
                                    aria-hidden="true"
                                >
                                    ◆
                                </span>
                                <span>{goal}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Stack">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h3 className="text-xl font-medium text-red-600 mb-4">
                                Legacy build
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {stack.legacy.map((item) => (
                                    <li
                                        key={item}
                                        className="bg-white border border-red-300 text-red-700 text-sm px-3 py-1 rounded-md"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                            <h3 className="text-xl font-medium text-emerald-600 mb-4">
                                Redesign
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {stack.redesign.map((item) => (
                                    <li
                                        key={item}
                                        className="bg-white border border-emerald-300 text-emerald-700 text-sm px-3 py-1 rounded-md"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section title="Sitemap: legacy vs redesign">
                    <div className="grid md:grid-cols-2 gap-6 mb-5">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="text-sm font-medium text-red-600 mb-3">
                                {sitemap.legacy.label}
                            </h3>
                            <ul className="space-y-1.5 text-sm">
                                {sitemap.legacy.nodes.map((node) => (
                                    <li key={node.label}>
                                        <span
                                            className={caseStudyText.secondary}
                                        >
                                            {node.label}
                                        </span>
                                        {node.children && (
                                            <ul className="ml-4 mt-1 space-y-1 border-l border-red-200 pl-3">
                                                {node.children.map((child) => (
                                                    <li
                                                        key={child.label}
                                                        className={`text-xs ${caseStudyText.secondary}`}
                                                    >
                                                        {child.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                            <h3 className="text-sm font-medium text-emerald-600 mb-3">
                                {sitemap.redesign.label}
                            </h3>
                            <ul className="space-y-1.5 text-sm">
                                {sitemap.redesign.nodes.map((node) => (
                                    <li
                                        key={node.label}
                                        className={caseStudyText.body}
                                    >
                                        {node.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p
                        className={`${caseStudyText.secondary} text-sm leading-relaxed`}
                    >
                        {sitemap.note}
                    </p>
                </Section>

                <Section title="Visual design: color & system">
                    <p
                        className={`${caseStudyText.body} text-base leading-relaxed mb-6`}
                    >
                        {visualDesign.intro}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {visualDesign.choices.map((item) => (
                            <div
                                key={item.title}
                                className="flex gap-4 bg-neutral-50 border border-neutral-200 rounded-xl p-5"
                            >
                                <span
                                    className="mt-1 h-8 w-8 flex-shrink-0 rounded-full border border-neutral-200 shadow-sm"
                                    style={{ backgroundColor: item.swatch }}
                                    aria-hidden="true"
                                />
                                <div>
                                    <h3 className="text-sm font-semibold text-purple-700 mb-1">
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`${caseStudyText.secondary} text-sm leading-relaxed`}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
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
                                <p
                                    className={`${caseStudyText.secondary} text-sm leading-relaxed`}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Before and after">
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
                        <button
                            type="button"
                            onClick={() => setSideBySide((v) => !v)}
                            className={`ml-auto px-4 py-2 rounded-lg text-sm border border-neutral-200 bg-white ${caseStudyText.label} hover:text-neutral-900 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400`}
                        >
                            {sideBySide ? "Show slider" : "Show side by side"}
                        </button>
                    </div>

                    <div className="bg-neutral-50 p-5 md:p-6 rounded-xl border border-neutral-200">
                        {sideBySide ? (
                            <div className="grid md:grid-cols-2 gap-5">
                                <Shot image={shot.legacy} tone="legacy" />
                                <Shot image={shot.redesign} tone="redesign" />
                            </div>
                        ) : (
                            <BeforeAfterSlider
                                key={shot.id}
                                before={shot.legacy}
                                after={shot.redesign}
                                label={`${shot.aspect}: legacy versus redesign`}
                            />
                        )}
                        <p
                            className={`${caseStudyText.secondary} text-sm leading-relaxed mt-5`}
                        >
                            {shot.note}
                        </p>
                    </div>
                </Section>

                <Section title="Path to a photograph">
                    <div className="bg-neutral-50 p-5 md:p-6 rounded-xl border border-neutral-200 space-y-6">
                        <div>
                            <h3 className="text-sm font-medium text-red-600 mb-3">
                                Legacy — {userJourney.legacy.length} steps
                            </h3>
                            <Flow steps={userJourney.legacy} tone="legacy" />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-emerald-600 mb-3">
                                Redesign — {userJourney.redesign.length} steps
                            </h3>
                            <Flow
                                steps={userJourney.redesign}
                                tone="redesign"
                            />
                        </div>
                    </div>
                </Section>

                <Section title="Legacy vs redesign">
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
                                    <div
                                        className={`bg-red-50 p-3 rounded border border-red-200 ${caseStudyText.secondary}`}
                                    >
                                        <strong className="text-red-600 block mb-1">
                                            Legacy
                                        </strong>
                                        {point.legacy}
                                    </div>
                                    <div
                                        className={`bg-emerald-50 p-3 rounded border border-emerald-200 ${caseStudyText.body}`}
                                    >
                                        <strong className="text-emerald-600 block mb-1">
                                            Redesign
                                        </strong>
                                        {point.redesign}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Outcome">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-emerald-600 mb-3">
                                What changed
                            </h3>
                            <ul
                                className={`space-y-2 text-sm ${caseStudyText.body} leading-relaxed`}
                            >
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
                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-purple-700 mb-3">
                                Still on the list
                            </h3>
                            <ul
                                className={`space-y-2 text-sm ${caseStudyText.secondary} leading-relaxed`}
                            >
                                {nextSteps.map((item) => (
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
                        </div>
                    </div>
                </Section>

                <Section title="What I took from it">
                    <blockquote
                        className={`border-l-4 border-purple-500 pl-5 ${caseStudyText.body} text-lg leading-relaxed italic`}
                    >
                        {reflection}
                    </blockquote>
                </Section>
            </div>
        </div>
    );
};

export default AngelEyeUXCaseStudy;
