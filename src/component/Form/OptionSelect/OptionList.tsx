import { JSX } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOptionSelectContext } from "@/component/Form/OptionSelect/useOptionSelectContext.tsx";
import checkmarkSVG from "@/assets/images/sign-up/icon-check.svg";
import { optionSelectItemVariants, optionSelectVariants } from "@/utils/motionVariants";

interface OptionListItemProps<T> {
    option: T;
}


export default function OptionList<T>(): JSX.Element {
    const { options, isOpen } = useOptionSelectContext<T>();

    return (
        <AnimatePresence mode="wait">
            { isOpen &&
                <motion.ul
                    id="option-select-list"
                    className="option-select__option-container"
                    role="listbox"
                    aria-labelledby="option-field"
                    variants={ optionSelectVariants }
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    { options.map((option, index) => (
                        <OptionListItem key={ index } option={ option }/>
                    )) }
                </motion.ul>
            }
        </AnimatePresence>
    );
}


function OptionListItem<T>({ option }: OptionListItemProps<T>): JSX.Element {
    const { handleOptionSelect, optionFormat, value } = useOptionSelectContext<T>();

    return (
        <motion.li
            className="option-select__option"
            role="option"
            aria-selected={ option === value }
            tabIndex={ 0 }
            onClick={ () => handleOptionSelect(option) }
            onKeyDown={ (e) => e.key === "Enter" ? handleOptionSelect(option) : null }
            variants={ optionSelectItemVariants }
        >
            <div aria-live="polite">
                { optionFormat(option) }
            </div>
            { option === value && <img src={ checkmarkSVG } alt="Selected"/> }
        </motion.li>
    );
}