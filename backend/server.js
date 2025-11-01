import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());
app.use(express.json());

export const events = [
  {
    id: "1",
    title: "Tech Innovators Meetup",
    description: "Meet developers, founders, and investors to explore cutting-edge technologies and startups.",
    location: "Kochi, Kerala",
    date: "2025-11-10",
    maxParticipants: 100,
    currentParticipants: 45,
    latitude: 9.9312,
    longitude: 76.2673
  },
  {
    id: "2",
    title: "Beach Cleanup Drive",
    description: "Join hands to clean and preserve our beautiful beach and promote sustainability.",
    location: "Varkala Beach, Kerala",
    date: "2025-11-12",
    maxParticipants: 60,
    currentParticipants: 40,
    latitude: 8.7379,
    longitude: 76.7161
  },
  {
    id: "3",
    title: "Kerala Food Festival",
    description: "A grand celebration of Kerala’s diverse cuisines and flavors.",
    location: "Thrissur, Kerala",
    date: "2025-11-20",
    maxParticipants: 500,
    currentParticipants: 320,
    latitude: 10.5276,
    longitude: 76.2144
  },
  {
    id: "4",
    title: "AI & Data Science Conference",
    description: "Leading AI researchers share insights into the latest machine learning innovations.",
    location: "Bangalore, Karnataka",
    date: "2025-11-25",
    maxParticipants: 300,
    currentParticipants: 290,
    latitude: 12.9716,
    longitude: 77.5946
  },
  {
    id: "5",
    title: "Mountain Trek Adventure",
    description: "Explore the scenic trails of Munnar with a team of trekkers and guides.",
    location: "Munnar, Kerala",
    date: "2025-12-02",
    maxParticipants: 40,
    currentParticipants: 25,
    latitude: 10.0889,
    longitude: 77.0595
  },
  {
    id: "6",
    title: "Startup Pitch Night",
    description: "Local entrepreneurs pitch their startups to investors and mentors.",
    location: "Kozhikode, Kerala",
    date: "2025-11-14",
    maxParticipants: 150,
    currentParticipants: 100,
    latitude: 11.2588,
    longitude: 75.7804
  },
  {
    id: "7",
    title: "Coding Bootcamp 2025",
    description: "An intensive hands-on bootcamp to learn full-stack development in 7 days.",
    location: "Chennai, Tamil Nadu",
    date: "2025-12-01",
    maxParticipants: 80,
    currentParticipants: 55,
    latitude: 13.0827,
    longitude: 80.2707
  },
  {
    id: "8",
    title: "Art & Craft Exhibition",
    description: "Showcasing traditional and modern art by local artists.",
    location: "Fort Kochi, Kerala",
    date: "2025-11-19",
    maxParticipants: 120,
    currentParticipants: 80,
    latitude: 9.9640,
    longitude: 76.2425
  },
  {
    id: "9",
    title: "Yoga Retreat",
    description: "Relax your mind and body with this peaceful yoga and meditation retreat.",
    location: "Wayanad, Kerala",
    date: "2025-12-10",
    maxParticipants: 50,
    currentParticipants: 32,
    latitude: 11.6854,
    longitude: 76.1320
  },
  {
    id: "10",
    title: "Photography Workshop",
    description: "Learn photography techniques with professionals by the backwaters.",
    location: "Alleppey, Kerala",
    date: "2025-11-18",
    maxParticipants: 90,
    currentParticipants: 65,
    latitude: 9.4981,
    longitude: 76.3388
  },
  {
    id: "11",
    title: "Music Concert: Sounds of the Sea",
    description: "Enjoy live performances by Kerala’s top bands and indie musicians.",
    location: "Kollam, Kerala",
    date: "2025-11-22",
    maxParticipants: 400,
    currentParticipants: 250,
    latitude: 8.8932,
    longitude: 76.6141
  },
  {
    id: "12",
    title: "Robotics Expo 2025",
    description: "Showcasing cutting-edge robotics projects from students and professionals.",
    location: "Trivandrum, Kerala",
    date: "2025-11-30",
    maxParticipants: 200,
    currentParticipants: 120,
    latitude: 8.5241,
    longitude: 76.9366
  },
  {
    id: "13",
    title: "Sustainable Living Fair",
    description: "Discover eco-friendly products and learn about sustainable lifestyles.",
    location: "Palakkad, Kerala",
    date: "2025-11-16",
    maxParticipants: 150,
    currentParticipants: 95,
    latitude: 10.7867,
    longitude: 76.6548
  },
  {
    id: "14",
    title: "Hackathon: Build for Good",
    description: "Collaborate with coders to solve real-world social challenges using technology.",
    location: "Bangalore, Karnataka",
    date: "2025-11-28",
    maxParticipants: 250,
    currentParticipants: 200,
    latitude: 12.9716,
    longitude: 77.5946
  },
  {
    id: "15",
    title: "Cultural Dance Festival",
    description: "A night of mesmerizing classical and folk performances.",
    location: "Kannur, Kerala",
    date: "2025-12-08",
    maxParticipants: 300,
    currentParticipants: 220,
    latitude: 11.8745,
    longitude: 75.3704
  },
  {
    id: "16",
    title: "Wildlife Photography Tour",
    description: "Capture the beauty of Kerala’s wildlife in its natural habitat.",
    location: "Thekkady, Kerala",
    date: "2025-12-12",
    maxParticipants: 30,
    currentParticipants: 15,
    latitude: 9.5937,
    longitude: 77.1610
  },
  {
    id: "17",
    title: "Cybersecurity Awareness Camp",
    description: "Learn about online safety, hacking prevention, and digital hygiene.",
    location: "Kottayam, Kerala",
    date: "2025-11-23",
    maxParticipants: 100,
    currentParticipants: 70,
    latitude: 9.5916,
    longitude: 76.5222
  },
  {
    id: "18",
    title: "Charity Marathon",
    description: "Run for a cause! All proceeds go to children’s education funds.",
    location: "Ernakulam, Kerala",
    date: "2025-11-27",
    maxParticipants: 500,
    currentParticipants: 410,
    latitude: 9.9816,
    longitude: 76.2999
  },
  {
    id: "19",
    title: "Blockchain Developers Meetup",
    description: "Discuss decentralized apps and smart contracts with fellow blockchain devs.",
    location: "Coimbatore, Tamil Nadu",
    date: "2025-12-05",
    maxParticipants: 120,
    currentParticipants: 70,
    latitude: 11.0168,
    longitude: 76.9558
  },
  {
    id: "20",
    title: "Film Appreciation Workshop",
    description: "A creative workshop for aspiring filmmakers and cinema enthusiasts.",
    location: "Thalassery, Kerala",
    date: "2025-11-29",
    maxParticipants: 70,
    currentParticipants: 40,
    latitude: 11.7480,
    longitude: 75.4929
  }
];
 // In-memory storage

// POST /api/events - Create an event
app.post("/api/events", (req, res) => {
  const { title, description, location, date, maxParticipants,latitude,longitude} = req.body;
  const newEvent = {
    id: uuidv4(),
    title,
    description,
    location,
    latitude: req.body.latitude || 0,
    longitude: req.body.longitude || 0,
    date,
    maxParticipants,
    currentParticipants: 0,
  };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// GET /api/events - List all events (optional location filter)
app.get("/api/events", (req, res) => {
  const { location } = req.query;
  const filtered = location
    ? events.filter(e => e.location.toLowerCase().includes(location.toLowerCase()))
    : events;
  res.json(filtered);
});

// GET /api/events/:id - Get event details
app.get("/api/events/:id", (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
});

// POST /api/events/:id/join - Join an event

app.post("/api/events/:id/join", (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });

  if (event.currentParticipants >= event.maxParticipants)
    return res.status(400).json({ message: "Event is full" });

  event.currentParticipants += 1;
  res.json(event);
});


app.listen(3030, () => console.log("Backend running on port 3030"));
