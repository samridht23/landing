import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-500 mx-6 sticky top-0 h-16 flex items-center justify-between lg:mx-52">
        <div>
          <div></div>
          <div className="text-gray-100 text-2xl">Devloft</div>
        </div>
        <div className="flex">
          {Links.map((item, idx) => (
            <a href={item.href} key={idx}>
              <div className="text-gray-100 font-['SpaceMed'] mx-4">
                {item.url}
              </div>
            </a>
          ))}
        </div>
        <div></div>
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
