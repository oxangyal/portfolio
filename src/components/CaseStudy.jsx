import React from "react";

export const caseStudyText = {
    body: "text-black",
    secondary: "text-neutral-900",
    label: "text-neutral-800",
    muted: "text-neutral-700",
};

export const Section = ({ title, children, className = "" }) => (
    <section className={`mb-16 ${className}`}>
        {title && (
            <h2 className="text-2xl font-semibold text-purple-700 mb-6 border-l-4 border-purple-500 pl-3">
                {title}
            </h2>
        )}
        {children}
    </section>
);

export const Shot = ({ image, tone }) => {
    const toneMap = {
        legacy: { ring: "border-red-200 bg-red-50", label: "text-red-600" },
        redesign: {
            ring: "border-emerald-200 bg-emerald-50",
            label: "text-emerald-600",
        },
        desktop: { ring: "border-sky-200 bg-sky-50", label: "text-sky-600" },
        mobile: {
            ring: "border-amber-200 bg-amber-50",
            label: "text-amber-700",
        },
    };
    const { ring, label } = toneMap[tone] || toneMap.legacy;

    return (
        <figure className={`rounded-xl border ${ring} p-3`}>
            <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full rounded-lg border border-neutral-200 bg-white"
            />
            <figcaption className={`mt-3 text-xs font-medium ${label}`}>
                {image.caption}
            </figcaption>
        </figure>
    );
};

export const Flow = ({ steps, tone }) => {
    const box =
        tone === "legacy"
            ? `border-red-200 bg-red-50 ${caseStudyText.secondary}`
            : `border-emerald-200 bg-emerald-50 text-neutral-900`;
    const arrow = tone === "legacy" ? "text-red-400" : "text-emerald-500";

    return (
        <div className="flex flex-col md:flex-row md:items-stretch gap-2 flex-wrap md:flex-nowrap">
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <div
                        className={`flex items-center justify-center rounded-lg border px-3 py-3 text-center text-sm w-full md:w-auto flex-1 ${box}`}
                    >
                        {step.label}
                    </div>
                    {index < steps.length - 1 && (
                        <div
                            className={`flex items-center justify-center text-lg ${arrow}`}
                            aria-hidden="true"
                        >
                            <span className="hidden md:inline">→</span>
                            <span className="inline md:hidden">↓</span>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
