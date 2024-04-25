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
        "High Tide Aviation brings a wealth of market expertise to our aircraft brokerage services. We possess deep insights into the aviation market trends and pricing strategies, enabling us to provide accurate valuations and market positioning for your aircraft.",
        "Our experienced team stays updated with the latest market dynamics, ensuring that you receive the most beneficial and informed advice whether you are buying or selling.",
      ],
      icon: IoStorefrontOutline,
    },
    {
      title: "Personalized Planning",
      description: [
        "Every client's needs are unique, and our personalized planning reflects this principle. We work closely with you to understand your specific requirements and goals for buying or selling an aircraft.",
        "This tailored approach ensures that every aspect of the transaction is aligned with your expectations, from initial valuation to final negotiations and paperwork, providing a truly customized brokerage experience.",
      ],
      icon: MdOutlineDashboardCustomize,
    },
    {
      title: "Seamless Transactions",
      description: [
        "At High Tide Aviation, we ensure that every aspect of the aircraft brokerage process is smooth and hassle-free. Our team expertly handles all logistics, from listing to closing, ensuring that each transaction is conducted with precision and professionalism. We coordinate inspections, negotiations, and paperwork, providing seamless transitions and clear communication every step of the way. This service is designed for clients who value efficiency and expertise in their aircraft transactions, allowing them to focus on their next venture while we manage the intricate details.",
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

export default BrokerageServices;
