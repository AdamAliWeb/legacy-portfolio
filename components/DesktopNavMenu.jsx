import { NavLink } from "react-router-dom";
import "./DesktopNavMenu.scss";
import StarButton from "./StarButton";
import { motion } from "framer-motion";
import { headerSwingingAnimation } from "../helpers/onceAnimations";
import { useEffect } from "react";

export default function DesktopNavMenu({
    isDesktop,
    wasAnimated,
    activateProperty,
    restartProperties,
}) {
    let linkName = "desktop-nav-link text-shadow";
    let activeLinkName = "desktop-nav-link text-shadow active-page";

    useEffect(() => {
        activateProperty("headerSwinging");
    }, []);

    return (
        <motion.header
            className="desktop-header"
            {...(!wasAnimated.headerSwinging ? headerSwingingAnimation : {})}
        >
            <div className="desktop-main-logo">
                <StarButton
                    isDesktop={isDesktop}
                    restartProperties={restartProperties}
                />
                <h1 className="desktop-title-logo text-shadow">Adam Ali</h1>
            </div>
            <nav className="desktop-nav-menu">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? activeLinkName : linkName
                    }
                    href="#"
                >
                    Welcome
                </NavLink>
                <NavLink
                    to="/biography"
                    className={({ isActive }) =>
                        isActive ? activeLinkName : linkName
                    }
                    href="#"
                >
                    Biography
                </NavLink>
                <NavLink
                    to="/experience"
                    className={({ isActive }) =>
                        isActive ? activeLinkName : linkName
                    }
                    href="#"
                >
                    Experience
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? activeLinkName : linkName
                    }
                    href="#"
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? activeLinkName : linkName
                    }
                    href="#"
                >
                    Contact
                </NavLink>
            </nav>
        </motion.header>
    );
}
