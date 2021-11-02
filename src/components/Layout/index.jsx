import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-grow dark:bg-darkBg ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
