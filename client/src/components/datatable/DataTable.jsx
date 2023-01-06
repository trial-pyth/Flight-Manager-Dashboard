import "./datatable.scss";
import { useState, useEffect } from "react";
import { apiURL } from "../../api/flightAPI";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DataTable = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const getAllFlights = async () => {
      try {
        const responses = await apiURL.get("/flights");
        setFlights(responses.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllFlights();
  }, []);

  const rows = [...flights];

  const removeFlight = async (id) => {
    await apiURL.delete(`/flights/${id}`);

    const newFlights = flights.filter((flight) => {
      return flight.id !== id;
    });

    setFlights(newFlights);
  };

  console.log(rows);
  return (
    <div className="datatable" id="scrollbar-custom">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">TIME</TableCell>
              <TableCell align="right">DESTINATION</TableCell>
              <TableCell align="right">GATE</TableCell>
              <TableCell align="right">FLIGHT NO</TableCell>
              <TableCell align="center">STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                className="table-row"
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">
                  {row.destination.toUpperCase()}
                </TableCell>
                <TableCell align="right">{row.gate}</TableCell>
                <TableCell align="right">{row.flight_no}</TableCell>
                <TableCell align="center">
                  {row.remarks.toUpperCase()}
                  <button
                    className="btn-delete"
                    onClick={() => removeFlight(row.id)}
                  >
                    DELETE FLIGHT
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
