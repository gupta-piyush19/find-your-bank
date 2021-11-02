import Link from "next/link";

const FooterLinks = ({ link }) => {
  return (
    <Link href={link.href}>
      <a
        target="blank"
        className="text-gray-900 hover:text-gray-600 dark:text-darkLink dark:hover:text-darkLinkHover"
      >
        {link.title}
      </a>
    </Link>
  );
};

export default FooterLinks;
