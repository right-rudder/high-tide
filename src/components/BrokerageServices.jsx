import { IoIosArrowForward } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";

const BrokerageServices = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="p-7 bg-white flex items-center justify-between shadow-lg group hover:bg-dark-blue duration-700 cursor-pointer">
        <div className="flex gap-5 items-center">
          <IoStorefrontOutline className="size-12 text-medium-blue group-hover:text-mustard-yellow duration-700" />
          <h3 className="text-dark-blue group-hover:text-white duration-700 font-medium text-lg">
            Market Expertise
          </h3>
        </div>
        <div className="bg-medium-blue/20 p-3 rounded-full group-hover:bg-mustard-yellow duration-700">
          <IoIosArrowForward className="text-dark-blue group-hover:text-white duration-700" />
        </div>
      </div>
    </div>
  );
};

export default BrokerageServices;
