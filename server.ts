import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI client lazily or safely
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("GoogleGenAI initialized successfully with GEMINI_API_KEY.");
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI:", err);
  }
} else {
  console.warn("GEMINI_API_KEY is missing in environment. AI features will use rich fallback responses.");
}

// 1. AI Driving Coach proxy route
app.post("/api/gemini/coach", async (req, res) => {
  const { question, chatHistory } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question parameter is required" });
  }

  if (!ai) {
    return res.status(400).json({ error: "GEMINI_API_KEY environment variable is required to use the AI Coach." });
  }

  try {
    const systemInstruction = `You are the DriveSmart AI Driving Coach, an expert, encouraging, and highly professional driving school instructor. 
Your goal is to explain driving concepts, traffic rules, road signs, parking maneuvers, and vehicle controls clearly. 
Keep your explanations highly practical, formatted with beautiful Markdown (including clear bullet points and bold key phrases).
Motivate the learner to drive defensively and always prioritize road safety.
Keep your response professional and focused exclusively on driving, traffic rules, and vehicle operations.`;

    // Structure contents with history for chat experience
    const formattedContents: any[] = [];
    if (chatHistory && Array.isArray(chatHistory)) {
      chatHistory.slice(-6).forEach((msg: any) => {
        formattedContents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }]
        });
      });
    }
    formattedContents.push({
      role: "user",
      parts: [{ text: question }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || "I was unable to formulate a response. Please try again.";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ error: "Gemini AI Coach service is currently unavailable. Please verify your GEMINI_API_KEY or try again later." });
  }
});

// 2. AI Personalized Improvement Plan / Analytics proxy
app.post("/api/gemini/analytics", async (req, res) => {
  const { quizStats, practicalStats, attendance } = req.body;
  
  if (!ai) {
    return res.status(400).json({ error: "GEMINI_API_KEY environment variable is required to use AI Analytics." });
  }

  const prompt = `Generate a highly personalized DriveSmart Improvement Plan and Road Test Readiness analysis based on these student metrics:
* Average Quiz Score: ${quizStats?.avgScore || 75}%
* Frequently Failed Categories: ${quizStats?.weakCategories?.join(", ") || "Hazard Perception, Defensive Driving"}
* Completed Practical Lessons: ${practicalStats?.lessonsCompleted || 8}/15
* Instructor Ratings on Key Skills:
  - Clutch Control: ${practicalStats?.skills?.clutchControl || "Needs improvement"}
  - Parallel Parking: ${practicalStats?.skills?.parallelParking || "Satisfactory"}
  - Speed/Lane Discipline: ${practicalStats?.skills?.laneDiscipline || "Good"}
  - Hazard Observation: ${practicalStats?.skills?.observation || "Satisfactory"}
* Attendance Rate: ${attendance || 90}%

Return a JSON object matching this structure:
{
  "readinessScore": number (0-100),
  "testDatePrediction": "string (e.g., '6 weeks', '2 weeks')",
  "criticalWeakness": "string summarizing primary focus",
  "recommendedActionSteps": ["string", "string", "string"],
  "instructorAdviceSummary": "string of professional encouraging advice"
}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.4
      }
    });

    const planText = response.text || "{}";
    const plan = JSON.parse(planText);
    return res.json(plan);
  } catch (error: any) {
    console.error("Gemini analytics error:", error);
    return res.status(500).json({ error: "Gemini AI Analytics is currently unavailable. Please verify your GEMINI_API_KEY or try again later." });
  }
});

// Serve static assets / Vite development mode
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // For Express v4, app.get('*', ...) is perfect
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DriveSmart Server running on http://localhost:${PORT}`);
  });
}

startServer();
