import Link from "next/link"

function Header({
	aboutRef,
	experienceRef,
	applicationsRef,
	contactRef,
}) {
	return (
		<header className="flex justify-between font-manrope bg-background text-text py-12 px-24">
			<Link href='/'><p className="text-2xl" >Arrington.Mata</p></Link>
			<div className="hidden md:flex">
				<p onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
					title="Scroll to About Me"
					className="text-2xl cursor-pointer transition-all hover:text-primary" >
					About Me
				</p>
				<p onClick={() => experienceRef.current.scrollIntoView({ behavior: 'smooth' })}
					title="Scroll to Experience"
					className="text-2xl mx-6 cursor-pointer transition-all hover:text-primary"
				>
					Experience
				</p>
				<p onClick={() => applicationsRef.current.scrollIntoView({ behavior: 'smooth' })}
					title="Scroll to Applications"
					className="text-2xl cursor-pointer transition-all hover:text-primary"
				>
					Applications
				</p>
				<p onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
					title="Scroll to Contact"
					className="text-2xl mx-6 cursor-pointer transition-all hover:text-primary"
				>
					Contact
				</p>
				<a title="Download Resume"
					href="files/ArringtonMataResume.pdf"
					className="text-2xl cursor-pointer transition-all hover:text-primary hover:border-primary border-2 border-white px-2 rounded text-center"
					download
				>
					Resume
				</a>
			</div>
		</header>
	)
}

export default Header