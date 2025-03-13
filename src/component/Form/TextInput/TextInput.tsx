import { InputHTMLAttributes } from "react";
import crossSVG from "@/assets/images/sign-up/icon-cross.svg";
import "./TextInput.scss";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: boolean;
}

export default function TextInput({ name, label, error, required, ...props }: TextInputProps) {
    return (
        <div className="text-input">
            { label && <label className="text-input__label" htmlFor={ name }/> }

            <input
                className={ `text-input__input text-input__input--${ error ? "error" : "" }` }
                type="text"
                id={ name }
                aria-describedby={ name }
                aria-required={ required ? "true" : "false" }
                { ...props }
            />

            { error && <img className="text-input__error-icon" src={ crossSVG } alt="Cross" role="presentation"/> }
        </div>
    );
}