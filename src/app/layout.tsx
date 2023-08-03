import "./globals.css";
import { Inter } from "next/font/google";
import config from "@/lib/config";
import { Metadata } from "next";
import Layout from "@/components/layouts/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: config.siteName,
    description: config.siteDescription,
};

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode;
    }
) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout>
                        {children}
                </Layout>
            </body>
        </html>
    );
}
