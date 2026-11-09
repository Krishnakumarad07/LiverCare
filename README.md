# LiverCare AI — Liver Cirrhosis Prediction System

LiverCare AI is an intelligent clinical decision-support web application for evaluating the risk of liver cirrhosis using routine blood test biomarkers.

## Tech Stack
- **Frontend:** React 18, Vite, Tailwind CSS, Lucide Icons, Recharts, React Router v6, Axios
- **Backend (Upcoming):** Python FastAPI, scikit-learn (RandomForestClassifier), pandas, numpy, ReportLab
- **Database:** PostgreSQL (with SQLAlchemy ORM)

---

## Project Structure
```text
mouni-project/
├── frontend/                     # React Vite Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx        # Sidebar + Content Wrapper
│   │   │   ├── Sidebar.jsx       # Navigation Sidebar with Teal Branding
│   │   │   └── Illustrations.jsx # Custom SVG Liver & Anatomical Artworks
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx     # Screen 1: Hero, Feature Cards, About Cirrhosis
│   │   │   ├── PatientDetails.jsx# Screen 2: 8-Biomarker Form + Anatomical Silhouette
│   │   │   ├── Prediction.jsx    # Screen 3: Risk Assessment, Donut Chart, Mascot
│   │   │   └── Reports.jsx       # Screen 4: Clinical History Table & PDF Download
│   │   ├── services/
│   │   │   └── api.js            # Axios Client & Backend Bridge
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── backend/                      # Python ML & PostgreSQL Backend (Phase 2)
```

---

## How to Run Frontend
```bash
cd frontend
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

