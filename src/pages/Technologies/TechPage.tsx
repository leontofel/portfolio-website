import { motion } from "framer-motion";

export default function TechPage() {


    return (
        <>
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
            >
                <h1>hi</h1>

            </motion.div>
        </>
    );
}