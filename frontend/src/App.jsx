import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail";
import EventForm from "./components/EventForm";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <h2 className="text-2xl font-bold tracking-wide flex items-center gap-2">
          🎟️ <span>Event Finder</span>
        </h2>
        <div className="flex gap-5 items-center">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors font-medium"
          >
            Events
          </Link>
          <Link
            to="/create"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            + Create Event
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/create" element={<EventForm />} />
        </Routes>
      </div>
    </Router>
  );
}
