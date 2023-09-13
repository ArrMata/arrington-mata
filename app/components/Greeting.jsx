import React from 'react'
import '../styles/greeting.css'
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin } from '@mdi/js'
import Link from 'next/link'

function Greeting({ greetingRef }) {
	return (
		<div ref={greetingRef} className='flex h-full w-full text-text pt-24'>
			<div className='px-6 py-24 md:px-24'>
				<h1 className='text-xl leading-relaxed md:text-4xl md:leading-snug'>Hello There,</h1>
				<h2 className='text-3xl leading-relaxed md:text-6xl font-bold md:leading-snug'>{"I'm Arrington Mata."}</h2>
				<h2 className='text-3xl leading-relaxed md:text-6xl font-bold md:leading-snug text-gradient'>Full-stack developer.</h2>
				<p className='text-xl leading-relaxed md:text-4xl md:leading-snug'>I design and build web applications with a focus <br className='hidden md:block' /> on enjoyable and user-friendly experiences.</p>
				<div className='flex mt-6'>
					<Link href="https://github.com/ArrMata/">
						<Icon
							title='Go to my Github!'
							path={mdiGithub}
							size={2}
							className='transition-all text-text hover:text-primary'
						/>
					</Link>
					<Link href="https://www.linkedin.com/in/arrington-mata/">
						<Icon
							title='Go to my Github!'
							path={mdiLinkedin}
							size={2}
							className='ms-2 transition-all text-text hover:text-primary'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Greeting