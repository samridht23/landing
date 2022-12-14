import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="mx-6 lg:mx-52 mt-32 mb-12">
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
