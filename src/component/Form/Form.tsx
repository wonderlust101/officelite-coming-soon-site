import { FormEvent, ReactNode } from "react";
import "./Form.scss";

interface FormProps {
    children: ReactNode;
    legend?: string;
    showLegend?: boolean;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, legend, showLegend, onSubmit }: FormProps) {
    return (
        <form className="form" onSubmit={ onSubmit }>
            <fieldset className="form__field-set">
                { legend &&
                    <legend className={ showLegend ? "" : "sr-only" }>{ legend }</legend>
                }

                { children }
            </fieldset>
        </form>
    );
}