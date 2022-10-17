import CardToPortfolio from "./components/CardToPortfolio/CardToPortfolio";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import ContactLink from "./components/ContactLink/ContactLink";
import DifferentialsCard from "./components/DifferentialsCard/DifferentialsCard";
import TecnologiesCard from "./components/TecnologiesCard/TecnologiesCard";
import { motion } from "framer-motion";


export default function HomeDisplay() {

    const AnimateCarouselComponent = () => (
        <motion.div 
        initial={{ opacity: 0, scale: 0.5, x: "100%" }}
    animate={{ opacity: 1, scale: 1, x:0 }}
    transition={{ duration: 0.5 }}
        >
            <CarouselComponent />
        </motion.div>
        );
    const AnimateCardToPortfolio = () => (
        <motion.div 
        initial={{ opacity: 0, scale: 0.5, x: "-100%" }}
    animate={{ opacity: 1, scale: 1, x:0 }}
    transition={{ duration: 0.5 }}
        >
            <CardToPortfolio />
        </motion.div>
    );
    const AnimateTecnologiesCard = () => (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
        whileTap={{ scale: 0.9 }}
        >
            <TecnologiesCard />
        </motion.div>
    );
    const AnimateContactLink = () => (
        <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: "-100%" }}
        animate={{ scale: 1}}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        >
            <ContactLink />
        </motion.div>
    );

    return (
        <>
            <AnimateCarouselComponent />
            <AnimateCardToPortfolio />

            <AnimateTecnologiesCard />
            <DifferentialsCard />
            <AnimateContactLink />
        </>
    );
}
