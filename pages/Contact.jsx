import { Link } from "react-router-dom";
import "./Contact.scss";

import GithubPlanetSVG from "../components/planets/GithubPlanetSVG";
import EmailPlanetSVG from "../components/planets/EmailPlanetSVG";
import CVPlanetSVG from "../components/planets/CVPlanetSVG";
import TwitterPlanetSVG from "../components/planets/TwitterPlanetSVG";
import InstagramPlanetSVG from "../components/planets/InstagramPlanetSVG copy";
import LinkedinPlanetSVG from "../components/planets/LinkedinPlanetSVG";

const socialLinks = [
    {
        name: "Github",
        component: <GithubPlanetSVG />,
        url: "https://github.com/AdamAliWeb",
    },
    {
        name: "Email",
        component: <EmailPlanetSVG />,
        url: "/email-form",
    },
    {
        name: "CV",
        component: <CVPlanetSVG />,
        url: "../assets/adam-ali-cv.pdf",
    },
    {
        name: "Twitter",
        component: <TwitterPlanetSVG />,
        url: "https://twitter.com/AdamAliWeb",
    },
    {
        name: "Instagram",
        component: <InstagramPlanetSVG />,
        url: "https://www.instagram.com/adamaliweb/",
    },
    {
        name: "Linkedin",
        component: <LinkedinPlanetSVG />,
        url: "https://www.linkedin.com/in/adam-ali-413660261/",
    },
];

export default function Contact() {
    return (
        <article className="contact-container">
            <nav className="social-nav">
                {socialLinks.map((el, index) =>
                    el.name === "Email" ? (
                        <Link className="social-link" key={index} to={el.url}>
                            {el.component}
                        </Link>
                    ) : (
                        <a
                            className="social-link"
                            key={index}
                            target="_blank"
                            href={el.url}
                        >
                            {el.component}
                        </a>
                    )
                )}
            </nav>
        </article>
    );
}
