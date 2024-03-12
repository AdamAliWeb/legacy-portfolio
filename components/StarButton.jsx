import "./StarButton.scss";

export default function StarButton({ isDesktop, restartProperties }) {
    return (
        <a
            className="star-btn tooltip "
            href="/"
            onClick={() => restartProperties()}
        >
            <img
                className="mobile-star-logo"
                src="../assets/star-logo.svg"
                alt="Star logo"
            />
            <span
                className={`tooltip-text ${isDesktop ? "desktop-tooltip" : ""}`}
            >
                Reload Animations
            </span>
        </a>
    );
}
