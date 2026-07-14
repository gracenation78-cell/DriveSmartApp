import { Course, QuizQuestion, RoadSign, PracticalSkill, InstructorProfile, Vehicle } from "./types";

export const COURSES: Course[] = [
  {
    id: "course-auto",
    title: "Complete Automatic Driving Certification",
    description: "Full preparation for the automatic transmission practical test and comprehensive theory. Includes defensive driving and highway lessons.",
    vehicleType: "Automatic",
    totalPracticalLessons: 15,
    totalTheoryClasses: 8,
    price: 499
  },
  {
    id: "course-manual",
    title: "Comprehensive Manual Transmission Masterclass",
    description: "Learn clutch control, smooth hill starts, gear synchronization, and defensive driving on a manual gearbox. Highly recommended for complete control.",
    vehicleType: "Manual",
    totalPracticalLessons: 18,
    totalTheoryClasses: 8,
    price: 549
  },
  {
    id: "course-moto",
    title: "Motorcycle Licensing & Maneuvers",
    description: "Safety-focused training for two-wheel motorists, covering emergency swerves, figure-8 tracks, high-speed braking, and road positioning.",
    vehicleType: "Motorcycle",
    totalPracticalLessons: 12,
    totalTheoryClasses: 6,
    price: 349
  },
  {
    id: "course-heavy",
    title: "Heavy Truck Commercial Driver License (CDL)",
    description: "Professional training for Class A & B commercial vehicles. Covers load distribution, air brake inspections, reversing maneuvers, and interstate safety.",
    vehicleType: "Heavy truck",
    totalPracticalLessons: 24,
    totalTheoryClasses: 12,
    price: 1299
  }
];

export const INSTRUCTORS: InstructorProfile[] = [
  {
    id: "inst-1",
    name: "John Doe",
    email: "john.doe@drivesmart.com",
    phone: "+1 (555) 102-3948",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    languages: ["English", "Spanish"],
    vehicleSpecialties: ["Automatic", "Manual"],
    rating: 4.8,
    experienceYears: 10
  },
  {
    id: "inst-2",
    name: "Maria Rodriguez",
    email: "maria.r@drivesmart.com",
    phone: "+1 (555) 902-1249",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    languages: ["English", "Spanish", "Portuguese"],
    vehicleSpecialties: ["Automatic", "Manual"],
    rating: 5.0,
    experienceYears: 8
  },
  {
    id: "inst-3",
    name: "Linda Thompson",
    email: "linda.t@drivesmart.com",
    phone: "+1 (555) 482-1920",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    languages: ["English"],
    vehicleSpecialties: ["Automatic", "Commercial", "Heavy truck"],
    rating: 4.9,
    experienceYears: 15
  },
  {
    id: "inst-4",
    name: "Robert Chen",
    email: "robert.c@drivesmart.com",
    phone: "+1 (555) 883-2941",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    languages: ["English", "Mandarin"],
    vehicleSpecialties: ["Manual", "Motorcycle"],
    rating: 4.7,
    experienceYears: 12
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: "v-1",
    makeModel: "Toyota Corolla (2023)",
    plateNumber: "DS-23AUT",
    transmission: "Automatic",
    type: "Car",
    status: "Available",
    fuelLevel: 85,
    mileage: 12450,
    lastServiceDate: "2026-06-10",
    insuranceExpiry: "2027-05-15"
  },
  {
    id: "v-2",
    makeModel: "Volkswagen Golf GTI (2022)",
    plateNumber: "DS-99MAN",
    transmission: "Manual",
    type: "Car",
    status: "Available",
    fuelLevel: 62,
    mileage: 18900,
    lastServiceDate: "2026-05-18",
    insuranceExpiry: "2027-04-20"
  },
  {
    id: "v-3",
    makeModel: "Honda CB500F (2023)",
    plateNumber: "DS-MC50",
    transmission: "Manual",
    type: "Motorcycle",
    status: "Available",
    fuelLevel: 95,
    mileage: 3200,
    lastServiceDate: "2026-07-01",
    insuranceExpiry: "2027-06-30"
  },
  {
    id: "v-4",
    makeModel: "Freightliner M2 (Commercial)",
    plateNumber: "DS-TRK10",
    transmission: "Manual",
    type: "Truck",
    status: "Maintenance",
    fuelLevel: 40,
    mileage: 84300,
    lastServiceDate: "2026-07-13",
    insuranceExpiry: "2027-01-10"
  }
];

export const ROAD_SIGNS: RoadSign[] = [
  {
    id: "sign-stop",
    name: "Stop Sign",
    category: "Regulatory",
    description: "You must come to a complete stop before the stop line, look for cross-traffic, and yield right-of-way to other vehicles or pedestrians before proceeding.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/STOP_sign.svg",
    voicePronunciation: "Stop Sign"
  },
  {
    id: "sign-yield",
    name: "Yield Right of Way",
    category: "Regulatory",
    description: "Slow down and prepare to stop if necessary to let other oncoming traffic or pedestrians go first.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/MUTCD_R1-2.svg",
    voicePronunciation: "Yield Sign"
  },
  {
    id: "sign-speed",
    name: "Speed Limit (50)",
    category: "Regulatory",
    description: "The maximum legal speed in miles or kilometers per hour under perfect weather conditions.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f2/MUTCD_R2-1_50_Mph.svg",
    voicePronunciation: "Speed Limit 50"
  },
  {
    id: "sign-slippery",
    name: "Slippery When Wet",
    category: "Warning",
    description: "The road surface is especially slippery when wet. Slow down, avoid sudden steering changes or heavy braking.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/MUTCD_W8-5.svg",
    voicePronunciation: "Slippery When Wet Warning"
  },
  {
    id: "sign-ped",
    name: "Pedestrian Crossing",
    category: "Warning",
    description: "Warns of a crosswalk ahead. Always look for pedestrians ready to cross and be prepared to stop smoothly.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/81/MUTCD_W11-2.svg",
    voicePronunciation: "Pedestrian Crossing"
  },
  {
    id: "sign-noentry",
    name: "No Entry / Do Not Enter",
    category: "Regulatory",
    description: "Entry is prohibited for all vehicular traffic. Do not turn down this street.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/MUTCD_R5-1.svg",
    voicePronunciation: "Do Not Enter"
  },
  {
    id: "sign-roundabout",
    name: "Roundabout / Traffic Circle",
    category: "Mandatory",
    description: "Instructs drivers that a roundabout lies ahead. You must yield to traffic already in the circle.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/MUTCD_W2-6.svg",
    voicePronunciation: "Roundabout Ahead"
  },
  {
    id: "sign-nourturn",
    name: "No U-Turn",
    category: "Regulatory",
    description: "U-turns are strictly prohibited. You must not turn your vehicle around to proceed in the opposite direction.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/MUTCD_R3-4.svg",
    voicePronunciation: "No U Turn"
  },
  {
    id: "sign-noleftturn",
    name: "No Left Turn",
    category: "Regulatory",
    description: "Left turns are prohibited at this intersection or driveway. Proceed straight or turn right instead.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/MUTCD_R3-2.svg",
    voicePronunciation: "No Left Turn"
  },
  {
    id: "sign-keepright",
    name: "Keep Right",
    category: "Mandatory",
    description: "Directs traffic to stay to the right of a traffic island, median, or divider ahead.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/MUTCD_R4-7.svg",
    voicePronunciation: "Keep Right"
  },
  {
    id: "sign-trafficsignal",
    name: "Traffic Signal Ahead",
    category: "Warning",
    description: "Warns of traffic lights ahead. Prepare to slow down and stop if the light changes or is already red.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/MUTCD_W3-3.svg",
    voicePronunciation: "Traffic Signal Ahead"
  },
  {
    id: "sign-school",
    name: "School Zone Crossing",
    category: "Warning",
    description: "Indicates a school crossing or school zone nearby. Reduce speed and watch closely for children crossing the road.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/MUTCD_W15-1.svg",
    voicePronunciation: "School Zone Crossing"
  },
  {
    id: "sign-noparking",
    name: "No Parking / No Waiting",
    category: "Regulatory",
    description: "Parking is completely prohibited on this side of the street. You may stop only briefly to load or unload passengers.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/MUTCD_R8-3.svg",
    voicePronunciation: "No Parking"
  }
];

export const PRACTICAL_SKILLS: PracticalSkill[] = [
  { id: "sk-clutch", name: "Clutch Control & Stalling Avoidance", category: "Basic Controls", grade: "Needs Practice", notes: "Often lets clutch up too quickly on 1st gear. Needs to hold biting point.", lastUpdated: "2026-07-10" },
  { id: "sk-hill", name: "Hill Starts & Incline Management", category: "Basic Controls", grade: "Not Started", notes: "Has not attempted steep hill starts yet.", lastUpdated: "2026-07-10" },
  { id: "sk-parking-rev", name: "Reverse Parking", category: "Maneuvers", grade: "Satisfactory", notes: "Angle is good, but needs to watch distance from the curb.", lastUpdated: "2026-07-12" },
  { id: "sk-parking-par", name: "Parallel Parking", category: "Maneuvers", grade: "Needs Practice", notes: "Tends to steer too late, clipping front envelope or too far out.", lastUpdated: "2026-07-12" },
  { id: "sk-speed", name: "Speed Management & Limits", category: "Traffic & Lane Discipline", grade: "Excellent", notes: "Maintains exact speed limit with great cruise control.", lastUpdated: "2026-07-08" },
  { id: "sk-lane", name: "Lane Keeping & Indicator Signaling", category: "Traffic & Lane Discipline", grade: "Excellent", notes: "Always signals 3 seconds before moving. Excellent mirror checks.", lastUpdated: "2026-07-08" },
  { id: "sk-hazard", name: "Hazard Observation", category: "Advanced Environments", grade: "Satisfactory", notes: "Observation is good but needs to exaggerate head movements for the examiner.", lastUpdated: "2026-07-13" },
  { id: "sk-night", name: "Night & Low Visibility Driving", category: "Advanced Environments", grade: "Not Started", notes: "Scheduled for next week's dusk block.", lastUpdated: "2026-07-05" }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q-1",
    category: "Road Signs",
    question: "What must you do when approaching a solid red octagonal sign?",
    options: [
      "Slow down and prepare to yield to other drivers.",
      "Come to a complete stop before the white line, check all directions, and proceed only when safe.",
      "Drive straight through if no other traffic is visible.",
      "Sound your horn and accelerate through the intersection."
    ],
    correctAnswerIndex: 1,
    explanation: "A solid red octagonal sign is a Stop sign. You are legally required to make a complete stop before the stop line, even if there are no other vehicles visible.",
    type: "multiple-choice"
  },
  {
    id: "q-2",
    category: "Traffic Laws",
    question: "When driving in heavy fog or rain, which headlights should you turn on?",
    options: [
      "High beams, to see as far ahead as possible.",
      "Low beams (fog lights if equipped), to avoid blinding reflections.",
      "Parking lights only, to conserve battery power.",
      "No headlights, just rely on hazard indicators."
    ],
    correctAnswerIndex: 1,
    explanation: "High beams reflect light directly off water particles in fog or heavy rain, creating a blinding glare. Low beams direct light downward and are correct for maximum visibility.",
    type: "multiple-choice"
  },
  {
    id: "q-3",
    category: "Defensive Driving",
    question: "What is the standard 'three-second rule' used for in driving safety?",
    options: [
      "The time you should spend looking in your rear-view mirror.",
      "The reaction time required to trigger anti-lock brakes (ABS).",
      "Calculating a safe following distance from the vehicle directly ahead of you.",
      "The duration you should hold your signal indicator before changing lanes."
    ],
    correctAnswerIndex: 2,
    explanation: "The three-second rule helps ensure a safe buffer space between you and the vehicle in front, giving you sufficient time to stop safely if they brake suddenly.",
    type: "multiple-choice"
  },
  {
    id: "q-4",
    category: "Parking",
    question: "When parallel parking on an uphill road with a curb, which way should you turn your wheels?",
    options: [
      "Away from the curb (turn steering wheel fully to the left).",
      "Towards the curb (turn steering wheel fully to the right).",
      "Keep wheels perfectly straight.",
      "It does not matter as long as the handbrake is firmly engaged."
    ],
    correctAnswerIndex: 0,
    explanation: "Turning wheels AWAY from the curb allows the back of your front tire to catch the curb edge and stop the car from rolling backward down the hill if the handbrake fails.",
    type: "multiple-choice"
  },
  {
    id: "q-5",
    category: "Hazard Perception",
    question: "True or False: If a pedestrian is crossing the street in an unmarked crosswalk, they still have the legal right-of-way.",
    options: [
      "True: Pedestrians generally maintain right-of-way, and drivers must yield to ensure safety.",
      "False: Pedestrians only have right-of-way if there is a painted crossing line."
    ],
    correctAnswerIndex: 0,
    explanation: "Even in unmarked crosswalks, the driver is legally and ethically bound to slow down or stop to ensure the safety of pedestrians crossing.",
    type: "true-false"
  },
  {
    id: "q-6",
    category: "Emergency Procedures",
    question: "If your gas pedal sticks and you accelerate uncontrollably, what should be your immediate first step?",
    options: [
      "Turn off the engine completely while driving at high speed.",
      "Shift into Neutral (N) and apply firm, steady pressure on the brake pedal.",
      "Pull the emergency handbrake instantly.",
      "Open your driver door and attempt to dislodge the pedal with your foot."
    ],
    correctAnswerIndex: 1,
    explanation: "Shifting to Neutral (N) disconnects the engine's power from the driving wheels, preventing further speed gains while allowing you to brake and steer safely to the shoulder.",
    type: "multiple-choice"
  },
  {
    id: "q-7",
    category: "Road Signs",
    question: "What does an inverted triangular white sign with a thick red border represent?",
    options: [
      "A Stop sign demanding a complete stop.",
      "A Yield right-of-way sign instructing you to slow down and prepare to yield.",
      "A Warning sign for a steep incline ahead.",
      "A No Entry zone prohibition."
    ],
    correctAnswerIndex: 1,
    explanation: "An inverted triangle with a red border is the universal Yield sign, indicating you must slow down and give right-of-way to other vehicles or pedestrians.",
    type: "multiple-choice"
  },
  {
    id: "q-8",
    category: "Traffic Laws",
    question: "Who has the absolute right-of-way when entering a modern roundabout or traffic circle?",
    options: [
      "Vehicles already inside the roundabout or traffic circle.",
      "Vehicles entering the roundabout from the major highway.",
      "The larger vehicle (e.g., heavy trucks or municipal buses).",
      "Vehicles executing left turns inside the circle."
    ],
    correctAnswerIndex: 0,
    explanation: "Drivers entering a roundabout must yield the right-of-way to the traffic already circulating inside the roundabout. Wait for a safe gap to enter.",
    type: "multiple-choice"
  },
  {
    id: "q-9",
    category: "Defensive Driving",
    question: "If your vehicle starts to hydroplane (sliding on thin water sheet), what should you do?",
    options: [
      "Slam on the brakes immediately to arrest speed.",
      "Ease off the accelerator gradually, avoid steering abruptly, and do not brake.",
      "Turn the steering wheel sharply to break the surface tension.",
      "Accelerate quickly to push through the puddle."
    ],
    correctAnswerIndex: 1,
    explanation: "Slamming on the brakes or steering sharply while hydroplaning can trigger a severe skid. Instead, ease off the gas pedal to let the tires regain solid contact with the road.",
    type: "multiple-choice"
  },
  {
    id: "q-10",
    category: "Parking",
    question: "When parking downhill next to a curb, which way should you turn your steering wheel?",
    options: [
      "Towards the curb (fully to the right, so the tires rest against the curb).",
      "Away from the curb (fully to the left).",
      "Leave the tires straight to avoid power steering strain.",
      "Parallel to the centerline of the street."
    ],
    correctAnswerIndex: 0,
    explanation: "When parking downhill, turn your wheels TOWARDS the curb so that if your brakes fail, the car will roll forward and safely rest against the curb instead of rolling into traffic.",
    type: "multiple-choice"
  },
  {
    id: "q-11",
    category: "Hazard Perception",
    question: "True or False: If you are driving behind a large commercial vehicle, your following distance should be increased to ensure the driver can see you in their side mirrors.",
    options: [
      "True: Large trucks have significant rear blind spots (the No-Zone), and a larger distance keeps you visible.",
      "False: Large trucks can stop faster, so you should stay close to benefit from their draft."
    ],
    correctAnswerIndex: 0,
    explanation: "Large commercial vehicles have enormous blind spots directly behind them. If you cannot see the truck's side mirrors, the driver cannot see your vehicle.",
    type: "true-false"
  },
  {
    id: "q-12",
    category: "Traffic Laws",
    question: "Unless otherwise posted, what is the default maximum speed limit in urban residential zones in most jurisdictions?",
    options: [
      "15 mph (25 km/h)",
      "25 mph (40 km/h)",
      "45 mph (70 km/h)",
      "55 mph (90 km/h)"
    ],
    correctAnswerIndex: 1,
    explanation: "Default urban residential limits are usually set to 25 mph (40 km/h) to maximize safety for pedestrians, children, and neighborhood traffic.",
    type: "multiple-choice"
  }
];
