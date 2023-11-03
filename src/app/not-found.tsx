import Layout from "@/components/layouts/article";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Oops.. The page was not found!",
};

export default function NotFound() {
    return (
        <Layout>
            <div className="min-h-screen p-8">
                <h2 className="text-4xl font-bold">Not Found</h2>
                <p>The page you&apos;re looking for was not found.</p>
                <div className="divider"></div>
                <button className="btn-secondary btn m-auto mt-5 flex">
                    <Link href="/">Return Home</Link>
                </button>
            </div>
        </Layout>
    );
}
