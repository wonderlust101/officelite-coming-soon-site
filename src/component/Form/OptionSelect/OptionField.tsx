import { JSX } from "react";
import { useOptionSelectContext } from "@/component/Form/OptionSelect/useOptionSelectContext.tsx";
import dropdownArrowSVG from "@/assets/images/sign-up/icon-arrow-down.svg";
import "./optionSelect.scss";


export default function OptionField<T>(): JSX.Element {
    const { name, isOpen, setIsOpen, optionFormat, value } = useOptionSelectContext<T>();

    return (
        <div
            className="option-select__field"
            role="combobox"
            aria-expanded={ isOpen }
            aria-haspopup="true"
            aria-controls={ name.toLowerCase() + "-option-field" }
            aria-label={ name }
            aria-labelledby={ name.toLowerCase() + "-option-field" }
            tabIndex={ 0 }
            onClick={ () => setIsOpen(!isOpen) }
            onKeyDown={ (e) => e.key === "Enter" || e.key === " " ? setIsOpen(!isOpen) : null }
        >
            { optionFormat(value) }
            <img
                className={ `option-select__dropdown-icon${ isOpen ? "--open" : "" }` }
                src={ dropdownArrowSVG }
                role="presentation"
            />
        </div>
    );
}
