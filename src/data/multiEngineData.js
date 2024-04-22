const privatePilot = {
  imagePath: "/src/assets/multi-engine.jpg",
  title: "Multi-Engine Rating",
  subtitle: "What is a Multi-Engine Rating?",
  locations: ["Southport NC"],
  description: [
    "A Multi-Engine Rating certifies pilots to operate aircraft with more than one engine, enhancing their flight capabilities and opening opportunities in a variety of aviation sectors, including commercial and cargo transport. High Tide Aviation, located in Southport, NC, offers multi-engine training in the Baron B55, equipped with a G500 glass panel. This training allows pilots to experience the added performance and safety of flying multi-engine aircraft under both VFR and IFR conditions. The course focuses on the complexities associated with managing multiple engines, which include increased power, different handling characteristics during normal and emergency operations, and advanced navigation techniques.",
    "The training for a Multi-Engine Rating includes detailed instruction on preflight procedures, airport operations, multi-engine aerodynamics, engine failure protocols, and high-altitude operations, among others. Typically, pilots require about 10 hours of flight training to prepare for the practical checkride, which includes an oral exam but no written test. High Tide Aviation's program is designed to be intensive and fast-paced, ideally completed over 1-2 weeks to ensure that pilots retain the skills and knowledge they acquire.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      "Current Pilot Certificate: Must already hold at least a Private Pilot Certificate.",
      "FAA Medical: Must have a valid FAA medical certificate.",
      "Previous Flight Experience: Should have a fundamental understanding of single-engine aircraft operations to build upon with multi-engine techniques.",
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      "Initial Assessment: Conduct an initial assessment with High Tide Aviation to discuss your current certification level and aviation goals.",
      "Tailored Training Schedule: Set up a training schedule that fits within the 1-2 week intensive course framework, designed to maximize learning retention and skill acquisition",
      "Engage in Hands-On Training: Begin your multi-engine flight training in the Baron B55, focusing on mastering the skills necessary to safely operate multi-engine aircraft.",
    ],
  },
  tiers: {
    southport: [
      {
        name: "Multi-Engine Rating",
        id: "tier-multi-engine-rating",
        href: "#",
        price: "$600",
        unitPrice: "/per hour",
        description: "Dual training in the Baron B55",
        features: [
          "Training in Baron B55 with dual engines for enhanced performance and safety",
          "Curriculum includes VFR and IFR operations as a certificate add-on",
          "Training covers preflight, airport operations, takeoffs, landings, and navigation",
          "Emergency and high-altitude operations included",
          "No written exam; oral exam and practical checkride required",
          "Typically requires about 10 hours of training for checkride readiness",
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
    simons: [
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
      heading: "Commercial Pilot",
      subheading: "Fly for Your Career",
      description:
        "No matter how far you want to venture down the pilot career path, it all starts here.",
      imagePath: "/src/assets/flight-program-2.jpg",
      url: "/flight-training/commercial-pilot",
    },
    {
      heading: "Flight Instructor",
      subheading: "Train the Next Class",
      description:
        "Interested in training the next class of pilots? Perhaps you want to give back to the community that trained you? Become a CFI, CFII, & MEI with High Tide.",
      imagePath: "/src/assets/flight-program-3.jpg",
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
};

export default privatePilot;
