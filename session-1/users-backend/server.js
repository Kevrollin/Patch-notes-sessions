// Import the express framework (used to create the backend server)
import express from "express";

// Import the CORS package (lets your frontend talk to the backend safely)
import cors from "cors";

// Create an instance of the express app
const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON data (so we can handle POST requests)
app.use(express.json());

// Temporary "database" — just an array for now
let users = [
  { id: 1, name: "Kelvin" },
  { id: 2, name: "Jane" },
  { id: 3, name: "John" },
  { id: 4, name: "James" },
  { id: 5, name: "Angela" },
];

// GET route: send all users as JSON when someone hits /api/users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST route: add a new user sent from the frontend
app.post("/api/users", (req, res) => {
  const { name } = req.body; // get the name from the request
  const newUser = { id: users.length + 1, name }; // create a new user
  users.push(newUser); // add them to the array
  res.status(201).json(newUser); // send back the new user
});

// Start the server on port 5000
app.listen(5000, () => console.log("🚀 Backend running on port 5000"));
