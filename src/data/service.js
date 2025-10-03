import annualInspectionsImg from "../assets/service-aircraft-repair-high-tide-southport-NC.jpeg";
import prePurchaseInspectionsImg from "../assets/wilmington-nc-cfi-checking-aircraft.jpg";
import maintenanceAndRepairsImg from "../assets/service-aircraft-maintenance-high-tide-southport-NC.jpeg";
import aogServiceImg from "../assets/private-pilot-getting-ready-to-take-off.jpeg";
import aircraftFerryingImg from "../assets/heading-to-training-at-high-tide-aviation-st-simons-island-ga.jpg";

export const service = {
  siteTitle: "Service & Repair | High Tide Aviation",
  siteDescription:
    "High Tide Aviation provides expert aircraft services including annual inspections, pre-purchase evaluations, maintenance, AOG support, and professional ferrying.",
  siteKeywords:
    "St Simons Island - GA, Aircraft annual inspections, Pre-purchase aircraft inspections, Aircraft maintenance and repairs, AOG aircraft service, Aircraft ferrying service, Aviation repair services, High Tide Aviation, Aircraft services North Carolina, Aircraft repair Southport NC",
  header: {
    title: "High Tide Aviation Service & Repair",
    bannerImg: "src/assets/service-aircraft-repair-high-tide-southport-NC.jpeg",
    bannerImgAlt: "Aircraft repair",
    ctaText: "Request Our Services",
  },
  serviceSubtitle: "Services",
  services: {
    annualInspections: {
      title: "Annual Inspections",
      description: [
        "Annual inspections are a cornerstone of safe and legal aircraft ownership. At High Tide Aviation, our FAA-certified mechanics conduct a meticulous review of every component, from avionics and control surfaces to engines and landing gear.",
        "We go beyond the minimum checklist to identify potential issues early, helping you avoid costly repairs and downtime later.",
        "By ensuring your aircraft remains compliant and fully airworthy, we provide peace of mind that you, your passengers, and your investment are always protected.",
      ],
      image: {
        src: annualInspectionsImg,
        alt: "Aircraft Repair",
      },
      cta: "Schedule your annual inspection today",
    },
    prePurchaseInspections: {
      title: "Pre-Purchase Inspections",
      description: [
        "Buying an aircraft is a major investment, and a thorough pre-purchase inspection is the key to making a confident decision. Our inspections cover every detail, including airframe integrity, logbook reviews, engine health, avionics functionality, and prior maintenance quality.",
        "We provide comprehensive reports that highlight any hidden defects or upcoming expenses, giving you a clear picture of the aircraft’s condition.",
        "With High Tide Aviation on your side, you’ll have the knowledge and leverage you need to negotiate smarter and purchase with confidence.",
      ],
      image: {
        src: prePurchaseInspectionsImg,
        alt: "Wilmington NC Flight Instructor Checking Aircraft",
      },
      cta: "Book a pre-purchase inspection before you buy",
    },
    maintenanceAndRepairs: {
      title: "Maintenance and Repairs",
      description: [
        "Whether it’s routine upkeep or unexpected repairs, our maintenance team keeps your aircraft in peak condition year-round. We offer oil changes, avionics troubleshooting, structural repairs, engine overhauls, and everything in between.",
        "Our technicians follow manufacturer and FAA guidelines to ensure every repair is performed with the highest level of precision and safety.",
        "We know that downtime is costly, so our goal is to deliver efficient service that gets you back in the sky quickly, while never compromising on quality.",
      ],
      image: {
        src: maintenanceAndRepairsImg,
        alt: "Aircraft Maintenance",
      },
      cta: "Request maintenance or repair service now",
    },
    aogService: {
      title: "AOG Service",
      description: [
        "An Aircraft on Ground (AOG) situation can bring your operations to a halt — but we specialize in getting you moving again. Our mobile AOG response team is prepared to travel directly to your aircraft, no matter where you’re stranded.",
        "We arrive with the tools, expertise, and parts needed to troubleshoot and repair critical issues on-site, minimizing delays and financial impact.",
        "When every hour matters, you can count on High Tide Aviation to restore your aircraft’s airworthiness quickly and safely, keeping your schedule and commitments intact.",
      ],
      image: {
        src: aogServiceImg,
        alt: "Private Pilot Getting Ready to Take Off",
      },
      cta: "Call us for immediate AOG assistance",
    },
    aircraftFerrying: {
      title: "Aircraft Ferrying",
      description: [
        "Relocating an aircraft requires skill, planning, and compliance with strict regulations. Our experienced ferry pilots are qualified across multiple aircraft types and follow all FAA and international requirements for safe repositioning flights.",
        "Whether you’re moving an aircraft to a new owner, maintenance facility, or storage location, we handle the logistics from start to finish.",
        "You can trust High Tide Aviation to deliver your aircraft on time, securely, and with the highest level of professionalism, whether the journey is across the state or across the country.",
      ],
      image: {
        src: aircraftFerryingImg,
        alt: "Pilots Heading to Training at High Tide Aviation St Simons Island",
      },
      cta: "Arrange your aircraft ferrying service today",
    },
  },
  form: {
    subTitle: "Service Request",
    title: "Fill Out the Form Below to Get Access to Our Services",
    fields: {
      firstName: {
        id: "first-name",
        placeholder: "First Name",
      },
      lastName: {
        id: "last-name",
        placeholder: "Last Name",
      },
      email: {
        id: "email",
        placeholder: "Email",
      },
      phone: {
        id: "phone",
        placeholder: "Phone",
      },
      services: {
        legend: "Request the following services:",
        name: "requested-services",
        selectionErrorMessage: "Plase select at least one service.",
        checkboxes: [
          {
            id: "annual-inspections",
            label: "Annual Inspection",
          },
          {
            id: "pre-purchase-inspections",
            label: "Pre-Purchase Inspections",
          },
          {
            id: "maintenance-and-repairs",
            label: "Maintenance and Repairs",
          },
          {
            id: "aog-service",
            label: "AOG Service",
          },
          {
            id: "aircraft-ferrying",
            label: "Aircraft Ferrying",
          },
        ]
      },
      message: {
        id: "message",
        placeholder: "Feel free to elaborate",
      }
    }
  }
};
