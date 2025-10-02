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
        "Ensure your aircraft remains fully compliant and airworthy with High Tide Aviation’s thorough FAA-certified annual inspections. Every system, from engines to avionics, is meticulously examined by our certified technicians to maintain peak performance and safety standards.",
        "Regular inspections not only protect your investment but also reduce the likelihood of unexpected maintenance issues. Our detailed reports provide full transparency, helping you plan future maintenance and upgrades more efficiently.",
        "Flying with confidence is priceless. With our annual inspections, you know your aircraft has been professionally checked and maintained to the highest aviation standards.",
        "Choose High Tide Aviation for inspections that maximize safety, performance, and the lifespan of your aircraft, ensuring every flight is worry-free.",
      ],
      icon: GiMagnifyingGlass,
    },
    {
      title: "Pre-Purchase Inspections",
      description: [
        "Buying an aircraft is a significant investment—protect it with a comprehensive pre-purchase inspection from High Tide Aviation. Our expert team identifies hidden issues, evaluates airworthiness, and provides a detailed, actionable report.",
        "We assess every critical component, review maintenance history, and evaluate operational performance to give you a clear picture of the aircraft's condition.",
        "Avoid costly surprises and gain peace of mind. Our inspections ensure your prospective aircraft meets both your expectations and FAA regulations, giving you confidence in your purchase.",
        "With High Tide Aviation, you make informed decisions backed by professional expertise, helping you secure the right aircraft at the right value.",
      ],
      icon: MdOutlineBuildCircle,
    },
    {
      title: "Maintenance and Repairs",
      description: [
        "From routine maintenance to major repairs, High Tide Aviation keeps your aircraft performing at its best. Our certified technicians handle scheduled services, troubleshooting, and complex system repairs with precision and care.",
        "We focus on minimizing downtime while maintaining strict adherence to safety standards, ensuring that your aircraft is ready whenever you need it.",
        "Each maintenance procedure is documented and executed to extend the operational life of your aircraft while safeguarding your investment.",
        "Trust High Tide Aviation to deliver reliable, efficient, and professional service that protects your aircraft and keeps your flights safe and on schedule.",
      ],
      icon: GiToolbox,
    },
    {
      title: "AOG Service w/ Travel",
      description: [
        "An Aircraft on Ground (AOG) situation can disrupt your schedule and cost you valuable time. High Tide Aviation provides rapid-response AOG services, sending expert technicians to your location quickly.",
        "Our mobile team brings the tools, knowledge, and replacement parts required to diagnose and repair issues efficiently, wherever your aircraft is grounded.",
        "We minimize downtime and ensure fast, reliable solutions, allowing you to resume operations with minimal disruption.",
        "With our AOG service, you get peace of mind knowing that expert support is always just a call away, keeping your aircraft flying and your operations on track.",
      ],
      icon: MdOutlineFlightTakeoff,
    },
    {
      title: "Aircraft Ferrying",
      description: [
        "Need to move your aircraft safely from one location to another? High Tide Aviation offers professional ferrying services conducted by experienced, licensed pilots.",
        "We handle all aspects of the ferry flight, including pre-flight checks, route planning, and regulatory compliance, ensuring your aircraft is transported securely and efficiently.",
        "Whether relocating across the state or across the country, our team manages every detail to protect your investment and maintain operational readiness.",
        "Choose High Tide Aviation for peace of mind and seamless aircraft transfers, delivered with safety, reliability, and professional expertise.",
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
