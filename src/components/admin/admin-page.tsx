import React from "react";
import "./admin.css";
import AdminHeader from "./admin-header";
import ViewPost from "./view-post";
import CreatePost from "./create-post";
import ViewCategory from "./view-category";
import CreateCategory from "./create-category";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

const AdminPage = () => {
  return (
    <>
      <Router>
        <div className="wrapper">
          <AdminHeader />
          <div id="content">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-info"
                >
                  <i className="fas fa-align-left"></i>
                  <span>Toggle Sidebar</span>
                </button>
                <button
                  className="btn btn-dark d-inline-block d-lg-none ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fas fa-align-justify"></i>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Page
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Switch>
              <Route path="/admin/view-post" component={ViewPost} />
              <Route path="/admin/create-post" component={CreatePost} />
              <Route path="/admin/view-category" component={ViewCategory} />
              <Route path="/admin/create-category" component={CreateCategory} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};
export default AdminPage;
