import React from "react";
import TableLetter from "./TableLetter";
// import { useState } from 'react';

const TableCell = ({ word, index }) => {
  // console.log(word);
  return (
    <td>
      {Array.from(word).map((letter, index) => {
        return <TableLetter key={index} letter={letter} index={index} />;
      })}
    </td>
  );
};

export default TableCell;
