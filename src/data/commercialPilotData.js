const privatePilot = {
  imagePath: "/src/assets/commercial-pilot.jpg",
  title: "Commercial Pilot",
  subtitle: "What is a Commercial Pilot Certificate?",
  locations: ["Southport NC", "St.Simons Island GA"],
  description: [
    "A Commercial Pilot Certificate enables qualified pilots to operate aircraft for compensation or hire, a crucial step for anyone aiming to pursue a career in aviation. This certification allows pilots to participate in diverse operations such as cargo transport, aerial surveying, and passenger carrying, among others.",
    "Tide Aviation offers this advanced training at both Southport, NC, and St. Simons Island, GA, providing aspiring commercial pilots with training that includes advanced flight techniques, extensive knowledge of aviation regulations, and the professional conduct required of a commercial pilot.",
    "The program is structured to deepen the technical and practical skills of pilots through rigorous training that includes both classroom instruction and significant flight time. Pilots will learn to perform complex maneuvers, manage commercial flight operations, and respond adeptly to challenging flying conditions. The goal is to ensure that each pilot not only meets but exceeds the stringent standards set by the aviation industry.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      "Private Pilot Certificate: Must already hold a Private Pilot Certificate, which is the foundational certification for all higher aviation training.",
      "Instrument Rating: Must hold an Instrument Rating to ensure proficiency in navigating under IFR (Instrument Flight Rules), a necessary skill for commercial flight operations.",
      "Flight Hours: Must have logged a required number of total flight hours, including pilot-in-command time under VFR and IFR conditions.",
      "Medical Certificate: Must possess a current Class 1 medical certificate issued by an FAA-certified aviation medical examiner, ensuring fitness to fly at the commercial level.",
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      "Initial Consultation: Returning students are encouraged to consult with High Tide Aviation instructors to review their flight records and discuss career objectives.",
      "Training Plan Customization: Tailor your commercial pilot training plan based on previous experience and future goals, ensuring a focused and efficient learning path.",
      "Training Program Initiation: Start your training, focusing on both theoretical knowledge and practical flying skills required for commercial pilot certification.",
    ],
  },
  tiers: {
    southport: [
      {
        name: "Commercial Pilot",
        id: "tier-commercial-pilot",
        href: "#",
        price: "$27,725",
        description:
          "*Assumes student already holds a private pilot license and instrument rating",
        features: [
          "150 hours solo flight time (Cessna 172)",
          "20 hours of ground instruction",
          "FAA Written Exam",
          "Required supplies",
          "Final check ride evaluation",
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
        name: "Commercial Pilot",
        id: "tier-commercial-pilot-simons",
        href: "#",
        price: "$27,725",
        description:
          "*Assumes student already holds a private pilot license and instrument rating",
        features: [
          "150 hours solo flight time (Cessna 172)",
          "20 hours of ground instruction",
          "FAA Written Exam",
          "Required supplies",
          "Final check ride evaluation",
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
      heading: "Flight Instructor",
      subheading: "Train the Next Class",
      description:
        "Interested in training the next class of pilots? Perhaps you want to give back to the community that trained you? Become a CFI, CFII, & MEI with High Tide.",
      imagePath: "/src/assets/flight-program-3.jpg",
      url: "/flight-training/flight-instructor",
    },
    {
      heading: "Multi-Engine Rating",
      subheading: "Fly Multi Engine Aircraft",
      description:
        "Expand your aircraft selection by training with High Tide Aviation for your Multi Engine Rating with our Beech Baron B55s.",
      imagePath: "/src/assets/beech-baron-b55-front.jpg",
      url: "/flight-training/multi-engine",
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