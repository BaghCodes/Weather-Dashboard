import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'City not found');
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    // Process the data to get one forecast per day
    const forecastList = response.data.list;
    
    // The API returns data in 3-hour intervals, so we filter to get one forecast per day
    // We'll take the forecast for each day at around noon (closest to 12:00)
    const processedData = forecastList.reduce((acc, item) => {
      const date = new Date(item.dt * 1000).toISOString().split('T')[0];
      const time = new Date(item.dt * 1000).getHours();
      
      // If we don't have an entry for this date yet, or if this entry is closer to noon
      if (!acc[date] || Math.abs(12 - time) < Math.abs(12 - new Date(acc[date].dt * 1000).getHours())) {
        acc[date] = item;
      }
      
      return acc;
    }, {});
    
    // Convert the object to an array and take only the first 5 days
    return Object.values(processedData).slice(0, 5);
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to fetch forecast data');
  }
};
