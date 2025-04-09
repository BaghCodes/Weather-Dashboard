
# Weather-Dashboard
# 🌤️ Weather Dashboard

A React.js-based Weather Dashboard web application that allows users to search for any city and view its live weather information using data fetched from the OpenWeatherMap API.

---

## 🚀 Features
- **Search Functionality**: Enter a city name to fetch live weather data.
- **Weather Info Card**:
  - City Name
  - Current Temperature (°C)
  - Weather Condition (e.g., Sunny, Rainy, Snow)
  - Humidity (%)
  - Wind Speed (km/h)
  - Weather Icon
- **Loading State**: Displays a spinner while fetching data.
- **Error Handling**: User-friendly error messages for invalid city names or API failures.
- **Bonus Features**:
  - Recent Search History: Displays the last 5 searched cities.
  - Dark/Light Theme Toggle.
  - 5-Day Forecast: Shows weather trends using OpenWeatherMap's forecast API.

---

## 🛠️ Tech Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **HTTP Client**: Fetch API
- **Deployment**: Vercel

---

## 📦 Setup Instructions

### Prerequisites
1. Node.js installed on your system.
2. A free OpenWeatherMap API key. [Register here](https://openweathermap.org/api).

### Steps
1. Clone the repository:
git clone <your-repository-url>
cd weather-dashboard
2. Install dependencies:
3. Create a `.env` file in the root directory and add your API key:
   VITE_API_KEY=your_openweathermap_api_key
4.Start the development server:
npm run dev
5. Open the app in your browser at `http://localhost:5173`.

---

## 🔗 API Integration Details

### OpenWeatherMap Current Weather API
- URL: `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={YOUR_API_KEY}&units=metric`
- **Rate Limits**: Free tier allows up to 60 calls per minute.
- **Keys**: Replace `{YOUR_API_KEY}` with your personal API key.

### OpenWeatherMap Forecast API (Bonus Feature)
- URL: `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={YOUR_API_KEY}&units=metric`
- Provides weather data in 3-hour intervals for up to 5 days.

---

## 🌐 Deployment

The app is deployed on Vercel and can be accessed via the live link below:

🔗 [Live Demo](<your-vercel-url>)

---

## 📸 Screenshots
(Optional) Add screenshots of your app here.

---

## 📬 Submission Format

Send us the following via Google Form:
1. ✅ Live Deployed App URL.
2. ✅ GitHub Repository Link.
3. ✅ README.md file with setup instructions and API details.
4. ✅ (Optional) Screenshots or Loom video demo of your app.

---

## 🧠 Closing Note

Thank you for reviewing my submission! I hope this project demonstrates my ability to write clean, modular React code, integrate APIs, handle errors gracefully, and design responsive UIs.

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
