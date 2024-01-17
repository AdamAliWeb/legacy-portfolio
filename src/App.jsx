import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopNavMenu from "../components/DesktopNavMenu.jsx";
import MobileNavMenu from "../components/MobileNavMenu.jsx";
import Welcome from "../pages/Welcome.jsx";
import Biography from "../pages/Biography.jsx";
import Experience from "../pages/Experience.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import { useEffect, useState } from "react";
import EmailForm from "../pages/EmailForm.jsx";

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileLayout, setMobileLayout] = useState(false);

    const changeWidth = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        if (windowWidth <= 1000) setMobileLayout(true);
        else setMobileLayout(false);

        window.addEventListener("resize", changeWidth);

        return () => window.removeEventListener("resize", changeWidth);
    }, [windowWidth]);

    return (
        <>
            <BrowserRouter>
                {mobileLayout ? <MobileNavMenu /> : <DesktopNavMenu />}
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/biography" element={<Biography />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/email-form" element={<EmailForm />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
