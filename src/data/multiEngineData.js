const privatePilot = {
  bannerImagePath:
    "/src/assets/beech-baron-in-front-of-high-tide-aviation-hangar.jpg",
  imagePath: "/src/assets/multiengine-plane-at-high-tide-aviation.jpg",
  alt: "Beech Baron B55 in front of High Tide Aviation hangar",
  programName: "Multi-Engine Rating",
  siteDescription:
    "Master the skills to fly multi-engine aircraft with High Tide Aviation’s Multi-Engine Training Program. Available in Southport, St Simons Island, and Wilmington, our course provides hands-on instruction in advanced aerodynamics, engine management, and emergency protocols. Whether you’re looking to expand your career opportunities or enhance your flying abilities, our program prepares you for success.",
  title: "Multi-Engine Rating | High Tide Aviation",
  subtitle: "What is a Multi-Engine Rating?",
  locations: ["Southport, NC", "St Simons Island, GA", "Wilmington, NC"],
  description: [
    "A Multi-Engine Rating certifies pilots to operate aircraft with more than one engine, enhancing their flight capabilities and opening opportunities in a variety of aviation sectors, including commercial and cargo transport. High Tide Aviation offers multi-engine training in the Baron B55, equipped with a G500 glass panel. This training allows pilots to experience the added performance and safety of flying multi-engine aircraft under both VFR and IFR conditions. The course focuses on the complexities associated with managing multiple engines, which include increased power, different handling characteristics during normal and emergency operations, and advanced navigation techniques.",
    "The training for a Multi-Engine Rating includes detailed instruction on preflight procedures, airport operations, multi-engine aerodynamics, engine failure protocols, and high-altitude operations, among others. Typically, pilots require about 10 hours of flight training to prepare for the practical checkride, which includes an oral exam but no written test. High Tide Aviation's program is designed to be intensive and fast-paced, ideally completed over 1-2 weeks to ensure that pilots retain the skills and knowledge they acquire.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      {
        heading: "Current Pilot Certificate",
        description: "Must already hold at least a Private Pilot Certificate.",
      },
      {
        heading: "FAA Medical",
        description: "Must have a valid FAA medical certificate.",
      },
      {
        heading: "Previous Flight Experience",
        description:
          "Should have a fundamental understanding of single-engine aircraft operations to build upon with multi-engine techniques.",
      },
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      {
        heading: "Initial Assessment",
        description:
          "Conduct an initial assessment with High Tide Aviation to discuss your current certification level and aviation goals.",
      },
      {
        heading: "Tailored Training Schedule",
        description:
          "Set up a training schedule that fits within the 1-2 week intensive course framework, designed to maximize learning retention and skill acquisition.",
      },
      {
        heading: "Hands-On Training",
        description:
          "Begin your multi-engine flight training in the Baron B55, focusing on mastering the skills necessary to safely operate multi-engine aircraft.",
      },
    ],
  },
  tiers: {
    southport: [
      {
        name: "Multi-Engine Rating",
        id: "tier-multi-engine-rating",
        href: "#",
        price: "$3,900",
        description:
          "Dual training in the Baron B55 ($650/hr wet); completion is based on proficiency rather than hourly minimums",
        features: [
          "Training in Baron B55 with dual engines for enhanced performance and safety",
          "Curriculum includes VFR and IFR operations as a certificate add-on",
          "Training covers preflight, airport operations, takeoffs, landings, and navigation",
          "Emergency and high-altitude operations included",
          "No written exam; oral exam and practical checkride required",
          "Average time to completion is 10-12 hours; some students have done it in 5-6 (reflected in the starting pricing)",
        ],
        featured: false,
        cta: "Start Your Multi-Engine Training",
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
      heading: "Commercial Pilot",
      subheading: "Fly for Your Career",
      description:
        "No matter how far you want to venture down the pilot career path, it all starts here.",
      imagePath: "/src/assets/commercial-pilot-discussing-flight-plans.jpg",
      url: "/flight-training/commercial-pilot",
    },
    {
      heading: "Flight Instructor",
      subheading: "Train the Next Class",
      description:
        "Interested in training the next class of pilots? Perhaps you want to give back to the community that trained you? Become a CFI, CFII, & MEI with High Tide.",
      imagePath: "/src/assets/high-tide-aviation-team-of-cfis-talking.jpg",
      url: "/flight-training/flight-instructor",
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
    url: "/about/fleet-rentals/#advanced-aircraft",
    text: "Meet our Beech Barons",
  },
};

export default privatePilot;
