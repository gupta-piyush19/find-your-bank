import NavbarLinks from "./NavbarLinks";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggler from "../ThemeToggler";

const Navbar = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const navbarLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "All Banks",
      href: "/all-banks",
    },
  ];

  return (
    <nav className="border-black border-b-2 bg-gray-200 dark:bg-gray-800 dark:text-white">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Merienda"
          rel="stylesheet"
        />
      </Head>
      <div className="main-navbar flex px-2 md:px-10 justify-between py-2 border-gray-300 border-b-2 items-center ">
        <div className="logo font-merienda text-2xl">
          <Link href="/">
            <a>Find Your Bank</a>
          </Link>
        </div>
        <div className="navbar-links hidden md:flex gap-4 items-center">
          <ThemeToggler />
          {navbarLinks.map((link, idx) => (
            <NavbarLinks key={idx} link={link} />
          ))}
        </div>

        <HamburgerMenu viewMenu={viewMenu} setViewMenu={setViewMenu} />
      </div>
      <section className="md:hidden">
        <div
          className={`${
            viewMenu ? "h-auto" : "h-0"
          } flex flex-col overflow-hidden px-6 text-lg`}
        >
          {navbarLinks.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <a className="py-1" onClick={() => setViewMenu(false)}>
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
