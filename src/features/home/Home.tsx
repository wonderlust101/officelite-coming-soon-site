import { motion } from "motion/react";
import Header from "@/component/layout/Header";
import Pricing from "@/component/Pricing";
import HomeHero from "@/features/home/component/HomeHero";
import Footer from "@/features/home/component/Footer";
import "./home.scss";
import { pageVariants } from "@/utils/motionVariants";

export default function Home() {
    return (
        <motion.div
            variants={ pageVariants }
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className="home grid-bleed">
                <Header/>

                <main className="home__content" id="main-content">
                    <HomeHero/>
                    <Pricing/>
                </main>

                <Footer/>
            </div>
        </motion.div>
    );
}
