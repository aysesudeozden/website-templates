"use client";
import { useEffect } from "react";

export default function Loader() {
    useEffect(() => {
        const showLoader = () => {
            const loader = document.getElementById("loader");
            if (loader) loader.style.display = "flex";
        };

        // Mimics the original behavior logic
        window.addEventListener("beforeunload", showLoader);
        return () => window.removeEventListener("beforeunload", showLoader);
    }, []);

    return (
        <div id="loader">
            <svg viewBox="0 0 100 100">
                <circle className="ring" cx="50" cy="50" r="40" />
                <circle className="ball" cx="50" cy="20" r="7" />
            </svg>
        </div>
    );
}
