import Link from "next/link";

const NavbarLinks = ({ link }) => {
  return (
    <Link href={link.href}>
      <a className="border-b-2 hover:border-2 hover:border-gray-500 text-gray-900 hover:text-gray-700 pb-1 transition-all duration-300">
        {link.title}
      </a>
    </Link>
  );
};

export default NavbarLinks;
