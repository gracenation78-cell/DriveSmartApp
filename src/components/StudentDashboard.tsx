import React, { useState, useEffect } from "react";
import { BookOpen, Calendar as CalendarIcon, CreditCard, Award, HelpCircle, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Play, Star, ChevronLeft, MapPin, Compass, Search, Volume2, Flame, Trophy, Send, RefreshCw, X, MessageSquare, Download, Clock } from "lucide-react";
import { StudentProfile, Course, Booking, QuizQuestion, RoadSign, PracticalSkill, PaymentItem, Certificate, WalletTransaction } from "../types";
import { COURSES, INSTRUCTORS, ROAD_SIGNS, PRACTICAL_SKILLS, QUIZ_QUESTIONS } from "../data";

const renderRoadSign = (id: string) => {
  switch (id) {
    case "sign-stop":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" strokeWidth="2.5" />
          <text x="50" y="58" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, sans-serif">STOP</text>
        </svg>
      );
    case "sign-yield":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon points="5,12 95,12 50,90" fill="#ffffff" stroke="#dc2626" strokeWidth="8.5" strokeLinejoin="miter" />
          <polygon points="20,20 80,20 50,72" fill="none" stroke="#dc2626" strokeWidth="1.5" />
          <text x="50" y="38" fill="#dc2626" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">YIELD</text>
        </svg>
      );
    case "sign-speed":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <rect x="10" y="5" width="80" height="90" rx="6" fill="#ffffff" stroke="#000000" strokeWidth="4" />
          <text x="50" y="24" fill="#000000" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.5">SPEED</text>
          <text x="50" y="38" fill="#000000" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.5">LIMIT</text>
          <text x="50" y="80" fill="#000000" fontSize="38" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, sans-serif">50</text>
        </svg>
      );
    case "sign-slippery":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#000000" strokeWidth="3" strokeLinejoin="round" />
          <path d="M 33,68 C 35,55 42,50 48,56 C 53,62 60,57 62,45" fill="none" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 43,71 C 45,58 52,53 58,59 C 63,65 70,60 72,48" fill="none" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
          <g transform="translate(42, 32) rotate(15)">
            <path d="M 5,12 L 10,4 L 24,4 L 29,12 Z" fill="#000000" />
            <rect x="2" y="11" width="30" height="6" rx="1.5" fill="#000000" />
            <circle cx="9" cy="18" r="3" fill="#000000" />
            <circle cx="25" cy="18" r="3" fill="#000000" />
          </g>
        </svg>
      );
    case "sign-ped":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#000000" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="48" cy="27" r="5" fill="#000000" />
          <path d="M 48,32 L 45,50 L 37,68 M 45,50 L 52,68 L 60,63 M 45,36 L 33,45 M 45,36 L 56,43" stroke="#000000" strokeWidth="5" strokeLinecap="round" fill="none" strokeLinejoin="round" />
          <line x1="25" y1="75" x2="75" y2="75" stroke="#000000" strokeWidth="4" />
        </svg>
      );
    case "sign-noentry":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="45" fill="#dc2626" stroke="#ffffff" strokeWidth="1" />
          <rect x="15" y="41" width="70" height="18" fill="#ffffff" rx="1.5" />
          <text x="50" y="32" fill="#ffffff" fontSize="7.5" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.8">DO NOT</text>
          <text x="50" y="73" fill="#ffffff" fontSize="7.5" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.8">ENTER</text>
        </svg>
      );
    case "sign-roundabout":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="45" fill="#1e40af" stroke="#ffffff" strokeWidth="2.5" />
          <path d="M 50,18 A 32,32 0 0,1 78,66" fill="none" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M 78,66 L 85,55 M 78,66 L 66,61" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
          
          <path d="M 78,66 A 32,32 0 0,1 22,66" fill="none" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M 22,66 L 33,73 M 22,66 L 25,54" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
          
          <path d="M 22,66 A 32,32 0 0,1 50,18" fill="none" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M 50,18 L 40,11 M 50,18 L 44,29" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
        </svg>
      );
    case "sign-nourturn":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="41" fill="#ffffff" stroke="#dc2626" strokeWidth="8" />
          <path d="M 62,64 L 62,44 A 14,14 0 0,0 34,44 L 34,60" fill="none" stroke="#000000" strokeWidth="6.5" strokeLinecap="round" />
          <polygon points="28,54 40,54 34,64" fill="#000000" />
          <line x1="24" y1="24" x2="76" y2="76" stroke="#dc2626" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );
    case "sign-noleftturn":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="41" fill="#ffffff" stroke="#dc2626" strokeWidth="8" />
          <path d="M 54,64 L 54,46 L 36,46" fill="none" stroke="#000000" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="miter" />
          <polygon points="40,40 40,52 30,46" fill="#000000" />
          <line x1="24" y1="24" x2="76" y2="76" stroke="#dc2626" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );
    case "sign-keepright":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="45" fill="#1e40af" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M 34,34 L 62,62" fill="none" stroke="#ffffff" strokeWidth="8.5" strokeLinecap="round" />
          <polygon points="64,44 64,64 44,64" fill="#ffffff" />
        </svg>
      );
    case "sign-trafficsignal":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#000000" strokeWidth="3.5" strokeLinejoin="round" />
          <rect x="40" y="24" width="20" height="52" rx="4" fill="#1e293b" stroke="#000000" strokeWidth="1.5" />
          <circle cx="50" cy="32" r="5.5" fill="#ef4444" />
          <circle cx="50" cy="50" r="5.5" fill="#eab308" />
          <circle cx="50" cy="68" r="5.5" fill="#22c55e" />
        </svg>
      );
    case "sign-school":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#000000" strokeWidth="3.5" strokeLinejoin="round" />
          <circle cx="40" cy="34" r="4" fill="#000000" />
          <path d="M 40,38 Q 40,56 40,58 M 40,58 L 34,74 M 40,58 L 46,74 M 28,48 Q 40,44 50,50" stroke="#000000" strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="58" cy="44" r="3" fill="#000000" />
          <path d="M 58,47 Q 58,60 58,61 L 53,74 M 58,61 L 63,74 M 48,54 Q 58,51 66,56" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
          <line x1="24" y1="78" x2="76" y2="78" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case "sign-noparking":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="41" fill="#1e40af" stroke="#dc2626" strokeWidth="8" />
          <text x="50" y="66" fill="#ffffff" fontSize="48" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">P</text>
          <line x1="24" y1="24" x2="76" y2="78" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

interface StudentDashboardProps {
  studentProfile: StudentProfile;
  bookings: Booking[];
  skillsList: PracticalSkill[];
  payments: PaymentItem[];
  certificates: Certificate[];
  onAddBooking: (booking: Omit<Booking, "id" | "studentId" | "studentName">) => void;
  onCancelBooking: (bookingId: string) => void;
  onAddPayment: (amount: number, description: string, method: string) => void;
  onIssueCertificate: (courseTitle: string) => void;
}

interface QuizHistoryItem {
  id: string;
  category: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  date: string;
  isTimedMode: boolean;
}

export default function StudentDashboard({
  studentProfile,
  bookings,
  skillsList,
  payments,
  certificates,
  onAddBooking,
  onCancelBooking,
  onAddPayment,
  onIssueCertificate
}: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState<"onboarding" | "calendar" | "learning" | "quizzes" | "progress" | "payments" | "coach" | "certificates">("onboarding");

  // Onboarding / Course select states
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedInstructorId, setSelectedInstructorId] = useState("");
  const [enrolledCourseId, setEnrolledCourseId] = useState<string | null>(null);
  const [studentIdCard, setStudentIdCard] = useState<string | null>(null);
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [enrollmentConfirmMsg, setEnrollmentConfirmMsg] = useState("");

  // Quiz game state
  const [selectedQuizCategory, setSelectedQuizCategory] = useState<string | null>(null);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState<QuizQuestion[]>([]);
  const [isTimedMode, setIsTimedMode] = useState(true);
  const [quizStreak, setQuizStreak] = useState(0);
  const [quizCorrectAnswers, setQuizCorrectAnswers] = useState(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizTimeLeft, setQuizTimeLeft] = useState(15); // 15s timer
  const [quizTimerActive, setQuizTimerActive] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Quiz history state
  const [quizHistory, setQuizHistory] = useState<QuizHistoryItem[]>(() => {
    const saved = localStorage.getItem("drive_smart_quiz_history");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  // AI Coach state
  const [coachQuestion, setCoachQuestion] = useState("");
  const [coachChat, setCoachChat] = useState<{ role: "user" | "coach"; content: string }[]>([
    { role: "coach", content: "Hello! I am your AI Driving Coach. How can I assist you with your driving theory or practical exam preparation today?" }
  ]);
  const [coachLoading, setCoachLoading] = useState(false);

  // AI Personalized analytics / exam readiness recommendation state
  const [aiReadinessData, setAiReadinessData] = useState<{
    readinessScore: number;
    testDatePrediction: string;
    criticalWeakness: string;
    recommendedActionSteps: string[];
    instructorAdviceSummary: string;
  } | null>(null);
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);

  // New Booking interactive state
  const [bookingType, setBookingType] = useState<"Practical Lesson" | "Theory Class" | "Road Test">("Practical Lesson");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingInstructor, setBookingInstructor] = useState("Instructor Maria");
  const [bookingVehicle, setBookingVehicle] = useState("Toyota Corolla");
  const [bookingSuccessMsg, setBookingSuccessMsg] = useState("");

  // Search road signs
  const [signsSearch, setSignsSearch] = useState("");
  const [signsCategory, setSignsCategory] = useState("All");

  // Wallet and Installment plans states
  const [walletBalance, setWalletBalance] = useState(150);
  const [depositAmount, setDepositAmount] = useState("");
  const [depositMsg, setDepositMsg] = useState("");

  // Voice pronounciation mock triggers
  const handleVoicePronounce = (phrase: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert(`Audio feedback: "${phrase}"`);
    }
  };

  // Run countdown timer for Quiz
  useEffect(() => {
    let timer: any;
    if (isTimedMode && quizTimerActive && quizTimeLeft > 0 && !showExplanation) {
      timer = setTimeout(() => setQuizTimeLeft(quizTimeLeft - 1), 1000);
    } else if (isTimedMode && quizTimeLeft === 0 && quizTimerActive && !showExplanation) {
      // Auto select a wrong answer or trigger explanation on timeout
      setSelectedAnswerIdx(-1);
      setShowExplanation(true);
    }
    return () => clearTimeout(timer);
  }, [quizTimeLeft, quizTimerActive, showExplanation, isTimedMode]);

  // Load AI Readiness plan once tab becomes "progress"
  const loadAiAnalytics = async () => {
    setLoadingAnalytics(true);
    try {
      const quizStats = {
        avgScore: 84,
        weakCategories: ["Parking Maneuvers", "Hazard Perception"]
      };
      const practicalStats = {
        lessonsCompleted: bookings.filter(b => b.status === "completed").length || 8,
        skills: {
          clutchControl: "Needs improvement",
          parallelParking: "Satisfactory",
          laneDiscipline: "Excellent",
          observation: "Satisfactory"
        }
      };

      const res = await fetch("/api/gemini/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizStats, practicalStats, attendance: 95 })
      });

      if (res.ok) {
        const data = await res.json();
        setAiReadinessData(data);
      }
    } catch (err) {
      console.error("AI Analytics error:", err);
    } finally {
      setLoadingAnalytics(false);
    }
  };

  useEffect(() => {
    if (activeTab === "progress") {
      loadAiAnalytics();
    }
  }, [activeTab]);

  // Handle Enrollment submit
  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse || !selectedBranch || !selectedInstructorId) return;

    const generatedId = `DS-${Math.floor(100000 + Math.random() * 900000)}`;
    setStudentIdCard(generatedId);
    setEnrolledCourseId(selectedCourse.id);
    setEnrollmentConfirmMsg(`Congratulations! You have successfully enrolled into the ${selectedCourse.title} course.`);
    
    // Add first automatic booking for orientation
    onAddBooking({
      instructorName: INSTRUCTORS.find(i => i.id === selectedInstructorId)?.name || "Instructor Maria",
      type: "Theory Class",
      date: "2026-07-20",
      time: "09:00",
      durationMinutes: 90,
      location: selectedBranch,
      status: "scheduled",
      vehicleInfo: "Lecture Hall A"
    });
  };

  // Handle AI Coach send
  const handleSendCoachMsg = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!coachQuestion.trim()) return;

    const userMsg = coachQuestion;
    setCoachChat((prev) => [...prev, { role: "user", content: userMsg }]);
    setCoachQuestion("");
    setCoachLoading(true);

    try {
      const history = coachChat.map(m => ({
        role: m.role === "user" ? "user" : "model",
        content: m.content
      }));

      const res = await fetch("/api/gemini/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg, chatHistory: history })
      });

      if (res.ok) {
        const data = await res.json();
        setCoachChat((prev) => [...prev, { role: "coach", content: data.reply }]);
      } else {
        throw new Error("API call failed");
      }
    } catch (err) {
      setCoachChat((prev) => [
        ...prev,
        { role: "coach", content: "I apologize, I'm experiencing connectivity issues. Please try asking again!" }
      ]);
    } finally {
      setCoachLoading(false);
    }
  };

  // Handle Booking submission
  const handleAddBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime) return;

    onAddBooking({
      instructorName: bookingInstructor,
      type: bookingType,
      date: bookingDate,
      time: bookingTime,
      durationMinutes: bookingType === "Road Test" ? 45 : 60,
      location: "Main Headquarters (Downtown)",
      status: "scheduled",
      vehicleInfo: bookingVehicle
    });

    setBookingSuccessMsg("Booking scheduled successfully and synched with Google Calendar.");
    setBookingDate("");
    setBookingTime("");

    setTimeout(() => {
      setBookingSuccessMsg("");
    }, 4000);
  };

  // Start Quiz category
  const startQuiz = (cat: string) => {
    setSelectedQuizCategory(cat);
    const filtered = QUIZ_QUESTIONS.filter(q => cat === "All" || q.category === cat);
    // Shuffle the filtered list of questions to load a randomized set of questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setCurrentQuizQuestions(shuffled);
    setCurrentQuestionIdx(0);
    setSelectedAnswerIdx(null);
    setQuizScore(0);
    setQuizStreak(0);
    setQuizCorrectAnswers(0);
    setQuizCompleted(false);
    setQuizTimeLeft(15);
    setShowExplanation(false);
    setQuizTimerActive(true);
  };

  // Quiz option selected
  const handleQuizAnswer = (idx: number) => {
    if (selectedAnswerIdx !== null) return; // already answered
    setSelectedAnswerIdx(idx);
    setQuizTimerActive(false);

    const questions = currentQuizQuestions;
    const isCorrect = idx === questions[currentQuestionIdx].correctAnswerIndex;
    
    if (isCorrect) {
      setQuizScore(prev => prev + 10); // 10 XP points
      setQuizCorrectAnswers(prev => prev + 1);
      setQuizStreak(prev => prev + 1);
    } else {
      setQuizStreak(0);
    }
    setShowExplanation(true);
  };

  // Next Question
  const nextQuizQuestion = () => {
    const questions = currentQuizQuestions;
    if (currentQuestionIdx + 1 < questions.length) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedAnswerIdx(null);
      setShowExplanation(false);
      setQuizTimeLeft(15);
      setQuizTimerActive(true);
    } else {
      setQuizCompleted(true);
      setQuizTimerActive(false);
      
      // Save session to quizHistory
      const newHistoryItem: QuizHistoryItem = {
        id: `hist-${Date.now()}`,
        category: selectedQuizCategory || "All",
        score: quizScore,
        correctAnswers: quizCorrectAnswers,
        totalQuestions: questions.length,
        date: new Date().toISOString(),
        isTimedMode: isTimedMode
      };
      
      setQuizHistory(prev => {
        const updated = [newHistoryItem, ...prev];
        localStorage.setItem("drive_smart_quiz_history", JSON.stringify(updated));
        return updated;
      });
      
      // If student gets score >= 30, auto-enable Certificate trigger!
      if (quizScore >= 30) {
        onIssueCertificate(selectedCourse?.title || "Complete Automatic Driving Certification");
      }
    }
  };

  // Handle wallet deposit
  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(depositAmount);
    if (isNaN(amountNum) || amountNum <= 0) return;

    setWalletBalance(walletBalance + amountNum);
    setDepositMsg(`Successfully loaded $${amountNum.toFixed(2)} to your DriveSmart Wallet via Apple Pay.`);
    setDepositAmount("");

    setTimeout(() => setDepositMsg(""), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Gamified Header (XP, Badges, Streaks) */}
      <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-lg text-white border border-blue-400">
            {studentProfile.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-1.5">
              {studentProfile.name}
              {studentIdCard && (
                <span className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
                  ID: {studentIdCard}
                </span>
              )}
            </h2>
            <p className="text-xs text-slate-400">Course Level: {enrolledCourseId ? "In Training" : "Pre-enrollment Onboarding"}</p>
          </div>
        </div>

        {/* Gamification stats */}
        <div className="grid grid-cols-3 md:flex items-center gap-2 md:gap-4 w-full md:w-auto">
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-700/50 min-w-0">
            <Flame className="h-4 w-4 text-amber-500 fill-amber-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] block text-slate-400 uppercase font-bold truncate">Daily Streak</span>
              <p className="text-[11px] sm:text-xs font-bold text-white truncate">4 Days</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-700/50 min-w-0">
            <Trophy className="h-4 w-4 text-blue-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] block text-slate-400 uppercase font-bold truncate">XP Balance</span>
              <p className="text-[11px] sm:text-xs font-bold text-white truncate">{quizScore + 250} XP</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-700/50 min-w-0">
            <Award className="h-4 w-4 text-indigo-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] block text-slate-400 uppercase font-bold truncate">My Badges</span>
              <p className="text-[11px] sm:text-xs font-bold text-white truncate">2 unlocked</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-slate-200 pb-px gap-6 overflow-x-auto no-scrollbar">
        {[
          { id: "onboarding", label: "My Enrollment", icon: ShieldCheck },
          { id: "calendar", label: "Bookings & Calendar", icon: CalendarIcon },
          { id: "learning", label: "Theory Handbook", icon: BookOpen },
          { id: "quizzes", label: "Practice Quizzes", icon: Flame },
          { id: "progress", label: "Practical Progress", icon: Trophy },
          { id: "coach", label: "AI Coach Tutor", icon: MessageSquare },
          { id: "payments", label: "Wallet & Payments", icon: CreditCard },
          { id: "certificates", label: "Theory Certificates", icon: Award }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-1.5 pb-3 text-xs font-bold transition-all whitespace-nowrap border-b-2 -mb-px ${
              activeTab === tab.id
                ? "border-blue-600 text-blue-600 font-bold"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            <tab.icon className="h-4 w-4 shrink-0" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. Onboarding / Enrollment Module */}
      {activeTab === "onboarding" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">DriveSmart Enrollment Center</h3>
              <p className="text-xs text-slate-500">Pick your course type, branch location, and launch your journey</p>
            </div>

            {enrollmentConfirmMsg && (
              <div className="bg-blue-50 text-blue-800 border border-blue-100 p-4 rounded-xl text-xs font-bold flex items-center gap-2 animate-pulse">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <span>{enrollmentConfirmMsg}</span>
              </div>
            )}

            {!enrolledCourseId ? (
              <form onSubmit={handleEnrollment} className="space-y-6">
                {/* Course select */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Step 1: Choose Course Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {COURSES.map((course) => (
                      <div
                        key={course.id}
                        onClick={() => setSelectedCourse(course)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          selectedCourse?.id === course.id
                            ? "border-blue-500 bg-blue-50/15"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <h4 className="font-bold text-slate-800 text-sm">{course.title}</h4>
                        <p className="text-xs text-slate-400 mt-1.5 line-clamp-2">{course.description}</p>
                        
                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-100 text-xs">
                          <span className="text-slate-500">Practical: {course.totalPracticalLessons} lessons</span>
                          <span className="font-bold text-slate-800">${course.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Branch selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 block">Step 2: Training Branch</label>
                    <select
                      required
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select Branch...</option>
                      <option value="Main Headquarters (Downtown)">Main Headquarters (Downtown)</option>
                      <option value="Northside Training Grounds">Northside Training Grounds</option>
                      <option value="West Hills Premium Hub">West Hills Premium Hub</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 block">Step 3: Preferred Instructor</label>
                    <select
                      required
                      value={selectedInstructorId}
                      onChange={(e) => setSelectedInstructorId(e.target.value)}
                      className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select Instructor...</option>
                      {INSTRUCTORS.map(inst => (
                        <option key={inst.id} value={inst.id}>{inst.name} ({inst.languages.join(", ")})</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Real interactive Upload Verification documents */}
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-700">Step 4: Upload Audit Documentation</h4>
                  <p className="text-[11px] text-slate-500">Upload scan of National ID/Passport and Passport photo to automatically generate a verified Student Card.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    <label className="border border-dashed border-slate-200 rounded-lg p-3 bg-white text-center text-xs text-slate-500 cursor-pointer hover:bg-slate-100 block truncate">
                      <span>{uploadedFileName || "National ID.pdf"}</span>
                      <input
                        type="file"
                        accept=".pdf,image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setUploadedFileName(file.name);
                          }
                        }}
                      />
                    </label>
                    <label className="border border-dashed border-slate-200 rounded-lg p-3 bg-white text-center text-xs text-slate-500 cursor-pointer hover:bg-slate-100 block truncate">
                      <span>{uploadedPhotoUrl ? "Photo Uploaded ✓" : "PassportPhoto.jpg"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              if (event.target?.result) {
                                setUploadedPhotoUrl(event.target.result as string);
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedCourse || !selectedBranch || !selectedInstructorId}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-lg shadow-blue-100"
                >
                  Generate Student ID Card & Confirm Enrollment
                </button>
              </form>
            ) : (
              <div className="bg-blue-50/20 p-8 rounded-3xl border border-blue-500/20 text-center space-y-4">
                <CheckCircle2 className="h-10 w-10 text-blue-600 mx-auto" />
                <div>
                  <h4 className="font-bold text-slate-900">You are currently enrolled!</h4>
                  <p className="text-xs text-slate-500 mt-1">Ready to book theory classes or browse learning sheets.</p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab("calendar")}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-100"
                  >
                    Go to Booking Calendar
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Official Student ID</h3>
            
            {studentIdCard ? (
              <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-4 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 h-16 w-16 bg-blue-500/20 rounded-full blur-xl" />
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm tracking-wider text-blue-400">DRIVESMART</h4>
                    <p className="text-[9px] text-slate-400">Unified License Syndicate</p>
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">CLASS D</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <img
                    src={uploadedPhotoUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"}
                    alt="Student ID photo"
                    className="h-12 w-12 rounded-lg object-cover bg-slate-800 shrink-0 border border-slate-700"
                  />
                  <div>
                    <p className="text-xs font-bold text-white">{studentProfile.name}</p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">{studentIdCard}</p>
                    <p className="text-[9px] text-blue-400 mt-1 flex items-center gap-0.5">
                      <ShieldCheck className="h-3 w-3" /> VERIFIED MEMBER
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex justify-between items-center text-[9px] text-slate-400">
                  <span>EXP: 12/2027</span>
                  <span>DOWNTOWN BR</span>
                </div>
              </div>
            ) : (
              <div className="border border-dashed border-slate-200 rounded-3xl p-6 text-center text-slate-400">
                <HelpCircle className="h-8 w-8 mx-auto mb-2 text-slate-300" />
                <p className="text-xs">Complete the enrollment form to generate your student ID card.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Bookings System & Smart Calendar */}
      {activeTab === "calendar" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* New Booking scheduler */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Book driving lessons</h3>
            
            {bookingSuccessMsg && (
              <div className="bg-blue-50 text-blue-800 border border-blue-200 p-3 rounded-lg text-xs font-bold">
                {bookingSuccessMsg}
              </div>
            )}

            <form onSubmit={handleAddBookingSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">Class Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "Practical Lesson", label: "Practical" },
                    { id: "Theory Class", label: "Theory" },
                    { id: "Road Test", label: "Road Test" }
                  ].map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setBookingType(t.id as any)}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                        bookingType === t.id ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">Select Date</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full border border-slate-200 bg-white rounded-xl p-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">Select Time</label>
                  <select
                    required
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full border border-slate-200 bg-white rounded-xl p-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select slot...</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">Choose Instructor</label>
                <select
                  value={bookingInstructor}
                  onChange={(e) => setBookingInstructor(e.target.value)}
                  className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-xs focus:outline-none"
                >
                  <option value="Instructor Maria">Instructor Maria (★ 5.0)</option>
                  <option value="John Doe">John Doe (★ 4.8)</option>
                  <option value="Linda Thompson">Linda Thompson (★ 4.9)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">Training Vehicle</label>
                <select
                  value={bookingVehicle}
                  onChange={(e) => setBookingVehicle(e.target.value)}
                  className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-xs focus:outline-none"
                >
                  <option value="Toyota Corolla (Automatic)">Toyota Corolla (Automatic)</option>
                  <option value="Volkswagen Golf GTI (Manual)">Volkswagen Golf GTI (Manual)</option>
                  <option value="Honda CB500F (Motorcycle)">Honda CB500F (Motorcycle)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-blue-100"
              >
                Confirm Booking Reservation
              </button>
            </form>
          </div>

          {/* Visual Bookings Calendar list */}
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Scheduled classes log</h3>
              <span className="text-xs text-slate-400">Total: {bookings.length} reservations</span>
            </div>

            {/* Smart Calendar visual timeline */}
            <div className="space-y-3">
              {bookings.length === 0 ? (
                <p className="text-xs text-slate-400">No scheduled sessions. Book your first one above!</p>
              ) : (
                bookings.map((booking) => (
                  <div key={booking.id} className="p-4 rounded-xl border border-slate-200 flex justify-between items-center hover:border-slate-300 bg-slate-50/20">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-900 text-white p-2.5 rounded-xl text-center shrink-0">
                        <span className="text-[10px] block font-semibold leading-none uppercase">{booking.date.split("-")[1]}</span>
                        <span className="text-base font-bold font-mono block mt-0.5 leading-none">{booking.date.split("-")[2]}</span>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{booking.type}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          With <strong>{booking.instructorName}</strong> &bull; {booking.time} ({booking.durationMinutes} mins)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        booking.status === "completed" 
                          ? "bg-blue-100 text-blue-800" 
                          : booking.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-amber-100 text-amber-800 animate-pulse"
                      }`}>
                        {booking.status}
                      </span>

                      {booking.status === "scheduled" && (
                        <button
                          onClick={() => onCancelBooking(booking.id)}
                          className="text-[11px] text-red-600 font-bold hover:underline"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. Learning Center / Handbook & Road Signs */}
      {activeTab === "learning" && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Explore Traffic Regulations & Signs</h3>
              <p className="text-xs text-slate-500 mt-1">Search the complete road catalog. Click on any speaker to hear voice pronunciation.</p>
            </div>

            {/* Signs Filters */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search signs e.g., speed, stop..."
                  value={signsSearch}
                  onChange={(e) => setSignsSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {["All", "Regulatory", "Warning", "Mandatory", "Information"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSignsCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                      signsCategory === cat 
                        ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100" 
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Signs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {ROAD_SIGNS
                .filter(sign => signsCategory === "All" || sign.category === signsCategory)
                .filter(sign => sign.name.toLowerCase().includes(signsSearch.toLowerCase()))
                .map((sign) => (
                  <div key={sign.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/20 hover:border-slate-200 space-y-3 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1 overflow-hidden shadow-sm">
                        {renderRoadSign(sign.id)}
                      </div>

                      <button
                        onClick={() => handleVoicePronounce(sign.voicePronunciation || sign.name)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-1.5 rounded-lg transition-all"
                        title="Voice Pronunciation"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">{sign.category}</span>
                      <h4 className="font-bold text-slate-800 text-sm mt-0.5">{sign.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{sign.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Quiz Game Play Module */}
      {activeTab === "quizzes" && (
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          {!selectedQuizCategory ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Practice Quizzes</h3>
                  <p className="text-xs text-slate-500 mt-1">Select a category below to test your skills. Randomized questions will load with instant correct/incorrect feedback!</p>
                </div>

                {/* Timed Challenge Mode switch */}
                <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50 self-start sm:self-auto">
                  <button
                    onClick={() => setIsTimedMode(true)}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${isTimedMode ? "bg-white text-blue-600 shadow-xs" : "text-slate-500 hover:text-slate-800"}`}
                  >
                    <Flame className="h-3.5 w-3.5 text-amber-500" /> Time Trial (15s)
                  </button>
                  <button
                    onClick={() => setIsTimedMode(false)}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${!isTimedMode ? "bg-white text-blue-600 shadow-xs" : "text-slate-500 hover:text-slate-800"}`}
                  >
                    <BookOpen className="h-3.5 w-3.5" /> Self-Paced
                  </button>
                </div>
              </div>

              {/* Grid of categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { id: "All", name: "All-Rounder Challenge", icon: Trophy, count: 12, desc: "A full gauntlet of randomized rules, signs, penalties, and defensive hazards.", color: "text-amber-500 bg-amber-50 border-amber-100" },
                  { id: "Road Signs", name: "Road Signs & Markers", icon: Compass, count: 2, desc: "Learn regulatory rules, cautionary warnings, and temporary markers with interactive visual icons.", color: "text-blue-500 bg-blue-50 border-blue-100" },
                  { id: "Traffic Laws", name: "Traffic Laws & Penalties", icon: ShieldCheck, count: 3, desc: "Master urban residential speed limits, roundabout entry priority, and official highway rules.", color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
                  { id: "Defensive Driving", name: "Defensive Driving Tactics", icon: BookOpen, count: 2, desc: "Study dynamic spacing rules, skid recovery procedures, and severe weather visibility guidelines.", color: "text-indigo-500 bg-indigo-50 border-indigo-100" },
                  { id: "Parking", name: "Maneuvers & Parking Rules", icon: MapPin, count: 2, desc: "Prepare for incline handbrake starts, curb-wheel angles on downhill streets, and parallel safety loops.", color: "text-rose-500 bg-rose-50 border-rose-100" },
                  { id: "Emergency Procedures", name: "Emergencies & Hazards", icon: Flame, count: 3, desc: "Train for extreme events like stuck accelerators, heavy vehicle blind zones (no-zones), and hydroplaning.", color: "text-purple-500 bg-purple-50 border-purple-100" }
                ].map((cat) => {
                  const IconComp = cat.icon;
                  return (
                    <div key={cat.id} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 transition-all hover:shadow-md flex flex-col justify-between space-y-4 relative group">
                      <div className="space-y-3">
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center border ${cat.color} transition-transform group-hover:scale-105`}>
                          <IconComp className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-slate-800 text-sm">{cat.name}</h4>
                            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-mono">{cat.count} Qs</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-2 leading-relaxed">{cat.desc}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => startQuiz(cat.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all w-full flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <Play className="h-3 w-3 fill-white" /> Start Practice Quiz
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Quiz History Section */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">My Practice Session History</h4>
                      <p className="text-[11px] text-slate-400">Review your past scores, accuracy, and practice dates</p>
                    </div>
                  </div>
                  {quizHistory.length > 0 && (
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to clear your quiz history?")) {
                          setQuizHistory([]);
                          localStorage.removeItem("drive_smart_quiz_history");
                        }
                      }}
                      className="text-[10px] text-red-500 hover:text-red-600 font-bold hover:underline cursor-pointer self-start sm:self-auto"
                    >
                      Clear History
                    </button>
                  )}
                </div>

                {quizHistory.length === 0 ? (
                  <div className="text-center py-8 bg-slate-50/50 rounded-2xl border border-slate-100">
                    <p className="text-xs text-slate-400">No practice attempts yet. Select a topic above to begin!</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto border border-slate-200/60 rounded-2xl bg-white shadow-xs">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          <th className="py-3 px-4">Topic / Category</th>
                          <th className="py-3 px-4">Mode</th>
                          <th className="py-3 px-4">Score</th>
                          <th className="py-3 px-4">Accuracy</th>
                          <th className="py-3 px-4">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                        {quizHistory.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-3 px-4 font-semibold text-slate-800">
                              <div className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full shrink-0 ${
                                  item.score >= 30 ? "bg-emerald-500" : "bg-amber-500"
                                }`} />
                                <span>{item.category === "All" ? "All-Rounder Challenge" : item.category}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 whitespace-nowrap">
                              {item.isTimedMode ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100/40">
                                  <Flame className="h-3 w-3 text-amber-500" /> Time Trial
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/40">
                                  <BookOpen className="h-3 w-3 text-slate-500" /> Self-Paced
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 font-bold text-blue-600 font-mono whitespace-nowrap">
                              +{item.score} XP
                            </td>
                            <td className="py-3 px-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <span className={`font-bold ${
                                  item.correctAnswers === item.totalQuestions 
                                    ? "text-emerald-600" 
                                    : item.correctAnswers >= item.totalQuestions / 2 
                                    ? "text-slate-700" 
                                    : "text-red-500"
                                }`}>
                                  {item.correctAnswers} / {item.totalQuestions}
                                </span>
                                <span className="text-[10px] text-slate-400">
                                  ({item.totalQuestions > 0 ? Math.round((item.correctAnswers / item.totalQuestions) * 100) : 0}%)
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-slate-400 font-medium whitespace-nowrap">
                              {new Date(item.date).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                              })}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6 max-w-2xl mx-auto">
              {/* Header inside Active Quiz */}
              <div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-center border-b border-slate-100 pb-4">
                <button
                  onClick={() => setSelectedQuizCategory(null)}
                  className="text-slate-500 hover:text-slate-800 flex items-center gap-1.5 text-xs font-bold self-start cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" /> Exit Challenge
                </button>

                <div className="flex items-center gap-3">
                  {isTimedMode && (
                    <div className="bg-amber-50 text-amber-700 border border-amber-200/50 text-[11px] px-3 py-1 rounded-xl font-semibold flex items-center gap-1.5">
                      <Flame className="h-3.5 w-3.5 text-amber-500" />
                      Timer: <span className="font-bold font-mono">{quizTimeLeft}s</span>
                    </div>
                  )}
                  <div className="bg-blue-50 text-blue-700 border border-blue-100 text-[11px] px-3 py-1 rounded-xl font-semibold flex items-center gap-1.5">
                    <Trophy className="h-3.5 w-3.5 text-blue-500" />
                    Score: <span className="font-bold">{quizScore} XP</span>
                  </div>
                  {quizStreak > 0 && (
                    <div className="bg-orange-50 text-orange-700 border border-orange-200/50 text-[11px] px-3 py-1 rounded-xl font-semibold flex items-center gap-1">
                      🔥 Streak: <span className="font-bold font-mono">{quizStreak}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress bar inside Quiz */}
              {!quizCompleted && currentQuizQuestions.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                    <span>Question {currentQuestionIdx + 1} of {currentQuizQuestions.length}</span>
                    <span>{Math.round((currentQuestionIdx / currentQuizQuestions.length) * 100)}% Complete</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${(currentQuestionIdx / currentQuizQuestions.length) * 100}%` }}
                      className="h-full bg-blue-600 transition-all duration-300"
                    />
                  </div>
                </div>
              )}

              {/* Game View */}
              {!quizCompleted && currentQuizQuestions.length > 0 ? (
                <div className="space-y-6">
                  {/* Question Header & Speech trigger */}
                  <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 space-y-3 relative overflow-hidden">
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-[10px] text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                        {currentQuizQuestions[currentQuestionIdx].category}
                      </span>
                      <button
                        onClick={() => handleVoicePronounce(currentQuizQuestions[currentQuestionIdx].question)}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-xs cursor-pointer"
                        title="Read question aloud"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                      {currentQuizQuestions[currentQuestionIdx].question}
                    </h4>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {currentQuizQuestions[currentQuestionIdx].options.map((opt, i) => {
                      const isCorrect = i === currentQuizQuestions[currentQuestionIdx].correctAnswerIndex;
                      const isSelected = i === selectedAnswerIdx;

                      let btnStyle = "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 text-slate-700";
                      let iconToShow = null;

                      if (selectedAnswerIdx !== null) {
                        if (isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50/70 text-emerald-950 font-semibold ring-1 ring-emerald-500/30";
                          iconToShow = <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />;
                        } else if (isSelected) {
                          btnStyle = "border-red-500 bg-red-50/70 text-red-950 ring-1 ring-red-500/30";
                          iconToShow = <X className="h-4 w-4 text-red-600 shrink-0" />;
                        } else {
                          btnStyle = "border-slate-100 bg-slate-50/20 text-slate-400 opacity-65";
                        }
                      }

                      return (
                        <button
                          key={i}
                          disabled={selectedAnswerIdx !== null}
                          onClick={() => handleQuizAnswer(i)}
                          className={`w-full text-left p-4 rounded-xl border text-xs transition-all flex items-center justify-between gap-3 ${btnStyle} cursor-pointer disabled:cursor-not-allowed`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`h-6 w-6 rounded-lg text-[10px] font-bold flex items-center justify-center border shrink-0 ${
                              selectedAnswerIdx !== null && isCorrect 
                                ? "bg-emerald-500 text-white border-emerald-500" 
                                : selectedAnswerIdx !== null && isSelected
                                ? "bg-red-500 text-white border-red-500"
                                : "bg-slate-50 text-slate-500 border-slate-200"
                            }`}>
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="leading-normal">{opt}</span>
                          </div>
                          {iconToShow}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation card / Instant feedback */}
                  {showExplanation && (
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 animate-fade-in text-xs">
                      {/* Custom feedback banner */}
                      <div className={`p-3 rounded-xl border flex items-center gap-2.5 font-semibold text-xs ${
                        selectedAnswerIdx === currentQuizQuestions[currentQuestionIdx].correctAnswerIndex
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                          : "bg-red-50 border-red-200 text-red-800"
                      }`}>
                        {selectedAnswerIdx === currentQuizQuestions[currentQuestionIdx].correctAnswerIndex ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                            <span>Correct! You've gained 10 XP point bonus.</span>
                          </>
                        ) : (
                          <>
                            <X className="h-4 w-4 text-red-600" />
                            <span>Incorrect. Study the correct rule carefully below.</span>
                          </>
                        )}
                      </div>

                      <div className="space-y-1">
                        <p className="font-bold text-slate-700 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                          <HelpCircle className="h-3.5 w-3.5 text-blue-600" /> Driving Rule Explanation
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {currentQuizQuestions[currentQuestionIdx].explanation}
                        </p>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button
                          onClick={nextQuizQuestion}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          Next Question <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Completion Summary Screen */
                <div className="text-center py-8 space-y-6 max-w-sm mx-auto animate-fade-in">
                  <div className="h-20 w-20 bg-blue-50 text-blue-600 border border-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto shadow-xs relative">
                    🏆
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold font-mono">
                      100%
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-extrabold text-slate-800">Challenge Completed!</h4>
                    <p className="text-xs text-slate-500">
                      You've finished the randomized driving laws module. Excellent study consistency!
                    </p>
                  </div>

                  {/* Scoring statistics table */}
                  <div className="bg-slate-50 rounded-2xl border border-slate-150 p-4 grid grid-cols-2 gap-3 text-left">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Score Achieved</p>
                      <p className="text-base font-extrabold text-slate-800 mt-0.5">{quizScore} XP</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Accuracy Rate</p>
                      <p className="text-base font-extrabold text-emerald-600 mt-0.5">
                        {currentQuizQuestions.length > 0 ? Math.round((quizCorrectAnswers / currentQuizQuestions.length) * 100) : 0}%
                      </p>
                    </div>
                    <div className="col-span-2 border-t border-slate-200/60 pt-2.5 mt-1 flex justify-between items-center text-xs">
                      <span className="text-slate-500">Milestone Standard:</span>
                      <span className={`font-bold px-2 py-0.5 rounded-md text-[10px] ${quizScore >= 30 ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-amber-50 text-amber-700 border border-amber-100"}`}>
                        {quizScore >= 30 ? "PASSED" : "PRACTICE MORE"}
                      </span>
                    </div>
                  </div>

                  {quizScore >= 30 ? (
                    <div className="bg-emerald-50 text-emerald-800 border border-emerald-200/50 p-4 rounded-xl text-xs font-medium leading-relaxed">
                      🎉 **Excellent job!** You have passed the official Theory milestone standard and unlocked your digital theory completion certificate!
                    </div>
                  ) : (
                    <div className="bg-amber-50 text-amber-800 border border-amber-200/40 p-4 rounded-xl text-xs font-medium leading-relaxed">
                      💡 **Tip:** Score at least 30 XP (3 correct answers) in any challenge to qualify for the theory pass criteria and generate your Certificate.
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => startQuiz(selectedQuizCategory || "All")}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 rounded-xl flex-1 transition-all border border-slate-200 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="h-3.5 w-3.5" /> Re-Shuffle
                    </button>
                    <button
                      onClick={() => setSelectedQuizCategory(null)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl flex-1 transition-all shadow-md shadow-blue-100 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Browse Topics
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 5. Practical Progress Tracker & AI Analytics */}
      {activeTab === "progress" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Progress Indicators & Skills checklist */}
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="pb-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Curriculum Mastery checklist</h3>
              <p className="text-xs text-slate-500 mt-1">Practical driving skills as evaluated by your instructors</p>
            </div>

            <div className="space-y-3">
              {skillsList.map((skill) => (
                <div key={skill.id} className="p-3 bg-slate-50/50 rounded-xl border border-slate-200 flex justify-between items-center gap-3">
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs">{skill.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{skill.category} &bull; Notes: {skill.notes || "No notes yet"}</p>
                  </div>

                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    skill.grade === "Excellent" 
                      ? "bg-blue-100 text-blue-800" 
                      : skill.grade === "Satisfactory" 
                      ? "bg-indigo-100 text-indigo-800" 
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {skill.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Analytics recommendations / predicted readiness */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="pb-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">AI Test Readiness Optimizer</h3>
              <p className="text-xs text-slate-500 mt-1">Deep analysis powered by Google Gemini API</p>
            </div>

            {loadingAnalytics ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-2 text-slate-400">
                <RefreshCw className="h-6 w-6 animate-spin text-blue-600" />
                <span className="text-xs">Generating improvement action steps...</span>
              </div>
            ) : aiReadinessData ? (
              <div className="space-y-5">
                {/* Score badge */}
                <div className="bg-slate-900 text-white p-5 rounded-2xl text-center relative overflow-hidden shadow-md">
                  <span className="text-[10px] text-blue-400 font-extrabold uppercase tracking-wider block">Predicted Exam Readiness</span>
                  <p className="text-4xl font-extrabold font-mono mt-2 text-white">{aiReadinessData.readinessScore}%</p>
                  <p className="text-xs text-slate-400 mt-1">Est. test date prediction: <strong>{aiReadinessData.testDatePrediction}</strong></p>
                </div>

                {/* Primary weakness */}
                <div className="bg-amber-50 text-amber-900 border border-amber-100 p-4 rounded-xl space-y-1">
                  <span className="text-[9px] uppercase font-bold text-amber-700 block">Critical Weakness Focus</span>
                  <p className="text-xs font-semibold">{aiReadinessData.criticalWeakness}</p>
                </div>

                {/* Recommendations */}
                <div className="space-y-2.5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block tracking-wider">Recommended Action Steps</span>
                  {aiReadinessData.recommendedActionSteps.map((step, i) => (
                    <div key={i} className="flex gap-2 text-xs text-slate-600 leading-normal">
                      <span className="h-5 w-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold font-mono shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                <hr className="border-slate-100" />

                {/* Advice */}
                <div className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-xl">
                  <strong>Coach's Summary:</strong> "{aiReadinessData.instructorAdviceSummary}"
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400 text-center py-6">Gemini predictions unavailable. Run an API key inside secrets.</p>
            )}
          </div>
        </div>
      )}

      {/* 6. AI Driving Coach Tutor */}
      {activeTab === "coach" && (
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-xl font-bold text-slate-900">AI DriveSmart Tutor Coach</h3>
            <p className="text-xs text-slate-500 mt-1">Ask questions about traffic indicators, clutch biting points, parking formulas, or hazard swerves.</p>
          </div>

          {/* Quick prompt buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              "Explain parallel parking step-by-step",
              "How do I find the biting point of the clutch?",
              "What does a yellow diamond road sign mean?",
              "How should I handle roundabouts safely?"
            ].map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCoachQuestion(p)}
                className="bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold text-left transition-all"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Chat area */}
          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/25 h-72 overflow-y-auto space-y-3">
            {coachChat.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`p-3 rounded-2xl text-xs max-w-md leading-relaxed whitespace-pre-line ${
                  msg.role === "user" 
                    ? "bg-blue-600 text-white rounded-br-none shadow-md shadow-blue-100" 
                    : "bg-white text-slate-800 border border-slate-200 shadow-xs rounded-bl-none"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {coachLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs rounded-bl-none text-xs text-slate-400 flex items-center gap-1.5">
                  <RefreshCw className="h-3 w-3 animate-spin text-blue-600" />
                  AI Coach is typing explanations...
                </div>
              </div>
            )}
          </div>

          {/* Input form */}
          <form onSubmit={handleSendCoachMsg} className="flex gap-2">
            <input
              type="text"
              required
              value={coachQuestion}
              onChange={(e) => setCoachQuestion(e.target.value)}
              placeholder="Ask the AI Driving Coach anything..."
              className="flex-1 border border-slate-200 rounded-xl px-4 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
            />
            <button
              type="submit"
              disabled={coachLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-100 flex items-center gap-1.5 shrink-0"
            >
              <Send className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Send Questions</span>
            </button>
          </form>
        </div>
      )}

      {/* 7. Wallet & Payments Module */}
      {activeTab === "payments" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Wallet management */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">DriveSmart Wallet</h3>
            
            {depositMsg && (
              <div className="bg-blue-50 text-blue-800 border border-blue-200 p-3 rounded-lg text-xs font-bold">
                {depositMsg}
              </div>
            )}

            <div className="bg-slate-900 text-white p-6 rounded-2xl text-center space-y-4">
              <span className="text-[10px] text-blue-400 font-extrabold uppercase tracking-wider block">Wallet Balance</span>
              <p className="text-4xl font-extrabold font-mono text-white">${walletBalance.toFixed(2)}</p>
              <span className="text-[10px] text-slate-400 block">Seamless 1-click booking active</span>
            </div>

            <form onSubmit={handleDepositSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">Top-up Wallet (Simulated)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    required
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    placeholder="e.g., 50"
                    className="flex-1 border border-slate-200 rounded-xl px-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-100"
                  >
                    Load via Apple Pay
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Payment Receipts History */}
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Payment history & installment log</h3>
              <span className="text-xs text-slate-400">Total: {payments.length} transactions</span>
            </div>

            <div className="space-y-3">
              {payments.map((p) => (
                <div key={p.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs">{p.description}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Receipt: {p.receiptNumber} &bull; {p.date}</p>
                    <p className="text-[10px] text-slate-500">Method: {p.method}</p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-800 block">${p.amount}</span>
                    <span className="text-[9px] text-blue-600 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded-sm font-bold uppercase mt-1 inline-block">
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 9. Theory Certificates Download Module */}
      {activeTab === "certificates" && (
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-xl font-bold text-slate-900">Theory Completion Certificates</h3>
            <p className="text-xs text-slate-500 mt-1">Verify, download, and share your official Driving School certificate after scoring 30 XP+ on Practice challenges.</p>
          </div>

          {certificates.length === 0 ? (
            <div className="border border-dashed border-slate-200 rounded-3xl p-8 text-center text-slate-400">
              <Trophy className="h-10 w-10 mx-auto mb-2 text-slate-300" />
              <p className="text-xs font-semibold">No Certificates unlocked yet</p>
              <p className="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto">Score at least 30 XP in the Quiz Section (equivalent to passing the theory laws) to auto-generate your verified certificate!</p>
              <button
                onClick={() => setActiveTab("quizzes")}
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-100"
              >
                Go Play Quizzes
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {certificates.map((cert) => (
                <div key={cert.id} className="p-6 rounded-3xl border-2 border-blue-500/20 bg-blue-50/5 relative overflow-hidden space-y-6 shadow-xs">
                  {/* Digital border styling */}
                  <div className="absolute top-0 right-0 h-20 w-20 bg-blue-500/10 rounded-full blur-2xl" />

                  <div className="text-center space-y-2">
                    <span className="text-[10px] text-blue-700 bg-blue-100 px-3 py-1 rounded-full font-extrabold uppercase tracking-widest border border-blue-200">
                      Official Certificate of completion
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 pt-1">DriveSmart Syndicate Network</h3>
                  </div>

                  <div className="text-center space-y-1">
                    <p className="text-xs text-slate-400">This certifies that</p>
                    <h4 className="text-base font-bold text-slate-800 tracking-wide">{cert.studentName}</h4>
                    <p className="text-xs text-slate-400">has successfully mastered both the theory curriculum and traffic regulations for</p>
                    <p className="text-xs font-bold text-slate-800">{cert.courseTitle}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-500 space-y-0.5 text-center sm:text-left">
                      <p>Verification Code: <strong className="font-mono text-slate-700">{cert.verificationCode}</strong></p>
                      <p>Issue Date: {cert.completionDate}</p>
                    </div>

                    {/* Simulating Verified QR Code */}
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-1.5 rounded-lg border border-slate-200 h-14 w-14 flex items-center justify-center text-slate-800 text-lg shadow-xs">
                        📱
                      </div>
                      <div className="text-[10px] text-slate-400">
                        <p className="font-bold text-slate-600">Scan QR Code</p>
                        <p>to verify license integrity</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => handleVoicePronounce(`Congratulations ${cert.studentName} for completing your theory certificate!`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-blue-100"
                    >
                      <Download className="h-4 w-4" /> Download Certified PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
