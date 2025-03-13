import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { PricingPlan } from "@/types/pricingPlan.ts";
import { emailValidation, emptyValidation, phoneNumberValidation } from "@/utils/validation.tsx";
import pricing from "@/data/pricing.json";

interface SignUpFields {
    name: string;
    email: string;
    plan: PricingPlan;
    phoneNumber: string;
    company: string;
}

interface ValidationErrors {
    [key: string]: {error: boolean};
}

/**
 * Custom hook to manage authentication-related form handling.
 *
 * @returns fields - The current state of form fields.
 * @returns setFields - Setter function for updating fields.
 * @returns errors - Object storing validation errors.
 * @returns handleSubmit - Function to handle form submission.
 * @returns formatPhoneNumber - Function to format phone numbers.
 */
export default function UseAuthentication() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tier = queryParams.get("tier");

    const [errors, setErrors] = useState<ValidationErrors>({});
    const [fields, setFields] = useState<SignUpFields>({
        name       : "",
        email      : "",
        plan       : pricing.find((plan => plan.tier === tier)) || pricing[0],
        phoneNumber: "",
        company    : ""
    });

    //Formats a phone number into a format that is easy to look read.
    function formatPhoneNumber(value: string) {
        const cleaned = value.replace(/\D/g, "");

        if (cleaned.length <= 2)
            return cleaned;
        else if (cleaned.length <= 6)
            return `(${ cleaned.slice(0, 3) }) ${ cleaned.slice(3) }`;
        else
            return `(${ cleaned.slice(0, 3) }) ${ cleaned.slice(3, 6) }-${ cleaned.slice(6, 10) }`;
    }

    // Handles form submission by validating input fields and logging the results.
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const errors = validateSignUpForm(fields);
        setErrors(errors);

        console.log("Errors:", errors);

        if (Object.keys(errors).length === 0) {
            // Replace log with API call to push information to database
            console.log(fields);

            setFields({
                name       : "",
                email      : "",
                plan       : pricing[0],
                phoneNumber: "",
                company    : ""
            });
        }
    }

    // Validates the sign-up form fields and returns an error object.
    function validateSignUpForm(fields: SignUpFields) {
        const errors = {};

        emptyValidation("name", fields.name, errors);
        emailValidation(fields.email, errors);
        phoneNumberValidation(fields.phoneNumber, errors);
        emptyValidation("company", fields.company, errors);

        return errors;
    }

    return {
        fields,
        setFields,
        errors,
        handleSubmit,
        formatPhoneNumber
    };
}