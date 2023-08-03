"use client";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
};

const Layout = ({ children, className, title }: any) => {
    return (
        <motion.div
            className={className}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
        >
            <>
                {title && (
                    <Head>
                        <title>{title} - Bryan Koh </title>
                    </Head>
                )}
                {children}
            </>
        </motion.div>
    );
};


export default Layout
