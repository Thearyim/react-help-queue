import React from "react";
import { Link } from "react-router-dom";

function NewTicket(){
  return(
    <div>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name"></input>

        <label for="issue">Issue:</label>
        <input type="text" id="issue"></input>

        <label for="station">Station:</label>
        <input type="text" id="station"></input>

        <Link to="/tickets">
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default NewTicket;
