const privatePilot = {
  bannerImagePath:
    "/src/assets/cfi-and-student-at-high-tide-aviation-southport-nc.jpg",
  imagePath:
    "/src/assets/cfi-and-student-pilot-in-beech-baron-b55-at-high-tide-aviation.jpg",
  alt: "CFI and student pilot in Beech Baron B55 at High Tide Aviation.",
  title: "Flight Instructor",
  subtitle: "What is a CFI/CFII?",
  locations: ["Southport, NC", "St Simons Island, GA"],
  description: [
    "A Certified Flight Instructor (CFI) certificate authorizes pilots to teach aspiring aviators the skills needed to become pilots themselves, while a Certified Flight Instructor – Instrument (CFII) allows instructors to teach instrument flying. Both certifications are crucial for pilots who wish to advance their careers in aviation education, enabling them to provide training for Private, Commercial, and Instrument Rating certifications. High Tide Aviation in Southport, NC, and St Simons Island, GA, offers extensive training for these credentials, ensuring instructors are well-prepared to educate new pilots under varying flight conditions.",
    "The CFI program focuses on developing a pilot’s ability to teach theory, flight techniques, and safety procedures in single-engine aircraft, while the CFII program extends these teaching capabilities to include instrument flying. These programs are designed not only to pass on knowledge but also to enhance the communication and leadership skills of the instructors. Candidates undergo rigorous practical training, learning to deliver instructions effectively and handle various in-flight situations. The pathway to these certifications requires a deep understanding of aviation theory, demonstrated flight proficiency, and successful completion of FAA written and practical exams.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      {
        heading: "Commercial Pilot Certificate with Instrument Rating",
        description:
          "Must have an existing Commercial Pilot Certificate and Instrument Rating, ensuring a complete understanding of advanced flying techniques and regulations.",
      },
      {
        heading: "Proficiency Check",
        description:
          "Must demonstrate teaching proficiency and a thorough understanding of pilot training curricula.",
      },
      {
        heading: "Medical Certificate",
        description: "Must possess a valid FAA medical certificate.",
      },
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      {
        heading: "Instructor Meeting",
        description:
          "Schedule a meeting with a senior CFI at High Tide Aviation to discuss your career goals and training objectives.",
      },
      {
        heading: "Customized Training Plan",
        description:
          "Develop a personalized training plan focusing on pedagogical skills and instructional techniques in both VFR and IFR conditions.",
      },
      {
        heading: "Official Enrollment",
        description:
          "Complete the formal enrollment and begin your instructor training, transitioning from being a pilot to becoming a mentor and leader in the aviation community.",
      },
    ],
  },
  tiers: {
    southport: [
      {
        name: "Certified Flight Instructor (CFI) Training",
        id: "tier-flight-instructor-cfi",
        href: "#",
        price: "$10,000",
        description: "*Pricing based on individual proficiency",
        features: [
          "Trains candidates for the role of a Certified Flight Instructor",
          "Focus on teaching methodologies and flight instruction principles",
          "Proficiency from the opposite seat emphasized",
          "Must hold a commercial license with an instrument rating",
          "FAA CFI and FOI Written Exams included",
          "Final check ride evaluation included",
        ],
        featured: false,
        cta: "Contact for CFI Program Details",
      },
      {
        name: "Certified Flight Instructor-Instrument (CFII) Training",
        id: "tier-flight-instructor-cfii",
        href: "#",
        price: "$5,000",
        description: "*Assumes pilot holds CFI certification",
        features: [
          "Trains candidates for the role of Certified Flight Instructor-Instrument",
          "Focus on teaching methodologies and instrument flight instruction principles",
          "Proficiency from the opposite seat emphasized",
          "Must hold a commercial license with an instrument rating",
          "FAA CFI and FOI Written Exams included",
          "Final check ride evaluation included",
        ],
        featured: false,
        cta: "Contact for CFI Program Details",
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
      heading: "More Ratings",
      subheading: "Continue Training",
      description:
        "Once you complete your CFI training, we offer programs to get you to CFII and MEI. Contact us for more information.",
      imagePath: "/src/assets/happy-high-tide-student.jpg",
      url: "/contact-us",
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
