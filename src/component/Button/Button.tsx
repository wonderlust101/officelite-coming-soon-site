import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    color: string;
    size: string;
    shadow?: boolean;
    to?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    ariaLabel?: string;
}

/**
 * The Button component that can be a Link when given a "to" parameter.
 *
 * @param children - The contents within the button.
 * @param color - The color string of the button.
 * @param size - The size string of the button.
 * @param shadow - Boolean whether to show the shadow.
 * @param to - The location of the Link. Converts button to Link.
 * @param onClick - Invokes this function on click.
 * @param ariaLabel - The aria label string for accessibility.
 * @param props - The props for a button.
 *
 * @returns Element - - Returns the button component element.
 */
export default function Button({ children, color, size, shadow, to, onClick, ariaLabel, ...props }: ButtonProps) {
    const classNames = ["button", `button--${ color }`, `button--${ size }`];
    if (shadow) classNames.push(`button--shadow`);

    const classes = classNames.join(" ");

    if (to)
        return (
            <Link
                to={ to }
                className={ classes }
                aria-label={ ariaLabel }
            >
                { children }
            </Link>
        );

    return (
        <button
            className={ classes }
            onClick={ onClick }
            aria-label={ ariaLabel }
            { ...props }
        >
            { children }
        </button>
    );
}
