import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Welcome from "./Welcome.js";
import About from "./About.js";
import Meet from "./Meet.js";
import SubmitContracts from "./SubmitContracts.js";
import Login from "./Login.js";
import Profilehandler from "./Profilehandler.js";
import Challenges from "./Challenges.js";
import BrowseContracts from "./BrowseContracts.js";
import Connect from "./Connect.js";
import Resources from "./Resources.js";
import Logout from "./Logout.js";
import TaskManager from "./TaskManager.js";
import TopbarCompany from "./TopbarCompany.js";
import TopbarUser from "./TopbarUser.js";
import Register from "./Register.js";


export default class RouteC extends Component {
  render() {
    const CompanyRegex = new RegExp(
      "/welcome|/about|/meet-the-team|/submit-contracts"
    );
    const UserRegex = new RegExp(
      "/challenges|/task-manager|/browse-contracts|/connect|/resources|/profile"
    );
    return (
      <BrowserRouter>
        <div>
          <Redirect to="/profile" />
          <Route path={CompanyRegex} component={TopbarCompany} />
          <Route path={UserRegex} component={TopbarUser} />
          <div>
            <Route path="/welcome" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/meet-the-team" component={Meet} />
            <Route path="/submit-contracts" component={SubmitContracts} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profilehandler} />
            <Route path="/challenges" component={Challenges} />
            <Route path="/task-manager" component={TaskManager} />
            <Route path="/browse-contracts" component={BrowseContracts} />
            <Route path="/connect" component={Connect} />
            <Route path="/resources" component={Resources} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
