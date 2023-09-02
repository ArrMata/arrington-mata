import Link from "next/link"

function Header() {
	return (
		<header className="flex justify-between font-manrope bg-background text-text py-3 px-12">
			<Link href='/'><p className="text-2xl" >Arrington.Mata</p></Link>
			<div className="hidden md:flex">
				<Link href='#'><p className="text-2xl" >About Me</p></Link>
				<Link href='#'><p className="text-2xl mx-6" >Experience</p></Link>
				<Link href='#'><p className="text-2xl" >Projects</p></Link>
				<Link href='#'><p className="text-2xl mx-6" >Resume</p></Link>
				<Link href='#'><p className="text-2xl" >Contact</p></Link>
			</div>
		</header>
	)
}

export default Header