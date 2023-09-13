import Image from 'next/image'
import jabbPicture from '../../public/imgs/applications/jabbpreview.jpg'

function Applications() {
	return (
		<div className="h-full w-full mt-36">
			<div className="w-5/6 mx-auto">
				<div className="border-b-2 w-fit pb-3 border-primary rounded">
					<h2 className="text-text font-bold text-6xl">Applications</h2>
					<h2 className="text-text text-2xl mt-4">Here is some of my work, with live demos and source code</h2>
				</div>
				<div className='flex mt-6 px-2'>
					<Image
						src={jabbPicture}
						alt="Jabb Preview Picture"
						className='w-full md:w-1/2 rounded grayscale transition-all shadow-md
						hover:grayscale-0 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-white/75'
					/>
					<div className='ms-6'>
						<h3 className='text-text font-bold text-5xl'>Jabb Bookclub</h3>
						<div className='w-full bg-primary'>
							<p className='text-text text-xl mt-3'>Jabb Bookclub</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Applications