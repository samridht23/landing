import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // use proper type for budget initial state
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const body = { firstName, lastName, email, budget, message };
  const showAlert = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 4000);
  };
  const submitContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`/api`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setBudget("");
        setMessage("");
        setLoading(false);
        showAlert();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="my-12 flex w-full items-center justify-center">
        <div className="rounded bg-transparent py-12 shadow">
          <form onSubmit={submitContent} id="quote_form">
            <div className="mt-2 items-center md:flex">
              <div className="flex flex-col w-80 md:w-96">
                <label className="leading-none text-white">First Name</label>
                <input
                  type="name"
                  required
                  value={firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setFirstName(e.target.value)
                  }
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="John"
                />
              </div>
              <div className="mt-4 flex flex-col md:ml-6 md:mt-0 w-80 md:w-96">
                <label className="leading-none text-white">Last Name</label>
                <input
                  type="name"
                  value={lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setLastName(e.target.value)
                  }
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="mt-8 items-center md:flex">
              <div className="flex flex-col w-80 md:w-96">
                <label className="leading-none text-white">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setEmail(e.target.value)
                  }
                  id="email"
                  required
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="johndoe@email.com"
                />
              </div>
              <div className="mt-4 flex flex-col md:ml-6 md:mt-0 w-80 md:w-96">
                <label className="leading-none text-white">Budget</label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setBudget(e.target.value)
                  }
                  required
                  max={10000}
                  min={5}
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="$$-$$$"
                />
              </div>
            </div>
            <div>
              <div className=" mt-8 flex w-full flex-col">
                <label className="leading-none text-white">Message</label>
                <textarea
                  id="text"
                  className="font-['SpaceReg'] outline-none mt-4 bg-transparent p-4 h-36 resize-none leading-none text-[#e9e9e9] placeholder-[#AAAAAA] bg-[#AAAAAA] bg-opacity-30 rounded transition ease-in-out"
                  placeholder="This is my message"
                  required
                  value={message}
                  spellCheck={false}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
                    setMessage(e.target.value)
                  }
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className="font-['SpaceReg'] mt-9 mb-4 rounded-3xl text-xl bg-transparent border py-2.5 px-5 leading-none text-white hover:bg-[#4353fff2] outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                SUBMIT
              </button>
              {isAlertVisible ? (
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 text-sm font-['SpaceMed'] rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">
                    We will contact you soon.
                  </span>
                </div>
              ) : (
                <div
                  className="opacity-0 bg-green-100 border border-green-400 text-green-700 px-4 py-2 text-sm font-['SpaceMed'] rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">
                    We will contact you soon.
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export { Form };
