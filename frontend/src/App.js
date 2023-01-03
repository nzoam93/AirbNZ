
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Filter from "./components/Filter";
import ListingIndex from "./components/Listings/ListingIndex";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Filter />
      <Switch>
        <Route exact path="/" component={ListingIndex} />
        <Route exact path="/login">
          <LoginFormPage />
        </Route>
        <Route exact path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/error">
            <PageNotFound />
        </Route>
        <Redirect to="/error" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
