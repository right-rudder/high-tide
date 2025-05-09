const privatePilot = {
  bannerImagePath: "/src/assets/student-and-cfi-flying-in-ifr.jpg",
  imagePath: "/src/assets/instrument-rating.jpg",
  alt: "Student and CFI flying in IFR conditions.",
  programName: "Instrument Rating",
  siteDescription:
    "Elevate your flying skills with an Instrument Rating from High Tide Aviation. Our comprehensive training program is available in Southport, St Simons Island, and Wilmington, providing pilots with the expertise to fly safely under instrument flight rules (IFR) in challenging weather conditions. Gain the confidence to navigate in low visibility and advance your aviation career with our expert-led courses.",
  title: "Instrument Rating | High Tide Aviation",
  subtitle: "What is an Instrument Rating?",
  locations: ["Southport, NC", "St Simons Island, GA", "Wilmington, NC"],
  description: [
    "An Instrument Rating is vital for pilots seeking to fly under instrument flight rules (IFR), especially in challenging weather conditions where visibility is restricted. This advanced certification equips pilots to navigate using only aircraft instruments, essential for safe operations in clouds or fog and during night flights.",
    "Instrument Rating training at High Tide Aviation, available in Southport, NC, and St Simons Island, GA, deepens a pilot’s understanding of avionic systems and enhances their ability to make precise navigational decisions based on instrument readings alone.",
    "Training for an Instrument Rating involves a blend of theoretical learning and practical application, including extensive simulator sessions and controlled flights in actual IFR conditions. Pilots are required to accumulate specific instrument flight hours and successfully complete both a written and a practical flight examination.",
    "This certification significantly broadens a pilot’s skill set, enabling them to operate aircraft safely and efficiently in nearly all weather conditions, thus making it a crucial step for any pilot aiming to advance their career in aviation.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      {
        heading: "Private Pilot Certificate",
        description:
          "Already obtained from High Tide Aviation or another certified training school.",
      },
      {
        heading: "Logged Flight Hours",
        description:
          "Must have recorded sufficient flight hours under VFR conditions as stipulated by FAA regulations.",
      },
      {
        heading: "Medical Certificate",
        description:
          "Obtain a medical certificate from an FAA-certified aviation medical examiner.",
      },
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      {
        heading: "Review Training Goals",
        description:
          "Existing High Tide students should meet with their instructor to review their flight logs, discuss IFR training goals, and outline the instrument rating pathway.",
      },
      {
        heading: "Advanced Simulation Introduction",
        description:
          "Participate in an orientation session focused on our advanced instrument flight simulators and IFR training methodologies.",
      },
      {
        heading: "Formalize Training Plan",
        description:
          "Complete your enrollment by formalizing your personalized Instrument Rating training plan with High Tide Aviation.",
      },
    ],
  },
  tiers: {
    southport: [
      {
        name: "Instrument Rating",
        id: "tier-instrument-rating",
        href: "#",
        price: "$13,500",
        description: "*Assumes student already holds a private pilot license",
        features: [
          "40 hours of total flight time (Cessna 172)",
          "20 hours of ground instruction",
          "FAA written exam and checkride costs included",
          "Required books & supplies",
          "Custom schedule upon enrollment",
        ],
        featured: false,
        cta: "Enroll Now",
      },
      {
        name: "Zero to Hero Program",
        id: "tier-zero-to-hero",
        href: "#",
        price: "Custom",
        description: "Full-range training for aspiring pilots.",
        features: [
          "All-inclusive from Private to CFI/CFII/MEI",
          "Full support at your selected training location",
          "Customized training schedule",
        ],
        featured: true,
        cta: "Contact for Custom Quote",
      },
    ],
  },
  futurePathways: [
    {
      heading: "Multi-Engine Rating",
      subheading: "Fly Multi-Engine Aircraft",
      description:
        "Expand your aircraft selection by training with High Tide Aviation for your Multi-Engine Rating with our Beech Baron B55s.",
      imagePath: "/src/assets/beech-baron-b55-front.jpg",
      url: "/flight-training/multi-engine",
    },
    {
      heading: "Commercial Pilot",
      subheading: "Fly for Your Career",
      description:
        "No matter how far you want to venture down the pilot career path, it all starts here.",
      imagePath: "/src/assets/commercial-pilot-discussing-flight-plans.jpg",
      url: "/flight-training/commercial-pilot",
    },
    {
      heading: "Rentals",
      subheading: "Rent an Airplane",
      description:
        "Want to fly on your own? Visit our fleet page to explore your options for renting aircraft with High Tide Aviation.",
      imagePath: "/src/assets/cessna-172-flying-over-st-simons-island.jpg",
      url: "/about/fleet-rentals",
    },
  ],
  meet: {
    url: "/about/fleet-rentals/#fleet",
    text: "Meet our Cessnas",
  },
};

export default privatePilot;
