import { IoIosArrowForward } from "react-icons/io";
import { VscPreview } from "react-icons/vsc";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdStopwatch } from "react-icons/io";
import { SlDocs } from "react-icons/sl";

const PilotFinancingPrograms = () => {
  const brokerageServices = [
    {
      title: "Quick Application Process",
      description: [
        "Submit a simple online application with fast approval times to get your training started as soon as possible.",
      ],
      icon: IoMdStopwatch,
    },
    {
      title: "Affordable Payment Plans",
      description: [
        "Make your way through training with manageable monthly payments. Finance a private pilot’s license for as little as $150-300 per month, or pursue an instrument rating with payments as low as $175 monthly.*",
      ],
      icon: SlDocs,
    },
    {
      title: "Flexible Credit Lines",
      description: [
        "Use your approved funds for any High Tide Aviation program, including private pilot, instrument rating, multi-engine rating, or beyond.",
      ],
      icon: VscPreview,
    },
  ];

  const [description, setDescription] = useState([]);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setDescription(
      brokerageServices.find(
        (item) => item.title === e.currentTarget.getAttribute("name"),
      ).description,
    );
    setActive(true);
  };

  const handleBackClick = () => {
    setActive(false);
  };

  return (
    <div className="relative my-6">
      <div
        className={`flex flex-col gap-5 mb-3 ease-in-out ${active ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"} duration-700`}
      >
        {brokerageServices.map((item) => (
          <div
            className="p-7 bg-white flex items-center justify-between shadow-lg group hover:bg-dark-blue duration-700 cursor-pointer"
            onClick={handleClick}
            key={item.title}
            name={item.title}
          >
            <div className="flex gap-5 items-center">
              <item.icon className="size-12 text-medium-blue group-hover:text-mustard-yellow duration-700" />
              <h3 className="text-dark-blue group-hover:text-white duration-700 font-medium text-lg">
                {item.title}
              </h3>
            </div>
            <div className="bg-medium-blue/20 p-3 rounded-full group-hover:bg-mustard-yellow duration-700">
              <IoIosArrowForward className="text-dark-blue group-hover:text-white duration-700" />
            </div>
          </div>
        ))}
      </div>
      <div
        className={`absolute h-full w-full flex flex-col items-start justify-center p-14 gap-7  top-0 duration-700 ease-in-out ${active ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <button
          onClick={handleBackClick}
          className="flex gap-3 items-center cursor-pointer group"
        >
          <div className="p-3 bg-light-blue/15 rounded-full group-hover:bg-medium-blue duration-700">
            <IoIosArrowRoundBack className="text-dark-blue size-6 group-hover:text-white duration-700" />
          </div>
          <p className="text-medium-blue text-sm uppercase font-medium tracking-widest">
            Back
          </p>
        </button>
        <div className="flex flex-col gap-3">
          {description.map((item, index) => (
            <p key={index} className="leading-loose text-gray-600">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PilotFinancingPrograms;
