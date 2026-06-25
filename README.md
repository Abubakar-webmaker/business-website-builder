# 🏢 Business Website Builder

An AI-powered full-stack web application that generates professional business websites in seconds. Users fill in their business details, choose a template, and AI (powered by Groq) generates complete website content with a live preview and downloadable HTML file.

![Business Website Builder](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-TypeScript-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![Groq AI](https://img.shields.io/badge/Groq-LLaMA%203.3-orange) ![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

---

## 🌐 Live Demo

🔗 **Frontend:** [coming-soon.vercel.app](https://coming-soon.vercel.app)  
🔗 **Backend API:** [coming-soon.onrender.com](https://coming-soon.onrender.com)

---

## ✨ Features

- 🤖 **AI Content Generation** — Groq API (LLaMA 3.3 70B) generates professional website copy
- 🎨 **4 Professional Templates** — Modern, Classic, Minimal, Bold
- 👁️ **Live Preview** — See your website instantly in the browser
- ⬇️ **Download HTML** — Get a complete, ready-to-use HTML file
- 📱 **Responsive Design** — Works perfectly on all screen sizes
- ⚡ **Fast Generation** — Website ready in under 10 seconds
- 🏭 **Industry Support** — 15+ industries supported
- 🌍 **Full Contact Info** — Phone, email, location included

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 18 + TypeScript | UI Framework |
| Vite | Build Tool |
| Axios | API Calls |
| CSS-in-JS (Inline) | Styling |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js + Express | Server |
| Groq SDK | AI Integration |
| LLaMA 3.3 70B Versatile | AI Model |
| CORS + Dotenv | Security & Config |

### Deployment
| Platform | Purpose |
|---------|---------|
| Vercel | Frontend Hosting |
| Render | Backend Hosting |

---

## 📁 Project Structure

business-website-builder/
├── backend/
│ ├── routes/
│ │ └── generate.js # Groq AI content generation
│ ├── server.js # Express server
│ ├── .env.example # Environment variables template
│ └── package.json
│
└── frontend/
├── src/
│ ├── components/
│ │ ├── Navbar.tsx # Top navigation bar
│ │ ├── BusinessForm.tsx # Business details input form
│ │ ├── TemplateSelector.tsx # Template picker
│ │ └── WebsitePreview.tsx # Live preview + download
│ ├── types/
│ │ └── index.ts # TypeScript interfaces
│ ├── App.tsx # Main app component
│ ├── main.tsx # Entry point
│ └── index.css # Global styles
├── index.html
└── package.json

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Groq API Key → [console.groq.com](https://console.groq.com)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abubakar-webmaker/business-website-builder.git
cd business-website-builder
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Start backend:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

### 4️⃣ Open in Browser

http://localhost:5173

## 🎯 How It Works

User fills form  →  Chooses template  →  Clicks Generate

↓

Frontend sends POST /api/generate to backend

↓

Backend sends prompt to Groq AI (LLaMA 3.3 70B)

↓

AI returns structured JSON content

↓

Frontend renders Live Preview + enables HTML Download

---

## 📸 Screenshots

> Add screenshots here after deployment

| Form | Preview |
|------|---------|
| ![Form](./screenshots/form.png) | ![Preview](./screenshots/preview.png) |

---

## 🌐 Deployment

### Frontend → Vercel

```bash
cd frontend
npm run build
```

Add environment variable in Vercel dashboard:
VITE_API_URL = https://your-backend.onrender.com

### Backend → Render
Build Command:  npm install

Start Command:  node server.js
Add environment variables in Render dashboard:
GROQ_API_KEY  = your_groq_api_key

FRONTEND_URL  = https://your-frontend.vercel.app

PORT          = 5000

---

## 📡 API Reference

### `POST /api/generate`

Generate AI website content.

**Request Body:**
```json
{
  "businessName": "Ahmed Tech Solutions",
  "industry": "Technology",
  "tagline": "Building Digital Excellence",
  "description": "We build modern web applications",
  "services": "Web Design, App Dev, SEO",
  "location": "Karachi, Pakistan",
  "phone": "+92 300 1234567",
  "email": "hello@ahmedtech.com",
  "template": "modern"
}
```

**Response:**
```json
{
  "success": true,
  "content": {
    "hero": {
      "headline": "Building Digital Excellence",
      "subheadline": "Professional web solutions for modern businesses",
      "cta": "Get Started Today"
    },
    "about": { "title": "About Us", "content": "..." },
    "services": [...],
    "whyUs": { "title": "Why Choose Us", "points": [...] },
    "testimonial": { "quote": "...", "author": "...", "role": "..." },
    "contact": { "title": "...", "subtitle": "..." },
    "footer": { "tagline": "..." }
  },
  "businessData": { ... }
}
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**M. Abubakar**  
Full Stack Developer (MERN Stack)  
📧 m.abubakar.codes@gmail.com  
🌐 [Portfolio](https://abubakar-portfolio-sage.vercel.app)  
💻 [GitHub](https://github.com/Abubakar-webmaker)

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  <p>Made with ❤️ by M. Abubakar</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
