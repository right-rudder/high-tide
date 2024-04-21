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
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      "Medical Certificate: All trainees must have a current FAA medical certificate.",
      "Prior Certification: Each higher level of certification requires the pilot to have completed the previous certificates; for instance, a Commercial Pilot certificate requires a Private Pilot certificate and an Instrument Rating.",
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      "Initial Consultation: Discuss your aviation goals and evaluate your current qualifications with our instructors.",
      "Training Plan Customization: Based on your existing skills and certification goals, we tailor a training program to meet your needs.",
      "Engagement in Practical Training: Begin your hands-on training, progressing through each certification level with focused instruction on both flying and ground subjects.",
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
    simons: [],
  },
};

export default privatePilot;
