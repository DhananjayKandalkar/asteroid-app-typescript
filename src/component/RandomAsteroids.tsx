import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleCard from "./SingleCard";

const API_KEY: string = "dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M";

const RandomAsteroids: React.FC = () => {
  const [randomData, setRandomData] = useState<{ [key: string]: any }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getData = () => {
    setIsLoading(true);
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setRandomData(json.near_earth_objects);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <h1>Random Asteroids</h1>
      </div>
      <div>
        {isLoading ? (
          <h2 className="loading-status">Loading.. please wait</h2>
        ) : (
          randomData.map((items) => {
            return (
              <div key={items.id}>
                <SingleCard
                  name={items.name}
                  neo_reference_id={items.neo_reference_id}
                />
              </div>
            );
          })
        )}
      </div>
      <div>
        <button onClick={handlePrev}>Go Back</button>
      </div>
    </div>
  );
};

export default RandomAsteroids;
