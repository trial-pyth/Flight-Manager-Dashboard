import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th id="time">TIME</th>
        <th id="destination">DESTINATION</th>
        <th id="gate">GATE</th>
        <th id="flight">FLIGHT</th>
        <th id="status">STATUS</th>
      </tr>
    </thead>
  );
};

export default TableHead;
