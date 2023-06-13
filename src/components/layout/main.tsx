import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogDetails from "../blog/blog-details";
import BlogPage from "../blog/blog-page";

import HomeMainSection from "./home-main-section";

const Main = () => {
  return (
    <>
      <main id="main">
        <Switch>
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/blog-details/:id" component={BlogDetails} />
          <Route path="/" component={HomeMainSection} />
        </Switch>
      </main>
    </>
  );
};

export default Main;
