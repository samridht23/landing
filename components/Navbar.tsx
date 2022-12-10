import { motion, useCycle } from "framer-motion";
import { MenuButton } from "./MenuButton";
const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <>
      <div className="z-40 mx-6 sticky top-0 h-16 flex items-center justify-between lg:mx-52">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-gray-100 text-2xl ">Devloft</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="hidden lg:flex">
            {Links.map((item, idx) => (
              <div
                className="text-gray-100 font-['SpaceMed'] hover:text-[#4353fff2] mx-4 transition ease-in-out"
                key={idx}
              >
                <a href={item.href}>{item.url}</a>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="lg:hidden">
          <motion.div
            className="flex items-center justify-center"
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div
              className="bg-black w-full fixed right-0 top-0 flex flex-col justify-center"
              variants={{
                open: { width: "100%", height: "100%" },
                closed: { width: "0px", height: "100%" },
              }}
            >
              {Links.map((item, idx) => (
                <div
                  className="z-30 text-[#e9e9e9] text-5xl m-2 font-['SpaceMed'] mx-6"
                  key={idx}
                >
                  <a href={item.href}>{item.url}</a>
                </div>
              ))}
            </motion.div>
            <MenuButton toggle={() => toggleOpen()} />
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
const Links = [
  {
    url: "Home",
    href: "#",
  },
  {
    url: "Projects",
    href: "#",
  },
  {
    url: "About",
    href: "#",
  },
  {
    url: "Contact",
    href: "#",
  },
];
