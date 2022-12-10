import {
  TwitterLogoIcon,
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <>
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="#" className="flex items-center">
            <span className="text-[#e9e9e9] self-center text-2xl font-semibold whitespace-nowrap ">
              Devloft
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#e9e9e9] uppercase ">
              Resources
            </h2>
            <ul className="text-[#AAAAAA] ">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#e9e9e9] uppercase ">
              Follow us
            </h2>
            <ul className="text-[#AAAAAA] ">
              <li className="mb-4">
                <a href="#" className="hover:underline ">
                  Github
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm text-[#e9e9e9] uppercase ">Legal</h2>
            <ul className="text-[#AAAAAA]">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-[#AAAAAA] sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between text-[#AAAAAA]">
        <span className="text-sm sm:text-center ">
          {year}
          <a href="#" className="hover:underline mx-2">
            Devloft.
          </a>
          All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-900 ">
            <GitHubLogoIcon width={20} height={20} color={"#AAAAAA"} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 ">
            <DiscordLogoIcon width={20} height={20} color={"#AAAAAA"} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 ">
            <TwitterLogoIcon width={20} height={20} color={"#AAAAAA"} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 ">
            <InstagramLogoIcon width={20} height={20} color={"#AAAAAA"} />
          </a>
        </div>
      </div>
    </>
  );
};
export { Footer };
