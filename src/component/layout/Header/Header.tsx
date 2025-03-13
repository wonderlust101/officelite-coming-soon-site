import { Link } from "react-router-dom";
import { motion } from "motion/react";
import logo from "@/assets/images/shared/logo.svg";
import "./header.scss";
import { headerVariants } from "@/utils/motionVariants";

export default function Header() {

    return (
        <motion.header
            className="header"
            variants={ headerVariants }
            initial="hidden"
            animate="show"
        >
            <a className="sr-only" href="#main-content">Skip to main content</a>
            <nav id="main-nav">
                <Link to="/">
                    <img className="header__logo" src={ logo } alt="Go to homepage"/>
                </Link>
            </nav>
        </motion.header>
    );
}