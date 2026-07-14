export type UserRole = "student" | "instructor" | "admin";

export interface StudentProfile {
  studentId: string;
  name: string;
  email: string;
  phone: string;
  nationalId?: string;
  address?: string;
  emergencyContact?: string;
  preferredLanguage: string;
  avatarUrl?: string;
  joinedDate: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  vehicleType: "Manual" | "Automatic" | "Motorcycle" | "Heavy truck" | "Bus";
  totalPracticalLessons: number;
  totalTheoryClasses: number;
  price: number;
}

export interface Booking {
  id: string;
  studentId: string;
  studentName: string;
  instructorName: string;
  type: "Practical Lesson" | "Theory Class" | "Road Test" | "Consultation";
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  durationMinutes: number;
  vehicleInfo?: string;
  location: string;
  status: "scheduled" | "completed" | "cancelled" | "missed";
  price?: number;
}

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  imageUrl?: string;
  type: "multiple-choice" | "true-false";
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  totalQuestions: number;
  completedCount: number;
  avgScore?: number;
}

export interface RoadSign {
  id: string;
  name: string;
  category: "Warning" | "Regulatory" | "Mandatory" | "Information" | "Temporary";
  description: string;
  imageUrl: string; // we can draw these beautifully or use styled boxes
  voicePronunciation?: string;
}

export interface PracticalSkill {
  id: string;
  name: string;
  category: "Basic Controls" | "Maneuvers" | "Traffic & Lane Discipline" | "Advanced Environments";
  grade: "Needs Practice" | "Satisfactory" | "Excellent" | "Not Started";
  notes?: string;
  lastUpdated?: string;
}

export interface InstructorProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  languages: string[];
  vehicleSpecialties: string[];
  rating: number;
  experienceYears: number;
}

export interface Vehicle {
  id: string;
  makeModel: string;
  plateNumber: string;
  transmission: "Manual" | "Automatic";
  type: "Car" | "Motorcycle" | "Truck" | "Bus";
  status: "Available" | "In Use" | "Maintenance";
  fuelLevel: number; // percentage
  mileage: number;
  lastServiceDate: string;
  insuranceExpiry: string;
}

export interface PaymentItem {
  id: string;
  studentId: string;
  studentName: string;
  amount: number;
  date: string;
  method: "Credit Card" | "Debit Card" | "Mobile Money" | "Apple Pay" | "Google Pay" | "Bank Transfer" | "Wallet";
  description: string;
  receiptNumber: string;
  status: "Paid" | "Pending" | "Failed";
}

export interface WalletTransaction {
  id: string;
  type: "deposit" | "payment" | "refund";
  amount: number;
  date: string;
  description: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
  type: "lesson" | "payment" | "announcement" | "system" | "quiz";
}

export interface Certificate {
  id: string;
  studentId: string;
  studentName: string;
  courseTitle: string;
  completionDate: string;
  verificationCode: string; // QR simulation code
  qrCodeUrl?: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: UserRole;
  receiverId: string;
  content: string;
  timestamp: string;
  attachmentUrl?: string;
  attachmentName?: string;
  voiceNoteDurationSecs?: number;
}
