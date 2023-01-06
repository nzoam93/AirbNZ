
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Filter from "./components/Filter";
import ListingIndex from "./components/Listings/ListingIndex";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import ListingShow from "./components/Listings/ListingShow";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
            <Filter />
            <ListingIndex/>
        </Route>
        {/* <Route exact path="/login">
          <LoginFormPage />
        </Route>
        <Route exact path="/signup">
          <SignupFormPage />
        </Route> */}
        <Route exact path="/error">
            <PageNotFound />
        </Route>

        <Route exact path="/listings/:listingId" component={ListingShow} />

        <Redirect to="/error" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
