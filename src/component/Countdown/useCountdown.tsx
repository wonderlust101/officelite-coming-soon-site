import { useEffect, useMemo, useState } from "react";

interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/**
 * Obtains the target date from local storage. If not in local storage, sets the date 30 days from current date.
 */
const targetDate: Date = (() => {
    const savedTimeLeft: string|null = sessionStorage.getItem("targetDate");

    if (savedTimeLeft) {
        return new Date(savedTimeLeft);
    }

    const futureDate: Date = new Date();
    futureDate.setDate(futureDate.getDate() + 30);

    sessionStorage.setItem("targetDate", futureDate.toISOString());
    return futureDate;
})();


/**
 * Calculate the remaining time left until target date and returns an object.
 *
 * @param targetDate The date that the timer counts down to.
 */
function calculateTimeLeft(targetDate: Date): CountdownTime {
    const currentTime: Date = new Date();
    const difference: number = +targetDate - +currentTime;

    if (difference > 0) {
        return {
            days   : Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours  : Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}


/**
 * The custom hook for the countdown component.
 *
 * @returns timeLeft - An object that returns the days, hours, minutes, and seconds of the time left.
 * @returns targetDateString - A string the returns the target date.
 */
export default function useCountdown() {
    const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft(targetDate));

    // Hook that updates the countdown every second.
    useEffect(() => {
        const timer: NodeJS.Timeout = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Formats the target date into a human-readable string.
    const targetDateString: string = useMemo(() => {
        return new Intl.DateTimeFormat("en-GB", {
            day  : "numeric",
            month: "short",
            year : "numeric"
        }).format(targetDate);
    }, []);

    return { timeLeft, targetDateString };
}
