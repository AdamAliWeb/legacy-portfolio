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
    const [response, setResponse] = useState(false);
    const [failedResponse, setFailedResponse] = useState(false);

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

        if (Object.keys(errors).length !== 0) {
            setResponse(false);
            return;
        } else {
            e.target.querySelector("input[type='submit']").disabled = true;
        }

        emailjs.sendForm(serviceID, templateID, e.target, publicKey).then(
            () => {
                setResponse(true);
                setForm(initialForm);
                e.target.querySelector("input[type='submit']").disabled = false;
                setTimeout(() => {
                    setResponse(false);
                }, 5000);
            },
            () => {
                setResponse(false);
                setFailedResponse(true);
                setForm(initialForm);
                e.target.querySelector("input[type='submit']").disabled = false;
                setTimeout(() => {
                    setFailedResponse(false);
                }, 5000);
            }
        );
    };

    return {
        form,
        errors,
        response,
        failedResponse,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}
