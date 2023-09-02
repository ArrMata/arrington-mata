import Image from 'next/image'
import Greeting from './components/Greeting'

export default function Home() {
  return (
    <main className="bg-background">
      <Greeting />
    </main>
  )
}
