"use client";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import config from "@/lib/config";

/* update navbar list in @/lib/config */

const Navbar = () => {
    return (
        <div className="bg-base-100">
            <div className="navbar m-auto max-w-screen-md items-center justify-between">
                <div className="flex-1">
                    <Link
                        href="/"
                        className="btn-ghost btn text-xl normal-case"
                    >
                        Bryan Koh
                    </Link>
                </div>

                <div className="flex flex-1 justify-end">
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-2 text-base">
                            {config.nav.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.path}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex w-fit">
                        <a
                            href="https://github.com/buenaSopa"
                            target="_blank"
                            className="btn-primary btn-sm btn hidden px-2 normal-case md:flex"
                        >
                            <IoLogoGithub className="text-xl" /> Github
                        </a>
                        <a
                            href="https://github.com/buenaSopa"
                            target="_blank"
                            className="btn-primary btn-square btn-sm btn normal-case md:hidden"
                        >
                            <IoLogoGithub className="text-2xl" />{" "}
                        </a>
                    </div>

                    <div className="dropdown-end dropdown">
                        <label
                            tabIndex={0}
                            className="btn-ghost btn-circle btn md:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
                        >
                            {config.nav.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.path}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
