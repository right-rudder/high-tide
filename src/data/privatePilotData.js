const privatePilot = {
  bannerImagePath:
    "/src/assets/private-pilot-in-front-of-cessna-172-skyhawk-st-simons-island-ga.jpg",
  imagePath: "/src/assets/private-pilot.jpg",
  title: "Private Pilot",
  subtitle: "What is a Private Pilot Certificate?",
  locations: ["Southport, NC", "St. Simons Island, GA"],
  description: [
    "A Private Pilot Certificate is the first significant step for individuals aspiring to pilot aircraft. It authorizes the holder to operate aircraft for personal and business purposes under visual flight rules (VFR), which require clear weather conditions where the pilot must be able to see where the aircraft is going. This certification opens up new horizons, allowing pilots to fly single-engine aircraft during the day or night, provided they stay out of commercial airspace and adhere to all aviation regulations.",
    "The journey to obtaining a Private Pilot Certificate involves rigorous training, both practical and theoretical. Candidates must complete a minimum number of flying hours and pass a series of written exams that test their understanding of aircraft operations, navigation, weather, and aviation law. The training equips pilots with the necessary skills to handle an aircraft safely, understand weather impacts on flying, and make informed decisions in real-time flying situations. Ultimately, this certification lays the foundational skills for all advanced pilot training.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      {
        heading: "Completion of Ground School",
        description:
          "Must have successfully completed the Ground School training to understand the theoretical aspects of flying.",
      },
      {
        heading: "Medical Certificate",
        description:
          "Obtain a Class 2 medical certificate from an FAA-certified aviation medical examiner.",
      },
      {
        heading: "Minimum Age",
        description:
          "Must be at least 17 years old to enroll in the Private Pilot training program.",
      },
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      {
        heading: "Meet Our Instructors",
        description:
          "Connect with High Tide’s private pilot experts in Southport, NC, and St. Simons Island, GA.",
      },
      {
        heading: "Tour Our Facilities",
        description:
          "Take an introductory flight and explore our training centers tailored for private pilots.",
      },
      {
        heading: "Begin Training",
        description:
          "Enroll at High Tide Aviation and start your journey to becoming a private pilot.",
      },
    ],
  },
  tiers: {
    southport: [
      {
        name: "Private Pilot",
        id: "tier-private-pilot",
        href: "#",
        price: "$9,525",
        description: "The foundation of your aviation journey.",
        features: [
          "30 hours of dual flight instruction (Cessna 172)",
          "10 hours of solo flight",
          "Required supplies",
          "FAA Written Test",
          "Access to IFR-certified aircraft",
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
        name: "Private Pilot",
        id: "tier-private-pilot-simons",
        href: "#",
        price: "$9,525",
        description: "Elevate your piloting skills by the coast.",
        features: [
          "30 hours of dual flight instruction (Cessna 172)",
          "10 hours of solo flight",
          "Required supplies",
          "FAA Written Test",
          "Access to IFR-certified aircraft",
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
      heading: "Instrument Rating",
      subheading: "Start Your Journey",
      description:
        "If you're new to flight training, we have the resources and training to help you earn your wings (and rotors).",
      imagePath: "/src/assets/instrument-rating.jpg",
      url: "/flight-training/instrument-rating",
    },
    {
      heading: "Multi-Engine Rating",
      subheading: "Fly Multi-Engine Aircraft",
      description:
        "Expand your aircraft selection by training with High Tide Aviation for your Multi-Engine Rating with our Beech Baron B55s.",
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
