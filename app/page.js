import Image from 'next/image'
import Greeting from './components/Greeting'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Applications from './components/Applications'

export default function Home() {
  return (
    <main className="bg-background">
      <Greeting />
      <AboutMe />
      <Experience />
      <Applications />
    </main>
  )
}


// Credit Icon in footer later
// <a href="https://www.flaticon.com/free-icons/game-development" title="game-development icons">Game-development icons created by juicy_fish - Flaticon</a>