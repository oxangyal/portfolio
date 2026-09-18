import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import AIRHubUXCaseStudy from "./pages/AIRHubUXCaseStudy";
import About from "./components/About";
import AngelEyeUXCaseStudy from "./pages/AngelEyeUXCaseStudy";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import LAmoreUXCaseStudy from "./pages/LAmoreUXCaseStudy";
import Navbar from "../src/components/Navbar";
import Projects from "./components/Projects";
import React from "react";
import Technologies from "./components/Technologies";

const Home = () => (
    <>
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
    </>
);

function App() {
    return (
        <BrowserRouter>
            <div className="overflow-x-hidden text-neutral-100 antialiased selection:bg-cyan-300 selection:text-cyan-900">
                <div className="fixed top-0 -z-10 h-full w-full">
                    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                </div>

                <div className="container mx-auto px-8">
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/angeleye-ux"
                            element={
                                <div className="pt-8">
                                    <Link
                                        to="/"
                                        onClick={() => window.scrollTo(0, 0)}
                                        className="mb-8 px-4 py-2 text-sm font-medium text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 rounded border border-purple-700 transition duration-200 inline-block"
                                    >
                                        ← Back to Portfolio
                                    </Link>
                                    <AngelEyeUXCaseStudy />
                                </div>
                            }
                        />
                        <Route
                            path="/lamore-ux"
                            element={
                                <div className="pt-8">
                                    <Link
                                        to="/"
                                        onClick={() => window.scrollTo(0, 0)}
                                        className="mb-8 px-4 py-2 text-sm font-medium text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 rounded border border-purple-700 transition duration-200 inline-block"
                                    >
                                        ← Back to Portfolio
                                    </Link>
                                    <LAmoreUXCaseStudy />
                                </div>
                            }
                        />
                        <Route
                            path="/airhub-ux"
                            element={
                                <div className="pt-8">
                                    <Link
                                        to="/"
                                        onClick={() => window.scrollTo(0, 0)}
                                        className="mb-8 px-4 py-2 text-sm font-medium text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 rounded border border-purple-700 transition duration-200 inline-block"
                                    >
                                        ← Back to Portfolio
                                    </Link>
                                    <AIRHubUXCaseStudy />
                                </div>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
