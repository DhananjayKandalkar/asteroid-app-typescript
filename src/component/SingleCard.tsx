import React from "react";

interface Props {
  name: string;
  neo_reference_id: string | number;
}

const SingleCard: React.FC<Props> = ({ name, neo_reference_id }) => {
  return (
    <div className="card-container">
      <h3>Name of Asteroid : {name}</h3>
      <div>
        <p>Neo Reference ID : {neo_reference_id}</p>
      </div>
    </div>
  );
};

export default SingleCard;
