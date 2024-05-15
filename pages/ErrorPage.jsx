import "./ErrorPage.scss";

const name = "d";

export default function ErrorPage() {
    return (
        <article className="error-page">
            <h1 className="error-title text-shadow">
                Error 404: This page does not exist.
            </h1>
        </article>
    );
}
