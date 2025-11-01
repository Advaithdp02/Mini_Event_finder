import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3030";
console.log("Backend URL:", BACKEND_URL);
const API_URL = `${BACKEND_URL}/api/events`;

export default function EventForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    maxParticipants: "",
    latitude: "",
    longitude: "",
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      navigate("/");
    } catch (err) {
      console.error("Error creating event:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          🎉 Create a New Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Event Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>
            {/* Latitude */}
            <div>
            <label className="block text-gray-700 font-semibold mb-1">Latitude</label>
            <input
              type="number"
              step="any"
              name="latitude"
              placeholder="Enter latitude"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Longitude */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Longitude</label>
            <input
              type="number"
              step="any"
              name="longitude"
              placeholder="Enter longitude"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Max Participants */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Max Participants</label>
            <input
              type="number"
              name="maxParticipants"
              placeholder="Enter max participants"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Write a short event description"
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl"
          >
            🚀 Create Event
          </button>
        </form>
      </div>
    </div>
  );
}
