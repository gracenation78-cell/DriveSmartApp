import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Users, Truck, DollarSign, Award, Settings, CheckCircle, AlertCircle, RefreshCw, Calendar, Eye, Download, ShieldCheck, Heart } from "lucide-react";
import { Vehicle, InstructorProfile, StudentProfile, PaymentItem } from "../types";

interface AdminDashboardProps {
  vehicles: Vehicle[];
  instructors: InstructorProfile[];
  payments: PaymentItem[];
  onTriggerMaintenance: (vehicleId: string) => void;
}

// Analytics Mock Datasets
const REVENUE_DATA = [
  { month: "Jan", OnlineFees: 4800, InPerson: 2400, Total: 7200 },
  { month: "Feb", OnlineFees: 5200, InPerson: 2900, Total: 8100 },
  { month: "Mar", OnlineFees: 6100, InPerson: 3500, Total: 9600 },
  { month: "Apr", OnlineFees: 7500, InPerson: 4200, Total: 11700 },
  { month: "May", OnlineFees: 8200, InPerson: 4800, Total: 13000 },
  { month: "Jun", OnlineFees: 9800, InPerson: 5100, Total: 14900 },
  { month: "Jul", OnlineFees: 11200, InPerson: 5800, Total: 17000 }
];

const SUCCESS_RATES = [
  { name: "Automatic License", passRate: 94, totalTests: 180 },
  { name: "Manual Transmission", passRate: 88, totalTests: 140 },
  { name: "Motorcycle Safety", passRate: 97, totalTests: 95 },
  { name: "Heavy Truck CDL", passRate: 82, totalTests: 60 }
];

const VEHICLE_STATUS_DIST = [
  { name: "Available", value: 3, color: "#2563eb" },
  { name: "In Use", value: 4, color: "#4f46e5" },
  { name: "Maintenance", value: 1, color: "#f59e0b" }
];

export default function AdminDashboard({ vehicles, instructors, payments, onTriggerMaintenance }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "vehicles" | "instructors" | "revenue">("overview");
  const [selectedBranch, setSelectedBranch] = useState("Main Headquarters (Downtown)");
  const [maintenanceFilter, setMaintenanceFilter] = useState("All");

  const [simulatedStudents, setSimulatedStudents] = useState<StudentProfile[]>([
    { studentId: "s-1", name: "Jane Smith", email: "jane.smith@student.com", phone: "+1 (555) 304-9210", joinedDate: "2026-06-15", preferredLanguage: "English" },
    { studentId: "s-2", name: "David Miller", email: "david.m@student.com", phone: "+1 (555) 892-0032", joinedDate: "2026-06-20", preferredLanguage: "Spanish" },
    { studentId: "s-3", name: "Marcus Brody", email: "m.brody@student.com", phone: "+1 (555) 441-2940", joinedDate: "2026-05-10", preferredLanguage: "English" },
    { studentId: "s-4", name: "Elena Rostova", email: "elena.r@student.com", phone: "+1 (555) 782-9901", joinedDate: "2026-07-01", preferredLanguage: "Russian" }
  ]);

  const [enrollmentRequests, setEnrollmentRequests] = useState([
    { id: "req-1", name: "Clara Oswald", course: "Complete Automatic", branch: "Northside Branch", vehicleType: "Automatic", date: "2026-07-13", verified: false },
    { id: "req-2", name: "Danny Pink", course: "Manual transmission Masterclass", branch: "West Hills Branch", vehicleType: "Manual", date: "2026-07-14", verified: true }
  ]);

  const handleVerifyRequest = (reqId: string) => {
    setEnrollmentRequests(
      enrollmentRequests.map(r => r.id === reqId ? { ...r, verified: true } : r)
    );
  };

  const handleApproveRequest = (req: typeof enrollmentRequests[0]) => {
    // Generate new student ID automatically
    const newStudentId = `s-${simulatedStudents.length + 1}`;
    const newStudent: StudentProfile = {
      studentId: newStudentId,
      name: req.name,
      email: `${req.name.toLowerCase().replace(" ", ".")}@student.com`,
      phone: "+1 (555) 012-9840",
      joinedDate: new Date().toISOString().split("T")[0],
      preferredLanguage: "English"
    };

    setSimulatedStudents([...simulatedStudents, newStudent]);
    setEnrollmentRequests(enrollmentRequests.filter(r => r.id !== req.id));
  };

  const totalRevenue = payments
    .filter(p => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      {/* Upper Admin Header with Branch and Refresh indicators */}
      <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-slate-800">
        <div>
          <span className="text-[10px] bg-blue-500/20 text-blue-400 font-extrabold uppercase px-2.5 py-1 rounded-full border border-blue-500/30 tracking-wider">
            Super Administrator Portal
          </span>
          <h2 className="text-xl font-bold mt-2">Unified Command Center</h2>
          <p className="text-xs text-slate-400 mt-1">Cross-branch operations, fleet health, and financial accounting</p>
        </div>

        {/* Branch selectors & Quick actions */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="bg-slate-800 text-white text-xs border border-slate-700 px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option>All Branches (Unified)</option>
            <option>Main Headquarters (Downtown)</option>
            <option>Northside Training Grounds</option>
            <option>West Hills Premium Hub</option>
          </select>

          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1 shadow-md shadow-blue-100">
            <RefreshCw className="h-3.5 w-3.5" /> Sync Fleet
          </button>
        </div>
      </div>

      {/* Admin tabs */}
      <div className="flex border-b border-slate-200 pb-px gap-6 overflow-x-auto no-scrollbar">
        {[
          { id: "overview", label: "Operations Overview", icon: Award },
          { id: "vehicles", label: "Fleet & Vehicles Control", icon: Truck },
          { id: "instructors", label: "Instructors Roster", icon: Users },
          { id: "revenue", label: "Revenue & Success Metrics", icon: DollarSign }
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
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Dashboard Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 border border-blue-100">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Active Learners</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">{simulatedStudents.length + 18}</p>
                <span className="text-[10px] text-blue-600 font-bold mt-1 inline-block">&uarr; 14% this month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 border border-indigo-100">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Revenue Accrued</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">${totalRevenue + 12840}</p>
                <span className="text-[10px] text-blue-600 font-bold mt-1 inline-block">&uarr; 22% overall pass</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 border border-blue-100">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Active School Fleet</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">{vehicles.length} Units</p>
                <span className="text-[10px] text-amber-500 font-bold mt-1 inline-block">1 Under Repair</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 border border-indigo-100">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Licensing Exam Pass</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">91.4% Avg</p>
                <span className="text-[10px] text-blue-600 font-bold mt-1 inline-block">Practice quiz pass rate</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Enrollment Requests approval panel */}
            <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Pending Enrollments & Verification Queue
                </h3>
                <span className="text-xs text-blue-600 bg-blue-50 border border-blue-100 font-bold px-2.5 py-1 rounded-full">
                  {enrollmentRequests.length} Requests
                </span>
              </div>

              {enrollmentRequests.length === 0 ? (
                <div className="text-center py-8 text-slate-400">
                  <CheckCircle className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-xs font-semibold">All enrollment verifications up to date!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {enrollmentRequests.map((req) => (
                    <div key={req.id} className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50/20 space-y-3 transition-all">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm">{req.name}</h4>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Course: <strong className="text-slate-600">{req.course}</strong> &bull; {req.branch}
                          </p>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">{req.date}</span>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-2.5 rounded-lg border border-slate-200 text-xs text-slate-600 shadow-xs">
                        <ShieldCheck className={`h-4 w-4 ${req.verified ? "text-blue-500" : "text-amber-500"}`} />
                        <span>
                          {req.verified 
                            ? "Document (National ID & Photo) verified successfully." 
                            : "National ID and Passport photo pending official audit verification."}
                        </span>
                        {!req.verified && (
                          <button
                            onClick={() => handleVerifyRequest(req.id)}
                            className="text-xs font-bold text-blue-600 hover:text-blue-800 ml-auto"
                          >
                            Verify Doc
                          </button>
                        )}
                      </div>

                      <div className="flex justify-end gap-2 pt-1">
                        <button
                          onClick={() => handleApproveRequest(req)}
                          disabled={!req.verified}
                          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-100"
                        >
                          Approve Enrollment
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions & Branch Status */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Fleet Status Distribution
              </h3>
              
              <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={VEHICLE_STATUS_DIST}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {VEHICLE_STATUS_DIST.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {VEHICLE_STATUS_DIST.map((status, i) => (
                  <div key={i} className="p-2 bg-slate-50 rounded-xl">
                    <span className="font-bold text-slate-700 block">{status.value} Units</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5 block">{status.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fleet Control tab */}
      {activeTab === "vehicles" && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-base font-bold text-slate-900">Fleet Operations & Maintenance Log</h3>
              <p className="text-xs text-slate-500 mt-1">Track insurance, services schedule, repairs, and fuel status</p>
            </div>

            <div className="flex gap-2">
              <select
                value={maintenanceFilter}
                onChange={(e) => setMaintenanceFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-xs px-3 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="All">All Fleet</option>
                <option value="Available">Available</option>
                <option value="Maintenance">Maintenance Required</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vehicles
              .filter(v => maintenanceFilter === "All" || v.status === maintenanceFilter)
              .map((v) => (
                <div key={v.id} className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50/10 flex flex-col justify-between gap-4 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-sm">
                        {v.plateNumber}
                      </span>
                      <h4 className="font-bold text-slate-800 text-sm mt-2">{v.makeModel}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Transmission: <strong>{v.transmission}</strong> &bull; Mileage: {v.mileage.toLocaleString()} mi
                      </p>
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 ${
                      v.status === "Available" 
                        ? "bg-blue-100 text-blue-800 border border-blue-200" 
                        : v.status === "In Use"
                        ? "bg-indigo-100 text-indigo-800 border border-indigo-200"
                        : "bg-amber-100 text-amber-800 border border-amber-200"
                    }`}>
                      {v.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center py-2 border-y border-slate-200">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Fuel Status</span>
                      <p className={`text-xs font-bold mt-1 ${v.fuelLevel < 45 ? "text-amber-600" : "text-blue-600"}`}>
                        {v.fuelLevel}%
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Service Date</span>
                      <p className="text-xs font-semibold text-slate-700 mt-1">
                        {v.lastServiceDate}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Insurance Exp.</span>
                      <p className="text-xs font-semibold text-slate-700 mt-1">
                        {v.insuranceExpiry}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    {v.status === "Maintenance" ? (
                      <span className="text-[11px] text-amber-600 font-bold bg-amber-50 px-2.5 py-1 rounded-sm flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" /> Maintenance Alert Triggered
                      </span>
                    ) : (
                      <span />
                    )}

                    <button
                      onClick={() => onTriggerMaintenance(v.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-100"
                    >
                      {v.status === "Maintenance" ? "Complete Service" : "Schedule Service"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Instructors Tab */}
      {activeTab === "instructors" && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-base font-bold text-slate-900">Driving School Instructor Command</h3>
            <p className="text-xs text-slate-500 mt-1">Overview of instructor performance ratings, languages, and scheduling density</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {instructors.map((inst) => (
              <div key={inst.id} className="p-4 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-slate-300 transition-all bg-slate-50/20">
                <img
                  src={inst.avatarUrl}
                  alt={inst.name}
                  className="h-16 w-16 rounded-xl object-cover border border-slate-200 shrink-0"
                />

                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-slate-800 text-sm">{inst.name}</h4>
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
                      ★ {inst.rating}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Specialties: <strong>{inst.vehicleSpecialties.join(", ")}</strong>
                  </p>

                  <div className="flex justify-between items-center pt-1 text-xs">
                    <span className="text-slate-500">Exp: {inst.experienceYears} Years</span>
                    <span className="text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                      {inst.languages.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Financial Analytics Tab */}
      {activeTab === "revenue" && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-base font-bold text-slate-900">Financial Revenue & Exam Pass Trends</h3>
            <p className="text-xs text-slate-500 mt-1">Cross-analyzing digital student intake payments with actual practical success rates</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Revenue chart */}
            <div className="lg:col-span-8 space-y-3">
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Revenue Breakdown (Online vs. Offline)</h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={REVENUE_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Bar dataKey="OnlineFees" fill="#2563eb" name="Digital Online Payments" />
                    <Bar dataKey="InPerson" fill="#4f46e5" name="Offline Branch Fees" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Success rates chart */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Pass Rate per Course Category</h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={SUCCESS_RATES}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={false} />
                    <YAxis domain={[50, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="passRate" stroke="#2563eb" strokeWidth={3} name="Avg Pass Rate %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
