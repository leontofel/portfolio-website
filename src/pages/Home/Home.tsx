import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomeDisplay from "../../components/HomeDisplay/HomeDisplay";
import { useScroll } from "framer-motion";


export default function Home() {

    return (
        <>
            <motion.div
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, onScroll: HomeDisplay }}
                transition={{ duration: 3 }}
                
            >

                <Header />
                <HomeDisplay />
                <Footer />
            </motion.div>
        </>
    );
}