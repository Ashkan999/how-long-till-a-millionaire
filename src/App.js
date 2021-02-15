import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { animateScroll } from "react-scroll";
import AboutPage from "./components/about_page/AboutPage";
import ContactPage from "./components/contact_page/ContactPage";
import Footer from "./components/home_page/Footer";
import Header from "./components/home_page/Header";
import InfoSection from "./components/home_page/InfoSection";
import WelcomeSection from "./components/home_page/WelcomeSection";
import ResultsPage from "./components/results_page/ResultsPage";
import UserInputPage from "./components/user_input_page/UserInputPage";
import "./css/App.css";
import InvestmentAnalyser from "./investment_analyser/InvestmentAnalyser";

function App() {
  const goalCapital = 1000;

  const [isUserInputPageShowing, setUserInputPageShowing] = useState(false);
  const showUserInputPage = () => {
    setUserInputPageShowing(true);
    // scroller.scrollTo("test", { smooth: true });
  };
  const closeUserInputPage = () => {
    setUserInputPageShowing(false);
    animateScroll.scrollToTop({ smooth: "easeInOutQuad", duration: 1500 });
  };

  let investmentAnalyser = new InvestmentAnalyser(goalCapital);
  const [userData, setUserData] = useState(null);
  const processUserData = (data) => {
    const processedData = investmentAnalyser.processUserData(data);
    setUserData(processedData);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <div
                className={
                  isUserInputPageShowing ? "home-form-showing" : "home"
                }
              >
                <WelcomeSection
                  isUserInputPageShowing={isUserInputPageShowing}
                  onStart={showUserInputPage}
                />
                <UserInputPage
                  onClose={closeUserInputPage}
                  onSubmit={processUserData}
                  isUserInputPageShowing={isUserInputPageShowing}
                />
              </div>
              <InfoSection isUserInputPageShowing={isUserInputPageShowing} />
            </>
          )}
        />
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
