import { Link, useLocation } from "react-router-dom";
import "./MobileNavMenu.scss";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
    footerSwingingAnimation,
    headerSwingingAnimation,
} from "../helpers/onceAnimations";
import StarButton from "./StarButton";

const transformTitle = (title) => {
    let newTitle = title.slice(1);
    newTitle = newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
    return newTitle;
};

export default function MobileNavMenu({
    isDesktop,
    wasAnimated,
    activateProperty,
    restartProperties,
}) {
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
        activateProperty("headerSwinging");
    }, []);

    useEffect(() => {
        if (location.pathname === "/") {
            setSectionTitle("Welcome");
        } else {
            setSectionTitle(transformTitle(location.pathname));
        }
    }, [location]);

    return (
        <>
            <motion.header
                className="mobile-header text-shadow"
                {...(!wasAnimated.headerSwinging
                    ? headerSwingingAnimation
                    : {})}
            >
                <h2>{sectionTitle}</h2>
                <div id="spuper"></div>
            </motion.header>
            <motion.section
                className="mobile-nav-container"
                {...(!wasAnimated.headerSwinging
                    ? footerSwingingAnimation
                    : {})}
            >
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
                    <StarButton
                        isDesktop={isDesktop}
                        restartProperties={restartProperties}
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
            </motion.section>
        </>
    );
}
