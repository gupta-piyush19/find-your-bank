import NavbarLinks from "./NavbarLinks";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

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
    <nav className="border-black border-b-2 bg-gray-200">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Merienda"
          rel="stylesheet"
        />
      </Head>
      <div className="main-navbar flex px-10 justify-between py-2 border-gray-300 border-b-2 items-center ">
        <div className="logo font-merienda text-2xl">Find Your Bank</div>
        <div className="navbar-links hidden md:flex gap-4">
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
              <a className="py-1">{link.title}</a>
            </Link>
          ))}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
