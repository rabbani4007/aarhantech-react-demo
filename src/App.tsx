
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Main from "./components/layout/main";
import AdminPage from "./components/admin/admin-page";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/admin">
            <AdminPage />
          </Route>

          <Route path="/">
            {/* ======= Header ======= */}
            <Header />

            {/* ======= Main ======= */}
            <Main />

            {/* ======= Footer ======= */}
            <Footer />
            <a
              href="/"
              className="back-to-top d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-arrow-up-short"></i>
            </a>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
