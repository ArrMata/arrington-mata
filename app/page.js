"use client"
import Greeting from './components/Greeting'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Applications from './components/Applications'
import Contact from './components/Contact'
import Header from './components/Header'
import { useRef } from 'react'

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const applicationsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        applicationsRef={applicationsRef}
        contactRef={contactRef}
      />
      <main className="bg-background">
        <Greeting />
        <AboutMe aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
        <Applications applicationsRef={applicationsRef} />
        <Contact contactRef={contactRef} />
      </main>
      <footer className='w-1/2 mx-auto flex flex-col items-center'>
        <p className='text-sm text-gray-400'>Made with NextJS and Tailwind CSS</p>
        <a className='text-sm text-gray-400' href="https://www.flaticon.com/free-icons/game-development" title="game-development icons">Game-development icons created by juicy_fish - Flaticon</a>
      </footer>
    </>
  )
}


// Credit Icon in footer later
