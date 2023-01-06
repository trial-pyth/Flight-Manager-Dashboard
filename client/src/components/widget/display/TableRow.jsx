import TableCell from "./TableCell";

const TableRow = ({ flight }) => {
  // console.log(flight);
  // flight.map((item)=>{return delete item.id});
  delete flight.id;
  const words = Object.values(flight).map((item) => {
    return item.toUpperCase();
  });
  // words.map((item)=>{return item.toUpperCase()})
  // console.log(words);

  return (
    <tr>
      <td>🛪</td>
      {words.map((word, _index) => (
        <TableCell key={_index} word={word} />
      ))}
    </tr>
  );
};

export default TableRow;
