import { NavLink } from "react-router-dom";
import "./DesktopNavMenu.scss";

export default function DesktopNavMenu() {
    let linkName = "desktop-nav-link text-shadow";
    let activeLinkName = "desktop-nav-link text-shadow active-page";

    return (
        <header className="desktop-header">
            <div className="desktop-main-logo">
                <img
                    className="desktop-star-logo"
                    src="../assets/star-logo.svg"
                    alt="Star logo"
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
        </header>
    );
}
