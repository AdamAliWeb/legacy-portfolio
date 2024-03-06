import { HashRouter, Routes, Route } from "react-router-dom";
import DesktopNavMenu from "../components/DesktopNavMenu.jsx";
import MobileNavMenu from "../components/MobileNavMenu.jsx";
import Welcome from "../pages/Welcome.jsx";
import Biography from "../pages/Biography.jsx";
import Experience from "../pages/Experience.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";

import EmailForm from "../pages/EmailForm.jsx";
import useDesktopLayout from "../hooks/useDesktopLayout.js";

function App() {
    const { desktopLayout } = useDesktopLayout();

    return (
        <div className={`${desktopLayout ? "desktop-layout" : ""}`}>
            <HashRouter>
                {desktopLayout ? <DesktopNavMenu /> : <MobileNavMenu />}
                <main className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Welcome isDesktop={desktopLayout} />}
                        />
                        <Route path="/biography" element={<Biography />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/email-form"
                            element={<EmailForm isDesktop={desktopLayout} />}
                        />
                    </Routes>
                </main>
            </HashRouter>
        </div>
    );
}

export default App;
