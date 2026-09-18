import React from "react";

const PhoneFrame = ({ src, alt, caption, tone = "amber" }) => {
    const captionColor = tone === "amber" ? "text-amber-700" : "text-sky-700";

    return (
        <figure className="flex flex-col items-center">
            <div className="relative w-full max-w-[240px] rounded-[3rem] bg-neutral-900 p-3 shadow-2xl">
                <span className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l bg-neutral-700" />
                <span className="absolute -left-[3px] top-36 h-16 w-[3px] rounded-l bg-neutral-700" />
                <span className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r bg-neutral-700" />

                <div className="relative overflow-hidden rounded-[2.25rem] bg-white">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 h-6 w-28 rounded-full bg-neutral-900" />

                    <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        className="block w-full h-auto"
                    />

                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-28 rounded-full bg-neutral-900/70" />
                </div>
            </div>
            {caption && (
                <figcaption
                    className={`mt-3 text-xs font-medium text-center ${captionColor}`}
                >
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};

export default PhoneFrame;
