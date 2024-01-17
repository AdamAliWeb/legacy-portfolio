import { Link, useLocation } from "react-router-dom";
import "./MobileNavMenu.scss";
import { useEffect, useState } from "react";

const transformTitle = (title) => {
    let newTitle = title.slice(1);
    newTitle = newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
    return newTitle;
};

export default function MobileNavMenu() {
    let location = useLocation();
    const [navMenuActive, setNavMenuActive] = useState(false);
    const [sectionTitle, setSectionTitle] = useState("");

    const handleOnClick = () => {
        if (navMenuActive) {
            setNavMenuActive(false);
        } else {
            setNavMenuActive(true);
        }
    };

    useEffect(() => {
        if (location.pathname === "/") {
            setSectionTitle("Welcome");
        } else {
            setSectionTitle(transformTitle(location.pathname));
        }
    }, [location]);

    return (
        <>
            <section className="mobile-header text-shadow">
                <h2>{sectionTitle}</h2>
                <div id="spuper"></div>
            </section>
            <section className="mobile-nav-container">
                <nav
                    className={`mobile-nav-menu ${
                        navMenuActive ? "nav-menu-active" : ""
                    }`}
                >
                    <Link
                        to="/"
                        onClick={handleOnClick}
                        className="mobile-nav-link text-shadow"
                        href="#"
                    >
                        Welcome
                    </Link>
                    <Link
                        to="/biography"
                        onClick={handleOnClick}
                        className="mobile-nav-link text-shadow"
                        href="#"
                    >
                        Biography
                    </Link>
                    <Link
                        to="/experience"
                        onClick={handleOnClick}
                        className="mobile-nav-link text-shadow"
                        href="#"
                    >
                        Experience
                    </Link>
                    <Link
                        to="/projects"
                        onClick={handleOnClick}
                        className="mobile-nav-link text-shadow"
                        href="#"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        onClick={handleOnClick}
                        className="mobile-nav-link text-shadow"
                        href="#"
                    >
                        Contact
                    </Link>
                </nav>

                <div className="mobile-navbar">
                    <img
                        className="mobile-star-logo"
                        src="../assets/star-logo.svg"
                        alt="Star logo"
                    />
                    <button
                        className={`mobile-nav-btn ${
                            navMenuActive ? "mobile-nav-btn-active" : ""
                        }`}
                        onClick={handleOnClick}
                    >
                        <div className="mobile-nav-btn-bar-1"></div>
                        <div className="mobile-nav-btn-bar-2"></div>
                        <div className="mobile-nav-btn-bar-3"></div>
                    </button>
                </div>
            </section>
        </>
    );
}
