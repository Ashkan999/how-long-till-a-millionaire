import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import WelcomeSection from "./components/WelcomeSection";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeSection />
      <InfoSection />
    </div>
  );
}

export default App;
