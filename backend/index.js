import express from "express";
import path from "path";

import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

import { createServer } from "node:http";


const app = express();
const server = createServer(app);
import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: process.env.WEB_ORIGIN,
  },
});

import { errorHandler, NotFound } from "./middleware/error-handler.js";

app.use(
  cors({
    origin: process.env.WEB_ORIGIN,
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

import Auth from "./routes/authRoute.js";
import ConversationRoute from "./routes/conversationRoutes.js";
import messageRoute from "./routes/messageRoutes.js";

app.use("/api/v1/auth", Auth);
app.use("/api/v1/conversation", ConversationRoute);
app.use("/api/v1/message", messageRoute);
// // Middlewares
app.use(NotFound);
app.use(errorHandler);

let users = [];


// addUserId(id, socket?.id)
server.listen(4000, () => {
  console.log("server is listening on port 4000");
});
