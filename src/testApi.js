import { fetchCurrentWeather } from './utils/api';

async function testAPI() {
  console.log('Testing with valid city name...');
  try {
    const data = await fetchCurrentWeather('London'); // Valid city name
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('Testing with invalid city name...');
  try {
    const data = await fetchCurrentWeather('InvalidCityName123'); // Invalid city name
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testAPI();
