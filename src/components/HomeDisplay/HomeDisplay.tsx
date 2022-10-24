import CardToPortfolio from "./components/CardToPortfolio/CardToPortfolio";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import ContactLink from "./components/ContactLink/ContactLink";
import DifferentialsCard from "./components/DifferentialsCard/DifferentialsCard";
import TecnologiesCard from "./components/TecnologiesCard/TecnologiesCard";
import { motion } from "framer-motion";


export default function HomeDisplay() {

    const AnimateCarouselComponent = () => (
        <motion.div
            
        >
            <CarouselComponent />
        </motion.div>
    );
    const AnimateCardToPortfolio = () => (
        <motion.div
            
        >
            <CardToPortfolio />
        </motion.div>
    );
    const AnimateTecnologiesCard = () => (
        <motion.div

        >
            <TecnologiesCard />
        </motion.div>
    );
    const AnimateContactLink = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: "-100%" }}
            animate={{ scale: 1 }}
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

            <DifferentialsCard />
            <AnimateTecnologiesCard />
            <AnimateContactLink />
        </>
    );
}
