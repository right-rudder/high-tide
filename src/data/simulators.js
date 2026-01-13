export const redbirdFMXData = {
  overview: {
    title: "Redbird FMX Flight Simulator",
    subtitle: "Advanced Training Device (AATD)",
    description: [
      "Take your flying skills to the next level with the Redbird FMX Flight Simulator at High Tide Aviation.",
      "Designed for pilots of all experience levels, the Redbird FMX allows you to practice procedures, master maneuvers, and maintain proficiency in a safe, controlled environment.",
      "The FAA permits many simulator sessions to be logged for training credit, instrument currency, and proficiency requirements.",
    ],
    hourlyRateWithoutPlan: 85,
  },

  packagePlans: [
    {
      rating: "Private",
      hoursIncluded: "Unlimited",
      instructorRate: 55,
      packageCost: 900,
    },
    {
      rating: "Instrument",
      hoursIncluded: 20,
      instructorRate: 65,
      packageCost: 1500,
    },
    {
      rating: "Commercial",
      hoursIncluded: 50,
      instructorRate: 65,
      packageCost: 3000,
    },
  ],

  loggableHours: {
    part61: [
      {
        rating: "Private Pilot",
        maxLoggableHours: 2.5,
        instructorRequired: true,
        reference: "14 CFR 61.109(k)(1)",
      },
      {
        rating: "Instrument Rating",
        maxLoggableHours: 20,
        instructorRequired: true,
        reference: "14 CFR 61.65",
      },
      {
        rating: "Commercial Pilot",
        maxLoggableHours: 50,
        instructorRequired: true,
        reference: "14 CFR 61.129",
      },
    ],
    part141: [
      {
        rating: "Private Pilot",
        maxPercentage: "Up to 15%",
        maxHours: 5.25,
      },
      {
        rating: "Instrument Rating",
        maxPercentage: "Up to 40%",
        maxHours: 14,
      },
      {
        rating: "Commercial Pilot",
        maxPercentage: "Up to 20%",
      },
    ],
  },

  notes: [
    "All simulator sessions must be scheduled through Flight Circle.",
    "Simulator package rates do not include instructor fees.",
    "Checkouts and any additional CFI or loggable time are an additional cost.",
  ],

  faq: {
    general: [
      {
        question: "Is the Redbird FMX an AATD or BATD?",
        answer:
          "The Redbird FMX is an Advanced Aircraft Training Device (AATD), which allows for higher-fidelity training and more loggable time than a BATD.",
      },
      {
        question: "Can Redbird simulator time count toward ATP requirements?",
        answer:
          "Yes, simulated instrument time in an FAA-approved AATD can count toward ATP requirements if logged in accordance with the simulator’s LOA. However, many airlines prefer simulated instrument time completed in the aircraft.",
      },
      {
        question: "Can I use the Redbird FMX for instrument recency?",
        answer:
          "Yes. The Redbird FMX may be used to meet instrument recency requirements under 14 CFR 61.57(c), including approaches, holds, and tracking. An instructor is not required.",
      },
      {
        question:
          "Can I complete an Instrument Proficiency Check (IPC) in the simulator?",
        answer:
          "Partially. The Redbird FMX can be used for many IPC elements, but circling approaches, landings from instrument approaches, and certain aircraft-specific performance items must be completed in the aircraft.",
      },
    ],

    logging: [
      {
        question: "How should I log aircraft type and tail number?",
        answer:
          "Log the aircraft type as 'Redbird FMX' and use the tail number displayed on the simulator (e.g., 172 RB or 172HT). List the airport as High Tide Aviation.",
      },
      {
        question: "How do I log simulator time for a Part 61 Private Pilot?",
        answer:
          "You may log up to 2.5 hours. Time must be logged under simulator time and dual received, as an instructor must be present.",
      },
      {
        question:
          "How do I log simulator time for Part 61 Instrument training?",
        answer:
          "Log the time the same way as private pilot requirements. An authorized instructor must be present, and the time is logged as instrument training.",
      },
      {
        question: "How do I log simulator time toward Commercial requirements?",
        answer:
          "Simulator time is not logged as total flight time or PIC time. It is logged as instruction received and entered accordingly on the 8710 during the checkride.",
      },
      {
        question: "How do I log simulator time for instrument currency?",
        answer:
          "Log simulator time, simulated instrument time, number/type of approaches, and holds. Weather must remain in simulated IMC until minimums. An instructor is not required.",
      },
    ],
  },
};
