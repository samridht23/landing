import Image from "next/image";

interface CardProps {
  link: string;
  src: any;
  width: number;
  height: number;
  desc: string;
}

const ProjectCard = ({ link, src, width, height, desc }: CardProps) => {
  return (
    <>
      <div className="p-2 m-2">
        <a href={link}>
          <Image src={src} alt="Card image" width={width} height={height} />
          <span className="text-[#e9e9e9] text-sm text-[#e9e9e9] font-['SpaceMed']">
            {desc}
          </span>
        </a>
      </div>
    </>
  );
};
export { ProjectCard };
