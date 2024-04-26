import { PiQuotes } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

const ReviewCard = ({ review, name, title }) => {
  return (
    <div className="flex items-center h-96 sm:h-80 gap-5 p-10 shadow-md bg-white border-dark-blue duration-300 border-l-4">
      <div className="bg-medium-blue w-fit h-fit p-3 rounded-full hidden sm:block">
        <PiQuotes className="size-10 text-white" />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-gray-500 leading-loose">{review}</p>
        <div className="flex items-center justify-between">
          <div className="flex">
            <IoIosStar className="text-mustard-yellow" />
            <IoIosStar className="text-mustard-yellow" />
            <IoIosStar className="text-mustard-yellow" />
            <IoIosStar className="text-mustard-yellow" />
            <IoIosStar className="text-mustard-yellow" />
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xl text-right text-dark-blue font-semibold">
              {name}
            </p>
            <p className="uppercase tracking-widest text-xs text-right font-light">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
