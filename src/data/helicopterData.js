const privatePilot = {
  bannerImagePath: "/src/assets/high-tide-r44-helicopter-in-southport-nc.jpg",
  imagePath: "/src/assets/r44-helicopter-at-high-tide-aviation.jpg",
  alt: "High Tide Aviation R44 helicopter in Southport, NC.",
  programName: "Helicopter",
  siteDescription:
    "Advance your aviation career with High Tide Aviation’s Advanced Helicopter Training. We offer Instrument, Commercial, and CFI ratings for existing pilots in Southport, St Simons Island, and Wilmington.",
  title: "Advanced Helicopter Training | High Tide Aviation",
  subtitle:
    "Advanced Helicopter Ratings & Certificates",
  locations: ["Southport, NC"],
  description: [
    "High Tide Aviation in Southport, NC offers specialized advanced helicopter training programs for pilots looking to add ratings or pursue professional aviation careers. Our curriculum focuses on advanced certifications including Instrument Rating, Commercial Pilot Certificate, and Certified Flight Instructor (CFI/CFII) programs.",
  ],
  programs: [
    {
      title: "Instrument Rating",
      description:
        "This rating is crucial for pilots who wish to fly under instrument flight rules (IFR). It enhances a pilot's ability to fly in various weather conditions and is a prerequisite for most professional helicopter flying jobs. The program typically requires 40 hours of dual instruction focused on navigating with flight instruments.",
    },
    {
      title: "Commercial Pilot Helicopter Certificate",
      description:
        "Aimed at those who wish to pursue a career in helicopter flying, this certification requires more advanced training. Pilots learn complex maneuvers and professional conduct to operate helicopters safely and efficiently for commercial purposes.",
    },
    {
      title:
        "Certified Flight Instructor (CFI) / Certified Flight Instructor Instrument (CFII)",
      description:
        "These certifications allow pilots to teach others. The CFI program focuses on developing a pilot’s ability to instruct students in flying helicopters, while the CFII adds the capacity to teach instrument flying.",
    },
  ],
  prerequisites: {
    subtitle: "Please ensure you meet these before beginning your advanced training:",
    list: [
      {
        heading: "Existing Pilot Certificate",
        description: "Must hold at least a Private Pilot Airplane (for add-on) or Helicopter certificate.",
      },
      {
        heading: "FAA Medical Certificate Obtained",
        description: "Valid FAA medical certificate required.",
      },
      {
        heading: "Helicopter Ground School",
        description:
          "Completion of the relevant advanced ground school modules.",
      },
    ],
  },
  enrollmentProcess: {
    subtitle:
      "To start your advanced helicopter training at High Tide Aviation, follow these simple steps:",
    list: [
      {
        heading: "Consultation",
        description:
          "Contact us to discuss your current flight hours and training goals.",
      },
      {
        heading: "Meet the Prerequisites",
        description:
          "Ensure you have a current FAA medical certificate and your existing pilot logbooks ready for review.",
      },
      {
        heading: "Registration",
        description:
          "Complete the enrollment process and schedule your first block of R-44 instruction.",
      },
    ],
  },
  tiers: {
    southport: [
      {
        name: "Helicopter Instrument Rating",
        id: "tier-helicopter-instrument-rating",
        href: "#",
        price: "$36,000",
        description: "Elevate your helicopter piloting skills.",
        features: [
          "40 hours of dual instruction in R-44",
          "Optional ground instruction",
          "Includes books, FAA written exam, and checkride",
          "Subsidized Cost for Airplane Instrument-Rated Pilots: $20,925",
        ],
        featured: false,
        cta: "Enroll Now",
      },
      {
        name: "Commercial Pilot Helicopter Certificate",
        id: "tier-commercial-pilot-helicopter",
        href: "#",
        price: "$43,000",
        description: "Take the next step in your helicopter flying career.",
        features: [
          "60 hours of dual instruction in R-44",
          "Optional ground instruction",
          "Includes books, FAA written exam, and checkride",
          "For Airplane Commercial Pilots Adding Helicopter Rating: $36,050",
        ],
        featured: false,
        cta: "Enroll Now",
      },
      {
        name: "Helicopter Certified Flight Instructor",
        id: "tier-helicopter-cfi-cfii",
        href: "#",
        price: "$14,000",
        description: "Training available for both CFI and CFII.",
        features: [
          "15 hours of dual instruction in R-44",
          "Optional 20 hours of ground instruction",
          "Includes books, FAA written exams, and checkride",
        ],
        featured: false,
        cta: "Enroll Now",
      },
    ],
    simons: [],
  },
  futurePathways: [
    {
      heading: "Airplane Training",
      subheading: "Expand Your Fleet",
      description:
        "Already a helicopter pilot? Add an Airplane rating to your certificate and increase your versatility as a pilot.",
      imagePath: "/src/assets/tow-pilots-in-cockpit.jpg",
      url: "/flight-training/private-pilot",
    },
    {
      heading: "Rentals",
      subheading: "Rent a Helicopter",
      description:
        "Want to fly on your own? Visit our fleet page to explore your options for renting our R-44 aircraft.",
      imagePath: "/src/assets/r44-helicopter-and-pilot.jpg",
      url: "/about/fleet-rentals",
    },
  ],
  meet: {
    url: "/about/fleet-rentals/#N570H",
    text: "Meet the Robinson 44",
  },
};

export default privatePilot;