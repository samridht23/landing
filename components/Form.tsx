const Form = () => {
  return (
    <>
      <div className="my-12 flex w-full items-center justify-center">
        <div className="rounded bg-transparent py-12 shadow">
          <form>
            <div className="mt-2 items-center md:flex">
              <div className="flex flex-col w-80 md:w-96">
                <label className="leading-none text-white">First Name</label>
                <input
                  type="name"
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="John"
                />
              </div>
              <div className="mt-4 flex flex-col md:ml-6 md:mt-0 w-80 md:w-96">
                <label className="leading-none text-white">Last Name</label>
                <input
                  type="name"
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="mt-8 items-center md:flex">
              <div className="flex flex-col w-80 md:w-96">
                <label className="leading-none text-white">Email Address</label>
                <input
                  type="name"
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="johndoe@email.com"
                />
              </div>
              <div className="mt-4 flex flex-col md:ml-6 md:mt-0 w-80 md:w-96">
                <label className="leading-none text-white">Budget</label>
                <input
                  type="name"
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="$$-$$$"
                />
              </div>
            </div>
            <div>
              <div className="mt-8 flex w-full flex-col">
                <label className="leading-none text-white">Message</label>
                <textarea
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 h-36 resize-none leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="This is my message"
                ></textarea>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <button className="font-['SpaceReg'] mt-9 rounded-3xl text-xl bg-transparent border py-2.5 px-5 leading-none text-white hover:bg-[#4353fff2] focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export { Form };
