import FooterLinks from "./FooterLinks";

const Footer = () => {
  const footerLinks = [
    {
      title: "GitHub",
      href: "https://github.com/",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/piyushgupta19",
    },
  ];

  return (
    <footer className="border-t-2 border-black bg-gray-300 dark:bg-gray-800 dark:text-white">
      <div className="main-footer flex md:flex-row flex-col justify-between px-4 md:px-10 py-2 text-base md:text-lg gap-2 md:gap-0 items-center">
        <div className="copyright-notice flex justify-center ">
          Copyright &copy; 2021- All rights reserved
        </div>
        <div className="footer-links flex gap-4 justify-center md:justify-start ">
          {footerLinks.map((link, idx) => (
            <FooterLinks key={idx} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
