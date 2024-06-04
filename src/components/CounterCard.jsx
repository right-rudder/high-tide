import CountUp from "react-countup";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { GiHelicopter } from "react-icons/gi";
import { BsAirplaneEngines } from "react-icons/bs";

const Counter = ({ icon, value, title }) => {
  const icons = {
    FaRegHourglassHalf: FaRegHourglassHalf,
    GiTeacher: GiTeacher,
    GiHelicopter: GiHelicopter,
    BsAirplaneEngines: BsAirplaneEngines,
  };

  const Icon = icons[icon];
  return (
    <div>
      <div className="bg-dark-blue flex flex-col py-10 group">
        <div className="border-r border-white/20 px-10 flex flex-col items-center gap-1 group-last:border-0">
          <Icon className="size-14 mb-4 text-mustard-yellow" />
          <span className="text-5xl font-medium">
            <span className="sr-only">{value}</span>
            <CountUp end={value} enableScrollSpy scrollSpyDelay={200} />
            {title == "Combined flight hours" ? "+" : ""}
          </span>
          <h2 className="text-white/50 text-center">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;
