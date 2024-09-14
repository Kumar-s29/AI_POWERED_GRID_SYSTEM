import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Profile.css";

function Profile() {
  library.add(fas);

  // State to handle checkboxes
  const [securityCheck, setSecurityCheck] = useState(false);
  const [rotateKeys, setRotateKeys] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <>
      <section className="sec">
        <div className="div1">
          <h1>User Preferences</h1>
          <p>Update your profile information</p>
          <h2>Profile Information</h2>
          <input type="text" placeholder="First Name" className="input-field" />
          <br />
          <input type="text" placeholder="Last Name" className="input-field" />
          <br />
          <input type="email" placeholder="Email" className="input-field" />
          <button className="z">Save</button>
          <button className="z">Discard</button>
        </div>

        <div className="div2">
          <h1>Automation</h1>
          <p>Optimize settings for efficiency</p>
          <h2>Access Control</h2>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={securityCheck}
                onChange={() => setSecurityCheck(!securityCheck)}
              />
              Perform security check
            </label>
            <br />

            <label>
              <input
                type="checkbox"
                checked={rotateKeys}
                onChange={() => setRotateKeys(!rotateKeys)}
              />
              Rotate access keys regularly
            </label>
            <br />

            <label>
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
              />
              Enable 2-factor verification
            </label>
          </div>
        </div>

        <div className="div3">
          <h1>Billing Information</h1>
          <p>Please review billing details</p>
          <h2>Payment Details</h2>
          <input
            type="text"
            placeholder="Card Number"
            className="input-field"
          />
          <br />
          <input
            type="date"
            placeholder="Expiration Date"
            className="input-field"
          />
          <br />
          <input type="text" placeholder="CVC" className="input-field" />
        </div>
      </section>
    </>
  );
}

export default Profile;
