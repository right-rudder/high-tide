import { IoIosArrowBack, IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { GiNetworkBars } from "react-icons/gi";
import { RiHealthBookLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";

const ManagementServices = () => {
  const managementServices = [
    {
      title: "Operational Efficiency",
      description: [
        "High Tide Aviation ensures the operational efficiency of your aircraft through streamlined management practices. We meticulously handle scheduling, logistics, maintenance, and crew management to enhance the readiness and availability of your aircraft.",
        "By optimizing these critical aspects, we reduce downtime and ensure that your aircraft is consistently prepared for flight, providing you with efficiency that saves both time and resources.",
      ],
      icon: GiNetworkBars,
    },
    {
      title: "Professional Care",
      description: [
        "Our professional care program covers every aspect of your aircraft's maintenance and upkeep. At High Tide Aviation, each aircraft is treated with utmost attention to detail, undergoing regular inspections, repairs, and necessary upgrades to maintain peak condition.",
        "Our FAA-certified technicians employ the latest technologies and methodologies to ensure that every component meets the highest standards of safety and performance.",
      ],
      icon: RiHealthBookLine,
    },
    {
      title: "Peace of Mind",
      description: [
        "Choosing High Tide Aviation's management services brings you peace of mind by simplifying the complexities of aircraft ownership. We manage all aspects of aircraft operation, including safety, security, and regulatory compliance.",
        "Our dedicated approach allows you to enjoy flying without the operational burdens typically associated with aircraft ownership, ensuring your investment is well-protected and your mind at ease.",
      ],
      icon: IoMdHappy,
    },
  ];

  const [description, setDescription] = useState([]);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setDescription(
      managementServices.find(
        (item) => item.title === e.currentTarget.getAttribute("name"),
      ).description,
    );
    setActive(true);
  };

  const handleBackClick = () => {
    setActive(false);
  };

  return (
    <div className="relative my-4">
      <div
        className={`flex flex-col gap-5 mb-3 ease-in-out ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"} duration-700`}
      >
        {managementServices.map((item) => (
          <div
            className="p-7 bg-white flex flex-row-reverse items-center justify-between shadow-lg group hover:bg-dark-blue duration-700 cursor-pointer"
            onClick={handleClick}
            key={item.title}
            name={item.title}
          >
            <div className="flex gap-5 flex-row-reverse items-center">
              <item.icon className="size-12 text-medium-blue group-hover:text-mustard-yellow duration-700" />
              <h3 className="text-dark-blue group-hover:text-white duration-700 font-medium text-lg">
                {item.title}
              </h3>
            </div>
            <div className="bg-medium-blue/20 p-3 rounded-full group-hover:bg-mustard-yellow duration-700">
              <IoIosArrowBack className="text-dark-blue group-hover:text-white duration-700" />
            </div>
          </div>
        ))}
      </div>
      <div
        className={`absolute h-full w-full flex flex-col items-start justify-center p-14 gap-7  top-0 duration-700 ease-in-out ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <button
          onClick={handleBackClick}
          className="flex gap-3 items-center cursor-pointer group self-end"
        >
          <div className="p-3 bg-light-blue/15 rounded-full group-hover:bg-medium-blue duration-700">
            <IoIosArrowRoundForward className="text-dark-blue size-6 group-hover:text-white duration-700" />
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

export default ManagementServices;
