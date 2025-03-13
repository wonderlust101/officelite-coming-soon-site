import { motion } from "framer-motion";
import Countdown from "@/component/Countdown";
import Button from "@/component/Button";
import "./Footer.scss";
import { fromLeftVariants, fromRightVariants } from "@/utils/motionVariants";

export default function Footer() {
    return (
        <footer className="footer grid-bleed">
            <motion.div
                className="footer__content"
                initial="hidden"
                whileInView="show"
                viewport={ { amount: "all", once: true } }
            >
                <motion.div variants={ fromLeftVariants }>
                    <Countdown style="dark"/>
                </motion.div>

                <motion.div variants={ fromRightVariants }>
                    <Button
                        color="blue"
                        size="medium"
                        to="/signup"
                        ariaLabel="Signup for OfficeLite"
                    >
                        Get Started
                    </Button>
                </motion.div>
            </motion.div>
        </footer>
    );
}
