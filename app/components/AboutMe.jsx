import Image from 'next/image'
import React from 'react'
import pcGaming from '../../public/imgs/pc-gaming.png'
import uciLogo from '../../public/imgs/uci-logo.svg'
import cwLogo from '../../public/imgs/cw-logo.png'

function AboutMe() {
	return (
		<div className='h-full w-full'>
			<div className='border-l-2 md:border-l-4 border-primary px-4 py-2 rounded w-5/6 md:w-3/4 mx-auto font-manrope text-text my-6'>
				<h2 className='text-5xl font-bold'>About Me</h2>
				<p className='text-xl md:text-2xl my-6'>
					Hi there, I’m Arrington Mata and I’m a full-stack web developer! Being
					an avid PC gamer, I felt an affinity to technology, so I decided to pick
					up programming by taking a Computer Science class in high school
					and fell in love with being able to create with lines of code.
				</p>
				<p className='text-xl md:text-2xl'>
					After a little bit of time at University of California, Irvine, working
					towards a Computer Science degree, I decided I wanted to hop
					straight to building applications. So, I graduated from Boise Codeworks
					with app development experience, and now aspire to be in
					a career that lets me channel my creativity through making amazing
					experiences through web development.
				</p>
				<div className='w-full flex justify-around my-12'>
					<Image src={pcGaming}
						alt='computer image'
						className='grayscale hover:grayscale-0 transition-all duration-200 w-1/3 md:w-1/6 aspect-square'
					/>
					<Image src={uciLogo}
						alt='University of California, Irvine logo'
						className='grayscale hover:grayscale-0 transition-all duration-200 w-1/3 md:w-1/6 mx-6 aspect-square'
					/>
					<Image src={cwLogo}
						alt='Codeworks Logo'
						className='grayscale hover:grayscale-0 transition-all duration-200 w-1/3 md:w-1/6 aspect-square'
					/>
				</div>
			</div>
		</div>
	)
}

export default AboutMe