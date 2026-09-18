import React, { useEffect } from "react";

const ImageLightbox = ({ image, onClose }) => {
    useEffect(() => {
        if (!image) return;
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [image, onClose]);

    if (!image) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-10"
            onClick={onClose}
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 text-white text-xl flex items-center justify-center hover:bg-white/20 transition-colors"
            >
                ✕
            </button>
            <img
                src={image.src}
                alt={image.alt}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-zoom-out"
            />
            {image.caption && (
                <p
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-3 py-1.5 rounded-full"
                >
                    {image.caption}
                </p>
            )}
        </div>
    );
};

export default ImageLightbox;
