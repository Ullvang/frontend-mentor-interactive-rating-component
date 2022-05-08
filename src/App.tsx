import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import ThankYou from "./pages/thank_you/ThankYou";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [score, setScore] = useState<number>();

  const showThankYou = () => {
    setShowHome(false);
  };

  const handleSetScore = (numb: number) => {
    setScore(numb);
  };

  return (
    <>
      <main>
        {showHome ? (
          <Home
            showThankYou={showThankYou}
            handleSetScore={handleSetScore}
            score={score}
          />
        ) : (
          <ThankYou score={score} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
