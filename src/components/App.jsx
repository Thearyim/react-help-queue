import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import desktop from "../assets/images/desktop.jpg";
import { Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import NewTicket from "./NewTicket";
import Error404 from "./Error404";

function App(){
  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return(
    <div style={myStyledComponentStyles}>
      <Header/>
      <img src={desktop}/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/tickets' component={TicketList} />
        <Route path='/newticket' component={NewTicket} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
