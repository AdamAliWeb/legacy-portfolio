import ModalWindow from "./ModalWindow";

import "./ProjectCard.scss";

export default function ProjectCard({
    closeModal,
    title,
    children,
    technologyStack,
}) {
    return (
        <ModalWindow closeModal={closeModal}>
            <img
                className="project-title"
                src={`../assets/${title}.svg`}
                alt={title}
            />
            <div className="project-technologies">
                {technologyStack.map((tech, index) => (
                    <img
                        key={index}
                        src={`../assets/technologies/${tech}.svg`}
                        alt={tech}
                    />
                ))}
            </div>
            <p className="project-description">{children}</p>
            <div className="project-links">
                <a className="project-button" href="#" target="_blank">
                    <img
                        className="project-button-icon"
                        src="../assets/icons/github-icon.svg"
                        alt="github-icon"
                    />{" "}
                    Repository
                </a>
                <a className="project-button" href="#" target="_blank">
                    <img
                        className="project-button-icon"
                        src="../assets/icons/global-icon.svg"
                        alt="global-icon"
                    />{" "}
                    Project Link
                </a>
                <a className="project-button disabled" href="#" target="_blank">
                    <img
                        className="project-button-icon large-icon"
                        src="../assets/icons/mobile-icon.svg"
                        alt="mobile-icon"
                    />{" "}
                    Mobile App
                </a>
                <a
                    className="project-button"
                    onClick={(e) => {
                        e.preventDefault();
                        closeModal();
                    }}
                >
                    <img
                        className="project-button-icon"
                        src="../assets/icons/cross-icon.svg"
                        alt="cross-icon"
                    />{" "}
                    Close Menu
                </a>
            </div>
        </ModalWindow>
    );
}
