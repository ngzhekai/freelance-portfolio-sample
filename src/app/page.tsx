"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Carousel, IconButton } from "@material-tailwind/react";
import thumbWhatIDo from "../../public/backend-sample.jpg";
import thumbWhatIDo2 from "../../public/sleep-sample.jpg";
import author from "../../public/bryan1.jpeg";
import Section from "@/components/Section";
import Layout from "@/components/layouts/article";
import Link from "next/link";

export default function Home() {
    return (
        <Layout>
            <main className="flex min-h-screen flex-col items-center justify-center py-16">
                <div className="flex w-full flex-col items-center gap-20 px-9 md:px-12 ">
                    <Section className="card w-full bg-base-100/80 shadow-xl">
                        <div className="flex items-center justify-center gap-x-10 py-8">
                            <div className="avatar hidden md:flex">
                                <div className="w-36 rounded-full ring ring-primary/50">
                                    <Image
                                        src={author}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="online avatar shrink-0 md:hidden">
                                    <div className="w-28 rounded-full ring ring-primary/50 ">
                                        <Image
                                            src={author}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            placeholder="blur"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div className="flex-col text-center">
                                    <h1 className="py-2 text-center text-2xl font-extrabold">
                                        Hi 👋{" "}
                                    </h1>
                                    <p className="font-mono card-title justify-center p-1 text-xl font-semibold">
                                        I&apos;m Bryan Koh Yuan Hao
                                    </p>
                                    <p className="card-title w-72 justify-center px-6 text-sm font-normal">
                                        Passionate backend developer stuck in
                                        Monash University
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section
                        className="card card-compact flex bg-base-100/90 shadow-xl md:card-side"
                        delay={0.2}
                    >
                        <figure className=" max-h-fit max-w-screen-sm">
                            {/* <Image */}
                            {/*     src={thumbWhatIDo} */}
                            {/*     alt="What-I-Do" */}
                            {/*     width={500} */}
                            {/*     height={500} */}
                            {/*     placeholder="blur" */}
                            {/*     loading="lazy" */}
                            {/* /> */}

                            <Carousel
                                className="md:rounded-l-xl"
                                prevArrow={({ handlePrev }) => (
                                    <IconButton
                                        variant="text"
                                        color="white"
                                        size="lg"
                                        onClick={handlePrev}
                                        className="!absolute left-4 top-2/4 -translate-y-2/4"
                                    >
                                        <IoArrowBack
                                            strokeWidth={2}
                                            className="h-6 w-6"
                                        />
                                    </IconButton>
                                )}
                                nextArrow={({ handleNext }) => (
                                    <IconButton
                                        variant="text"
                                        color="white"
                                        size="lg"
                                        onClick={handleNext}
                                        className="!absolute !right-4 top-2/4 -translate-y-2/4"
                                    >
                                        <IoArrowForward
                                            strokeWidth={2}
                                            className="h-6 w-6"
                                        />
                                    </IconButton>
                                )}
                                navigation={({
                                    setActiveIndex,
                                    activeIndex,
                                    length,
                                }) => (
                                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                        {new Array(length)
                                            .fill("")
                                            .map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                                        activeIndex === i
                                                            ? "w-8 bg-white"
                                                            : "w-4 bg-white/50"
                                                    }`}
                                                    onClick={() =>
                                                        setActiveIndex(i)
                                                    }
                                                />
                                            ))}
                                    </div>
                                )}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="android phone"
                                    width={700}
                                    height={700}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                                <Image
                                    src={thumbWhatIDo}
                                    alt="image 1"
                                    width={300}
                                    height={700}
                                    className="h-full w-full object-cover"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                                    alt="laptop with code"
                                    width={300}
                                    height={200}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </Carousel>
                        </figure>
                        <div className="card-body my-2">
                            <h2 className="card-title">What do I do?</h2>
                            <p>
                                I&apos;m a developer who sleep, think, build,
                                eat, repeat!
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn-primary btn">
                                    <Link href={"/about"}> Read More </Link>
                                </button>
                            </div>
                        </div>
                    </Section>

                    <Section
                        className="card bg-base-100/80 shadow-xl"
                        delay={0.4}
                    >
                        <Carousel
                            className="rounded-xl"
                            prevArrow={({ handlePrev }) => (
                                <IconButton
                                    variant="text"
                                    color="white"
                                    size="lg"
                                    onClick={handlePrev}
                                    className="!absolute left-4 top-2/4 -translate-y-2/4"
                                >
                                    <IoArrowBack
                                        strokeWidth={2}
                                        className="h-6 w-6"
                                    />
                                </IconButton>
                            )}
                            nextArrow={({ handleNext }) => (
                                <IconButton
                                    variant="text"
                                    color="white"
                                    size="lg"
                                    onClick={handleNext}
                                    className="!absolute !right-4 top-2/4 -translate-y-2/4"
                                >
                                    <IoArrowForward
                                        strokeWidth={2}
                                        className="h-6 w-6"
                                    />
                                </IconButton>
                            )}
                            navigation={({
                                setActiveIndex,
                                activeIndex,
                                length,
                            }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                    {new Array(length).fill("").map((_, i) => (
                                        <span
                                            key={i}
                                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                                activeIndex === i
                                                    ? "w-8 bg-white"
                                                    : "w-4 bg-white/50"
                                            }`}
                                            onClick={() => setActiveIndex(i)}
                                        />
                                    ))}
                                </div>
                            )}
                        >
                            {/* <div className="flex h-full items-center justify-center"> */}
                            <Image
                                src={thumbWhatIDo2}
                                alt="image 1"
                                width={700}
                                height={700}
                                className="h-full w-full object-cover"
                                placeholder="blur"
                                loading="lazy"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1472718888560-1a1292f1cccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="sheep"
                                width={700}
                                height={700}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="racoon"
                                width={700}
                                height={700}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1538099130811-745e64318258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="fox"
                                width={700}
                                height={700}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            {/* </div> */}
                        </Carousel>
                    </Section>
                </div>
            </main>
        </Layout>
    );
}
