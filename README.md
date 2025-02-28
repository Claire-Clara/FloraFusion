
# Flora Fusion

## 🌿 Overview
Flora Fusion is a web and game application designed to provide users with an interactive and immersive gardening experience. The project consists of two parts:
1. A **basic web app** for plant information and management.
2. A **real-world-like game environment** built in *Unreal Engine*, offering interactive navigation similar to *Genshin Impact*.

## 🚀 Features
- 🌱 **Plant Database**: Store and retrieve plant-related data.
- 🔍 **Search & Filter**: Easily find plants based on categories.
- 🎮 **3D Game Environment**: Explore a virtual garden space.
- 🔗 **Integration**: Future expansion to merge web and game seamlessly.
- 🛠 **Tech Stack**:
  - **Frontend**: *React.js*, *Typescript*
  - **Backend**: *MongoDB Atlas*, *Node.js (Express)*
  - **Game Engine**: *Unreal Engine*
  - **Hosting**: *AWS / Google Cloud*

## 📌 Setup Instructions
### 1️⃣ Web App Setup
```sh
# Clone the repository
git clone https://github.com/your-username/flora-fusion.git
cd flora-fusion

# Install dependencies
npm install

# Start the development server
npm run dev
```
```

### 2️⃣ Backend Setup
```sh
# Move to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```

### 3️⃣ Game Setup
- Open the *Unreal Engine* project folder.
- Load the project in *Unreal Engine*.
- Run the simulation.

## 📌 Database Setup (*MongoDB Atlas*)
1. Create a *MongoDB Atlas* account.
2. Set up a cluster and a **plant** collection.
3. Update the `.env` file with your *MongoDB connection string*.

## 📜 API Endpoints
| **Method** | **Endpoint**       | **Description**           |
|-----------|-----------------|-------------------------|
| `GET`    | `/plants`       | Fetch all plants      |
| `POST`   | `/plants`       | Add a new plant       |
| `GET`    | `/plants/:id`   | Fetch plant by ID     |
| `PUT`    | `/plants/:id`   | Update plant details  |
| `DELETE` | `/plants/:id`   | Delete a plant        |

## 🎯 Future Enhancements
- 🌍 **Full Web-Game Integration**
- 🤖 **AI-powered plant recommendations**
- 🎧 **Immersive soundscapes in-game**
- 📱 **Mobile-friendly UI improvements**

---
🌿 *Happy Journey in the Virtual World!* 🌍
```

