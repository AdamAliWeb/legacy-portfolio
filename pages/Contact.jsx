import { Link } from "react-router-dom";
import "./Contact.scss";

import GithubPlanetSVG from "../components/planets/GithubPlanetSVG";
import EmailPlanetSVG from "../components/planets/EmailPlanetSVG";
import CVPlanetSVG from "../components/planets/CVPlanetSVG";
import TwitterPlanetSVG from "../components/planets/TwitterPlanetSVG";
import InstagramPlanetSVG from "../components/planets/InstagramPlanetSVG copy";
import LinkedinPlanetSVG from "../components/planets/LinkedinPlanetSVG";
import { useEffect } from "react";

export default function Contact({ wasAnimated, activateProperty }) {
    useEffect(() => {
        activateProperty("socialPlanetsScaling");
    }, []);

    return (
        <article className="contact-container">
            <nav className="social-nav">
                <div>
                    <a
                        className="social-link"
                        target="_blank"
                        href="https://github.com/AdamAliWeb"
                    >
                        <GithubPlanetSVG
                            socialPlanetsScaling={
                                wasAnimated.socialPlanetsScaling
                            }
                            scaleDelay={0.5}
                        />
                    </a>
                </div>
                <div>
                    <Link className="social-link" to="/email-form">
                        <EmailPlanetSVG
                            socialPlanetsScaling={
                                wasAnimated.socialPlanetsScaling
                            }
                            scaleDelay={0.9}
                        />
                    </Link>
                </div>
                <div>
                    <a
                        className="social-link"
                        target="_blank"
                        href="../assets/adam-ali-cv.pdf"
                    >
                        <CVPlanetSVG
                            socialPlanetsScaling={
                                wasAnimated.socialPlanetsScaling
                            }
                            scaleDelay={1.3}
                        />
                    </a>
                </div>
                <div>
                    <a
                        className="social-link"
                        target="_blank"
                        href="https://www.linkedin.com/in/adam-ali-413660261/"
                    >
                        <LinkedinPlanetSVG
                            socialPlanetsScaling={
                                wasAnimated.socialPlanetsScaling
                            }
                            scaleDelay={1.7}
                        />
                    </a>
                </div>
                <div>
                    <a
                        className="social-link"
                        target="_blank"
                        href="https://www.instagram.com/adamaliweb/"
                    >
                        <InstagramPlanetSVG
                            socialPlanetsScaling={
                                wasAnimated.socialPlanetsScaling
                            }
                            scaleDelay={2.1}
                        />
                    </a>
                </div>
                <div>
                    <a
                        className="social-link"
                        target="_blank"
                        href="https://twitter.com/AdamAliWeb"
                    >
                        <TwitterPlanetSVG
                            socialPlanetsScaling={
                                wasAnimated.socialPlanetsScaling
                            }
                            scaleDelay={2.5}
                        />
                    </a>
                </div>
            </nav>
        </article>
    );
}
