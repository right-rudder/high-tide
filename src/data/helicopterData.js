const privatePilot = {
  imagePath: "/src/assets/helicopter.jpg",
  title: "Helicopter",
  subtitle:
    "What are the Different Levels of Helicopter Training Certificates?",
  locations: ["Southport NC", "St.Simons Island GA"],
  description: [
    "High Tide Aviation in Southport, NC offers a complete progression of helicopter training programs that cater to aspiring pilots at various stages of their aviation careers. Each level of certification builds upon the previous one, starting from the foundational Private Pilot Certificate to more advanced certifications such as the Instrument Rating and Commercial Pilot Certificate, and culminating in the Certified Flight Instructor (CFI) and Certified Flight Instructor – Instrument (CFII) certifications.",
    "Private Pilot Helicopter Certificate: This initial certification allows individuals to fly helicopters for personal use and lays the groundwork for all subsequent aviation training. It requires at least 40 hours of flight time, which includes 30 hours of dual instruction and 10 hours of solo flight. Trainees also undergo ground instruction to cover essential aviation topics such as aerodynamics, navigation, and weather conditions.",
    "Instrument Rating: This rating is crucial for pilots who wish to fly under instrument flight rules (IFR). It enhances a pilot's ability to fly in various weather conditions and is a prerequisite for most professional helicopter flying jobs. The program typically requires 47 hours of dual instruction focused on navigating with flight instruments.",
    "Commercial Pilot Helicopter Certificate: Aimed at those who wish to pursue a career in helicopter flying, this certification requires more advanced training. Pilots learn complex maneuvers and professional conduct to operate helicopters safely and efficiently for commercial purposes. A minimum of 150 hours of flight time is necessary, with specific hours dedicated to pilot-in-command time and cross-country flying.",
    "Certified Flight Instructor (CFI) / Certified Flight Instructor Instrument (CFII): These certifications allow pilots to teach others. The CFI program focuses on developing a pilot’s ability to instruct students in flying helicopters, while the CFII adds the capacity to teach instrument flying. This level of certification is essential for pilots who wish to contribute to aviation education and mentor new pilots entering the field.",
  ],
  prerequisites: {
    subtitle: "Please ensure you meet these before beginning your training:",
    list: [
      {
        heading: "Graduation from Helicopter Ground School",
        description: "Completion of the helicopter ground school program.",
      },
      {
        heading: "FAA Medical Certificate Obtained",
        description: "Obtaining a medical certificate from the FAA.",
      },
      {
        heading: "Prior Certificates/Licenses Complete",
        description:
          "Completion of any prior certificates or licenses required.",
      },
    ],
  },
  enrollmentProcess: {
    subtitle:
      "To start your helicopter training at High Tide Aviation, follow these simple steps:",
    list: [
      {
        heading: "Meet the Prerequisites",
        description:
          "Ensure you have a current FAA medical certificate and at least a private pilot certificate if enrolling for advanced courses.",
      },
      {
        heading: "Consultation",
        description:
          "Contact us to discuss your training needs and schedule a visit.",
      },
      {
        heading: "Registration",
        description:
          "Complete the enrollment process, and you’re ready to begin.",
      },
    ],
  },
  tiers: {
    southport: [
      {
        name: "Private Pilot Helicopter Certificate",
        id: "tier-private-pilot-helicopter",
        href: "#",
        price: "$27,762",
        description: "The foundation of your helicopter flying journey.",
        features: [
          "30 hours of dual instruction in R-44",
          "10 hours solo flight in R-44",
          "Optional 40 hours of ground instruction",
          "Includes books, FAA written exam, and checkride",
          "For Airplane Certificate Holders: $21,762",
        ],
        featured: false,
        cta: "Enroll in Private Pilot Program",
      },
      {
        name: "Helicopter Instrument Rating",
        id: "tier-helicopter-instrument-rating",
        href: "#",
        price: "$32,425",
        description: "Elevate your helicopter piloting skills.",
        features: [
          "47 hours of dual instruction in R-44",
          "Optional ground instruction",
          "Includes books, FAA written exam, and checkride",
          "Subsidized Cost for Airplane Instrument-Rated Pilots: $20,925",
        ],
        featured: false,
        cta: "Enroll in Instrument Rating Program",
      },
      {
        name: "Commercial Pilot Helicopter Certificate",
        id: "tier-commercial-pilot-helicopter",
        href: "#",
        price: "$39,200",
        description: "Take the next step in your helicopter flying career.",
        features: [
          "60 hours of dual instruction in R-44",
          "Optional ground instruction",
          "Includes books, FAA written exam, and checkride",
          "For Airplane Commercial Pilots Adding Helicopter Rating: $36,050",
        ],
        featured: false,
        cta: "Enroll in Commercial Pilot Program",
      },
      {
        name: "Helicopter Certified Flight Instructor (CFI) & CFII Certificates",
        id: "tier-helicopter-cfi-cfii",
        href: "#",
        price: "$12,400",
        description: "Take the next step in your helicopter flying career.",
        features: [
          "15 hours of dual instruction in R-44",
          "Optional 20 hours of ground instruction",
          "Includes books, FAA written exams, and checkride",
        ],
        featured: false,
        cta: "Enroll in CFI Program",
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
      heading: "Intro Flights",
      subheading: "Try Out Our Airplanes",
      description:
        "Curious about to go up in an airplane with us? We offer intro flights for our students to try out fixed-wing aircraft training too.",
      imagePath: "/src/assets/tow-pilots-in-cockpit.jpg",
      url: "/first-time-pilots",
    },
    {
      heading: "Private Pilot",
      subheading: "Start Your Journey",
      description:
        "Now that you have your helicopter license, why not try out our fixed-wing aircraft?",
      imagePath: "/src/assets/flight-program-1.jpg",
      url: "/flight-training/private-pilot",
    },
    {
      heading: "Rentals",
      subheading: "Rent a Helicopter",
      description:
        "Want to fly on your own? Visit our fleet page to explore your options for renting aircraft with High Tide Aviation.",
      imagePath: "/src/assets/r44-helicopter-and-pilot.jpg",
      url: "/about/fleet-rentals",
    },
  ],
};

export default privatePilot;
