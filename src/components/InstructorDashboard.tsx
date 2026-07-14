import React, { useState } from "react";
import { Users, Calendar, ClipboardList, CheckCircle, Award, Star, Compass, AlertTriangle, Lightbulb, Image as ImageIcon, Send, RefreshCw, UserCheck } from "lucide-react";
import { PracticalSkill, Booking } from "../types";

// 16 core driving curriculum skills requested in prompt
const MANDATORY_CURRICULUM_SKILLS = [
  "Clutch Control",
  "Gear Changing",
  "Steering",
  "Braking",
  "Hill Starts",
  "Parallel Parking",
  "Reverse Parking",
  "Mirror Usage",
  "Traffic Observation",
  "Lane Discipline",
  "Roundabouts",
  "Night Driving",
  "Highway Driving",
  "Defensive Driving",
  "Emergency Response",
  "Parking General"
];

interface InstructorDashboardProps {
  onAddLessonNote: (studentId: string, notes: string) => void;
  bookings: Booking[];
  skillsList: PracticalSkill[];
  onUpdateSkillGrade: (skillId: string, grade: "Needs Practice" | "Satisfactory" | "Excellent" | "Not Started", notes: string) => void;
}

export default function InstructorDashboard({ onAddLessonNote, bookings, skillsList, onUpdateSkillGrade }: InstructorDashboardProps) {
  const [selectedStudentId, setSelectedStudentId] = useState("s-1"); // Jane Smith
  const [activeTab, setActiveTab] = useState<"schedule" | "assessment" | "roster">("schedule");

  // New assessment form state
  const [selectedCurriculumSkill, setSelectedCurriculumSkill] = useState(MANDATORY_CURRICULUM_SKILLS[0]);
  const [newGrade, setNewGrade] = useState<"Needs Practice" | "Satisfactory" | "Excellent" | "Not Started">("Satisfactory");
  const [skillFeedback, setSkillFeedback] = useState("");
  
  // Lesson evaluation state
  const [strengths, setStrengths] = useState("");
  const [weaknesses, setWeaknesses] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [nextObjectives, setNextObjectives] = useState("");
  const [evaluationSuccess, setEvaluationSuccess] = useState(false);
  const [savingSkill, setSavingSkill] = useState(false);

  // Simulated photo/video upload state
  const [simulatedMedia, setSimulatedMedia] = useState<{ url: string; caption: string }[]>([]);
  const [mediaCaption, setMediaCaption] = useState("");

  const handleMediaSimulation = (type: "cone" | "wheel" | "intersection") => {
    let url = "";
    let defaultCaption = "";
    if (type === "cone") {
      url = "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=300";
      defaultCaption = "Parallel parking alignment - front wheel offset from boundary cones.";
    } else if (type === "wheel") {
      url = "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=300";
      defaultCaption = "Clutch holding point - excessive revving recorded.";
    } else {
      url = "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=300";
      defaultCaption = "Blind spot observation at main roundabout intersection.";
    }

    setSimulatedMedia([
      ...simulatedMedia,
      { url, caption: mediaCaption || defaultCaption }
    ]);
    setMediaCaption("");
  };

  const submitEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    const evaluationString = `
STRENGTHS: ${strengths || "Good lane control"}
WEAKNESSES: ${weaknesses || "Tends to rush clutch releases"}
RECOMMENDATIONS: ${recommendations || "Practice biting point drills"}
NEXT OBJECTIVES: ${nextObjectives || "Introduce steep incline launches"}
    `.trim();

    onAddLessonNote(selectedStudentId, evaluationString);
    setEvaluationSuccess(true);
    setTimeout(() => {
      setEvaluationSuccess(false);
      setStrengths("");
      setWeaknesses("");
      setRecommendations("");
      setNextObjectives("");
    }, 3000);
  };

  const handleGradeUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSkill(true);
    
    // Find if skill already exists in database list or simulate
    const existingSkill = skillsList.find(s => s.name.toLowerCase() === selectedCurriculumSkill.toLowerCase());
    const idToUpdate = existingSkill ? existingSkill.id : `sk-${Date.now()}`;
    
    setTimeout(() => {
      onUpdateSkillGrade(idToUpdate, newGrade, skillFeedback);
      setSavingSkill(false);
      setSkillFeedback("");
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Upper header section */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-slate-800">
        <div>
          <span className="text-[10px] bg-blue-500/20 text-blue-400 font-extrabold uppercase px-2.5 py-1 rounded-full border border-blue-500/30 tracking-wider">
            Instructor Portal
          </span>
          <h2 className="text-xl font-bold mt-2">Welcome Back, Instructor Maria</h2>
          <p className="text-xs text-slate-400 mt-1">Ready for today's 4 scheduled student training slots</p>
        </div>

        {/* Tab Switchers */}
        <div className="flex bg-slate-800 p-1 rounded-xl w-full md:w-auto self-stretch md:self-auto shrink-0 border border-slate-700">
          <button
            onClick={() => setActiveTab("schedule")}
            className={`flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === "schedule" ? "bg-blue-600 text-white shadow-md shadow-blue-100" : "text-slate-400 hover:text-white"
            }`}
          >
            <Calendar className="h-3.5 w-3.5" />
            Daily Schedule
          </button>
          <button
            onClick={() => setActiveTab("assessment")}
            className={`flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === "assessment" ? "bg-blue-600 text-white shadow-md shadow-blue-100" : "text-slate-400 hover:text-white"
            }`}
          >
            <ClipboardList className="h-3.5 w-3.5" />
            Practical Assessment
          </button>
        </div>
      </div>

      {/* Main Grid content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (Roster selection) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Active Learners Roster</h3>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">4 Active</span>
          </div>

          <div className="space-y-2">
            {[
              { id: "s-1", name: "Jane Smith", progress: "8 / 15 Lessons", course: "Complete Automatic", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" },
              { id: "s-2", name: "David Miller", progress: "3 / 18 Lessons", course: "Manual transmission", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
              { id: "s-3", name: "Marcus Brody", progress: "14 / 15 Lessons", course: "Complete Automatic", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
              { id: "s-4", name: "Elena Rostova", progress: "0 / 12 Lessons", course: "Motorcycle licensing", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" }
            ].map(student => (
              <div
                key={student.id}
                onClick={() => setSelectedStudentId(student.id)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                  selectedStudentId === student.id
                    ? "border-blue-500 bg-blue-50/20 shadow-xs"
                    : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="h-10 w-10 rounded-full object-cover border border-slate-200"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 text-sm">{student.name}</h4>
                  <p className="text-xs text-slate-400 truncate">{student.course}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-500 block bg-slate-100 px-1.5 py-0.5 rounded-sm">
                    {student.progress}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <UserCheck className="h-3.5 w-3.5 text-blue-600" />
              Quick Student Information
            </h4>
            <div className="text-xs text-slate-500 space-y-1">
              <p><strong>Emergency Contact:</strong> +1 (555) 019-3224</p>
              <p><strong>Permit Status:</strong> Temporary (Class D)</p>
              <p><strong>Preferred Language:</strong> English</p>
              <p><strong>Confidence Rating:</strong> Excellent (Self-evaluated)</p>
            </div>
          </div>
        </div>

        {/* Right Column (Dynamic views based on tabs) */}
        <div className="lg:col-span-8 space-y-6">
          
          {activeTab === "schedule" && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="text-base font-bold text-slate-900">Daily Appointment Log</h3>
                <span className="text-xs text-slate-400 font-mono">Date: Today, July 14, 2026</span>
              </div>

              {/* Day Timeline */}
              <div className="space-y-4">
                {bookings
                  .filter(b => b.status !== "cancelled")
                  .map((booking) => {
                    const isSelected = booking.studentId === selectedStudentId;
                    return (
                      <div
                        key={booking.id}
                        onClick={() => setSelectedStudentId(booking.studentId)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
                          isSelected ? "border-blue-500 bg-blue-50/10 shadow-xs" : "border-slate-100 hover:border-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-slate-100 p-2.5 rounded-lg text-slate-700 font-mono font-bold text-xs shrink-0 border border-slate-200">
                            {booking.time}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm">
                              {booking.studentName}
                            </h4>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>{booking.type}</span> &bull; <span>{booking.durationMinutes} mins</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md ml-auto md:ml-0 shrink-0 border border-slate-200">
                            {booking.vehicleInfo || "Toyota Corolla"}
                          </span>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 ${
                            booking.status === "completed" 
                              ? "bg-blue-100 text-blue-800 border border-blue-200" 
                              : "bg-amber-100 text-amber-800 border border-amber-200"
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <hr className="border-slate-200" />

              {/* Assessment Form for the currently selected student */}
              <form onSubmit={submitEvaluation} className="space-y-4 pt-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Post-Lesson Assessment Report for {selectedStudentId === "s-1" ? "Jane Smith" : "Selected Student"}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-600 block mb-1">Key Strengths observed</label>
                    <textarea
                      value={strengths}
                      onChange={(e) => setStrengths(e.target.value)}
                      placeholder="e.g. Smooth mirror-signal-maneuver routine"
                      rows={2}
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-600 block mb-1">Areas needing improvement</label>
                    <textarea
                      value={weaknesses}
                      onChange={(e) => setWeaknesses(e.target.value)}
                      placeholder="e.g. Releases clutch too fast when pulling off"
                      rows={2}
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-600 block mb-1">Recommended practice exercises</label>
                    <textarea
                      value={recommendations}
                      onChange={(e) => setRecommendations(e.target.value)}
                      placeholder="e.g. Hold biting point at incline for 3 secs"
                      rows={2}
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-600 block mb-1">Next lesson objectives</label>
                    <textarea
                      value={nextObjectives}
                      onChange={(e) => setNextObjectives(e.target.value)}
                      placeholder="e.g. Reverse parallel parking on real street blocks"
                      rows={2}
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                    />
                  </div>
                </div>

                {/* Media Simulation */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 block">
                    Upload Lesson Photos / Improvement Media (Simulated)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={mediaCaption}
                      onChange={(e) => setMediaCaption(e.target.value)}
                      placeholder="Custom media caption or note..."
                      className="flex-1 border border-slate-200 rounded-xl px-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleMediaSimulation("cone")}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0 border border-slate-200"
                    >
                      <ImageIcon className="h-3.5 w-3.5" /> Parking Photo
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMediaSimulation("intersection")}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0 border border-slate-200"
                    >
                      <ImageIcon className="h-3.5 w-3.5" /> Roundabout Photo
                    </button>
                  </div>

                  {simulatedMedia.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                      {simulatedMedia.map((m, i) => (
                        <div key={i} className="relative group rounded-xl border border-slate-200 overflow-hidden bg-slate-50 shadow-xs">
                          <img src={m.url} alt={m.caption} className="w-full h-24 object-cover" />
                          <p className="p-1.5 text-[9px] text-slate-600 font-medium leading-normal bg-white">
                            {m.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-2">
                  {evaluationSuccess ? (
                    <span className="text-xs text-blue-600 font-bold bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 animate-pulse">
                      <CheckCircle className="h-4 w-4" /> Assessment logged successfully!
                    </span>
                  ) : (
                    <span />
                  )}
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-md shadow-blue-100"
                  >
                    <Send className="h-3.5 w-3.5" /> Log Assessment Notes
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === "assessment" && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-base font-bold text-slate-900">Official Practical Curriculum grading</h3>
                <p className="text-xs text-slate-500 mt-1">Grade individual driving maneuvers to trigger readiness predictions</p>
              </div>

              {/* Grade Update Form */}
              <form onSubmit={handleGradeUpdateSubmit} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Update Curriculum Score</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-600 block mb-1">Select Skill</label>
                    <select
                      value={selectedCurriculumSkill}
                      onChange={(e) => setSelectedCurriculumSkill(e.target.value)}
                      className="w-full border border-slate-200 bg-white rounded-lg p-2 text-xs focus:outline-none"
                    >
                      {MANDATORY_CURRICULUM_SKILLS.map((skill, idx) => (
                        <option key={idx} value={skill}>{skill}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-600 block mb-1">Grade Awarded</label>
                    <select
                      value={newGrade}
                      onChange={(e) => setNewGrade(e.target.value as any)}
                      className="w-full border border-slate-200 bg-white rounded-lg p-2 text-xs focus:outline-none"
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="Needs Practice">Needs Practice</option>
                      <option value="Satisfactory">Satisfactory</option>
                      <option value="Excellent">Excellent</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-600 block mb-1">Specific performance logs</label>
                    <input
                      type="text"
                      value={skillFeedback}
                      onChange={(e) => setSkillFeedback(e.target.value)}
                      placeholder="e.g., Flawless execution on 3 straight attempts"
                      className="w-full border border-slate-200 bg-white rounded-lg p-2 text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={savingSkill}
                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-blue-100"
                  >
                    {savingSkill ? (
                      <>
                        <RefreshCw className="h-3 w-3 animate-spin" /> Saving...
                      </>
                    ) : (
                      <>
                        <Award className="h-3.5 w-3.5" /> Submit Official Grade
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Current Skills Table */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Current Mastered & Active Skills
                </h4>

                <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200 shadow-xs">
                  {skillsList.map((skill) => (
                    <div key={skill.id} className="p-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-slate-50/50 transition-colors">
                      <div>
                        <h5 className="text-xs font-bold text-slate-800">{skill.name}</h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Category: <span className="font-semibold text-slate-600">{skill.category}</span> &bull; Updated: {skill.lastUpdated || "Today"}
                        </p>
                        {skill.notes && (
                          <p className="text-[11px] text-slate-400 mt-1 italic">
                            Feedback: "{skill.notes}"
                          </p>
                        )}
                      </div>

                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 ${
                        skill.grade === "Excellent" 
                          ? "bg-blue-100 text-blue-800 border border-blue-200" 
                          : skill.grade === "Satisfactory" 
                          ? "bg-indigo-100 text-indigo-800 border border-indigo-200" 
                          : skill.grade === "Needs Practice" 
                          ? "bg-amber-100 text-amber-800 border border-amber-200" 
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}>
                        {skill.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
