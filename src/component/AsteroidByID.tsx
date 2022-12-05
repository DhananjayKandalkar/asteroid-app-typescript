import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SingleCard from "./SingleCard";

const API_KEY: string = "dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M";

const AsteroidByID: React.FC = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState<{ [key: string]: any }>({});

  const navigate = useNavigate();

  const getSingleData = () => {
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => setSingleData(json))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSingleData();
  }, []);

  const handlePrev = () => {
    navigate(-1);
  };

  const { name, neo_reference_id } = singleData;

  return (
    <div>
      <div>
        <div>
          <h1>Single Asteroid By ID</h1>
        </div>
        <SingleCard name={name} neo_reference_id={neo_reference_id} />
      </div>
      <div>
        <button onClick={handlePrev}>Go Back</button>
      </div>
    </div>
  );
};

export default AsteroidByID;
