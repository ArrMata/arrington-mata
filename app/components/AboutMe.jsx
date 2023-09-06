import Image from 'next/image'
import React from 'react'

function AboutMe() {
	return (
		<div className='h-full w-full'>
			<div className='w-3/4 mx-auto font-manrope text-text'>
				<h2 className='text-5xl font-bold'>About Me</h2>
				<p className='text-2xl my-6'>
					Hi there, I’m Arrington Mata and I’m a full-stack web developer! Being
					an avid PC gamer, I felt an affinity to technology, so I decided to pick
					up programming by taking a Computer Science class in high school
					and fell in love with being able to create with lines of code.
				</p>
				<p className='text-2xl'>
					After a little bit of time at University of California, Irvine, working
					towards a Computer Science degree, I decided I wanted to hop
					straight to building applications. So, I graduated from Boise Codeworks
					with app development experience, and now aspire to be in
					a career that lets me channel my creativity through making amazing
					experiences through web development.
				</p>
				<div className='d-flex'>
					<Image src="../" />
				</div>
			</div>
		</div>
	)
}

export default AboutMe