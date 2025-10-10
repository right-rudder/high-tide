import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import PricingComponentPlaceholder from "./PricingComponentPlaceholder";

const locations = [
  { value: "southport", label: "Southport" },
  { value: "simons", label: "St Simons Island" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingComponent({ tiers, program, meet }) {
  const initialLocations = [
    { value: "southport", label: "Southport" },
    { value: "simons", label: "St Simons Island" },
  ];

  const [locations, setLocations] = useState(() => {
    if (tiers.online) {
      return [...initialLocations, { value: "online", label: "Online" }];
    }
    return initialLocations;
  });

  const [location, setLocation] = useState(locations[0]);

  return (
    <div
      className={`mx-auto ${tiers[location.value].length >= 4 ? "max-w-[100rem]" : "max-w-7xl"} px-6 lg:px-8`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="uppercase text-mustard-yellow font-bold tracking-widest">
          Cost Estimates
        </h2>
        {/* <p className="text-5xl max-w-xl mx-auto font-bold leading-tight text-white">
          We can remove this title if not needed
        </p> */}
      </div>
      {tiers.simons !== undefined && (
        <div className="mt-7 flex justify-center">
          <RadioGroup
            value={location}
            onChange={setLocation}
            className={`grid grid-cols-${locations.length} gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-2 ring-inset ring-medium-blue`}
          >
            <RadioGroup.Label className="sr-only">
              Payment location
            </RadioGroup.Label>
            {locations.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? "bg-medium-blue text-white" : "text-gray-500",
                    "cursor-pointer rounded-full px-5 py-2 duration-300 flex justify-center items-center",
                  )
                }
              >
                <span className="text-lg">{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
      )}

      <div
        className={`isolate mx-auto mt-10 grid gap-8 lg:mx-0 lg:max-w-none ${tiers[location.value].length >= 4 ? "xl:grid-cols-4 md:grid-cols-2" : "lg:grid-cols-" + tiers[location.value].length}`}
      >
        {tiers[location.value].length == 0 ? (
          <PricingComponentPlaceholder />
        ) : (
          tiers[location.value].map((tier) => (
            <div
              key={tier.id}
              id={location.value}
              className={classNames(
                tier.featured
                  ? "bg-gray-900 ring-gray-900"
                  : "ring-gray-200 bg-white",
                "rounded-3xl p-8 ring-1 xl:p-10 max-w-[26rem] mx-auto flex flex-col",
              )}
            >
              <div
                className={`flex flex-col ${location.value === "southport" && program === "Ground School" ? "lg:min-h-40" : "lg:min-h-28"} ${tiers[location.value].length >= 4 ? "xl:min-h-40" : ""}`}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-lg font-semibold leading-8",
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-4 text-sm leading-6 mb-2",
                  )}
                >
                  {tier.description}
                </p>
                {tier.duration && (
                  <p className="flex gap-x-2 text-sm leading-6">
                    <FaRegHourglassHalf className="text-mustard-yellow size-3 flex-shrink-0 mt-[5.5px]" />
                    <span className="text-gray-600">{tier.duration}</span>
                  </p>
                )}
                {tier.schedule && (
                  <p className="flex gap-x-2 text-sm leading-6">
                    <FaCalendar className="text-mustard-yellow size-3 flex-shrink-0 mt-[5.5px]" />
                    <span className="text-gray-600">{tier.schedule}</span>
                  </p>
                )}
                {tier.venue && (
                  <p className="flex gap-x-2 text-sm leading-6">
                    <FaLocationDot className="text-mustard-yellow size-3 flex-shrink-0 mt-[5.5px]" />
                    <span className="text-gray-600">{tier.venue}</span>
                  </p>
                )}
              </div>

              <p
                className={`mt-6 text-xs font-bold ${tier.price !== "Custom" ? "" : "opacity-0"} ${tier.price !== "Build your own" ? "" : "opacity-0"}`}
              >
                Starting at
              </p>

              <p className="flex items-baseline gap-x-1">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-4xl font-bold tracking-tight",
                    tier.discountedPrice ? "line-through" : "",
                  )}
                >
                  {tier.price}
                </span>

                {tier.discountedPrice && (
                  <span className="text-2xl font-bold leading-6">
                    {tier.discountedPrice}
                  </span>
                )}

                {tier.price !== "Custom" && (
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-300" : "text-gray-600",
                      "text-sm font-semibold leading-6",
                    )}
                  >
                    {tier.unitPrice ? tier.unitPrice : ""}
                  </span>
                )}
              </p>
              <a
                href={tier.url ? tier.url : "/enrollment-form"}
                target="_self"
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-white/10 text-white hover:bg-mustard-yellow focus-visible:outline-white"
                    : "bg-dark-blue text-white shadow-sm hover:bg-mustard-yellow focus-visible:outline-dark-blue",
                  "mt-6 block duration-300 rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                )}
              >
                {tier.cta}
              </a>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm leading-6 xl:mt-10",
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={classNames(
                        tier.featured
                          ? "text-mustard-yellow"
                          : "text-dark-blue",
                        "h-6 w-5 flex-none",
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
                {tier.nonfeatures &&
                  tier.nonfeatures.map((nonfeature) => (
                    <li key={nonfeature} className="flex gap-x-3 font-medium">
                      <XMarkIcon
                        className={classNames(
                          tier.featured
                            ? "text-mustard-yellow"
                            : "text-dark-blue",
                          "h-6 w-5 flex-none",
                        )}
                        aria-hidden="true"
                      />
                      {nonfeature}
                    </li>
                  ))}
              </ul>
            </div>
          ))
        )}
      </div>
      <p className="mx-auto mt-3 max-w-2xl text-center text-lg leading-8 text-white/70">
        *Please note all prices are approximate and based on FAA minimums*
      </p>

      <a
        href="/about/financing"
        className="btn-yellow hover:bg-white hover:text-dark-blue mx-auto mt-5"
      >
        Explore financing options
      </a>
      {meet && (
        <a href={meet.url} className="btn-yellow mx-auto mt-5">
          {meet.text}
        </a>
      )}
    </div>
  );
}