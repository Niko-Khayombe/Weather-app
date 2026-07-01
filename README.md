# Weather App

A modern, responsive weather application built with React that provides real-time weather information for any city in the world.

## 📋 Overview

The Weather App is a single-page application that allows users to search for weather information by city name. It displays current temperature, humidity, wind speed, and weather conditions with an animated weather icon. The app uses the OpenWeatherMap API to fetch real-time weather data.

## ✨ Features

- **City Search**: Search for any city by name to get its current weather
- **Real-time Weather Data**: Displays current temperature, humidity, wind speed, and weather conditions
- **Weather Icons**: Animated weather icons that correspond to weather conditions
- **Error Handling**: Graceful error messages for invalid city names or network issues
- **Loading State**: Visual feedback while fetching data
- **Responsive Design**: Beautiful gradient UI that works on all screen sizes
- **Keyboard Support**: Press Enter to search without clicking the button
- **Clear Button**: Quick reset to search for another city
- **Smooth Animations**: Floating weather icon animation for visual appeal

## 🛠 Technology Stack

- **Frontend Framework**: React 19.2.7
- **Styling**: CSS3 (with gradients, animations, and responsive design)
- **HTTP Client**: Fetch API
- **Build Tool**: Create React App (react-scripts)
- **Package Manager**: npm
- **API**: OpenWeatherMap API

## 📦 Project Structure

```
weather-app/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
├── src/
│   ├── components/
│   │   └── Home.jsx        # Main weather search component
│   ├── App.js              # Root application component
│   ├── index.css           # Global styles and animations
│   └── index.js            # Entry point
├── .env                    # Environment variables (API key)
├── environment.env         # Alternative env file
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   The project includes a `.env` file with the OpenWeatherMap API key:
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## 💻 How to Use

1. **Enter a City Name**: Type the name of any city in the search input
2. **Search**: Either click the "Search" button or press Enter
3. **View Results**: The app displays:
   - City name
   - Current temperature in Celsius
   - Humidity percentage
   - Wind speed in m/s
   - Weather condition description
   - Weather icon with floating animation
4. **Clear**: Click the "Clear" button to reset and search for another city

## 🎨 Design & Styling

### Color Scheme
- **Primary Gradient**: Purple (#667eea) to Pink (#764ba2)
- **Background**: Gradient background for the whole app
- **Card**: White background with rounded corners and shadow

### Animations
- **Weather Icon**: Floats up and down with slight rotation every 3 seconds
- **Button Hover**: Background color transition on hover
- **Input Focus**: Border color changes to primary color

### Responsive Design
- Mobile-friendly layout
- Centered card design with max-width of 500px
- Flexible spacing and padding

## 📋 Component Breakdown

### Home.jsx
The main component that handles:
- **State Management**: 
  - `city`: User input
  - `weather`: Fetched weather data
  - `error`: Error messages
  - `loading`: Loading state
- **Functions**:
  - `getWeather()`: Fetches weather data from OpenWeatherMap API
  - `handleKeyPress()`: Handles Enter key for search
- **JSX Elements**: Search input, buttons, error display, weather display

### index.css
Global styles including:
- **Layout**: Flexbox for centering and spacing
- **Typography**: Font sizes and colors
- **Colors**: Gradients and shadows
- **Animations**: `floatIcon` keyframe animation
- **Responsive**: Media-aware design

### App.js
Root component that:
- Wraps the entire application
- Renders the header with title
- Renders the Home component

## ⚠️ Error Handling

The app handles the following errors gracefully:
- **Empty Input**: Shows "Please enter a city name"
- **City Not Found**: Shows "City not found" error
- **Network Errors**: Displays error message from the API
- **Invalid Response**: Catches and displays any fetch errors


## 📝 Scripts

- `npm start`: Start the development server
- `npm build`: Create a production build
- `npm test`: Run tests
- `npm eject`: Eject from Create React App (irreversible)

## 🐛 Troubleshooting

### "API Key not found" or "undefined"
- Make sure `.env` file exists in the project root
- Ensure `REACT_APP_API_KEY` is set correctly
- Restart the development server after changing the `.env` file

### "City not found"
- Check spelling of the city name
- Try using English names for cities
- Some small cities may not be in the database

