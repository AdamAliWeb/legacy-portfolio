import MainPlanet from "../components/MainPlanet";
import Comet from "../components/Comet";
import "./Welcome.scss";

export default function Welcome({ isDesktop }) {
    return (
        <article className="welcome">
            <section className="welcome-container">
                {isDesktop && <Comet />}

                <h2 className="welcome-title">
                    Welcome to my digital space, where creativity meets coding.
                </h2>
                <MainPlanet />
            </section>
        </article>
    );
}
