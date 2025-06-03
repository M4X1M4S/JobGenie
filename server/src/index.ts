import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
app.get("/here", (req, res) => {
  res.json({ message: "Hello from the serverr!" });
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
