# 🤖 Titko Bot Backend

*The backend powering the Titko Bot AI desktop application.*

---

## 📖 Overview

Titko Bot Backend is a Node.js application responsible for handling all server-side logic for the Titko Bot ecosystem. It manages AI interactions, voice generation, API communication, authentication, and cloud services while exposing a REST API consumed by the desktop application.

Designed with scalability in mind, the backend can run locally during development or be deployed to Microsoft Azure using Docker containers.

---

## ✨ Features

* 🤖 AI conversation processing
* 🎙️ ElevenLabs text-to-speech integration
* 🔌 REST API
* 🔒 Secure environment variable management
* 📦 Docker support
* ☁️ Microsoft Azure deployment
* ⚡ Modular project architecture
* 📈 Scalable backend services

---

## 🏗️ Tech Stack

| Technology      | Purpose             |
| --------------- | ------------------- |
| JavaScript      | Backend language    |
| Node.js         | Runtime             |
| Express.js      | REST API            |
| ElevenLabs      | AI voice generation |
| Docker          | Containerization    |
| Microsoft Azure | Cloud hosting       |
| Git             | Version control     |

---

## 📁 Project Structure

```text
titko-bot/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   ├── config/
│   └── app.js
│
├── docker/
├── public/
├── .env
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Requirements

Before running the project, install:

* 🟢 Node.js 22 LTS (or later)
* 📦 npm
* 🐳 Docker Desktop (Optional)
* ☁️ Microsoft Azure Account (Optional)
* 🎙️ ElevenLabs API Key

---

## 📥 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/titko-bot.git
```

---

### 2️⃣ Navigate into the Project

```bash
cd titko-bot
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=3000

ELEVENLABS_API_KEY=your_api_key

AZURE_STORAGE_CONNECTION_STRING=your_connection_string

JWT_SECRET=your_secret
```

> Never commit your `.env` file to GitHub.

---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Or run normally:

```bash
npm start
```

The API will be available at:

```text
http://localhost:3000
```

---

## 🐳 Running with Docker

Build the Docker image:

```bash
docker build -t titko-bot .
```

Run the container:

```bash
docker run -p 3000:3000 titko-bot
```

---

## ☁️ Azure Deployment

The backend is designed to be deployed to Microsoft Azure using Docker containers.

Deployment options include:

* Azure App Service
* Azure Container Apps
* Azure Virtual Machine
* Azure Container Registry

---

## 🔗 API Overview

| Method | Endpoint      | Description             |
| ------ | ------------- | ----------------------- |
| GET    | `/`           | Health check            |
| POST   | `/chat`       | Process AI conversation |
| POST   | `/voice`      | Generate voice response |
| POST   | `/auth/login` | User authentication     |

---

## 🔐 Environment Variables

| Variable                        | Description              |
| ------------------------------- | ------------------------ |
| PORT                            | Server port              |
| ELEVENLABS_API_KEY              | ElevenLabs API key       |
| JWT_SECRET                      | Authentication secret    |
| AZURE_STORAGE_CONNECTION_STRING | Azure storage connection |

---

## 🚀 Future Improvements

* 🧠 Memory system
* 🎙️ Multiple AI voices
* 📺 TikTok Live integration
* 🎮 Twitch integration
* 📡 WebSocket support
* 📊 Analytics dashboard
* 🔒 OAuth authentication
* ⚡ Redis caching

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome. Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by **Kaos**.
