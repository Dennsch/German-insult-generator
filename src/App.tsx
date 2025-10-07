import { useState } from 'react'
import './App.css'

// Collection of German insults (keeping them relatively mild)
const germanInsults = [
  "Du Dummkopf!", // You dummy!
  "Du Trottel!", // You fool!
  "Du Hornochse!", // You blockhead!
  "Du Hohlkopf!", // You airhead!
  "Du Schwachkopf!", // You weakhead!
  "Du Tollpatsch!", // You klutz!
  "Du Pfosten!", // You post (meaning blockhead)!
  "Du Knallkopf!", // You crackhead!
  "Du Dussel!", // You silly person!
  "Du Nulpe!", // You zero!
  "Du Flachzange!", // You flat pliers (meaning dimwit)!
  "Du Schlafmütze!", // You sleepyhead!
  "Du Trampeltier!", // You trampling animal!
  "Du Schussel!", // You scatterbrain!
  "Du Holzkopf!", // You wooden head!
  "Du Blödmann!", // You fool!
  "Du Einfaltspinsel!", // You simpleton!
  "Du Stümper!", // You bungler!
  "Du Tölpel!", // You oaf!
  "Du Banause!" // You philistine!
]

function App() {
  const [currentInsult, setCurrentInsult] = useState<string>('')
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const generateInsult = () => {
    setIsAnimating(true)
    
    // Add a small delay for animation effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * germanInsults.length)
      setCurrentInsult(germanInsults[randomIndex])
      setIsAnimating(false)
    }, 200)
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🇩🇪 German Insult Generator 🇩🇪</h1>
        <p className="subtitle">Click the button to get a random German insult!</p>
        
        <button 
          className={`insult-button ${isAnimating ? 'animating' : ''}`}
          onClick={generateInsult}
          disabled={isAnimating}
        >
          {isAnimating ? 'Generating...' : 'Generate Insult!'}
        </button>
        
        {currentInsult && (
          <div className="insult-display">
            <h2>{currentInsult}</h2>
          </div>
        )}
        
        <div className="disclaimer">
          <small>
            * These are mild German expressions used for educational/entertainment purposes only.
          </small>
        </div>
      </div>
    </div>
  )
}

export default App