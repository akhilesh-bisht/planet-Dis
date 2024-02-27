import React, { useState, useEffect } from "react";
import PlanetCard from "./components/PlanetCard ";

import Pagination from "./components/Pagination";
const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [Loading, setLoding] = useState(false);

  const fetchPlanets = async (page) => {
    try {
      setLoding(true);
      const response = await fetch(
        `https://swapi.dev/api/planets/?format=json&page=${page}`
      );
      const data = await response.json();

      const { results, next, previous } = data;
      setLoding(false);
      setPlanets(results);
      setHasNextPage(!!next);
      setHasPrevPage(!!previous);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };

  useEffect(() => {
    fetchPlanets(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container mx-auto mt-6 ">
      <h1 className="text-3xl font-semibold mb-8 p-8 text-center bg-gray-500  ">
        Star Wars{" "}
        <span className="text-[brown]  text-4xl font-extrabold">Planets</span>{" "}
        Directory
      </h1>
      {Loading ? (
        <h1 className="text-4xl font-bold text-center">Loading data...</h1>
      ) : (
        <>
          {planets.map((planet) => (
            <div key={planet.name} className="mb-8 h-full ">
              <PlanetCard planet={planet} />
            </div>
          ))}
          <Pagination
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            setloder={setLoding}
          />
        </>
      )}
    </div>
  );
};
export default App;
