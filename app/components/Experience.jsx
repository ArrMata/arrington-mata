import Image from 'next/image'
import reactLogo from '../../public/imgs/technologies/react.png'
import nodeLogo from '../../public/imgs/technologies/nodejs.png'
import expressLogo from '../../public/imgs/technologies/express.png'
import mongoLogo from '../../public/imgs/technologies/mongodb.png'
import vueLogo from '../../public/imgs/technologies/vue.png'

function Experience() {
	return (
		<div className='h-full w-full'>
			<div className='w-1/2 h-full mx-auto'>
				<div className='w-full py-4 px-4 rounded border-b-4 border-primary'>
					<h2 className='text-text text-5xl font-bold leading-relaxed'>Experience</h2>
					<p className='text-text text-3xl'>I&#39;ve been programming for 5 years,  <br /> and doing web development for 2 years.</p>
					<p className='text-text text-3xl'>Here&#39;s some technologies I have worked with during my career!</p>
				</div>
				<div className='w-full bg-gray-800 rounded-md mt-6 justify-between items-center flex p-6'>
					<Image src={reactLogo}
						alt='React Image'
						className='w-1/6'
					/>
					<Image src={nodeLogo}
						alt='React Image'
						className='w-1/6'
					/>
					<Image src={mongoLogo}
						alt='React Image'
						className='w-1/6'
					/>
					<Image src={expressLogo}
						alt='React Image'
						className='w-1/6'
					/>
					<Image src={vueLogo}
						alt='React Image'
						className='w-1/6'
					/>
				</div>
			</div>
		</div>
	)
}

export default Experience