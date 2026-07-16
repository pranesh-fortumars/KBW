# Karpagam Borewells Enterprise ERP

A colossal, full-scale frontend Enterprise Resource Planning (ERP) application built to modernize and manage Karpagam Borewells.

This project successfully integrates a beautifully animated, legacy 3D HTML website into a modern React architecture without losing a single pixel of the original design, while appending a massive suite of enterprise management tools.

## 🚀 Tech Stack
- **Framework:** React 18 with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (with custom legacy brand UI tokens)
- **Icons:** Lucide React
- **Routing:** React Router v6

## 🎯 Architecture Overview
The application is uniquely architected into three distinct sectors:
1. **The Legacy Core (`/`)**: The original static website is preserved flawlessly inside a full-screen iframe (`LandingPage.tsx`). The original navbar was natively extended to link into the new React router.
2. **The ERP Admin Dashboard (`/admin`)**: A secured, massive enterprise dashboard to manage all internal operations.
3. **The Customer Portal (`/portal` & `/book`)**: Public and client-facing interfaces for generating leads and tracking project status.

## 📦 Modules Included

### 1. CRM & Lead Management (`/admin/crm`)
- Interactive Kanban board for tracking leads (New, Follow-up, Closed).
- Pipeline management ready for backend integration.

### 2. Fleet & Machine Tracking (`/admin/fleet`)
- Real-time GPS mapping interface for tracking drilling rigs.
- Maintenance logs and active utilization metrics.

### 3. Live Project Monitoring (`/admin/projects`)
- Track active drilling sites with depth metrics, casing requirements, and live status.

### 4. Finance & Quotation Engine (`/admin/finance`)
- Dynamic quotation generator mimicking advanced PDF generation tools.
- Invoice tracking (Paid, Pending, Overdue).

### 5. Inventory Management (`/admin/inventory`)
- Stock management for 7" PVC Pipes, 10" Pipes, Bits, and Compressors.
- Automatic low-stock visual indicators.

### 6. HR & Settings (`/admin/hr`, `/admin/settings`)
- Employee directory, payroll tracking, and attendance logs.
- Role-based access control UI (Super Admin, Manager, Operator).

### 7. Media Management (`/admin/media`)
- Gallery view for sorting and managing site photos, drone footage, and certificates.

### 8. Customer Booking & Portal (`/book`, `/portal`)
- Public lead generation form.
- Dedicated dashboard for active clients to track their specific drilling project.

## 🎨 UI/UX Design System
The entire application was completely overhauled from a generic "Corporate Slate" theme to perfectly match the Karpagam Borewells legacy aesthetic:
- **Fonts:** Montserrat (Headings) & Roboto (Body)
- **Primary Brand Colors:** Neon Green (`#19d219`), Gradient Pink (`#FF4F8B`), Gradient Purple (`#6C38FF`), and Teal (`#00C9A7`).
- **Components:** Widespread use of gradient buttons, deep purple sidebars, and soft white transparencies.
- **Animations:** Custom pure CSS `@keyframes` (`fade-in-up`) for seamless page transitions and interactive hover physics (`translate-y` lift) across all dashboard cards, maintaining blazing fast performance without heavy JS libraries.

## 💾 Database Strategy
Currently, the entire frontend operates using sophisticated **JSON Mock Arrays** that behave exactly like a NoSQL database. 
The architecture is 100% structured and prepared for a seamless "plug-and-play" upgrade to **Firebase / Firestore** when backend persistence is required.

## 🛠️ How to Run Locally

1. Open a terminal and navigate to the `app` directory:
   ```bash
   cd e:\KBW\app
   ```
2. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173`.

## 🔮 Future Roadmap (Firebase Migration)
While the current application is purely frontend-driven, the data structures are designed to mirror a NoSQL document database. 
To transition to a live backend:
1. Initialize Firebase inside the project (`firebase init`).
2. Swap the frontend `mockData` arrays inside the React components with Firebase Firestore subscriptions (`onSnapshot`).
3. Implement Firebase Authentication to secure the `/admin` routes.
4. Connect the Media Upload interface to Firebase Storage.

## ⚙️ Environment Configuration
No strict `.env` configuration is required to run the local mockup. However, when migrating to production, create a `.env` file in the `app` root:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_API_URL=production_url
```

## 🤝 Development & Contribution Guidelines
- **Component Architecture:** Reusable components (Buttons, Cards, Inputs) should be placed in `src/components/`. 
- **Icons:** We rely strictly on `lucide-react` for SVG icons to maintain uniform weight and size.
- **Styling:** Avoid inline styles. Use Tailwind CSS utility classes. For complex gradients, use the globally defined `.btn-gradient` and `.text-gradient` classes from `index.css`.

---
*Built with precision to scale Karpagam Borewells for the next 40 years.*
