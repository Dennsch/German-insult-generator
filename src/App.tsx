import { useState } from 'react'
import './App.css'

// Collection of German insults
const germanInsults = [
  "Scheiße!", // shit
  "Schlampe!", // slut
  "Fotze!", // cunt
  "Wichser!", // wanker
  "Kacke!", // shit
  "Hurensohn!", // son of whore
  "Dummkopf!", // dumbass
  "Arschloch!", // asshole
  "Fick dich!", // fuck you
  "Verdammt!", // damn
  "Trottel!", // idiot
  "Verpiss dich!", // piss off
  "Nutte!", // whore
  "Hackfresse!", // ugly face
  "Depp!", // moron
  "Volltrottel!", // complete idiot
  "Arschgeige!", // ass violin
  "Hodenkobolt!", // testicle goblin
  "Missgeburt!" // freak/miscarriage
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
            * These are authentic German expressions used for educational/entertainment purposes only.
          </small>
        </div>
      </div>
    </div>
  )
}

export default App