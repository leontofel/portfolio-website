import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomeDisplay from "../../components/HomeDisplay/HomeDisplay";



export default function Home() {

    return (
        <>
            <motion.div
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
            >

                <Header />
                <HomeDisplay />
                <Footer />
            </motion.div>
        </>
    );
}