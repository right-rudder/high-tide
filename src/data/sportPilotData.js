const sportPilotData = {
  bannerImagePath: "/src/assets/cessna-172-flying-over-st-simons-island.jpg", // Reusing a likely existing asset
  imagePath: "/src/assets/private-pilot-sits-in-multi-engine-plane.jpg", // Reusing a likely existing asset
  alt: "Student pilot training in a Cessna 172 at High Tide Aviation",
  programName: "Sport Pilot",
  siteDescription:
    "Start flying sooner with High Tide Aviation's Sport Pilot Training Program. Designed for aviation enthusiasts, this program allows you to earn your certificate with fewer hours and simplified medical requirements compared to private pilot training. Train in Southport, NC, St. Simons Island, GA, or Wilmington, NC.",
  title: "Sport Pilot Certificate | High Tide Aviation",
  subtitle: "Fly for the Fun of It",
  locations: ["Southport, NC", "St Simons Island, GA", "Wilmington, NC"],
  description: [
    "The Sport Pilot Certificate is the perfect entry point for aviation enthusiasts looking to fly light aircraft for personal enjoyment. It offers a streamlined pathway to the skies, requiring fewer training hours than a Private Pilot License while still ensuring you master essential aeronautical knowledge and safety standards.",
    "High Tide Aviation’s Sport Pilot program follows FAA Part 61.313 minimums but is built around a realistic training plan to ensure true checkride readiness. Our syllabus focuses on mastery of basic maneuvers, safe takeoffs and landings, and sound aeronautical judgment.",
    "One of the distinct advantages of the Sport Pilot certificate is the medical requirement; in many cases, a valid U.S. driver's license can be used in lieu of an FAA medical certificate. This makes it an accessible option for those who want to experience the freedom of flight in day VFR conditions.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      {
        heading: "Age Requirement",
        description:
          "You must be at least 17 years old to be issued a Sport Pilot certificate (training can begin earlier).",
      },
      {
        heading: "Language",
        description:
          "Must be able to read, speak, write, and understand the English language.",
      },
      {
        heading: "Medical Eligibility",
        description:
          "Must hold either a valid U.S. Driver's License or a current FAA Airman Medical Certificate.",
      },
      {
        heading: "Citizenship",
        description:
          "U.S. citizens must provide proof of citizenship (Passport or Birth Certificate). Non-citizens must complete TSA registration prior to flight training.",
      },
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to earn your wings? Here is how to get started:",
    list: [
      {
        heading: "Initial Consultation",
        description:
          "Contact High Tide Aviation to schedule a visit, meet our instructors, and discuss your aviation goals.",
      },
      {
        heading: "Discovery Flight",
        description:
          "Take an introductory flight to experience the aircraft and ensure the Sport Pilot path is right for you.",
      },
      {
        heading: "Begin Training",
        description:
          "Start your Phase 1 training, focusing on foundations and airmanship in our Cessna 172 fleet.",
      },
    ],
  },
  tiers: {
    southport: [
      {
        name: "Sport Pilot Certificate",
        id: "tier-sport-pilot",
        href: "/enrollment-form",
        price: "$6,505",
        unitPrice: "Estimated Total",
        description:
          "Based on a realistic 32-hour training plan to reach proficiency (FAA minimum is 20 hours).",
        features: [
          "Phase 1: Foundations & Airmanship (8 Dual Hrs)",
          "Phase 2: Maneuvers & Emergency Training (8 Dual Hrs)",
          "Phase 3: Solo Prep & First Solo (4 Dual, 3 Solo Hrs)",
          "Phase 4: Cross Country Requirements (3 Dual, 2 Solo Hrs)",
          "Phase 5: Checkride Prep (3 Dual, 2 Ground Hrs)",
        ],
        nonfeatures: [
          "FAA Knowledge Test (~$175)",
          "Examiner Fee (~$600-$900)",
        ],
        featured: true,
        cta: "Enroll Now",
      },
    ],
    // Copying southport data to simons key to ensure it renders if location toggles default
    simons: [
      {
        name: "Sport Pilot Certificate",
        id: "tier-sport-pilot-ga",
        href: "/enrollment-form",
        price: "$6,505",
        unitPrice: "Estimated Total",
        description:
          "Based on a realistic 32-hour training plan to reach proficiency (FAA minimum is 20 hours).",
        features: [
          "Phase 1: Foundations & Airmanship (8 Dual Hrs)",
          "Phase 2: Maneuvers & Emergency Training (8 Dual Hrs)",
          "Phase 3: Solo Prep & First Solo (4 Dual, 3 Solo Hrs)",
          "Phase 4: Cross Country Requirements (3 Dual, 2 Solo Hrs)",
          "Phase 5: Checkride Prep (3 Dual, 2 Ground Hrs)",
        ],
        nonfeatures: [
          "FAA Knowledge Test (~$175)",
          "Examiner Fee (~$600-$900)",
        ],
        featured: true,
        cta: "Enroll Now",
      },
    ],
  },
  futurePathways: [
    {
      heading: "Private Pilot",
      subheading: "Upgrade Your License",
      description:
        "Ready to fly at night or with more passengers? Your Sport Pilot hours count toward your Private Pilot Certificate.",
      imagePath: "/src/assets/cessna-172-flying-over-st-simons-island.jpg",
      url: "/flight-training/private-pilot",
    },
    {
      heading: "Rentals",
      subheading: "Fly on Your Own",
      description:
        "Once certified, visit our fleet page to explore options for renting aircraft to fly for fun.",
      imagePath: "/src/assets/fleet-n7085g-exterior-photo-aircraft-renting-north-carolina.jpg",
      url: "/about/fleet-rentals",
    },
    {
      heading: "Instrument Rating",
      subheading: "Advance Your Skills",
      description:
        "Looking to fly in more weather conditions? Move on to Private and then add an Instrument Rating.",
      imagePath: "/src/assets/beech-baron-b55-front.jpg",
      url: "/flight-training/instrument-rating",
    },
  ],
  meet: {
    url: "/about/fleet-rentals/#fleet",
    text: "Meet our Fleet",
  },
};

export default sportPilotData;