import Countdown from "@/component/Countdown";

import "./SignUpHero.scss";


export default function SignUpHero() {
    return (
        <section
            className="signup-hero"
            aria-labelledby="signup-hero-section"
        >
            <div className="signup-hero__text">
                <h1 className="signup-hero__header">Work smarter. Save time.</h1>

                <h2 id="signup-hero-section" className="sr-only" aria-hidden="true">
                    Home Hero Section
                </h2>

                <p className="signup-hero__body-text">
                    Easily manage your projects. Get on the list and receive in-app perks available only to early
                    subscribers. We are moving into final development and getting ready for official launch soon.
                </p>
            </div>

            <Countdown style="light"/>
        </section>
    );
}