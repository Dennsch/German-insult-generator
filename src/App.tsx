import { useState } from "react";
import "./App.css";

// Collection of German insults with translations
const germanInsults = [
  { german: "Scheiße!", english: "shit" },
  { german: "Schlampe!", english: "slut" },
  { german: "Fotze!", english: "cunt" },
  { german: "Wichser!", english: "wanker" },
  { german: "Kacke!", english: "shit" },
  { german: "Hurensohn!", english: "son of whore" },
  { german: "Dummkopf!", english: "dumbass" },
  { german: "Arschloch!", english: "asshole" },
  { german: "Fick dich!", english: "fuck you" },
  { german: "Verdammt!", english: "damn" },
  { german: "Trottel!", english: "idiot" },
  { german: "Verpiss dich!", english: "piss off" },
  { german: "Nutte!", english: "whore" },
  { german: "Hackfresse!", english: "ugly face" },
  { german: "Depp!", english: "moron" },
  { german: "Volltrottel!", english: "complete idiot" },
  { german: "Arschgeige!", english: "ass violin" },
  { german: "Hodenkobolt!", english: "testicle goblin" },
  { german: "Missgeburt!", english: "freak/miscarriage" },
];

function App() {
  const [currentInsult, setCurrentInsult] = useState<{
    german: string;
    english: string;
  } | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const generateInsult = () => {
    setIsAnimating(true);

    // Add a small delay for animation effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * germanInsults.length);
      setCurrentInsult(germanInsults[randomIndex]);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>🇩🇪 German Insult Generator 🇩🇪</h1>

        <button
          className={`insult-button ${isAnimating ? "animating" : ""}`}
          onClick={generateInsult}
          disabled={isAnimating}
        >
          {isAnimating ? "Generating..." : "Generate Insult!"}
        </button>

        {currentInsult && (
          <div className="insult-display">
            <h2>{currentInsult.german}</h2>
            <p className="translation">({currentInsult.english})</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
