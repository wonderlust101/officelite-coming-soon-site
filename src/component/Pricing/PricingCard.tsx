import { motion } from "motion/react";
import { PricingPlan } from "@/types/pricingPlan";
import { useNavigate } from "react-router-dom";
import Button from "@/component/Button";
import "./PricingCard.scss";
import { cardVariants } from "@/utils/motionVariants";

interface PricingPlanComponent {
    item: PricingPlan;
    cardTheme: string;
}

export default function PricingCard({ item, cardTheme }: PricingPlanComponent) {
    const navigate = useNavigate();

    function handleTryButton() {
        navigate("/signup?tier=" + item.tier);
    }

    return (
        <motion.section
            className={ `pricing-card pricing-card--${ cardTheme }` }
            variants={ cardVariants }
        >
            <div className="pricing-card__top-half">
                <h2 className="pricing-card__tier">
                    { item.tier } <span className="sr-only">Tier</span>
                </h2>

                <div className="pricing-card__membership">
                    <span className="sr-only">{ item.price === 0 ? "For Free" : `For $${ item.price }` }</span>

                    <p className="pricing-card__cost" aria-hidden="true">
                        { item.price === 0 ? ("Free") : (`$${ item.price }`) }
                    </p>
                    <p>
                        { item.price === 0 ?
                            "Up to 5 users for free"
                            :
                            "Per user, billed monthly"
                        }
                    </p>
                </div>
            </div>

            <div className="pricing-card__bottom-half">
                <p className="sr-only">Some features in this tier include:</p>
                <ul className="pricing-card__features">
                    <li className="pricing-card__feature">{ item.features[0] }</li>
                    <li className="pricing-card__feature">{ item.storageSize } GB storage</li>
                    <li className="pricing-card__feature">{ item.features[1] }</li>
                </ul>

            </div>

            <Button
                color={ cardTheme === "light" ? "light-blue" : "white" }
                size="medium"
                onClick={ () => handleTryButton() }
            >
                Try for Free
            </Button>
        </motion.section>
    );
}
