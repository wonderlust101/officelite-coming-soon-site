import { Ref, useEffect, useRef, useState } from "react";

interface UseOptionSelectProps<T> {
    onChange: (selected: T) => void;
}

interface UseOptionSelectState<T> {
    wrapperRef: Ref<HTMLDivElement|null>;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    handleOptionSelect: (option: T) => void;
}

/**
 * The custom hook for the option select component.
 *
 * @param onChange - The callback function that obtains the option on select of option.
 *
 * @returns wrapperRefs - The ref that connects to the input so that it can close on click elsewhere.
 * @returns isOpen - A boolean that determines whether the dropdown is open,
 * @returns setIsOpen - A callback function that sets isOpen value.
 * @returns handleOptionSelect - A callback function that determines what happens what an option is selected.
 */
export default function useOptionSelect<T>({ onChange }: UseOptionSelectProps<T>): UseOptionSelectState<T> {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement|null>(null);

    // Handles when an option is selected in the option list.
    const handleOptionSelect = (option: T) => {
        onChange(option);
        setIsOpen(false);
    };

    // When the clicking out the dropdown, close the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node))
                setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handles user control with the keyboard for accessibility
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                setIsOpen(true);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return {
        wrapperRef,
        isOpen,
        setIsOpen,
        handleOptionSelect
    };
}