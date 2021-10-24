import NavbarLinks from "./NavbarLinks";
import Head from "next/head";

const Navbar = () => {
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
    <nav>
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Merienda"
          rel="stylesheet"
        />
      </Head>
      <div className="main-navbar flex px-10 justify-between py-2 border-black border-b-2 bg-gray-200 items-center ">
        <div className="logo font-merienda text-2xl">Find Your Bank</div>
        <div className="navbar-links flex gap-4">
          {navbarLinks.map((link, idx) => (
            <NavbarLinks key={idx} link={link} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
