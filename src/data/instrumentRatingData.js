const privatePilot = {
  imagePath: "/src/assets/instrument-rating.jpg",
  title: "Instrument Rating",
  subtitle: "What is an Instrument Rating?",
  locations: ["Southport NC", "St.Simons Island GA"],
  description: [
    "An Instrument Rating is vital for pilots seeking to fly under instrument flight rules (IFR), especially in challenging weather conditions where visibility is restricted. This advanced certification equips pilots to navigate using only aircraft instruments, essential for safe operations in clouds or fog and during night flights.",
    "Instrument Rating training at High Tide Aviation, available in Southport, NC, and St. Simons Island, GA, deepens a pilot’s understanding of avionic systems and enhances their ability to make precise navigational decisions based on instrument readings alone.",
    "Training for an Instrument Rating involves a blend of theoretical learning and practical application, including extensive simulator sessions and controlled flights in actual IFR conditions. Pilots are required to accumulate specific instrument flight hours and successfully complete both a written and a practical flight examination.",
    "This certification significantly broadens a pilot’s skill set, enabling them to operate aircraft safely and efficiently in nearly all weather conditions, thus making it a crucial step for any pilot aiming to advance their career in aviation.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      "Private Pilot Certificate: Already obtained from High Tide Aviation or another certified training school.",
      "Logged Flight Hours: Must have recorded sufficient flight hours under VFR conditions as stipulated by FAA regulations",
      "Medical Certificate: Current Class 3 medical certificate, as issued by an FAA-certified aviation medical examiner.",
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      "Review Training Goals: Existing High Tide students should meet with their instructor to review their flight logs, discuss IFR training goals, and outline the instrument rating pathway.",
      "Advanced Simulation Introduction: Participate in an orientation session focused on our advanced instrument flight simulators and IFR training methodologies.",
      "Formalize Training Plan: Complete your enrollment by formalizing your personalized Instrument Rating training plan with High Tide Aviation.",
    ],
  },
  tiers: {
    southport: [
      {
        name: "Instrument Rating",
        id: "tier-instrument-rating",
        href: "#",
        price: "$11,025",
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
    simons: [
      {
        name: "Instrument Rating",
        id: "tier-instrument-rating-simons",
        href: "#",
        price: "$11,025",
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
        id: "tier-zero-to-hero-simons",
        href: "#",
        price: "Custom",
        description: "Full-range training for aspiring pilots.",
        features: [
          "All-inclusive from Private to CFI/CFII",
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
      subheading: "Fly Multi Engine Aircraft",
      description:
        "Expand your aircraft selection by training with High Tide Aviation for your Multi Engine Rating with our Beech Baron B55s.",
      imagePath: "/src/assets/beech-baron-b55-front.jpg",
      url: "/flight-training/multi-engine",
    },
    {
      heading: "Commercial Pilot",
      subheading: "Fly for Your Career",
      description:
        "No matter how far you want to venture down the pilot career path, it all starts here.",
      imagePath: "/src/assets/flight-program-2.jpg",
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
};

export default privatePilot;
