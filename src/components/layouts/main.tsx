import Head from "next/head";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Main = ({ children }: any) => {
    return (
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
    );
};

export default Main;
