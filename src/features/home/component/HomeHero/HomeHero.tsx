import { motion } from "motion/react";
import Button from "@/component/Button";
import homeHeroImage from "@/assets/images/home/illustration-charts.svg";
import "./HomeHero.scss";
import { itemVariants, staggerChildrenVariants } from "@/utils/motionVariants";

export default function HomeHero() {
    return (
        <motion.section
            className="home-hero"
            variants={ staggerChildrenVariants }
            initial="hidden"
            animate="show"
            aria-labelledby="home-hero-section"
        >
            <motion.img
                className="home-hero__image"
                variants={ itemVariants }
                src={ homeHeroImage }
                role="presentation"
            />

            <motion.div className="home-hero__body" variants={ itemVariants }>
                <h1 className="home-hero__header">
                    A simple solution to complex tasks is coming soon
                </h1>

                <h2 id="home-hero-section" className="sr-only" aria-hidden="true">
                    Home Hero Section
                </h2>

                <p className="home-hero__body-text">
                    Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new
                    collaboration platform built with an intuitive interface to improve productivity.
                </p>

                <Button
                    color="blue"
                    size="medium"
                    shadow={ true }
                    to="/signup"
                    ariaLabel="Signup for OfficeLite"
                >
                    Get Started
                </Button>
            </motion.div>
        </motion.section>
    );
}