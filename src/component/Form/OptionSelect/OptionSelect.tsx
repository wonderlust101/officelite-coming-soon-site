import { JSX } from "react";
import { OptionSelectProvider } from "@/component/Form/OptionSelect/useOptionSelectContext";
import OptionField from "@/component/Form/OptionSelect/OptionField";
import OptionList from "@/component/Form/OptionSelect/OptionList";
import "./optionSelect.scss";
import useOptionSelect from "@/component/Form/OptionSelect/useOptionSelect";

interface OptionSelectProps<T> {
    name: string;
    label?: string;
    value: T;
    options: T[];
    optionFormat: (option: T) => JSX.Element;
    onChange: (selected: T) => void;
}


export default function OptionSelect<T>({ name, label, value, options, optionFormat, onChange }: OptionSelectProps<T>): JSX.Element {
    const { wrapperRef, isOpen, setIsOpen, handleOptionSelect } = useOptionSelect({ onChange });

    return (
        <OptionSelectProvider
            values={ { options, value, optionFormat, isOpen, setIsOpen, handleOptionSelect, onChange, name } }
        >
            <div className="option-select" ref={ wrapperRef }>
                <label id={ name.toLowerCase() + "-option-field" }>{ label }</label>

                <OptionField/>
                <OptionList/>
            </div>
        </OptionSelectProvider>
    );
}
