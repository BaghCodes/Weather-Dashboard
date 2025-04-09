import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastSection from './components/ForecastSection';
import ErrorFallback from './components/ErrorFallback';
import { fetchCurrentWeather } from './utils/api';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [currentCity, setCurrentCity] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchCurrentWeather(city);
      setWeatherData(data);
      setCurrentCity(city);

      // Update search history
      setSearchHistory((prevHistory) => {
        const updatedHistory = [city, ...prevHistory.filter((item) => item !== city)];
        return updatedHistory.slice(0, 5);
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">🌤️ Weather Dashboard</h1>

        {/* Error Boundary */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />

          {/* Recent Searches */}
          {searchHistory.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-700">Recent Searches:</h2>
              <div className="flex gap-2 mt-3 flex-wrap">
                {searchHistory.map((city, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(city)}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-transform transform hover:-translate-y-[2px]"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center mt-6">
              <div className="animate-spin text-gray-800 w-8 h-8 border-t-4 border-gray-800 rounded-full"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <p className="text-center text-red-500 mt-6">{error}</p>
          )}

          {/* Weather Data */}
          {weatherData && (
            <div className="mt-8">
              {/* Weather Card */}
              <WeatherCard data={weatherData} />

              {/* Forecast Section */}
              <ForecastSection city={currentCity} />
            </div>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
}
