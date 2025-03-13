import { motion } from "motion/react";
import Header from "@/component/layout/Header";
import SignUpHero from "@/features/authentication/components/SignUpHero";
import SignUpForm from "@/features/authentication/components/SignUpForm";
import "./SignUp.scss";
import { itemVariants, pageVariants, staggerChildrenVariants } from "@/utils/motionVariants";

export default function SignUp() {
    return (
        <motion.div variants={ pageVariants } initial="hidden" animate="show" exit="exit">
            <motion.div className="signup grid-bleed">
                <Header/>

                <motion.main id="main-content" className="signup__content" variants={ staggerChildrenVariants } initial="hidden" animate="show">
                    <motion.div variants={ itemVariants }>
                        <SignUpHero/>
                    </motion.div>

                    <motion.div variants={ itemVariants }>
                        <SignUpForm/>
                    </motion.div>
                </motion.main>

                <footer className="signup__footer" role="presentation"/>
            </motion.div>
        </motion.div>
    );
}
