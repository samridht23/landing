import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div className="flex mx-6 bg-transparent lg:mx-52 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: "spring" }}
          className="flex items-center justify-center mt-28 md:mt-56 bg-transparent"
        >
          <div className="text-gray-50 text-4xl md:text-6xl text-center mx-32 md:mx-52 bg-transparent">
            Customized software design and development
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: "spring" }}
          className="flex items-center justify-center mt-12 bg-transparent"
        >
          <a
            href="#"
            className=" cursor-pointer font-['SpaceMed'] py-2.5 px-5 mr-2 mb-2 text-lg hover:bg-[#4353fff2] transition ease-in-out text-[#e9e9e9] focus:outline-none bg-transparent rounded-full border border-[#e9e9e9]"
          >
            Request Quote
          </a>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute opacity-90 md:opacity-30 left-2/4 w-32 h-32  md:w-96 md:h-96  bg-[#C42EF9] rounded-full  filter animate-mobileblob1 md:animate-blob1 blur-3xl"></div>
        <div className="absolute opacity-90 md:opacity-30 right-2/4 w-32 h-32 md:w-96 md:h-96  bg-[#F81868] rounded-full  filter animate-mobileblob2 md:animate-blob2 blur-3xl "></div>
      </div>
    </>
  );
};
export { Hero };
