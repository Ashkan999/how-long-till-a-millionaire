import { useState } from "react";
import { animateScroll } from "react-scroll";
import Footer from "./components/home_page/Footer";
import Header from "./components/home_page/Header";
import InfoSection from "./components/home_page/InfoSection";
import WelcomeSection from "./components/home_page/WelcomeSection";
import UserInputPage from "./components/user_input_page/UserInputPage";
import "./css/App.css";

function App() {
  const [isUserInputPageShowing, setUserInputPageShowing] = useState(false);
  const showUserInputPage = () => setUserInputPageShowing(true);
  const closeUserInputPage = () => {
    setUserInputPageShowing(false);
    animateScroll.scrollToTop({ smooth: "easeInOutQuad", duration: 1500 });
  };

  return (
    <div className="App">
      <Header />
      <div
        className={isUserInputPageShowing ? "welcome-form-showing" : "welcome"}
      >
        <WelcomeSection onStart={showUserInputPage} />
        <div id="user-input-page">
          {isUserInputPageShowing && (
            <UserInputPage onClose={closeUserInputPage} />
          )}
        </div>
      </div>
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
