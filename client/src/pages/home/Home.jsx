import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowUp";
import AirlinesIcon from "@mui/icons-material/Airlines";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="top">
          <div className="widget">
            <Widget />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="title">FLIGHTS</span>
            <span className="flight">XH32 &gt; ROME</span>
            <Link to="/list" style={{ textDecoration: "none" }}>
              <span className="link">See all flights..</span>
            </Link>
          </div>
          <div className="center">
            <div className="progress">
              <KeyboardArrowUpIcon />
              Passengers Increase
              <div style={{ width: 100, height: 100 }} class="chart">
                <CircularProgressbar value={30} text={30} size={10} />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="airlines">
              <div className="airline-top">
                Airline Cost
                <AirlinesIcon />
              </div>
              <div className="airline-bottom">
                <span>$31M</span>
                <KeyboardArrowDownIcon className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
