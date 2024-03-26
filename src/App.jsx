import { HashRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome.jsx";

import Biography from "../pages/Biography.jsx";
import Experience from "../pages/Experience.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import EmailForm from "../pages/EmailForm.jsx";

import useDesktopLayout from "../hooks/useDesktopLayout.js";
import useUsedAnimations from "../hooks/useUsedAnimations.js";

import UFO from "../components/UFO.jsx";
import DesktopNavMenu from "../components/DesktopNavMenu.jsx";
import MobileNavMenu from "../components/MobileNavMenu.jsx";

function App() {
    const { desktopLayout } = useDesktopLayout();
    const [wasAnimated, activateProperty, restartProperties] =
        useUsedAnimations();

    return (
        <div className={`${desktopLayout ? "desktop-layout" : ""}`}>
            <HashRouter>
                {desktopLayout === true && (
                    <DesktopNavMenu
                        isDesktop={desktopLayout}
                        wasAnimated={wasAnimated}
                        activateProperty={activateProperty}
                        restartProperties={restartProperties}
                    />
                )}
                {desktopLayout === false && (
                    <MobileNavMenu
                        isDesktop={desktopLayout}
                        wasAnimated={wasAnimated}
                        activateProperty={activateProperty}
                        restartProperties={restartProperties}
                    />
                )}
                <main className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Welcome
                                    isDesktop={desktopLayout}
                                    wasAnimated={wasAnimated}
                                    activateProperty={activateProperty}
                                />
                            }
                        />
                        <Route
                            path="/biography"
                            element={
                                <Biography
                                    isDesktop={desktopLayout}
                                    wasAnimated={wasAnimated}
                                    activateProperty={activateProperty}
                                />
                            }
                        />
                        <Route
                            path="/experience"
                            element={
                                <Experience
                                    wasAnimated={wasAnimated}
                                    activateProperty={activateProperty}
                                />
                            }
                        />
                        <Route
                            path="/projects"
                            element={
                                <Projects
                                    wasAnimated={wasAnimated}
                                    activateProperty={activateProperty}
                                />
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Contact
                                    wasAnimated={wasAnimated}
                                    activateProperty={activateProperty}
                                />
                            }
                        />
                        <Route
                            path="/email-form"
                            element={<EmailForm isDesktop={desktopLayout} />}
                        />
                    </Routes>
                    {desktopLayout && (
                        <UFO
                            wasAnimated={wasAnimated}
                            activateProperty={activateProperty}
                        />
                    )}
                </main>
            </HashRouter>
        </div>
    );
}

export default App;
