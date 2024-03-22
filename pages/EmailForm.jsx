import useForm from "../hooks/useForm";

import "./EmailForm.scss";

export default function EmailForm({ isDesktop }) {
    const {
        form,
        errors,
        response,
        failedResponse,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    return (
        <article className="email-form">
            <div className="form-header">
                {isDesktop && (
                    <img src="../assets/email-logo.svg" alt="Email Logo" />
                )}

                <h2 className="form-title">Contact me by email</h2>
            </div>
            <form className="card form-container" onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.name}
                />
                {errors.name ? (
                    <p className="error-message">{errors.name}</p>
                ) : null}

                <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.email}
                />
                {errors.email ? (
                    <p className="error-message">{errors.email}</p>
                ) : null}

                <input
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.subject}
                />
                {errors.subject ? (
                    <p className="error-message">{errors.subject}</p>
                ) : null}

                <textarea
                    className="form-input"
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.message}
                ></textarea>
                {errors.message ? (
                    <p className="error-message">{errors.message}</p>
                ) : null}

                {response && (
                    <p className={`request request--success`}>
                        Your data has been successfully submitted.
                    </p>
                )}

                {failedResponse && (
                    <p className={`request request--error`}>
                        An error occurred. Please try again. If the issue
                        persists, reach out to me through my other social media
                        channels and inform me about the problem.
                    </p>
                )}

                <input type="submit" className="submit-btn" value="Send" />
            </form>
        </article>
    );
}
