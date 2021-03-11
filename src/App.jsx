import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AboutPage from "./components/about_page/AboutPage";
import ContactPage from "./components/contact_page/ContactPage";
import Footer from "./components/home_page/Footer";
import Header from "./components/home_page/Header";
import HomePage from "./components/home_page/HomePage";
import ResultsPage from "./components/results_page/ResultsPage";
import "./css/App.css";
import InvestmentAnalyser from "./investment_analyser/InvestmentAnalyser";

AOS.init();

function App() {
  const goalCapital = 1000;

  const investmentAnalyser = new InvestmentAnalyser(goalCapital);
  const [userData, setUserData] = useState(null); // make empty array ipv null
  const processUserData = (data) => {
    const processedData = investmentAnalyser.processUserData(data);
    setUserData(processedData);

    // setUserInputPageShowing(false);
    // animateScroll.scrollToTop({ smooth: "easeInOutQuad", duration: 1500 });
    // closeUserInputPage();
  };

  const [isHeaderExtended, setHeaderExtended] = useState(false);

  const { pathname } = useLocation();
  useEffect(
    () =>
      pathname === "/about"
        ? setHeaderExtended(true)
        : setHeaderExtended(false),
    [pathname]
  );

  return (
    <div className="App">
      <Header isHeaderExtended={isHeaderExtended} />
      <Switch>
        <Route exact path="/">
          <HomePage onSubmit={processUserData} />
        </Route>
        <Route path="/results">
          <ResultsPage userData={userData} />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
