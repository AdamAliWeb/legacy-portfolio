import "./ExperienceScreen.scss";

export default function ExperienceScreen({
    title,
    color,
    screenName,
    screenPower,
    turnOn,
    turnOff,
    children,
}) {
    return (
        <section className="experience-screen">
            <div className="screen-toggler">
                <button
                    className="toggler-btn off"
                    onClick={() => turnOff(screenName)}
                ></button>
                <button
                    className="toggler-btn on"
                    onClick={() => turnOn(screenName)}
                ></button>
            </div>

            <div
                className={`screen-container ${
                    !screenPower[screenName] ? "screen-off" : ""
                }`}
            >
                <div>
                    <h2 className="screen-title" style={{ color }}>
                        {title}
                    </h2>
                    <div className="screen-text">{children}</div>
                </div>
            </div>
        </section>
    );
}
