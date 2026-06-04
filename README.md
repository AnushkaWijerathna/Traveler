# 🌍 Traveler | Travel Management Web App

> **Note:** Traveler is a modern travel planning web application built with Next.js, Prisma, and NextAuth.js that helps users organize and visualize their trips. The application allows users to create trips, store locations, upload images, and visualize visited places on an interactive 3D globe.

---

## 📋 Table of Contents

* [🚀 Key Features](#-key-features)
* [⚙️ Tech Stack](#️-tech-stack)
* [📍 Location & Itinerary System](#-location--itinerary-system)
* [🌎 Interactive 3D Travel Globe](#-interactive-3d-travel-globe)
* [🚧 Challenges Faced](#-challenges-faced)
* [🎯 Outcome](#-outcome)
* [📸 Screenshots](#-screenshots)

---

## 🚀 Key Features

### 🔐 Authentication
* Implemented secure authentication using NextAuth.js.
* Login using GitHub OAuth.
* Environment variables stored securely in `.env.local`.
* Logout functionality included.

### 🧭 Trip Management
Users can:
* Create and manage travel trips.
* Store trip information in the database.
* Upload trip images using UploadThing.
* View detailed trip information.

For each trip, users can add locations they plan to visit. Using the Google Maps API key, the selected locations are displayed on an interactive map within the trip page. The database is hosted on **Neon** and managed using the **Prisma ORM**.

---

## ⚙️ Tech Stack

### Frontend
* **Next.js**
* **React**
* **Tailwind CSS**

### Backend
* **NextAuth.js**
* **Prisma ORM**

### Database
* **Neon**

### APIs & Services
* **Google Maps Platform**
* **UploadThing**
* **react-globe.gl**

---

## 📍 Location & Itinerary System

Each trip can include multiple travel locations. Features include:

* Add locations to trips.
* Store coordinates in the database.
* Display locations using Google Maps Platform.

The itinerary system allows users to:
* Select locations.
* Pin them on the map.
* Navigate across the map interface.

---

## 🌎 Interactive 3D Travel Globe

A special feature of the app is the interactive 3D globe built using `react-globe.gl`. The globe:

* Displays travel locations as markers.
* Automatically rotates for better visualization.
* Fetches travel data from an API.
* Shows visited countries in a sidebar.
* Displays a loading spinner while data loads.

This provides a stunning visual overview of the user's travel history worldwide.

---

## 🚧 Challenges Faced

### Google Maps API Limitation
The Google Maps Platform API key is required to:
* Display the world map.
* Convert location names into coordinates.
* Show pinned travel locations.
* Identify visited countries.

Since the API key requires billing setup, the map functionality could not be fully demonstrated without funding, although the underlying implementation and codebase are complete.

---

## 🎯 Outcome

The xTraveler app successfully demonstrates a full-stack modern web application, including:

* OAuth authentication
* Serverless database integration
* File upload handling
* Interactive maps
* 3D data visualization

It provides a complete, modern system for tracking and visualizing travel experiences.

---

## 📸 Screenshots

<img width="1920" height="1020" alt="Screenshot 2026-03-14 143248" src="https://github.com/user-attachments/assets/0d89d320-b303-45b8-aa60-cc24999b213b" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 143239" src="https://github.com/user-attachments/assets/5b2efb36-d266-4b44-984b-f8be3869c3e4" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 143004" src="https://github.com/user-attachments/assets/3b2a76b1-bb71-49e8-ac34-a22a30f578b4" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 142945" src="https://github.com/user-attachments/assets/163b9e82-af1e-4444-a86a-b2624f3e5de6" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 142935" src="https://github.com/user-attachments/assets/c1f1088a-0e9e-4c17-86c7-fbb39fe81081" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 142623" src="https://github.com/user-attachments/assets/95abbfc8-e233-4852-81c0-c619f835f550" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 142609" src="https://github.com/user-attachments/assets/cbdee283-7054-4fde-ac12-d431ab04cce8" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 142548" src="https://github.com/user-attachments/assets/aff94e8a-08ca-4ac0-996a-338789be1a9d" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 142542" src="https://github.com/user-attachments/assets/2313dabc-44ad-4dd8-ad30-ae83756d33ee" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 142530" src="https://github.com/user-attachments/assets/f5b22591-05b4-4351-b057-7b3ebf3a0919" />
<img width="1920" height="1020" alt="Screenshot 2026-03-14 142519" src="https://github.com/user-attachments/assets/ca771cbe-6d3d-4f9f-bcb8-770cd75f8e54" />
