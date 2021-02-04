import { useState } from "react";
import Footer from "./components/home_page/Footer";
import Header from "./components/home_page/Header";
import InfoSection from "./components/home_page/InfoSection";
import WelcomeSection from "./components/home_page/WelcomeSection";
import UserInputPage from "./components/user_input_page/UserInputPage";
import "./css/App.css";

function App() {
  const [isUserInputPageShowing, setUserInputPageShowing] = useState(false);
  const showUserInputPage = () => setUserInputPageShowing(true);
  const closeUserInputPage = () => setUserInputPageShowing(false);

  return (
    <div className="App">
      <Header />
      <WelcomeSection onStart={showUserInputPage} />
      {isUserInputPageShowing && <UserInputPage onClose={closeUserInputPage} />}
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
