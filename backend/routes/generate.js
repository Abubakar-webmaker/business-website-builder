import Groq from "groq-sdk";

let groq;

function getGroqClient() {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is missing. Add it to backend/.env and restart the server.");
  }

  if (!groq) {
    groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }

  return groq;
}

export async function generateContent(req, res) {
  try {
    const {
      businessName, industry, tagline,
      description, services, location,
      phone, email, template,
    } = req.body;

    if (!businessName || !industry || !template) {
      return res.status(400).json({
        error: "businessName, industry, and template are required",
      });
    }

    const prompt = `You are a professional website copywriter. Generate compelling website content.

Business Details:
- Name: ${businessName}
- Industry: ${industry}
- Tagline: ${tagline || "Not provided"}
- Description: ${description || "Not provided"}
- Services: ${services || "Not provided"}
- Location: ${location || "Not provided"}
- Phone: ${phone || "Not provided"}
- Email: ${email || "Not provided"}
- Template Style: ${template}

Return ONLY valid JSON, no markdown, no explanation:
{
  "hero": {
    "headline": "compelling main headline (max 8 words)",
    "subheadline": "supporting text (max 20 words)",
    "cta": "call to action button text (max 4 words)"
  },
  "about": {
    "title": "about section title",
    "content": "2-3 sentences about the business"
  },
  "services": [
    { "title": "Service 1", "description": "one sentence", "icon": "emoji" },
    { "title": "Service 2", "description": "one sentence", "icon": "emoji" },
    { "title": "Service 3", "description": "one sentence", "icon": "emoji" }
  ],
  "whyUs": {
    "title": "Why Choose Us",
    "points": [
      { "title": "Point 1", "description": "brief description" },
      { "title": "Point 2", "description": "brief description" },
      { "title": "Point 3", "description": "brief description" }
    ]
  },
  "testimonial": {
    "quote": "realistic client testimonial (2 sentences)",
    "author": "client name",
    "role": "client role/company"
  },
  "contact": {
    "title": "contact section title",
    "subtitle": "contact section subtitle"
  },
  "footer": {
    "tagline": "short brand tagline"
  }
}`;

    const completion = await getGroqClient().chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const raw = completion.choices[0]?.message?.content || "{}";
    const cleaned = raw.replace(/```json/g, "").replace(/```/g, "").trim();
    const content = JSON.parse(cleaned);

    res.json({ success: true, content, businessData: { businessName, industry, location, phone, email, template } });

  } catch (error) {
    console.error("Error:", error.message);
    if (error instanceof SyntaxError) {
      return res.status(500).json({ error: "AI response parsing failed. Try again." });
    }
    res.status(500).json({ error: error.message || "Content generation failed" });
  }
}
