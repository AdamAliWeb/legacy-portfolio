import ProjectCard from "../components/ProjectCard";
import Rocket from "../components/Rocket";
import useModal from "../hooks/useModal";
import { mainColors } from "../helpers/colors";

import "./Projects.scss";
import { useEffect } from "react";

export default function Projects() {
    const [modalActive1, openModal1, closeModal1] = useModal(false);
    const [modalActive2, openModal2, closeModal2] = useModal(false);

    useEffect(() => {
        if (modalActive1 || modalActive2) {
            document.querySelector("body").classList.add("modal-open");
        } else {
            document.querySelector("body").classList.remove("modal-open");
        }
    }, [modalActive1, modalActive2]);

    return (
        <article className="rockets-container">
            <h1 className="rockets-title">
                Click a rocket window to see a project.
            </h1>
            <section className="rockets">
                <Rocket headColor={mainColors.blue} openModal={openModal1} />
                <Rocket headColor={mainColors.yellow} openModal={openModal2} />
            </section>

            {modalActive1 && (
                <ProjectCard
                    closeModal={closeModal1}
                    title={"WebDevZone"}
                    technologyStack={[
                        "React",
                        "React Router",
                        "Vite",
                        "Bootstrap",
                        "SASS",
                    ]}
                >
                    This site will assist you through various online resources,
                    entirely free, in becoming a web developer. Here, you will
                    discover tutorials, guides, tools, tips, and a variety of
                    supplementary content to guide and support you in your goal
                    of learning web programming. Primarily, the resources are
                    not mine and are not paid; they are in the public domain.
                </ProjectCard>
            )}

            {modalActive2 && (
                <ProjectCard
                    closeModal={closeModal2}
                    title={"Youtube Info Gather"}
                    technologyStack={[
                        "React",
                        "React Router",
                        "Vite",
                        "Tailwind",
                        "SASS",
                    ]}
                >
                    This app allows you to gather information from YouTube
                    content. Currently, it can collect, save, and compare data
                    from videos in a playlist. This is helpful because sometimes
                    YouTube videos are deleted without notice. It can be tedious
                    to find and recover them, but with this app, you can save
                    playlist data and easily identify missing videos. More
                    features will be added in the future.
                </ProjectCard>
            )}
        </article>
    );
}
