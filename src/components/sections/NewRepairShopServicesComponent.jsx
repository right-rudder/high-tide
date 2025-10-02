import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  GiMagnifyingGlass,
  GiToolbox,
  GiAirplaneDeparture,
} from "react-icons/gi";
import { MdOutlineBuildCircle, MdOutlineFlightTakeoff } from "react-icons/md";

const NewRepairShopServicesComponent = () => {
  const newRepairShopServices = [
    {
      title: "Annual Inspections",
      description: [
        "Keep your aircraft compliant and airworthy with thorough FAA-certified annual inspections.",
        "Our experienced mechanics review every critical system to ensure reliability and safety for the year ahead.",
      ],
      icon: GiMagnifyingGlass,
    },
    {
      title: "Pre-Purchase Inspections",
      description: [
        "Thinking of buying an aircraft? Protect your investment with a comprehensive pre-purchase inspection.",
        "We identify hidden issues, provide detailed reports, and give you the confidence to make an informed decision.",
      ],
      icon: MdOutlineBuildCircle,
    },
    {
      title: "Maintenance and Repairs",
      description: [
        "From routine maintenance to major repairs, High Tide Aviation’s team keeps your aircraft in peak condition.",
        "We deliver precise, efficient service to minimize downtime and maximize safety.",
      ],
      icon: GiToolbox,
    },
    {
      title: "AOG Service w/ Travel",
      description: [
        "Stranded due to an Aircraft on Ground (AOG) situation? Our mobile team is ready to travel and get you back in the air quickly.",
        "We provide rapid response repairs wherever you are, reducing costly delays and disruptions.",
      ],
      icon: MdOutlineFlightTakeoff,
    },
    {
      title: "Aircraft Ferrying",
      description: [
        "Need to move your aircraft safely from one location to another? Our professional ferry pilots handle the relocation for you.",
        "We ensure secure, efficient, and compliant ferry flights, whether across the state or across the country.",
      ],
      icon: GiAirplaneDeparture,
    },
  ];

  const [description, setDescription] = useState([]);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setDescription(
      newRepairShopServices.find(
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
        {newRepairShopServices.map((item) => (
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

export default NewRepairShopServicesComponent;
