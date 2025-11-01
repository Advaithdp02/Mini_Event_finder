import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:3030/api/events";

function calculateDistance(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;
  const R = 6371; 
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => console.warn("Location access denied.")
      );
    }

    // Fetch events from server
    const fetchEvents = async () => {
      try {
        const res = await axios.get(API_URL);
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = events.filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase())
    );

    if (userLocation) {
      filtered = filtered
        .map((e) => ({
          ...e,
          distance: calculateDistance(
            userLocation.lat,
            userLocation.lng,
            e.latitude,
            e.longitude
          ),
        }))
        .sort((a, b) => a.distance - b.distance);
    }

    setFilteredEvents(filtered);
  }, [search, events, userLocation]);

  if (loading)
    return <div className="text-center mt-20">Loading events...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Upcoming Events 🎉</h2>
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded w-full mb-6 focus:ring-2 focus:ring-yellow-400"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-1">{event.location}</p>
            <p className="text-gray-500 mb-1">📅 {event.date}</p>
            {userLocation && event.distance && (
              <p className="text-blue-500 mb-1">
                📍 {event.distance.toFixed(1)} km away
              </p>
            )}
            <p className="text-gray-700 mb-2">
              👥 {event.currentParticipants}/{event.maxParticipants} participants
            </p>
            <Link
              to={`/events/${event.id}`}
              className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded font-semibold"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
