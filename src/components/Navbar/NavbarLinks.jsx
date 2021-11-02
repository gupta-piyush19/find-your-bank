import Link from "next/link";
import { useRouter } from "next/router";

const NavbarLinks = ({ link }) => {
  const router = useRouter();
  return (
    <Link href={link.href}>
      <a
        className={`border-b-2 
        ${
          router.route === link.href
            ? "border-gray-500 dark:border-pink-500"
            : ""
        } border-transparent hover:border-gray-500 text-gray-900 hover:text-gray-700 pb-1 transition-all duration-300 dark:text-darkLink dark:hover:text-darkLinkHover dark:hover:border-pink-500`}
      >
        {link.title}
      </a>
    </Link>
  );
};

export default NavbarLinks;
