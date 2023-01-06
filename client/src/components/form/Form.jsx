import React, { useState, useEffect } from "react";
import "./form.scss";
import { apiURL } from "../../api/flightAPI";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [newFlight, setNewFlight] = useState({
    time: "",
    destination: "",
    gate: "",
    flight_no: "",
    remarks: "on time",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setNewFlight({
      time: "",
      destination: "",
      gate: "",
      flight_no: "",
      remarks: "on time",
    });
  }, []);

  const handleChange = (e) => {
    function generateRandomNumber() {
      const numbers = "0123456789";
      return numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    function generateRandomLetter() {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    setNewFlight((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      gate: generateRandomLetter() + generateRandomNumber(),
      flight_no:
        generateRandomLetter() +
        generateRandomLetter() +
        generateRandomNumber() +
        generateRandomNumber(),
    }));

    console.log(newFlight);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setNewFlight((prev) => ({
    //   ...prev,
    //   gate: generateRandomLetter() + generateRandomNumber(),
    //   flight_no:
    //     generateRandomLetter() +
    //     generateRandomLetter() +
    //     generateRandomNumber() +
    //     generateRandomNumber(),
    // }));

    console.log(newFlight);

    if (newFlight.time && newFlight.destination !== "") {
      try {
        const response = await apiURL.post("/flights", newFlight);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    }

    navigate("/list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="time">
        <label>Time</label>
        <input type="time" name="time" required onChange={handleChange} />
      </div>
      <div className="destination">
        <label htmlFor="">Destination</label>
        <input
          type="text"
          name="destination"
          required
          onChange={handleChange}
        />
      </div>
      <div className="status">
        <label htmlFor="">Status</label>
        <select name="remarks" required onChange={handleChange}>
          <option value="boarding">BOARDING</option>
          <option value="delayed">DELAYED</option>
          <option value="on time">ON TIME</option>
        </select>
      </div>
      <button>Sumbit</button>
    </form>
  );
};

export default Form;
