const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./utils/dbConnection")
const http = require("http");
const { Server } = require("socket.io");
const userRoutes = require("./routes/User.routes")
const emailRoutes = require("./routes/email.routes");
const adminRoutes = require('./routes/admin.routes')
const path = require("path");
dotenv.config(); // Load environment variables
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

const allowedOrigin = 'http://localhost:5173'; 
app.use(cors({
  origin: allowedOrigin,
  credentials: true,
}));

const io = new Server(server, {
  cors: {
    origin: allowedOrigin,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.on("busLocation", (data) => {
    console.log("Location Update:", data);
    if (data.lat && data.lng) {
      io.emit("locationUpdate", data);
    } else {
      console.error("Invalid bus location data:", data);
    }
  });
});
app.use('/user',userRoutes)
app.use('/worker',emailRoutes)
app.use('/admin',adminRoutes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  dbConnection()
});
