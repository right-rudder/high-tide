import { CheckIcon } from "@heroicons/react/20/solid";

const PricingComponentPlaceholder = () => {
  return (
    <div className="bg-gray-900 ring-gray-900 rounded-3xl p-8 ring-1 xl:p-10 max-w-md mx-auto relative">
      <div className="uppercase text-4xl text-gray-600 absolute h-full w-full backdrop-blur-sm top-0 left-0 rounded-3xl flex items-center bg-black/40">
        <p className="-rotate-45 text-center font-bold text-white">
          No programs available at this location
        </p>
      </div>
      <h3 className="text-white text-lg font-semibold leading-8">
        Multi-Engine Rating
      </h3>
      <p className="text-gray-300 mt-4 text-sm leading-6">
        Dual training in the Baron B55
      </p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-white text-4xl font-bold tracking-tight">
          $600
        </span>
        <span className="text-gray-300 text-sm font-semibold leading-6">
          /one-time
        </span>
      </p>
      <a className="bg-white/10 text-white hover:bg-mustard-yellow focus-visible:outline-white mt-6 block duration-300 rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Start Your Multi-Engine Training
      </a>
      <ul
        role="list"
        className="text-gray-300 mt-8 space-y-3 text-sm leading-6 xl:mt-10"
      >
        <li className="flex gap-x-3">
          <CheckIcon
            className="text-mustard-yellow h-6 w-5 flex-none"
            aria-hidden="true"
          />
          Training in Baron B55 with dual engines for enhanced performance and
          safety
        </li>
        <li className="flex gap-x-3">
          <CheckIcon
            className="text-mustard-yellow h-6 w-5 flex-none"
            aria-hidden="true"
          />
          Curriculum includes VFR and IFR operations as a certificate add-on
        </li>
        <li className="flex gap-x-3">
          <CheckIcon
            className="text-mustard-yellow h-6 w-5 flex-none"
            aria-hidden="true"
          />
          Training covers preflight, airport operations, takeoffs, landings, and
          navigation
        </li>
        <li className="flex gap-x-3">
          <CheckIcon
            className="text-mustard-yellow h-6 w-5 flex-none"
            aria-hidden="true"
          />
          Emergency and high-altitude operations included
        </li>
        <li className="flex gap-x-3">
          <CheckIcon
            className="text-mustard-yellow h-6 w-5 flex-none"
            aria-hidden="true"
          />
          No written exam; oral exam and practical checkride required
        </li>
        <li className="flex gap-x-3">
          <CheckIcon
            className="text-mustard-yellow h-6 w-5 flex-none"
            aria-hidden="true"
          />
          Typically requires about 10 hours of training for checkride readiness
        </li>
      </ul>
    </div>
  );
};

export default PricingComponentPlaceholder;
