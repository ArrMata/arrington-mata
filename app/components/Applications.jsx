import Image from 'next/image'
import jabbPicture from '../../public/imgs/applications/jabbpreview.jpg'
import keeprPicture from '../../public/imgs/applications/keeprpreview.jpg'
import towerPicture from '../../public/imgs/applications/towerpreview.jpg'
import networkPicture from '../../public/imgs/applications/networkpreview.jpg'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiGithub, mdiWeb } from '@mdi/js'

function Applications({ applicationsRef }) {
	return (
		<div ref={applicationsRef} className="w-full mt-36">
			<div className="w-5/6 mx-auto">
				<div className="border-b-2 w-fit pb-3 border-primary rounded">
					<h2 className="text-text font-bold text-6xl">Applications</h2>
					<h2 className="text-text text-2xl mt-4">Here is some of my work, with live demos and source code</h2>
				</div>
				{
					//#region Jabb Block
				}
				<div className='flex mt-6 px-2 items-center'>
					<Link href="https://jabb.arringtonm.com" className='w-full md:w-1/2'>
						<Image
							src={jabbPicture}
							alt="Jabb Preview Picture"
							className='rounded grayscale transition-all shadow-md
							hover:grayscale-0 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-white/75'
						/>
					</Link>
					<div className='ms-6 md:w-1/2'>
						<h3 className='text-text font-bold text-5xl mx-4'>Jabb Bookclub</h3>
						<p className='text-text font-bold text-2xl my-4 mx-4'>Vue | ExpressJS | MongoDB | Google Books API</p>
						<div className='w-full bg-primary bg-opacity-40 rounded py-4 px-8'>
							<p className='text-text text-xl mt-4 leading-loose'>
								Jabb Bookclub is a full-stack application that allows users to create communities with bookclubs.
								These bookclubs are able to be made private or public, and have a booklist that keeps track of books read and their rating.
								This application was developed with an amazing team using SCRUM practices, and was a great learning experience.
							</p>
							<div className='flex justify-end mt-3'>
								<Link href="https://github.com/ArrMata/jabb-bookclub">
									<Icon
										path={mdiGithub}
										title='Source Code on Github'
										size={2}
										className='text-text hover:text-orange-500 transition-all me-2'
									/>
								</Link>
								<Link href="https://jabb.arringtonm.com">
									<Icon
										path={mdiWeb}
										title='Live Demo Link'
										size={2}
										className='text-text hover:text-orange-500 transition-all'
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{
					//#endregion
				}
				{
					//#region Keepr Block
				}
				<div className='flex my-36 px-2 items-center'>
					<div className='me-6 md:w-1/2'>
						<h3 className='text-text font-bold text-5xl mx-4'>Keepr</h3>
						<p className='text-text font-bold text-2xl my-4 mx-4'>.NET | C# | MySQL | Vue</p>
						<div className='w-full bg-primary bg-opacity-40 rounded py-4 px-8'>
							<p className='text-text text-xl mt-4 leading-loose'>
								Keepr is a Pinterest style full-stack web-application, with the ability to share pictures with captions to everyone on the site.
								Users can then save these images into their own collections called vaults.
								Vaults can be made public or private by the user, if private, other users can not view that vault.
							</p>
							<div className='flex mt-3'>
								<Link href="https://github.com/ArrMata/bcw_2023summer_keepr">
									<Icon
										path={mdiGithub}
										title='Source Code on Github'
										size={2}
										className='text-text hover:text-orange-500 transition-all me-2'
									/>
								</Link>
								<Link href="https://keepr.arringtonm.com">
									<Icon
										path={mdiWeb}
										title='Live Demo Link'
										size={2}
										className='text-text hover:text-orange-500 transition-all'
									/>
								</Link>
							</div>
						</div>
					</div>
					<Link href="https://keepr.arringtonm.com" className='w-full md:w-1/2'>
						<Image
							src={keeprPicture}
							alt="Keepr Preview Picture"
							className='rounded grayscale transition-all shadow-md
							hover:grayscale-0 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-white/75'
						/>
					</Link>
				</div>
				{
					//#endregion
				}
				{
					//#region Tower Block
				}
				<div className='flex my-36 px-2 items-center'>
					<Link href="https://tower.arringtonm.com" className='w-full md:w-1/2'>
						<Image
							src={towerPicture}
							alt="Tower Preview Picture"
							className='rounded grayscale transition-all shadow-md
							hover:grayscale-0 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-white/75'
						/>
					</Link>
					<div className='ms-6 md:w-1/2'>
						<h3 className='text-text font-bold text-5xl mx-4'>Tower</h3>
						<p className='text-text font-bold text-2xl my-4 mx-4'>Vue | ExpressJS | MongoDB</p>
						<div className='w-full bg-primary bg-opacity-40 rounded py-4 px-8'>
							<p className='text-text text-xl mt-4 leading-loose'>
								Tower is a full-stack web application where users can post, comment on and attend events.
								When a user attends, it adds them to the attendee list and
								allows also adds it to their own personal list of events they&#39;re attending, which is viewable on the user&#39;s account page.
							</p>
							<div className='flex justify-end mt-3'>
								<Link href="https://github.com/ArrMata/bcw-2023summer-tower">
									<Icon
										path={mdiGithub}
										title='Source Code on Github'
										size={2}
										className='text-text hover:text-orange-500 transition-all me-2'
									/>
								</Link>
								<Link href="https://tower.arringtonm.com">
									<Icon
										path={mdiWeb}
										title='Live Demo Link'
										size={2}
										className='text-text hover:text-orange-500 transition-all'
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{
					//#endregion
				}
				{
					//#region Tower Block
				}
				<div className='flex my-36 px-2 items-center'>
					<div className='me-6 md:w-1/2'>
						<h3 className='text-text font-bold text-5xl mx-4'>Network</h3>
						<p className='text-text font-bold text-2xl my-4 mx-4'>Vue | Auth0 | REST API</p>
						<div className='w-full bg-primary bg-opacity-40 rounded py-4 px-8'>
							<p className='text-text text-xl mt-4 leading-loose'>
								Network is a social media client-side application utilizing VueJS and Boise Codeworks&#39; Network API allowing for posts and user profiles.
								Network was my first big Vue project, allowing me to get very comfortable with Vue&#39;s workflow.
							</p>
							<div className='flex mt-3'>
								<Link href="https://github.com/ArrMata/bcw-2023summer-network">
									<Icon
										path={mdiGithub}
										title='Source Code on Github'
										size={2}
										className='text-text hover:text-orange-500 transition-all me-2'
									/>
								</Link>
								<Link href="https://network.arringtonm.com">
									<Icon
										path={mdiWeb}
										title='Live Demo Link'
										size={2}
										className='text-text hover:text-orange-500 transition-all'
									/>
								</Link>
							</div>
						</div>
					</div>
					<Link href="https://network.arringtonm.com" className='w-full md:w-1/2'>
						<Image
							src={networkPicture}
							alt="Network Preview Picture"
							className='rounded grayscale transition-all shadow-md
							hover:grayscale-0 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-white/75'
						/>
					</Link>
				</div>
				{
					//#endregion
				}
			</div>
		</div>
	)
}
export default Applications