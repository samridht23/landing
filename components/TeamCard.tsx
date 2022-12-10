import Image from "next/image";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
interface TeamProps {
  src: any;
  name: string;
  role: string;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  discord?: string;
}
const TeamCard = ({
  src,
  name,
  role,
  email,
  github,
  linkedin,
  twitter,
  discord,
}: TeamProps) => {
  return (
    <>
      <div className="border border-[#AAAAAA] rounded-xl p-4 w-80 h-64 m-6 flex flex-col justify-center items-center">
        <div className="relative mb-1 rounded-full overflow-hidden flex items-center justify-center w-20 h-20 mx-4">
          <Image
            src={src}
            alt="portfolio image"
            placeholder="blur"
            fill={true}
          />
        </div>
        <div className="font-['SpaceMed'] flex flex-col items-center justify-center text-sm md:text-base">
          <div className="text-[#e9e9e9]">{name}</div>
          <div className="text-[#AAAAAA]">{role}</div>
          <div className="text-[#AAAAAA]">{email}</div>
          <div className="flex mt-2 w-full justify-center">
            {github && (
              <a href={github} className="mx-1">
                <GitHubLogoIcon width={20} height={20} color={"#AAAAAA"} />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} className="mx-1">
                <LinkedInLogoIcon width={20} height={20} color={"#AAAAAA"} />
              </a>
            )}
            {twitter && (
              <a href={twitter} className="mx-1">
                <TwitterLogoIcon width={20} height={20} color={"#AAAAAA"} />
              </a>
            )}
            {discord && (
              <a href={discord} className="mx-1">
                <DiscordLogoIcon width={20} height={20} color={"#AAAAAA"} />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export { TeamCard };
