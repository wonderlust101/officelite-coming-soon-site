import { motion } from "motion/react";
import { PricingPlan } from "@/types/pricingPlan";
import PricingCard from "@/component/Pricing/PricingCard.tsx";
import pricing from "@/data/pricing.json";
import "./Pricing.scss";
import { staggerChildrenVariants } from "@/utils/motionVariants";

export default function Pricing() {
    return (
        <motion.section
            className="pricing"
            variants={ staggerChildrenVariants }
            initial="hidden"
            whileInView="show"
            viewport={ { margin: "-20%", once: true } }
            aria-labelledby="pricing-title"
        >
            <h2 id="pricing-title" className="sr-only" aria-hidden="true">
                Our Pricing Plan
            </h2>

            { pricing.map((item: PricingPlan) =>
                <PricingCard key={ item.tier } cardTheme={ item.cardTheme } item={ item }/>
            ) }
        </motion.section>
    );
}