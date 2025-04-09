import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 bg-white/90 backdrop-blur-md rounded-full shadow-lg p-4 max-w-xl mx-auto"
    >
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full pl-4 pr-10 py-3 rounded-full bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
      />
      
      {/* Search Button */}
      <button
        type="submit"
        className="bg-black text-white px-6 py-[10px] rounded-full hover:bg-gray-800 transition-transform transform hover:-translate-y-[2px] shadow-md"
      >
        Search
      </button>
    </form>
  );
}
