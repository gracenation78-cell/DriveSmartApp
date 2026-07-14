import React, { useState, useEffect } from "react";
import { Compass, Calendar, ClipboardCheck, Users, Car, Heart, Settings, Bell, Star, Navigation, MapPin, RefreshCw, AlertTriangle, ShieldCheck, WifiOff, Wifi } from "lucide-react";
import { UserRole, Booking, PracticalSkill, PaymentItem, Certificate, Vehicle, StudentProfile } from "./types";
import { VEHICLES, INSTRUCTORS, PRACTICAL_SKILLS } from "./data";
import StudentDashboard from "./components/StudentDashboard";
import InstructorDashboard from "./components/InstructorDashboard";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>("student");
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [simulateOffline, setSimulateOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const activeOfflineState = isOffline || simulateOffline;

  // Main active bookings state
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: "b-1",
      studentId: "s-1",
      studentName: "Jane Smith",
      instructorName: "Maria Rodriguez",
      type: "Practical Lesson",
      date: "2026-07-14",
      time: "11:00",
      durationMinutes: 60,
      vehicleInfo: "Toyota Corolla (Automatic)",
      location: "Main Headquarters (Downtown)",
      status: "scheduled"
    },
    {
      id: "b-2",
      studentId: "s-1",
      studentName: "Jane Smith",
      instructorName: "Maria Rodriguez",
      type: "Theory Class",
      date: "2026-07-15",
      time: "14:00",
      durationMinutes: 90,
      vehicleInfo: "Lecture Hall B",
      location: "Main Headquarters (Downtown)",
      status: "scheduled"
    },
    {
      id: "b-3",
      studentId: "s-1",
      studentName: "Jane Smith",
      instructorName: "John Doe",
      type: "Practical Lesson",
      date: "2026-07-10",
      time: "09:00",
      durationMinutes: 60,
      vehicleInfo: "Toyota Corolla (Automatic)",
      location: "Northside Grounds",
      status: "completed"
    }
  ]);

  // Main practical driving skills grades state
  const [skillsList, setSkillsList] = useState<PracticalSkill[]>(PRACTICAL_SKILLS);

  // Main payments & receipts state
  const [payments, setPayments] = useState<PaymentItem[]>([
    {
      id: "pay-1",
      studentId: "s-1",
      studentName: "Jane Smith",
      amount: 499,
      date: "2026-07-01",
      method: "Apple Pay",
      description: "Automatic Driving Course Enrollment",
      receiptNumber: "REC-994820",
      status: "Paid"
    },
    {
      id: "pay-2",
      studentId: "s-1",
      studentName: "Jane Smith",
      amount: 50,
      date: "2026-07-10",
      method: "Wallet",
      description: "Additional Practical Incline block",
      receiptNumber: "REC-120494",
      status: "Paid"
    }
  ]);

  // Main completed certificates state
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  // Main school fleet state
  const [vehicles, setVehicles] = useState<Vehicle[]>(VEHICLES);

  // Instructors profile state
  const [instructors, setInstructors] = useState(INSTRUCTORS);

  // Student profile state
  const [studentProfile, setStudentProfile] = useState<StudentProfile>({
    studentId: "s-1",
    name: "Jane Smith",
    email: "jane.smith@student.com",
    phone: "+1 (555) 304-9210",
    nationalId: "ID-99382049",
    address: "742 Evergreen Terrace, Downtown",
    emergencyContact: "+1 (555) 019-3224",
    preferredLanguage: "English",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    joinedDate: "2026-06-15"
  });

  // Callbacks
  const handleAddBooking = (newBooking: Omit<Booking, "id" | "studentId" | "studentName">) => {
    const created: Booking = {
      ...newBooking,
      id: `b-${Date.now()}`,
      studentId: "s-1",
      studentName: studentProfile.name
    };
    setBookings([created, ...bookings]);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings(
      bookings.map(b => b.id === bookingId ? { ...b, status: "cancelled" as const } : b)
    );
  };

  const handleAddPayment = (amount: number, description: string, method: string) => {
    const pay: PaymentItem = {
      id: `pay-${Date.now()}`,
      studentId: "s-1",
      studentName: studentProfile.name,
      amount,
      date: new Date().toISOString().split("T")[0],
      method: method as any,
      description,
      receiptNumber: `REC-${Math.floor(100000 + Math.random() * 900000)}`,
      status: "Paid"
    };
    setPayments([pay, ...payments]);
  };

  const handleIssueCertificate = (courseTitle: string) => {
    // Avoid double creation
    if (certificates.some(c => c.courseTitle === courseTitle)) return;

    const cert: Certificate = {
      id: `cert-${Date.now()}`,
      studentId: "s-1",
      studentName: studentProfile.name,
      courseTitle,
      completionDate: new Date().toISOString().split("T")[0],
      verificationCode: `DS-VAL-${Math.floor(1000 + Math.random() * 9000)}`
    };
    setCertificates([cert, ...certificates]);
  };

  const handleUpdateSkillGrade = (
    skillId: string,
    grade: "Needs Practice" | "Satisfactory" | "Excellent" | "Not Started",
    notes: string
  ) => {
    setSkillsList(
      skillsList.map(s => s.id === skillId ? { ...s, grade, notes, lastUpdated: new Date().toISOString().split("T")[0] } : s)
    );
  };

  const handleTriggerMaintenance = (vehicleId: string) => {
    setVehicles(
      vehicles.map(v => {
        if (v.id === vehicleId) {
          const nextStatus = v.status === "Maintenance" ? "Available" : "Maintenance";
          return {
            ...v,
            status: nextStatus as any,
            lastServiceDate: nextStatus === "Available" ? new Date().toISOString().split("T")[0] : v.lastServiceDate
          };
        }
        return v;
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Offline Warning Banner */}
      {activeOfflineState && (
        <div className="bg-red-600 text-white px-6 py-3 flex items-center justify-between gap-3 text-xs font-semibold shadow-md animate-fade-in relative z-50 shrink-0">
          <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <WifiOff className="h-4 w-4 shrink-0" />
            <span>
              Connection Lost. You are currently viewing DriveSmart offline. Practice quizzes, learner files, and local history remain fully functional!
            </span>
          </div>
          <button
            onClick={() => setSimulateOffline(false)}
            className="hidden sm:inline-flex items-center gap-1.5 bg-red-700/60 hover:bg-red-800/80 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border border-red-500/30"
          >
            Dismiss Sim
          </button>
        </div>
      )}

      {/* Top sticky bar and navigation switcher */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-xs">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-100">
            D
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 tracking-tight">DriveSmart</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Driving Education Network</p>
          </div>
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Simulate Offline Mode button for easy testing */}
          <button
            onClick={() => setSimulateOffline(prev => !prev)}
            className={`px-3 py-1.5 sm:py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer w-full sm:w-auto justify-center ${
              simulateOffline 
                ? "bg-red-50 text-red-600 border-red-200" 
                : "bg-white text-slate-500 hover:text-slate-850 border-slate-200"
            }`}
            title="Toggle simulated offline state to test the 'Connection Lost' banner"
          >
            {simulateOffline ? <WifiOff className="h-3.5 w-3.5 text-red-500 animate-pulse" /> : <Wifi className="h-3.5 w-3.5 text-emerald-500" />}
            <span>{simulateOffline ? "Offline Active" : "Simulate Offline"}</span>
          </button>

          {/* Global Role Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200 w-full sm:w-auto overflow-x-auto no-scrollbar flex-nowrap">
          {[
            { id: "student", label: "Learner Workspace", short: "Learner" },
            { id: "instructor", label: "Instructor Hub", short: "Instructor" },
            { id: "admin", label: "School Admin", short: "Admin" }
          ].map(role => (
            <button
              key={role.id}
              onClick={() => setUserRole(role.id as UserRole)}
              className={`px-3 py-1.5 sm:py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                userRole === role.id 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-100" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span className="hidden sm:inline">{role.label}</span>
              <span className="inline sm:hidden">{role.short}</span>
            </button>
          ))}
        </div>
      </div>
    </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Dynamic component render */}
        {userRole === "student" && (
          <StudentDashboard
            studentProfile={studentProfile}
            bookings={bookings}
            skillsList={skillsList}
            payments={payments}
            certificates={certificates}
            onAddBooking={handleAddBooking}
            onCancelBooking={handleCancelBooking}
            onAddPayment={handleAddPayment}
            onIssueCertificate={handleIssueCertificate}
          />
        )}

        {userRole === "instructor" && (
          <InstructorDashboard
            onAddLessonNote={(studentId, notes) => {
              // Simulate logging notes
              console.log(`Instructor logged notes for ${studentId}: ${notes}`);
            }}
            bookings={bookings}
            skillsList={skillsList}
            onUpdateSkillGrade={handleUpdateSkillGrade}
          />
        )}

        {userRole === "admin" && (
          <AdminDashboard
            vehicles={vehicles}
            instructors={instructors}
            payments={payments}
            onTriggerMaintenance={handleTriggerMaintenance}
          />
        )}

      </main>

      {/* Footnote */}
      <footer className="border-t border-slate-100 py-6 text-center text-xs text-slate-400 bg-white">
        <p>&copy; 2026 DriveSmart Syndicate Network &bull; Google AI Studio Powered</p>
      </footer>
    </div>
  );
}
