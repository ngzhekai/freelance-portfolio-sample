"use client";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
};

const Section = ({ children, delay = 0, className }: any) => {
    return (
        <motion.div
            className={className}
            initial="hidden"
            animate="enter"
            variants={variants}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
};

export default Section;
