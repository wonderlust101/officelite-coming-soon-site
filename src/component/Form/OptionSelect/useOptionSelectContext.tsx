import { createContext, JSX, useContext } from "react";

interface OptionSelectContext<T> {
    name: string;
    options: T[];
    value: T;
    optionFormat: (option: T) => JSX.Element;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    handleOptionSelect: (option: T) => void;
    onChange: (selected: T) => void;
}

interface OptionSelectProviderProps<T> {
    children: JSX.Element;
    values: OptionSelectContext<T>;
}

// createContext for OptionSelect
const OptionSelectContext = createContext<OptionSelectContext<any>|null>(null);


/**
 * The Context Provider for Option Select.
 *
 * @param children - The Option Select Component
 * @param values - The values for the context provider.
 *
 * @returns The context provider for option select.
 */
export function OptionSelectProvider<T>({ children, values }: OptionSelectProviderProps<T>): JSX.Element {
    return (
        <OptionSelectContext.Provider value={ { ...values } }>
            { children }
        </OptionSelectContext.Provider>
    );
}


/**
 * Returns the values context of the context provider for option select with error check.
 *
 * @return The values context of the context provider for option select.
 */
export function useOptionSelectContext<T>(): OptionSelectContext<T> {
    const context = useContext(OptionSelectContext);
    if (!context) {
        throw new Error("useOptionSelectContext must be used within an OptionSelectProvider");
    }

    return context as OptionSelectContext<T>;
}
