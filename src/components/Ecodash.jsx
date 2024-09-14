import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Ecodash.css";
import aa from "../assets/aa.png";
import bb from "../assets/bb.png";

function Ecodash() {
  library.add(fas);

  return (
    <>
      <div className="head">
        <span>
          <FontAwesomeIcon icon="fa-solid fa-leaf" className="icon" />
        </span>
        <span>EcoDash</span>
        {/* <div className='button'>
        <span className='btn'><button>Settings</button></span>
    </div> */}
        <button className="bt">Settings</button>
      </div>
      <section className="sec-1">
        <div className="div-1">
          <p className="real-time">Real-time Energy Consumption</p>
          <h5>5.3 kWh1</h5>
          <p>Current Usage</p>
        </div>
        <div className="div-2">
          <p className="real-time">Energy Cost Breakdown</p>
          <img src={aa} />
        </div>
      </section>
      <section className="sec-2">
        <div className="sec-2-div">
          <p>Your content here</p>
          <img src={bb} />
        </div>
      </section>
      <section className="sec-1">
        <div className="div-1">
          <p className="real-time">Real-time Energy Consumption</p>
          <h5>5.3 kWh1</h5>
          <p>Current Usage</p>
        </div>
        <div className="div-2">
          <p className="real-time">Energy Cost Breakdown</p>
        </div>
      </section>
      <section className="sec-3">
        <div className="sec-3-div">
          <p>Your content here</p>
        </div>
      </section>
    </>
  );
}

export default Ecodash;
