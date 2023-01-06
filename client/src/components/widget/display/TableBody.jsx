import TableRow from "./TableRow";

const TableBody = ({ flights }) => {
  return (
    <tbody>
      {flights?.map((flight, _index) => {
        // console.log(flight,_index);
        return <TableRow key={_index} flight={flight} />;
      })}
    </tbody>
  );
};

export default TableBody;
