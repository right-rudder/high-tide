const groundSchool = {
  bannerImagePath: "/src/assets/ground-school-at-high-tide-aviation.jpg",
  imagePath: "/src/assets/ground-school.webp",
  alt: "Student and instructor reviewing flight charts in a classroom setting.",
  programName: "Ground School",
  siteDescription:
    "High Tide Aviation’s Ground School Training provides aspiring pilots with essential knowledge on flight operations, navigation, weather patterns, and aviation regulations. Offered at our locations in Southport, St Simons Island, and Wallace, our comprehensive program prepares students for the FAA written exam and sets them up for success in their aviation career. Join us today and gain the foundational skills needed to become a skilled pilot!",
  title: "Ground School | High Tide Aviation",
  subtitle: "What is Ground School?",
  locations: ["Southport, NC", "St Simons Island, GA", "Wilmington, NC"],
  description: [
    "High Tide Aviation's ground school is where your aviation dreams take flight. As the first step in pilot training, our program equips you with the essential knowledge every pilot needs. Guided by our expert instructors - seasoned aviators themselves - you'll explore a wide range of subjects, from the principles of flight and aircraft operations to navigation, weather, flight planning, and federal regulations. Through interactive lessons and practical exercises, you'll learn to think and act like a pilot.",
    "Safety is paramount throughout your ground school experience. You'll not only master the technical skills, but also develop the confidence to operate an aircraft responsibly and confidently. Whether you're pursuing recreational flying or a professional pilot career, High Tide's ground school lays the groundwork for a lifetime of aviation success.",
    "Upon completion, you'll be fully prepared to ace the FAA written examination - a crucial milestone on your journey to a Private Pilot License (PPL). But this is more than just preparation for a test; it's an immersive experience that sets you on course for the skies.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      {
        heading: "Minimum Age",
        description:
          "Must be at least 16 years old to enroll in ground school.",
      },
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      {
        heading: "Choose Your Program",
        description:
          "Select the course that aligns with your aspirations, available in both North Carolina and Georgia.",
      },
      {
        heading: "Contact Us",
        description:
          "Call the team at High Tide Aviation to reserve your spot or pick up a registration form from our office.",
      },
      {
        heading: "Get Started",
        description:
          "Complete your enrollment and get ready for an incredible learning experience.",
      },
    ],
  },
  tiers: {
    southport: [
      {
        name: "Private Pilot",
        id: "tier-private-pilot",
        href: "#",
        price: "$180",
        description: "Your first step toward the skies.",
        schedule: "Offered every fall and spring semester",
        features: [
          "In-depth study of aerodynamics, weather, and navigation",
          "Understanding of instruments, preflight planning, and regulations",
          "Mastery of radio communications and flight procedures",
          "Preparedness for the FAA Private Pilot written exam",
        ],
        nonfeatures: ["Prices do not include books and supplies"],
        featured: false,
        cta: "Reserve Your Spot",
      },
      {
        name: "Instrument Rating",
        id: "tier-instrument-rating",
        href: "#",
        price: "$180",
        description: "Elevate your piloting with instrument mastery.",
        schedule: "Offered every fall and spring semester",
        features: [
          "Training for instrument rating status",
          "Courses on instrument flying and navigation systems",
          "Knowledge of Federal Aviation Regulations and aeromedical factors",
          "Preparedness for the FAA Instrument Pilot written exam",
        ],
        nonfeatures: ["Prices do not include books and supplies"],
        featured: false,
        cta: "Enroll Now",
      },
      {
        name: "Small Unmanned Aircraft Systems (Drones)",
        id: "tier-drones",
        href: "#",
        price: "$125",
        schedule: "Offered every fall and spring semester",
        features: [
          "Introduction to commercial and recreational drone uses",
          "Comprehension of regulations, weather, and airspace",
          "Focus on human factors and drone performance",
          "Preparation for the FAA Part 107 Remote Pilot Knowledge Test",
        ],
        nonfeatures: ["Prices do not include books and supplies"],
        featured: false,
        cta: "Start Drone Training",
      },
      {
        name: "One-on-One Ground School",
        id: "tier-one-on-one",
        href: "#",
        price: "Custom",
        description:
          "Contact us to set up your personalized ground school instruction in Southport or St Simons Island.",
        features: [
          "Full range of instruction available",
          "Cater ground school to your schedule",
          "Personalized support",
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
        price: "$550",
        description: "Embark on your aviation journey by the coast.",
        schedule: "Offered every fall and spring semester",
        features: [
          "Includes books and supplies",
          "Full-scale private pilot training",
          "Hands-on experience with weather, aerodynamics, and navigation",
          "Detailed study of flight regulations and communication",
          "Preparedness for the FAA Private Pilot written exam",
        ],
        featured: false,
        cta: "Join GA Ground School",
      },
      {
        name: "One-on-One Ground School",
        id: "tier-one-on-one-simons",
        href: "#",
        price: "Custom",
        description:
          "Contact us to set up your personalized ground school instruction in Southport or St Simons Island.",
        features: [
          "Full range of instruction available",
          "Cater ground school to your schedule",
          "Personalized support",
        ],
        featured: true,
        cta: "Contact for Custom Quote",
      },
    ],
    online: [
      {
        name: "Private Pilot",
        id: "tier-private-pilot-online",
        href: "#",
        price: "$299",
        discountedPrice: "$275",
        description: "Online ground school for aspiring pilots.",
        schedule: "Start anytime",
        features: [
          "Lifetime enrollment",
          "One-time Payment",
          "Interactive lessons",
          "Instructor monitoring",
          "FAA Written Endorsement",
          "Pass your exam GUARANTEED",
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
        "If you're new to flight training, we have the resources and training to help you earn your wings (and rotors).",
      imagePath: "/src/assets/commercial-pilot.jpg",
      url: "/flight-training/private-pilot",
    },
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
  ],
};

export default groundSchool;
