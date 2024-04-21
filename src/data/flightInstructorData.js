const privatePilot = {
  imagePath: "/src/assets/flight-instructor.jpg",
  title: "Flight Instructor",
  subtitle: "What is a CFI/CFII?",
  locations: ["Southport NC", "St.Simons Island GA"],
  description: [
    "A Certified Flight Instructor (CFI) certificate authorizes pilots to teach aspiring aviators the skills needed to become pilots themselves, while a Certified Flight Instructor – Instrument (CFII) allows instructors to teach instrument flying. Both certifications are crucial for pilots who wish to advance their careers in aviation education, enabling them to provide training for Private, Commercial, and Instrument Rating certifications. High Tide Aviation in Southport, NC, and St. Simons Island, GA, offers extensive training for these credentials, ensuring instructors are well-prepared to educate new pilots under varying flight conditions.",
    "The CFI program focuses on developing a pilot’s ability to teach theory, flight techniques, and safety procedures in single-engine aircraft, while the CFII program extends these teaching capabilities to include instrument flying. These programs are designed not only to pass on knowledge but also to enhance the communication and leadership skills of the instructors. Candidates undergo rigorous practical training, learning to deliver instructions effectively and handle various in-flight situations. The pathway to these certifications requires a deep understanding of aviation theory, demonstrated flight proficiency, and successful completion of FAA written and practical exams.",
  ],
  prerequisites: {
    subtitle: "Before joining us, ensure you meet the following criteria:",
    list: [
      "Commercial Pilot Certificate with Instrument Rating: Must have an existing Commercial Pilot Certificate and Instrument Rating, ensuring a complete understanding of advanced flying techniques and regulations.",
      "Proficiency Check: Must demonstrate teaching proficiency and a thorough understanding of pilot training curricula.",
      "Medical Certificate: Must possess a valid FAA medical certificate.",
    ],
  },
  enrollmentProcess: {
    subtitle:
      "Ready to take the first step towards your aviation goals? Here's how:",
    list: [
      "Instructor Meeting: Schedule a meeting with a senior CFI at High Tide Aviation to discuss your career goals and training objectives.",
      "Customized Training Plan: Develop a personalized training plan focusing on pedagogical skills and instructional techniques in both VFR and IFR conditions.",
      "Official Enrollment: Complete the formal enrollment and begin your instructor training, transitioning from being a pilot to becoming a mentor and leader in the aviation community",
    ],
  },
  tiers: {
    southport: [
      {
        name: "Flight Instructor",
        id: "tier-flight-instructor",
        href: "#",
        price: "Custom",
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
        name: "Flight Instructor",
        id: "tier-flight-instructor-simons",
        href: "#",
        price: "Custom",
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
};

export default privatePilot;
