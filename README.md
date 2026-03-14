Traveler – Travel Management Web App 🌍✈️

Traveler is a modern travel planning web application built with Next.js, Prisma, and NextAuth.js that helps users organize and visualize their trips.
The application allows users to create trips, store locations, upload images, and visualize visited places on an interactive 3D globe.

Key Features

🔐 Authentication

Implemented secure authentication using NextAuth.js
Login using GitHub OAuth
Environment variables stored securely in .env.local
Logout functionality included

🧭 Trip Management

Users can:
Create and manage travel trips
Store trip information in the database
Upload trip images using UploadThing
View detailed trip information
For each trip, users can add locations they plan to visit. Using the Google Maps API key, the selected locations are displayed on an interactive map within the trip page.

Database is hosted on Neon and managed using Prisma ORM.

📍 Location & Itinerary System

Each trip can include multiple travel locations.

Features include:

Add locations to trips
Store coordinates in the database
Display locations using Google Maps Platform
The itinerary system allows users to:
Select locations
Pin them on the map
Navigate across the map interface.

🌎 Interactive 3D Travel Globe

A special feature of the app is the interactive 3D globe built using react-globe.gl.
The globe:

Displays travel locations as markers
Automatically rotates for better visualization
Fetches travel data from an API
Shows visited countries in a sidebar
Displays a loading spinner while data loads
This provides a visual overview of the user's travel history worldwide.

Tech Stack

Frontend

  Next.js
  React
  Tailwind CSS
  Backend
  NextAuth.js
  Prisma ORM

Database
  Neon

APIs & Services

  Google Maps Platform
  UploadThing
  react-globe.gl

Challenges Faced

Google Maps API Limitation

  The Google Maps Platform API key is required to:
  Display the world map
  Convert location names into coordinates
  Show pinned travel locations
  Identify visited countries
  Since the API key requires billing setup, the map functionality could not be fully demonstrated without funding, although the implementation is complete.

Outcome

The Traveler app demonstrates a full-stack modern web application including:

  OAuth authentication
  Serverless database integration
  File upload handling
  Interactive maps  
  3D data visualization

It provides a complete system for tracking and visualizing travel experiences.
