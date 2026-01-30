const groundSchool = {
  bannerImagePath: "/src/assets/ground-school-at-high-tide-aviation.jpg",
  imagePath: "/src/assets/ground-school.webp",
  alt: "Student and instructor reviewing flight charts in a classroom setting.",
  programName: "Ground School",
  siteDescription:
    "High Tide Aviation’s Ground School Training provides aspiring pilots with essential aeronautical knowledge, from flight operations and navigation to weather and FAA regulations. Our programs include immersive in-person classes in partnership with Brunswick Community College, location-based ground schools in North Carolina and Georgia, and flexible online training options — all designed to prepare students for FAA written exams and long-term success in aviation.",
  title: "Ground School | High Tide Aviation",
  subtitle: "What is Ground School?",
  locations: ["Southport, NC", "St Simons Island, GA", "Wilmington, NC"],

  description: [
    "High Tide Aviation's ground school is where your aviation journey begins. As the foundation of pilot training, ground school equips students with the essential knowledge required to become safe, confident pilots. Instruction is led by experienced aviation professionals who bring real-world flying insight into every lesson.",
    "Students explore core aviation subjects including aerodynamics, aircraft systems, navigation, weather interpretation, flight planning, radio communication, and Federal Aviation Regulations. Lessons are interactive and designed to ensure true understanding — not rote memorization.",
    "Upon completion, students are prepared to take the FAA knowledge (written) examination and move confidently into flight training. Whether your goal is recreational flying or a professional pilot career, ground school sets the stage for everything that follows.",
    "<strong>Please Note:</strong> We currently do not have any open enrollment for in-person ground school classes. Please check our online options below or contact us for one-on-one instruction availability.",
  ],

  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      {
        heading: "Minimum Age",
        description:
          "Must be at least 16 years old to enroll in ground school.",
      },
      {
        heading: "No Prior Experience Required",
        description:
          "This course is designed for beginners. No previous flight training is necessary.",
      },
    ],
  },

  enrollmentProcess: {
    subtitle:
      "Ready to take the first step toward your aviation goals? Here's how:",
    list: [
      {
        heading: "Choose Your Program",
        description:
          "Select the ground school option that best fits your goals — in-person, location-based, or online.",
      },
      {
        heading: "Reserve Your Seat",
        description:
          "In-person classes have limited enrollment. Registration closes automatically once full.",
      },
      {
        heading: "Get Started",
        description:
          "Complete your enrollment and begin building the knowledge needed to succeed as a pilot.",
      },
    ],
  },

  tiers: {
      southport: [
        {
          name: "Small Unmanned Aircraft Systems (Drones)",
          id: "tier-drones",
          url: "https://brunswickcc-register.fundfive.com/course/section/21399",
          price: "$125",
          schedule: "Offered during select semesters",
          features: [
            "Commercial and recreational drone operations",
            "Airspace, weather, and regulatory compliance",
            "Human factors and UAV performance",
            "Preparation for FAA Part 107 Remote Pilot exam",
          ],
          nonfeatures: ["Books and supplies not included"],
          featured: false,
          cta: "Start Drone Training",
        },

        {
          name: "One-on-One Ground School",
          id: "tier-one-on-one",
          href: "#",
          price: "Custom",
          description:
            "Personalized ground school instruction tailored to your schedule and goals.",
          features: [
            "Custom-paced instruction",
            "Flexible scheduling",
            "Direct instructor support",
          ],
          featured: false,
          cta: "Contact for Custom Quote",
        },
      ],

      simons: [
        {
          name: "One-on-One Ground School",
          id: "tier-one-on-one-simons",
          href: "#",
          price: "Custom",
          description:
            "Personalized ground school instruction in St Simons Island.",
          features: [
            "Flexible pacing",
            "Custom curriculum",
            "Instructor-led support",
          ],
          featured: false,
          cta: "Contact for Custom Quote",
        },
      ],

      online: [
        {
          name: "Online Private Pilot Ground School",
          id: "tier-private-pilot-online",
          href: "#",
          price: "$275",
          description:
            "Self-paced online ground school with instructor oversight and endorsement.",
          schedule: "Start anytime",
          features: [
            "Lifetime access",
            "One-time payment",
            "Interactive lessons",
            "Instructor monitoring",
            "FAA written endorsement included",
            "Pass guarantee",
          ],
          featured: false,
          cta: "Get Started",
          url: "https://hightideaviation.groundschool.com/",
        },
      ],
    },

  futurePathways: [
    {
      heading: "Private Pilot",
      subheading: "Start Your Journey",
      description:
        "Build on your ground school foundation and take your first steps into flight training.",
      imagePath: "/src/assets/commercial-pilot.jpg",
      url: "/flight-training/private-pilot",
    },
    {
      heading: "Commercial Pilot",
      subheading: "Fly for Your Career",
      description: "Turn your passion for aviation into a professional career.",
      imagePath: "/src/assets/commercial-pilot-discussing-flight-plans.jpg",
      url: "/flight-training/commercial-pilot",
    },
    {
      heading: "Flight Instructor",
      subheading: "Train the Next Class",
      description:
        "Become a CFI, CFII, or MEI and help shape the next generation of pilots.",
      imagePath: "/src/assets/high-tide-aviation-team-of-cfis-talking.jpg",
      url: "/flight-training/flight-instructor",
    },
  ],
};

export default groundSchool;
