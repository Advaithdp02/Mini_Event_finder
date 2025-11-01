import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:3030/api/events";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [joining, setJoining] = useState(false);
  const [error, setError] = useState("");
  const [hasJoined, setHasJoined] = useState(false);

  // Check if the event is already joined (from localStorage)
  useEffect(() => {
    const joinedEvents = JSON.parse(localStorage.getItem("joinedEvents")) || [];
    if (joinedEvents.includes(id)) {
      setHasJoined(true);
    }
  }, [id]);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/${id}`);
      setEvent(res.data);
    } catch (err) {
      setError("Failed to load event details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const handleJoin = async () => {
    if (!event) return;

    if (hasJoined) {
      alert("You’ve already joined this event!");
      return;
    }

    if (event.currentParticipants >= event.maxParticipants) {
      alert("Sorry, this event is already full!");
      return;
    }

    try {
      setJoining(true);
      await axios.post(`${API_URL}/${id}/join`);

      // Store joined event ID locally
      const joinedEvents = JSON.parse(localStorage.getItem("joinedEvents")) || [];
      joinedEvents.push(id);
      localStorage.setItem("joinedEvents", JSON.stringify(joinedEvents));

      setHasJoined(true);
      alert("You’ve successfully joined the event!");
      fetchEvent();
    } catch (err) {
      alert("Failed to join event. Please try again later.");
    } finally {
      setJoining(false);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-gray-600 text-lg animate-pulse">Loading event details...</div>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-600 font-medium mt-10">{error}</div>
    );

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h2>
      <p className="text-gray-700 text-lg mb-6">{event.description}</p>

      <div className="space-y-2 text-gray-600">
        <p><span className="font-semibold">📍 Location:</span> {event.location}</p>
        <p><span className="font-semibold">📅 Date:</span> {event.date}</p>
        <p>
          <span className="font-semibold">👥 Participants:</span>{" "}
          {event.currentParticipants}/{event.maxParticipants}
        </p>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handleJoin}
          disabled={joining || hasJoined}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            hasJoined
              ? "bg-green-500 text-white cursor-not-allowed"
              : joining
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-300 text-gray-900"
          }`}
        >
          {hasJoined ? "✅ Joined" : joining ? "Joining..." : "Join Event"}
        </button>

        <button
          onClick={fetchEvent}
          className="text-sm text-gray-600 underline hover:text-gray-900 transition"
        >
          Refresh 🔄
        </button>
      </div>
    </div>
  );
}
