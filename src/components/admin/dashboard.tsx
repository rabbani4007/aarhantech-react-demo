import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import CreatePost from "./create-post";
import ViewPost from "./view-post";
import AdminHeader from "./admin-header";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  console.log("path", path);
  console.log("url", url);

  return (
    <>
      <div className="wrapper">
        <AdminHeader />
        <div id="content">
          <Switch>
            <Route path="/admin">
              <Route path="/create-post">
                <CreatePost />
              </Route>
              <Route path="/view-post">
                <ViewPost />
              </Route>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
