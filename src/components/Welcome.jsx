import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  var currentDateTime = (new Date()).toString();

  return(
    <div>
      <h1>Welcome to Epicodus!</h1>
      <p>Morning questions for {currentDateTime}</p>
      <ol>
        <li>How are you feeling about the content from last night's homework?</li>
        <li>How long do you like to work on a challenge before asking classmates or an instructor?</li>
        <li>Do you like to follow the course material closely or experiment with related concepts?</li>
        <li>What's your biggest challenge with pairing?</li>
      </ol>

      <Link to="/tickets"><button>Help Queue</button></Link>
      <Link to="/newticket"><button>New ticket</button></Link>
    </div>
  );
}

export default Welcome;
