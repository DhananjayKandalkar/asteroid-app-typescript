import React, { useState } from "react";
import { useNavigate} from "react-router-dom";



const Form: React.FC = () => {
  const [inpValue, setInpValue] = useState<string>("");

  const navigate = useNavigate();

  const handleIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/asteroid/${inpValue}`)
  };

  const handleRandomClick = () => {
    navigate(`/random`)
  };


  return (
    <div>
      <h1>Asteroid App In TypeScript</h1>
      <form onSubmit={(e) => handleIdSubmit(e)}>
        <input
          onChange={(e) => setInpValue(e.target.value)}
          type="text"
          placeholder="find by id for-ex:3542519 "
          value={inpValue}
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
      <div>
        <button onClick={handleRandomClick}>Random Asteroid</button>
      </div>
    </div>
  );
};

export default Form;
