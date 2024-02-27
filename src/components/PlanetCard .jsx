// src/components/PlanetCard.js

import React, { useState, useEffect } from "react";

const PlanetCard = ({ planet }) => {
  return (
    <div className="bg-gradient-to-br from-green-500 to-indigo-400 p-6 rounded-md shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl mb-4 w-full mx-auto">
      <h2 className="text-3xl flex font-extrabold mb-4">{planet.name}</h2>
      <div className="mb-4">
        <span className="font-bold text-gray-200 mr-2">Climate:</span>
        {planet.climate}
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-200 mr-1">Population:</span>
        {planet.population}
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-300 mr-2">Terrain:</span>
        {planet.terrain}
      </div>
    </div>
  );
};

export default PlanetCard;
