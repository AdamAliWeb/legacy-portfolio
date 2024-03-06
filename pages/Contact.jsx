import { Link } from "react-router-dom";
import "./Contact.scss";

import GithubPlanetSVG from "../components/planets/GithubPlanetSVG";
import EmailPlanetSVG from "../components/planets/EmailPlanetSVG";
import CVPlanetSVG from "../components/planets/CVPlanetSVG";
import TwitterPlanetSVG from "../components/planets/TwitterPlanetSVG";
import InstagramPlanetSVG from "../components/planets/InstagramPlanetSVG copy";
import LinkedinPlanetSVG from "../components/planets/LinkedinPlanetSVG";

let regularRotateDuration = 100;
let regularScaleDuration = 0.5;

const socialLinks = [
    {
        name: "Github",
        component: (
            <GithubPlanetSVG
                rotateDuration={regularRotateDuration}
                scaleDuration={regularScaleDuration}
                scaleDelay={0}
            />
        ),
        url: "https://github.com/AdamAliWeb",
    },
    {
        name: "Email",
        component: (
            <EmailPlanetSVG
                rotateDuration={regularRotateDuration}
                scaleDuration={regularScaleDuration}
                scaleDelay={0.1}
            />
        ),
        url: "/email-form",
    },
    {
        name: "CV",
        component: (
            <CVPlanetSVG
                rotateDuration={regularRotateDuration}
                scaleDuration={regularScaleDuration}
                scaleDelay={0.2}
            />
        ),
        url: "../assets/adam-ali-cv.pdf",
    },
    {
        name: "Linkedin",
        component: (
            <LinkedinPlanetSVG
                rotateDuration={regularRotateDuration}
                scaleDuration={regularScaleDuration}
                scaleDelay={0.3}
            />
        ),
        url: "https://www.linkedin.com/in/adam-ali-413660261/",
    },
    {
        name: "Twitter",
        component: (
            <TwitterPlanetSVG
                rotateDuration={regularRotateDuration}
                scaleDuration={regularScaleDuration}
                scaleDelay={0.4}
            />
        ),
        url: "https://twitter.com/AdamAliWeb",
    },
    {
        name: "Instagram",
        component: (
            <InstagramPlanetSVG
                rotateDuration={regularRotateDuration}
                scaleDuration={regularScaleDuration}
                scaleDelay={0.5}
            />
        ),
        url: "https://www.instagram.com/adamaliweb/",
    },
];

export default function Contact() {
    return (
        <article className="contact-container">
            <nav className="social-nav">
                {socialLinks.map((el, index) =>
                    el.name === "Email" ? (
                        <div key={index}>
                            <Link className="social-link" to={el.url}>
                                {el.component}
                            </Link>
                        </div>
                    ) : (
                        <div key={index}>
                            <a
                                className="social-link"
                                target="_blank"
                                href={el.url}
                            >
                                {el.component}
                            </a>
                        </div>
                    )
                )}
            </nav>
        </article>
    );
}
