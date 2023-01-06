import "./sidebar.scss";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AddchartIcon from "@mui/icons-material/Addchart";
import FeedIcon from "@mui/icons-material/Feed";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logos">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logos">Flight Manager</span>
        </Link>
      </div>
      <hr />
      <div className="routes">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <AirplaneTicketIcon className="icon" />
              <span className="dashboard">Dashboard</span>
            </li>
          </Link>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <li>
              <FlightTakeoffIcon className="icon" />
              <span className="add">Add a Flight</span>
            </li>
          </Link>
          <Link to="/list" style={{ textDecoration: "none" }}>
            <li>
              <AddchartIcon className="icon" />
              <span className="table">Flight Table</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="about">
        <span>
          <FeedIcon className="icon" /> About
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
