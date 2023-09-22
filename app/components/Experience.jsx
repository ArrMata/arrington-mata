import Image from 'next/image'
import reactLogo from '../../public/imgs/technologies/react.png'
import nodeLogo from '../../public/imgs/technologies/nodejs.png'
import expressLogo from '../../public/imgs/technologies/express.png'
import mongoLogo from '../../public/imgs/technologies/mongodb.png'
import vueLogo from '../../public/imgs/technologies/vue.png'
import htmlLogo from '../../public/imgs/technologies/html.png'
import cssLogo from '../../public/imgs/technologies/css.png'
import jsLogo from '../../public/imgs/technologies/javascript.png'
import sassLogo from '../../public/imgs/technologies/sass.png'
import pythonLogo from '../../public/imgs/technologies/python.png'
import csharpLogo from '../../public/imgs/technologies/csharp.png'
import dotnetLogo from '../../public/imgs/technologies/dotnet.png'
import mysqlLogo from '../../public/imgs/technologies/mysql.png'

function Experience({ experienceRef }) {
	return (
		<div ref={experienceRef} className='flex flex-col justify-center lg:my-0 my-12 lg:h-screen w-full'>
			<div className='w-11/12 lg:w-1/2 mx-auto'>
				<div className='w-full py-4 px-4 rounded border-b-4 border-primary'>
					<h2 className='text-text text-5xl font-bold leading-relaxed'>Experience</h2>
					<p className='text-text text-xl lg:text-3xl'>I&#39;ve been programming for 5 years,  <br /> and doing web development for 2 years.</p>
					<p className='text-text text-xl lg:text-3xl'>Here&#39;s some technologies I have worked with during my career!</p>
				</div>
			</div>
			{
				//#region Upper row desktop
			}
			<div className='hidden lg:flex w-3/5 mx-auto rounded-md justify-between items-center my-6'>

				<div className='flex items-center w-1/5 aspect-square bg-black bg-opacity-60 rounded-full p-8 mx-2'>
					<Image src={reactLogo}
						alt='React Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
				<div className='flex items-center w-1/5 aspect-square bg-black bg-opacity-60 rounded-full p-8 mx-2'>
					<Image src={nodeLogo}
						alt='Node Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
				<div className='flex items-center w-1/5 aspect-square bg-black bg-opacity-60 rounded-full p-8 mx-2'>
					<Image src={mongoLogo}
						alt='MongoDb Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
				<div className='flex items-center w-1/5 aspect-square bg-black bg-opacity-60 rounded-full p-8 mx-2'>
					<Image src={expressLogo}
						alt='Express Image'
						className='object-contain w-full h-full invert'
					/>
				</div>
				<div className='flex items-center w-1/5 aspect-square bg-black bg-opacity-60 rounded-full p-8 mx-2'>
					<Image src={vueLogo}
						alt='Vue Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
			</div>
			{
				//#endregion
			}
			{
				//#region second row
			}
			<div className='hidden lg:flex w-1/2 mx-auto rounded-md justify-center items-center'>
				<div className='flex items-center w-1/6 aspect-square bg-black bg-opacity-60 rounded-full p-5 mx-4'>
					<Image src={htmlLogo}
						alt='HTML Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
				<div className='flex items-center w-1/6 aspect-square bg-black bg-opacity-60 rounded-full p-5 mx-4'>
					<Image src={cssLogo}
						alt='CSS Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
				<div className='flex items-center w-1/6 aspect-square bg-black bg-opacity-60 rounded-full p-2 mx-4'>
					<Image src={jsLogo}
						alt='JavaScript Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
				<div className='flex items-center w-1/6 aspect-square bg-black bg-opacity-60 rounded-full p-5 mx-4'>
					<Image src={sassLogo}
						alt='SASS Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
			</div>
			{
				//#endregion
			}
			{
				//#region third row
			}
			<div className='hidden lg:flex w-1/2 mt-6 mx-auto rounded-md justify-center items-center'>
				<div className='flex items-center w-1/6 aspect-square bg-black bg-opacity-60 rounded-full p-6 mx-4'>
					<Image src={pythonLogo}
						alt='Python Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
				<div className='flex items-center w-1/6 aspect-square bg-black bg-opacity-60 rounded-full p-6 mx-4'>
					<Image src={csharpLogo}
						alt='C# Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
				<div className='flex items-center w-1/6 aspect-square bg-black bg-opacity-60 rounded-full mx-4'>
					<Image src={dotnetLogo}
						alt='.NET Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
				<div className='flex items-center w-1/6 aspect-square bg-black bg-opacity-60 rounded-full p-5 mx-4'>
					<Image src={mysqlLogo}
						alt='MySQL Image'
						className='object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-200'
					/>
				</div>
			</div>
			{
				//#endregion
			}
			{
				//#region mobile row one
			}
			<div className='flex lg:hidden w-11/12 mx-auto rounded-md justify-center items-center my-6'>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-3 md:p-5 mx-2'>
					<Image src={reactLogo}
						alt='React Image'
						className='object-contain w-full h-full'
					/>
				</div>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-3 md:p-5 mx-2'>
					<Image src={nodeLogo}
						alt='Node Image'
						className='object-contain w-full h-full'
					/>
				</div>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-3 md:p-5 mx-2'>
					<Image src={mongoLogo}
						alt='MongoDb Image'
						className='object-contain w-full h-full'
					/>
				</div>
			</div>
			{
				//#endregion
			}
			{
				//#region mobile row two
			}
			<div className='flex lg:hidden w-11/12 mx-auto rounded-md justify-center items-center mb-6'>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-3 md:p-8 mx-2'>
					<Image src={expressLogo}
						alt='Express Image'
						className='object-contain w-full h-full invert'
					/>
				</div>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-5 md:p-8 mx-2'>
					<Image src={vueLogo}
						alt='Vue Image'
						className='object-contain w-full h-full'
					/>
				</div>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-3 md:p-8 mx-2'>
					<Image src={htmlLogo}
						alt='HTML Image'
						className='object-contain w-full h-full'
					/>
				</div>
			</div>
			{
				//#endregion
			}
			{
				//#region mobile row three
			}
			<div className='flex lg:hidden w-11/12 mx-auto rounded-md justify-center items-center mb-4'>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-3 md:p-8 mx-2'>
					<Image src={cssLogo}
						alt='CSS Image'
						className='object-contain w-full h-full'
					/>
				</div>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-1 md:p-2 mx-2'>
					<Image src={jsLogo}
						alt='JavaScript Image'
						className='object-contain w-full h-full'
					/>
				</div>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-3 md:p-8 mx-2'>
					<Image src={sassLogo}
						alt='Sass Image'
						className='object-contain w-full h-full'
					/>
				</div>
			</div>
			{
				//#endregion
			}
			{
				//#region mobile row four
			}
			<div className='flex lg:hidden w-11/12 mx-auto rounded-md justify-center items-center mb-4'>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-5 md:p-7 mx-2'>
					<Image src={pythonLogo}
						alt='Python Image'
						className='object-contain w-full h-full'
					/>
				</div>
				<div className='flex items-center w-1/3 md:w-1/4 aspect-square bg-black bg-opacity-60 rounded-full p-5 md:p-7 mx-2'>
					<Image src={csharpLogo}
						alt='C# Image'
						className='object-contain w-full h-full'
					/>
				</div>
			</div>
			{
				//#endregion
			}
			{
				//#region mobile row five
			}
			<div className='flex lg:hidden w-11/12 mx-auto rounded-md justify-center items-center'>
				<div className='flex items-center w-1/3 md:w-1/4  aspect-square bg-black bg-opacity-60 rounded-full p-3 md:p-2 mx-2'>
					<Image src={dotnetLogo}
						alt='.NET Image'
						className='object-contain w-full h-full'
					/>
				</div>
				<div className='flex items-center w-1/3 md:w-1/4  aspect-square bg-black bg-opacity-60 rounded-full p-1 md:p-4 mx-2'>
					<Image src={mysqlLogo}
						alt='MySQL Image'
						className='object-contain w-full h-full'
					/>
				</div>
			</div>
			{
				//#endregion
			}
		</div>
	)
}

export default Experience