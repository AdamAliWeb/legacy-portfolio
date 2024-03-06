import { useState } from "react";
import emailjs from "@emailjs/browser";
import { formValidation } from "../helpers/formValidation";

// EmailJS Data
let serviceID = "service_pp3feod",
    templateID = "template_y2taavi",
    publicKey = "S5qGKGUmQeEZNPZE4";

export default function useForm(initialForm) {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState(["", false]);

    // The Functions to Handle Changes to the Inputs
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(formValidation(form));
    };

    // Send the Contact Data
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(formValidation(form));
        e.target.querySelector("input[type='submit']").disabled = true;

        if (Object.keys(errors).length !== 0) {
            setResponse([
                "The entered data is incorrect. Please try again.",
                false,
            ]);
            setTimeout(() => {
                setResponse(["", false]);
            }, 5000);
            return;
        }

        emailjs.sendForm(serviceID, templateID, e.target, publicKey).then(
            () => {
                setResponse([
                    "Your message was sent correctly, I will try to respond you as soon as possible",
                    true,
                ]);
                setForm(initialForm);
                e.target.querySelector("input[type='submit']").disabled = false;
                setTimeout(() => {
                    setResponse(["", true]);
                }, 10000);
            },
            () => {
                setResponse([
                    "Something went wrong, try again or try to contact me by my social links below",
                    false,
                ]);
                setForm(initialForm);
                e.target.querySelector("input[type='submit']").disabled = false;
                setTimeout(() => {
                    setResponse(["", false]);
                }, 10000);
            }
        );
    };

    return {
        form,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}
