import { JSX, memo } from "react";
import NumberFlow from "@number-flow/react";
import useCountdown from "@/component/Countdown/useCountdown.tsx";
import "./Countdown.scss";

type CountdownProps = {
    style: "light"|"dark";
};

type CountdownUnitProps = {
    value: number;
    unit: string;
};


export default function Countdown({ style }: CountdownProps): JSX.Element {
    const { timeLeft, targetDateString } = useCountdown();

    return (
        <div className="countdown">
            <h2 className="countdown__title">
                Coming <span className="countdown__date">{ targetDateString }</span>
            </h2>

            <div
                className={ `countdown__cards countdown__cards--${ style }` }
                aria-hidden="true"
            >
                <CountdownUnit value={ timeLeft.days } unit="days"/>
                <CountdownUnit value={ timeLeft.hours } unit="hours"/>
                <CountdownUnit value={ timeLeft.minutes } unit="min"/>
                <CountdownUnit value={ timeLeft.seconds } unit="sec"/>
            </div>
        </div>
    );
}


const CountdownUnit = memo(({ value, unit }: CountdownUnitProps): JSX.Element => {
    return (
        <div className="countdown__unit-container">
            <NumberFlow
                format={ { minimumIntegerDigits: 2 } }
                value={ value }
                className="countdown__value"
            />

            <p className="countdown__time">
                { unit }
            </p>
        </div>
    );
});
