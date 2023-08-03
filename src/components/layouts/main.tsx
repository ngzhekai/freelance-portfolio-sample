"use client";

import Head from "next/head";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { AnimatePresence } from "framer-motion";

const Main = ({ children }: any) => {
    return (
        <AnimatePresence mode="wait" initial={true}>
            <div className="main">
                <Head>
                    <title>Bryan Koh - Homepage</title>
                </Head>

                <div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-fixed">
                    <Navbar />

                    <div className="m-auto max-w-screen-md">
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default Main;
