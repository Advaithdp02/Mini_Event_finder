# Mini Event Finder

**Mini Event Finder** is a modern web application built with **React.js** and **Node.js/Express**, designed to help users discover, explore, and join local events in their area. The app provides a clean, responsive interface and integrates geolocation features to enhance the user experience.

---

## Features

### Event Listing
- Displays all upcoming events in a visually appealing grid layout.
- Shows key details for each event:
  - Title
  - Location
  - Date
  - Number of participants (`currentParticipants` / `maxParticipants`)
- Calculates the distance from the user's current location and sorts events by proximity.

### Search Functionality
- Users can search events by title.
- Events are dynamically filtered based on search input.

### Event Details
- Detailed view of individual events with:
  - Event title and description
  - Location and date
  - Participant count
  - Distance from the user
- **Join Event** functionality:
  - Users can join events if slots are available.
  - Button disables or provides feedback if the event is full or already joined.
  - Participant count updates in real-time after joining.

### Responsive Design
- Fully responsive and optimized for desktop, tablet, and mobile screens.
- Uses **Tailwind CSS** for modern styling and smooth UI interactions.

### User Geolocation
- Uses browser geolocation to:
  - Calculate distance to events.
  - Sort events nearest to the user first.
- Displays distance in kilometers on event cards and details.

### API Integration
- Backend powered by **Node.js** and **Express**.
- Provides RESTful API endpoints:
  - `/api/events` – Fetch all events
  - `/api/events/:id` – Fetch single event details
  - `/api/events/:id/join` – Join an event

### Loading States & Error Handling
- Displays loading animations while fetching events or event details.
- Gracefully handles errors, showing user-friendly messages when fetching fails.

### Navigation
- Simple and intuitive navigation:
  - Home page with all events
  - Event detail pages
  - Create event page (if applicable)

### Data Structure
- Each event contains:
  - `id`: Unique identifier
  - `title`: Name of the event
  - `description`: Detailed description
  - `location`: Event location
  - `date`: Event date
  - `maxParticipants`: Maximum allowed participants
  - `currentParticipants`: Current number of participants
  - `latitude` and `longitude`: Coordinates for distance calculation

---

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, React Router
- **Backend:** Node.js, Express
- **Data Storage:** Server-side array (can be upgraded to MongoDB)
- **Geolocation:** Browser’s Geolocation API
- **HTTP Requests:** Axios

---

## Future Enhancements
- Add authentication for users to track joined events.
- Implement event creation and management for authenticated users.
- Store events in a database for persistence.
- Enable filters by categories, date, or distance radius.
- Add map view to visualize nearby events.

---
