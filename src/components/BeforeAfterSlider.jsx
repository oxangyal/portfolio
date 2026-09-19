import React, { useState } from "react";

const BeforeAfterSlider = ({
    before,
    after,
    ratio = "aspect-[1538/784]",
    label = "Before and after comparison",
}) => {
    const [position, setPosition] = useState(50);

    return (
        <div className="relative select-none">
            <div
                className={`relative w-full ${ratio} overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100`}
            >
                <img
                    src={before.src}
                    alt={before.alt}
                    draggable="false"
                    className="absolute inset-0 h-full w-full object-contain"
                />

                <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 0 0 ${position}%)` }}
                >
                    <img
                        src={after.src}
                        alt={after.alt}
                        draggable="false"
                        className="absolute inset-0 h-full w-full object-contain"
                    />
                </div>

                <span className="pointer-events-none absolute left-2 top-2 sm:left-3 sm:top-3 max-w-[45%] truncate rounded-md border border-red-300 bg-red-50/95 px-2 py-1 text-[10px] sm:text-xs text-red-700">
                    {before.caption}
                </span>
                <span className="pointer-events-none absolute right-2 bottom-2 sm:right-3 sm:bottom-3 max-w-[45%] truncate rounded-md border border-emerald-300 bg-emerald-50/95 px-2 py-1 text-[10px] sm:text-xs text-emerald-700">
                    {after.caption}
                </span>

                <div
                    className="pointer-events-none absolute inset-y-0 w-px bg-purple-500"
                    style={{ left: `${position}%` }}
                    aria-hidden="true"
                >
                    <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500 bg-white text-purple-600 shadow-lg">
                        <span className="text-sm leading-none">⟷</span>
                    </div>
                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.5"
                    value={position}
                    onChange={(e) => setPosition(Number(e.target.value))}
                    aria-label={label}
                    aria-valuetext={`${Math.round(position)}% redesign visible`}
                    className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
                />
            </div>

            <p className="mt-3 text-center text-xs text-neutral-500">
                Drag the handle, or focus it and use the arrow keys.
            </p>
        </div>
    );
};

export default BeforeAfterSlider;
