import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";
import { RiHealthBookLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";

const ManagementServices = () => {
  const managementServices = [
    {
      title: "Operational Efficiency",
      description: [
        "We will help you optimize your property management operations to increase efficiency and reduce costs.",
        "Our team will work with you to identify areas for improvement and implement solutions that will help you achieve your goals.",
      ],
      icon: GiNetworkBars,
    },
    {
      title: "Comprehensive Care",
      description: [
        "Our team will provide you with a full range of property management services to meet your needs.",
        "We will take care of everything from leasing and maintenance to accounting and reporting, so you can focus on running your business.",
      ],
      icon: RiHealthBookLine,
    },
    {
      title: "Peace of Mind",
      description: [
        "We will handle all aspects of property management so you can have peace of mind knowing that your property is in good hands.",
        "Our team will take care of everything from tenant relations to building maintenance, so you can relax and enjoy the benefits of owning commercial property.",
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
    <div className="relative">
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
