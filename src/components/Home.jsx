import { useState } from "react";

function Home() {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getWeather = async () => {
        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }

        setLoading(true);
        setError("");
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            setWeather({
                city: data.name,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                condition: data.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            });
        } catch (err) {
            setError(err.message);
            setWeather(null);
        } finally {
            setLoading(false);
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            getWeather();
        }
    };

    return ( 
        <div className="homeSection">
            <div className="searchSection">
                <input 
                    type="text" 
                    id="city" 
                    placeholder="Enter City by Name" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    onKeyDown={handleKeyPress} 
                />
                {city.length > 0 && (
                    <button id="clearBtn" onClick={() => {
                        setCity("");
                        window.location.reload();}}>
                        Clear
                    </button>
                )}
                <button id="searchBtn" onClick={getWeather} disabled={loading}>
                    {loading ? "Loading..." : "Search"}
                </button>
            </div>
            {error && <div className="error">{error}</div>}
            {weather && (
                <div className="displaySection">
                    <h2>{weather.city}</h2>
                    <img src={weather.icon} alt="Weather Icon" />
                    <p><strong>Temperature:</strong> {weather.temperature}°C</p>
                    <p><strong>Humidity:</strong> {weather.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {weather.windSpeed} m/s</p>
                    <p><strong>Weather Condition:</strong> {weather.condition}</p>
                </div>
            )}
        </div>
     );
}

export default Home;