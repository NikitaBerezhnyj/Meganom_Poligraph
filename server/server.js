// Завантаження змінних середовища та імпорт необхідних модулів
require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

const app = express();

// Налаштування обмеження швидкості запитів
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, // Обмежити кожен IP до 100 запитів на "вікно"
  message: "Too many requests, try again later.",
});

// Додати обмеження швидкості до всіх запитів
app.use(limiter);

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "127.1.2.133";

app.use(cors());
app.use(express.json());

// Перевірка наявності змінних середовища для авторизації Nodemailer
if (!process.env.EMAIL || !process.env.PASSWORD) {
  console.error("EMAIL or PASSWORD environment variables are missing.");
  process.exit(1);
}

// Налаштування транспортера для надсилання листів через Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Функція для надсилання електронного листа з інформацією замовлення
const sendMail = async (name, phone, mail, message) => {
  const mailOptions = {
    from: "poligrafmeganom@gmail.com",
    to: "kitnikita06@gmail.com",
    subject: "Замовлення з сайту",
    text: `Ім'я: ${name}\nТелефон: ${phone}\nEmail: ${mail}\nПовідомлення: ${message}`,
    html: `
      <div style="width:50%; height:100%; padding:2.5%; background-color:#FFFFFF; margin: auto; border: 1px solid #999999;">
        <div style="padding:2.5%; color:#333333; background-color:#F5F5F5; font-size:1.25rem; border: 1px solid #999999;">
            <h1 style="text-align:center; color:#2498EE;">Замовлення з сайту!</h1>
            <p><strong>Ім'я:</strong> ${name}</p>
            <hr style="border-color: #999999;">
            <p><strong>Телефон:</strong> ${phone}</p>
            <hr style="border-color: #999999;">
            <p><strong>E-Mail:</strong> ${mail}</p>
            <hr style="border-color: #999999;">
            <p><strong>Повідомлення:</strong> ${message}</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Обробник POST-запиту для надсилання листа
app.post("/send-mail", async (req, res) => {
  const { name, phone, mail, message } = req.body;
  try {
    await sendMail(name, phone, mail, message);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error in sending mail:", error);
    res.sendStatus(500);
  }
});

// Відображення статичних файлів та обробка всіх GET-запитів
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Запуск сервера
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server started on http://${HOSTNAME}:${PORT}`);
});
