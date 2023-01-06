import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DataTable from "../../components/datatable/DataTable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <DataTable />
      </div>
    </div>
  );
};

export default List;
