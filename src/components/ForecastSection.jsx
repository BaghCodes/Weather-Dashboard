import { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

export default function ForecastSection({ city }) {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchForecast = async () => {
      if (!city) return;
      
      setLoading(true);
      setError('');
      
      try {
        const { fetchForecastData } = await import('../utils/api');
        const data = await fetchForecastData(city);
        setForecastData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchForecast();
  }, [city]);
  
  // Format date to display day name (e.g., "Mon", "Tue")
  const formatDay = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'short' });
  };
  
  if (loading) {
    return (
      <div className="mt-8 flex justify-center">
        <FaSpinner className="animate-spin text-blue-500" size={24} />
      </div>
    );
  }
  
  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }
  
  if (forecastData.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-8 p-4 border rounded-md shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {forecastData.map((day, index) => (
          <div 
            key={index} 
            className="p-3 border rounded-md text-center bg-blue-50 dark:bg-gray-700"
          >
            <p className="font-bold">{formatDay(day.dt)}</p>
            <img 
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
              alt={day.weather[0].description}
              className="mx-auto"
            />
            <p className="text-sm">{day.weather[0].main}</p>
            <p className="font-bold">{Math.round(day.main.temp)}°C</p>
            <div className="text-xs mt-2">
              <p>H: {Math.round(day.main.temp_max)}°C</p>
              <p>L: {Math.round(day.main.temp_min)}°C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
