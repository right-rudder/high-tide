import { IoIosArrowForward } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const BrokerageServices = () => {
  const brokerageServices = [
    {
      title: "Market Expertise",
      description: [
        "Our team of experts will provide you with the most up-to-date market information and trends to help you make the best decisions for your business.",
        "We have a deep understanding of the local market and can help you navigate the complexities of buying or selling commercial property.",
      ],
      icon: IoStorefrontOutline,
    },
    {
      title: "Personalized Approach",
      description: [
        "We understand that every business is unique. Our team will work with you to develop a personalized strategy that meets your specific needs and goals.",
        "We will take the time to understand your business and provide you with the best possible solutions to help you achieve success.",
      ],
      icon: MdOutlineDashboardCustomize,
    },
    {
      title: "Success Stories",
      description: [
        "We have a proven track record of success in helping businesses buy, sell, and lease commercial property.",
        "Our team has helped numerous clients achieve their real estate goals and we are confident that we can help you do the same.",
        "We can also replace this text with a Video or Review",
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
    <div className="relative">
      <div
        className={`flex flex-col gap-5 ease-in-out ${active ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"} duration-700`}
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

export default BrokerageServices;
