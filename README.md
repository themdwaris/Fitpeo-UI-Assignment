# Healthcare Dashboard UI - React (Static Assignment)

This is a **static React-based Healthcare Dashboard UI** built as part of a Web Developer assignment. It is a pixel-perfect, responsive implementation of a reference design. The dashboard is **non-interactive**, and all data is rendered from static mock data files.

---

## 🌐 Live Demo

Coming soon...

---

## 🔧 Tech Stack

* **Framework**: React (Vite)
* **Styling**: Tailwind CSS
* **Icons**: Lucide React / React Icons
* **Data**: Mock static JavaScript arrays

---

## 📂 Folder Structure

```
src/
├── assets/                # Images and static assets (e.g., anatomy illustration)
├── components/            # Reusable React components
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── DashboardMainContent.jsx
│   ├── AnatomySection.jsx
│   ├── HealthStatusCards.jsx
│   ├── CalendarView.jsx
│   ├── UpcomingSchedule.jsx
│   ├── ActivityFeed.jsx
│   └── SimpleAppointmentCard.jsx
├── data/                 # Static mock data files
│   ├── navigation.js
│   ├── healthData.js
│   ├── calendarData.js
│   └── upcomingAppointments.js
├── styles/               # Tailwind config and optional custom styles
├── App.jsx               # Root application component
└── main.jsx              # Entry point
```

---

## 📊 Features

* Clean and modern static healthcare UI
* Fully responsive (mobile, tablet, desktop)
* Modular and reusable component structure
* Pixel-perfect spacing, alignment, and typography
* Static calendar with mock appointment slots
* Anatomy section with labeled health indicators
* Static appointment and activity overview
* Sidebar navigation with categorized links

---

## 📊 Components Overview

### Layout

* `App.jsx`: Root layout using Flexbox for sidebar + content
* `Header.jsx`: Logo, search input, bell icon, profile and add button
* `Sidebar.jsx`: Static links organized under "General" and "Tools"

### Dashboard Content

* `DashboardMainContent.jsx`: Container that renders all sections
* `AnatomySection.jsx`: Shows human body with health labels (e.g. "Healthy Heart")
* `HealthStatusCards.jsx`: Cards for lungs, bone, teeth status
* `CalendarView.jsx`: Static month grid with appointment slots
* `UpcomingSchedule.jsx`: Renders upcoming appointment list
* `ActivityFeed.jsx`: Bar chart section showing activity
* `SimpleAppointmentCard.jsx`: Reusable appointment card for schedules

---

## 📅 How to Run Locally

```bash
# Step 1: Clone the repository
https://github.com/yourusername/healthcare-dashboard

# Step 2: Install dependencies
cd healthcare-dashboard
npm install

# Step 3: Run the dev server
npm run dev

# Step 4: Open in browser
http://localhost:5173
```

---

## 📁 Data Sources

Mock data is organized under the `src/data/` folder:

* `navigation.js`: Sidebar links
* `healthData.js`: Heart, lungs, bone, etc.
* `calendarData.js`: Appointment slots
* `upcomingAppointments.js`: List for schedule cards

---

## 🖜 Notes

* No interactivity is implemented (no clicks, no routing, no forms)
* All visuals rendered from static JSON-like JS arrays via props
* Use of only functional React components and Tailwind CSS

---

## ✨ Credits

* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide React](https://lucide.dev/)
* Free anatomy SVG from open-source platforms (or placeholders)

---

## 📊 Author

Mohammad Waris | [LinkedIn](https://linkedin.com/in/themdwaris) | [Portfolio](https://themdwariss.netlify.app)


