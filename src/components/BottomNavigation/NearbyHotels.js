import React, { useState } from 'react';

const NearbyHotels = () => {
  const [location] = useState('Chennai'); // Default location

  // Simulated hotel data (replace with your actual data structure if available)
  const simulatedHotels = [
    { id: 1, name: 'Hotel A', address: '123 Example St, Chennai' },
    { id: 2, name: 'Hotel B', address: '456 Sample Rd, Chennai' },
    { id: 3, name: 'Hotel C', address: '789 Mock Ave, Chennai' },
  ];

  return (
    <div>
      <h1>Nearby Hotels in {location}</h1>
      {simulatedHotels.length > 0 ? (
        <ul>
          {simulatedHotels.map((hotel) => (
            <li key={hotel.id}>
              {hotel.name} - {hotel.address}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hotels found nearby.</p>
      )}
    </div>
  );
};

export default NearbyHotels;
