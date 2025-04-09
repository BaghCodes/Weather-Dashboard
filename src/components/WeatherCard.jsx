export default function WeatherCard({ data }) {
  return (
    <div className="p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-md border border-gray-200">
      <div className="flex justify-between items-start">
        {/* City Name and Country */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">{data.name}, {data.sys.country}</h2>
          <p className="text-sm text-gray-600 capitalize">{data.weather[0].description}</p>
        </div>
        {/* Weather Icon */}
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-16 h-16"
        />
      </div>

      {/* Temperature Display */}
      <div className="text-center my-6">
        <span className="text-5xl font-light text-gray-800">{Math.round(data.main.temp)}°C</span>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-xs text-gray-500">Humidity</p>
          <p className="font-semibold text-gray-700">{data.main.humidity}%</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-xs text-gray-500">Wind Speed</p>
          <p className="font-semibold text-gray-700">{data.wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
}
