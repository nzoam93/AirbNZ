
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Filter from "./components/Filter";
import ListingIndex from "./components/Listings/ListingIndex";

function App() {
  return (
    <>
      <Navigation />
      <Filter />
      <Switch>
        <Route exact path="/" component={ListingIndex} />
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
