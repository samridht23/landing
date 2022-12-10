import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { TeamCard } from "./TeamCard";
import { Form } from "./Form";
import card1 from "public/card1.png";
import card2 from "public/card2.png";
import card3 from "public/card3.png";
import card4 from "public/card4.png";
import port from "public/port.jpg";

const Body = () => {
  return (
    <>
      <div className="mx-6 flex flex-col items-left lg:mx-52 mt-48 md:mt-96">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <div className="text-xl text-transparent bg-clip-text bg-gradient-to-t from-purple-600 to-gray-50">
            Welcome to Devloft
          </div>
        </motion.div>
        <div className="text-4xl md:text-6xl w-full md:w-3/4 lg:w-1/2 text-[#e9e9e9] my-6">
          We specialize in digital design, development and creative strategy.
        </div>
        <div className="flex flex-wrap justify-center items-center my-6 ">
          {cards.map((i, idx) => (
            <ProjectCard
              link={i.link}
              src={i.src}
              width={i.width}
              height={i.height}
              desc={i.desc}
              key={idx}
            />
          ))}
        </div>
      </div>
      <div className="mx-6 flex flex-col items-left lg:mx-52 mt-48 md:mt-60">
        <div className="text-xl text-transparent bg-clip-text bg-gradient-to-t from-purple-600 to-gray-50">
          Our Process
        </div>
        <div className="text-4xl md:text-6xl w-full md:w-3/4 lg:w-1/2 text-[#e9e9e9] my-6">
          Devloft offers a wide range of services that apply to many industries.
        </div>
        <div className="my-6">
          <a
            href="#"
            className="font-['SpaceReg']  z-20 cursor-pointer hover:bg-[#4353fff2] transition ease-in-out py-2.5 px-5 mr-2 mb-2 text-xl text-[#e9e9e9] focus:outline-none bg-transparent rounded-full border border-[#e9e9e9]"
          >
            SERVICES
          </a>
        </div>
        <div className="mt-7 text-white">
          <div className="flex flex-wrap items-center justify-center">
            <div className="flex flex-col items-center justify-center border m-6 w-80 h-96 rounded-xl p-12">
              <div className="text-4xl text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Software Development
              </div>
              <div className="text-sm text-center text-[#e9e9e9] mt-6">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock,
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border m-2 w-80 h-96 rounded-xl p-12">
              <div className="text-4xl text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Website Development
              </div>
              <div className="text-sm text-center text-[#e9e9e9] mt-6">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock,
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border m-2 w-80 h-96 rounded-xl p-12">
              <div className="text-4xl text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Mobile Development
              </div>
              <div className="text-sm text-center text-[#e9e9e9] mt-6">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock,
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 flex flex-col items-left lg:mx-52 mt-48 md:mt-60">
        <div className="text-xl text-transparent bg-clip-text bg-gradient-to-t from-purple-600 to-gray-50">
          Our Team
        </div>
        <div className="text-4xl md:text-6xl w-full md:w-3/4 lg:w-1/2 text-[#e9e9e9] my-6">
          We develop for young and old, lovingly. Our dedicated teams are ready
          to work wonders for you too.
        </div>
        <div className="mt-7 text-white flex w-full items-center justify-center flex-wrap">
          {teams.map((i, idx) => (
            <TeamCard
              src={i.src}
              name={i.name}
              role={i.role}
              email={i.email}
              key={idx}
              github={i.socials.github}
              linkedin={i.socials.linkedin}
              twitter={i.socials.twitter}
              discord={i.socials.discord}
            />
          ))}
        </div>
      </div>
      <div className="mx-6 flex flex-col items-left lg:mx-52 mt-48 md:mt-60">
        <div className="text-xl text-transparent bg-clip-text bg-gradient-to-t from-purple-600 to-gray-50">
          Message Us
        </div>
        <div className="text-4xl md:text-6xl w-full md:w-3/4 lg:w-1/2 text-[#e9e9e9] my-6">
          We’d love to talk with you about your next project. Drop us a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA1D1D] to-[#C6E05D]">
            Message
          </span>
          , and we’ll get back to you within two business days.
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </>
  );
};
export { Body };
// if you dont have the link for particular social account just leave it empty with no space it will not render that component
const teams = [
  {
    src: port,
    name: "John Doe",
    role: "Backend Engineer",
    email: "johndoe@gmail.com",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "",
      discord: "#",
    },
  },
  {
    src: port,
    name: "John Doe",
    role: "Backend Engineer",
    email: "johndoe@gmail.com",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      discord: "#",
    },
  },
  {
    src: port,
    name: "John Doe",
    role: "Backend Engineer",
    email: "johndoe@gmail.com",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      discord: "#",
    },
  },
  {
    src: port,
    name: "John Doe",
    role: "Backend Engineer",
    email: "johndoe@gmail.com",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      discord: "",
    },
  },
];
const cards = [
  {
    desc: "New concept designed for the FIFA World Cup, Qatar 2022. ",
    link: "#",
    src: card1,
    width: 500,
    height: 500,
  },
  {
    desc: "Presenting a Shopify Product Landing Page Design Concept",
    link: "#",
    src: card2,
    width: 500,
    height: 500,
  },
  {
    desc: "New concept designed for the FIFA World Cup, Qatar 2022. ",
    link: "#",
    src: card3,
    width: 500,
    height: 500,
  },
  {
    desc: "Landing page for Travel Agency website",
    link: "#",
    src: card4,
    width: 500,
    height: 500,
  },
];
