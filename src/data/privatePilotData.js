const privatePilot = {
  imagePath: "/src/assets/ground-school.webp",
  title: "Private Pilot",
  locations: ["Southport NC", "St.Simons Island GA"],
  description: [
    "A Private Pilot Certificate is the first significant step for individuals aspiring to pilot aircraft. It authorizes the holder to operate aircraft for personal and business purposes under visual flight rules (VFR), which require clear weather conditions where the pilot must be able to see where the aircraft is going. This certification opens up new horizons, allowing pilots to fly single-engine aircraft during the day or night, provided they stay out of commercial airspace and adhere to all aviation regulations.",
    "The journey to obtaining a Private Pilot Certificate involves rigorous training, both practical and theoretical. Candidates must complete a minimum number of flying hours and pass a series of written exams that test their understanding of aircraft operations, navigation, weather, and aviation law. The training equips pilots with the necessary skills to handle an aircraft safely, understand weather impacts on flying, and make informed decisions in real-time flying situations. Ultimately, this certification lays the foundational skills for all advanced pilot training.",
  ],
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
};

export default privatePilot;
