import Form from "../../components/form/Form";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./add.scss";

const Add = () => {
  return (
    <div className="addflight">
      <Sidebar />
      <div className="homeContainer">
        <div className="top">
          <div className="widget">
            <Widget />
          </div>
        </div>
        <div className="bottom">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Add;
