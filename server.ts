import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs/promises";
import path from "path";
import cors from "cors";

const PORT = 3000;
const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");

// Hardcoded admin credentials
const ADMIN_USER = {
  username: "admin",
  password: "123456"
};

async function startServer() {
  const app = express();
  app.use(express.json());
  app.use(cors());

  // API: Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, phone, email, message } = req.body;
      
      if (!name || !phone || !email || !message) {
        return res.status(400).json({ error: "Vui lòng điền đầy đủ thông tin." });
      }

      const rawData = await fs.readFile(DATA_FILE, "utf-8");
      const contacts = JSON.parse(rawData || "[]");

      const newContact = {
        id: Date.now().toString(),
        name,
        phone,
        email,
        message,
        timestamp: new Date().toISOString()
      };

      contacts.unshift(newContact); // Add to beginning
      await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2));

      res.status(201).json({ message: "Gửi tin nhắn thành công!" });
    } catch (error) {
      console.error("Error saving contact:", error);
      res.status(500).json({ error: "Lỗi server, vui lòng thử lại sau." });
    }
  });

  // API: Admin Login
  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
      res.json({ success: true, token: "fake-jwt-token-for-demo" });
    } else {
      res.status(401).json({ error: "Tài khoản hoặc mật khẩu không đúng." });
    }
  });

  // API: Get all contacts (Protected)
  app.get("/api/contacts", async (req, res) => {
    try {
      const rawData = await fs.readFile(DATA_FILE, "utf-8");
      const contacts = JSON.parse(rawData || "[]");
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Không thể đọc dữ liệu." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
