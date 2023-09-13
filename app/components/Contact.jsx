import Link from "next/link"

function Contact({ contactRef }) {
	return (
		<div ref={contactRef} className="w-1/3 my-48 mx-auto">
			<div className='w-full pb-8 px-2 rounded border-b-4 border-primary'>
				<h2 className='text-text text-4xl font-bold leading-relaxed'>Get in Touch</h2>
				<p className='text-text text-2xl leading-tight mb-6'>Inbox is always open, feel free to contact me!</p>
				<Link
					href="mailto:mataarrington@gmail.com"
					className="bg-primary hover:bg-orange-500 hover:text-black transition-all duration-200 text-text text-2xl p-3 rounded"
				>
					mataarrington@gmail.com
				</Link>
			</div>
		</div>
	)
}
export default Contact