import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useState, useEffect } from "react";
import { apiURL } from "../../../api/flightAPI";

const Table = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const getAllFlights = async () => {
      try {
        const responses = await apiURL.get("/flights");
        // console.log(responses);

        const shuffledFlights = [...responses.data]
          .sort(() => Math.random() - 0.5)
          .map((flight) => {
            return { ...flight };
          });
        // console.log(shuffledFlights);

        setFlights(shuffledFlights);
      } catch (err) {
        console.log(err);
      }
    };

    setInterval(() => {
      setFlights([]);
      getAllFlights();
    }, 3000);

    getAllFlights();
  }, []);

  return (
    <table>
      <TableHead />
      <TableBody flights={flights.slice(0, 5)} />
    </table>
  );
};

export default Table;
