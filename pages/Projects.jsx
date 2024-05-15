import ProjectCard from "../components/ProjectCard";
import Rocket from "../components/Rocket";
import useModal from "../hooks/useModal";
import { mainColors } from "../helpers/colors";

import { motion } from "framer-motion";

import "./Projects.scss";
import { useEffect } from "react";
import { typewritterAnimation } from "../helpers/onceAnimations";

export default function Projects({ wasAnimated, activateProperty }) {
    const [modalActive1, openModal1, closeModal1] = useModal(false);
    const [modalActive2, openModal2, closeModal2] = useModal(false);

    useEffect(() => {
        activateProperty("projectsTypewritter", "rocketsFlying");

        // if (!wasAnimated.rocketsFlying) {
        //     window.scrollTo(0, document.body.scrollHeight);
        // }
    }, []);

    useEffect(() => {
        if (modalActive1 || modalActive2) {
            document.querySelector("body").classList.add("modal-overflow-lock");
        } else {
            document
                .querySelector("body")
                .classList.remove("modal-overflow-lock");
        }
    }, [modalActive1, modalActive2]);

    return (
        <article className="rockets-container">
            <h1 className="section-title">
                {"Click on a rocket window to view a project"
                    .split(" ")
                    .map((el, index) => (
                        <motion.span
                            {...(!wasAnimated.projectsTypewritter
                                ? typewritterAnimation(index, 2)
                                : {})}
                            key={index}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
            </h1>
            <section className="rockets">
                <Rocket
                    rocketsFlying={wasAnimated.rocketsFlying}
                    headColor={mainColors.blue}
                    openModal={openModal1}
                    bounceDuration={3}
                />
                <Rocket
                    rocketsFlying={wasAnimated.rocketsFlying}
                    headColor={mainColors.yellow}
                    openModal={openModal2}
                    bounceDuration={4}
                />
            </section>

            <ProjectCard
                modalState={modalActive1}
                closeModal={closeModal1}
                title={"WebDevZone"}
                logoColor={"#2338fc"}
                technologyStack={[
                    "react",
                    "react-router",
                    "vite",
                    "bootstrap",
                    "sass",
                ]}
                buttonStates={[true, true, false]}
                repositoryLink={"https://github.com/AdamAliWeb/web-dev-zone"}
                projectLink={"https://webdevzone.adamaliweb.com"}
                mobileLink={"#"}
            >
                This website is designed to help you become a web developer by
                providing access to a wide range of online resources completely
                free of charge. You'll find tutorials, guides, tools, tips, and
                additional content to support and guide you in your journey of
                learning web programming. It's important to note that the
                resources available here are not owned or paid for by us; they
                are sourced from the public domain.
            </ProjectCard>

            <ProjectCard
                modalState={modalActive2}
                closeModal={closeModal2}
                title={"Youtube Info Gather"}
                logoColor={"#eff247"}
                buttonStates={[true, true, false]}
                technologyStack={["react", "react-router", "vite", "tailwind"]}
                repositoryLink={
                    "https://github.com/AdamAliWeb/youtube-info-gather"
                }
                projectLink={"https://youtubeinfogather.adamaliweb.com"}
                mobileLink={"#"}
            >
                This application enables you to retrieve information from
                YouTube content. Presently, it can gather, save, and compare
                data from videos within a playlist. This feature is valuable
                because YouTube videos are occasionally removed without
                notification, making it challenging to locate and restore them.
                However, with this app, you can preserve playlist data and
                effortlessly identify any missing videos. Expect additional
                features to be introduced in future updates.
            </ProjectCard>
        </article>
    );
}
