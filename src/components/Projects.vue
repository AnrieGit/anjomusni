<template>
	<div>
		<div class="mt-10 pt-40 pb-40">
			<div class="px-10 xl:px-40">
				<div class="text-center text-orange-400">
					<h1>Projects</h1>
				</div>
			</div>

			<div class="px-10 xl:px-40 pt-20">
				<transition-group class="relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 sm:px-5 py-10"
					appear
					tag="div"
					@before-enter="beforeEnter"
					@enter="enter"
				>

				<div class="relative" :key="0" :data-index="0">
					<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-md h-full">
							<div class="flex flex-col justify-center items-center ">
								<img src="../assets/images/projects/adventuristas/adventuristas1.jpg" alt="adventuristas1.jpg" class="rounded-t-lg">
								<div class="flex items-center pt-5 px-5 space-x-3">
									<img class="h-4" src="../assets/images/skills/backend/laravel.png" title="Laravel" alt="laravel.png">
									<img class="h-4" src="../assets/images/skills/backend/livewire.png" title="Livewire" alt="livewire.png">
									<img class="h-4" src="../assets/images/skills/backend/mysql.png" title="MySQL" alt="mysql.png">
									<img class="h-4" src="../assets/images/skills/css/tailwind-css.png" title="Tailwindcss" alt="tailwindcss.png">
								</div>
								<h3 class="text-white pt-5 text-center">Travel Management System</h3>
								<p class="text-tapa-200 text-sm p-5">
									Travel Management System is a web application that can add, edit, update and delete records of clients, tours, travel dates, guest lists, and discounts. It has a function that can export sales reports, guest lists, travel vouchers, and a database for backup.
								</p>
								<div class="flex flex-around items-centers gap-4 p-5">
									<Button type="button">
										<EyeIcon class="h-4 w-4"/>
									</Button>
									<Button type="button">
										<GithubIcon class="h-4 w-4"/>
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" :key="1" :data-index="1">
						<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-md h-full">
							<div class="flex flex-col justify-center items-center ">
								<img src="../assets/images/projects/tasktracer/tracktracer1.jpg" alt="tracktracer1.jpg" class="rounded-t-lg">
								<div class="flex items-center pt-5 px-5 space-x-3">
									<img class="h-4" src="../assets/images/skills/javascript/vuejs.png" title="VueJS" alt="vuejs.png">
									<img class="h-4" src="../assets/images/skills/css/tailwind-css.png" title="Tailwindcss" alt="tailwindcss.png">
								</div>
								<h3 class="text-white pt-5 text-center">Task Tracer</h3>
								<p class="text-tapa-200 text-sm p-5">
									Task Tracer is a simple web application made using Vue JS 3.
								</p>
								<div class="flex flex-around items-centers gap-4 p-5">
									<Button type="button">
										<EyeIcon class="h-4 w-4"/>
									</Button>
									<Button type="button">
										<GithubIcon class="h-4 w-4"/>
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" :key="2" :data-index="2">
						<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-md h-full">
							<div class="flex flex-col justify-center items-center">
								<img src="../assets/images/projects/accesswebsite/accesswebsite1.jpg" alt="accesswebsite1.jpg" class="rounded-t-lg">
								<div class="flex items-center pt-5 px-5 space-x-3">
									<img class="h-4" src="../assets/images/skills/backend/laravel.png" title="Laravel" alt="laravel.png">
									<img class="h-4" src="../assets/images/skills/javascript/vuejs.png" title="VueJS" alt="vuejs.png">
									<img class="h-4" src="../assets/images/skills/backend/mysql.png" title="MySQL" alt="mysql.png">
									<img class="h-4" src="../assets/images/skills/css/bootstrap.png" title="Bootstrap" alt="bootstrap.png">
								</div>
								<h3 class="text-white pt-5 text-center">ACCESS Computer College</h3>
								<p class="text-tapa-200 text-sm p-5">
									The main website of ACCESS Computer College.
								</p>
								<div class="flex flex-around items-centers gap-4 p-5">
									<Button type="button">
										<EyeIcon class="h-4 w-4"/>
									</Button>
									<Button type="button">
										<GithubIcon class="h-4 w-4"/>
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" :key="3" :data-index="3">
						<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-md h-full">
							<div class="flex flex-col justify-center items-center ">
								<img src="../assets/images/projects/diploma/diploma1.jpg" alt="diploma1.jpg" class="rounded-t-lg">
								<div class="flex items-center pt-5 px-5 space-x-3">
									<img class="h-4" src="../assets/images/skills/backend/laravel.png" title="Laravel" alt="laravel.png">
									<img class="h-4" src="../assets/images/skills/backend/livewire.png" title="Livewire" alt="livewire.png">
									<img class="h-4" src="../assets/images/skills/backend/mysql.png" title="MySQL" alt="mysql.png">
									<img class="h-4" src="../assets/images/skills/css/tailwind-css.png" title="Tailwindcss" alt="tailwindcss.png">
								</div>
								<h3 class="text-white pt-5 text-center">Online Diploma System</h3>
								<p class="text-tapa-200 text-sm p-5">
									It is use to manage the printing process of diploma.
								</p>
								<div class="flex flex-around items-centers gap-4 p-5">
									<Button type="button">
										<EyeIcon class="h-4 w-4"/>
									</Button>
									<Button type="button">
										<GithubIcon class="h-4 w-4"/>
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" :key="4" :data-index="4">
						<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-md h-full">
							<div class="flex flex-col justify-center items-center ">
								<img src="../assets/images/projects/id/id1.jpg" alt="id1.jpg" class="rounded-t-lg">
								<div class="flex items-center pt-5 px-5 space-x-3">
									<img class="h-4" src="../assets/images/skills/backend/php.png" title="PHP" alt="php.png">
									<img class="h-4" src="../assets/images/skills/backend/mysql.png" title="MySQL" alt="mysql.png">
									<img class="h-4" src="../assets/images/skills/javascript/jquery.png" title="Jquery" alt="jquery.png">
									<img class="h-4" src="../assets/images/skills/css/bootstrap.png" title="Bootstrap" alt="bootstrap.png">
								</div>
								<h3 class="text-white pt-5 text-center">Online I.D System</h3>
								<p class="text-tapa-200 text-sm p-5">
									Online I.D System or OIDS is a CRUD web application that can record and print the I.D of the students.
								</p>
								<div class="flex flex-around items-centers gap-4 p-5">
									<Button type="button">
										<EyeIcon class="h-4 w-4"/>
									</Button>
									<Button type="button">
										<GithubIcon class="h-4 w-4"/>
									</Button>
								</div>
							</div>
						</div>
					</div>

				</transition-group>
			</div>
		</div>
	</div>
</template>

<script>
	import gsap from 'gsap'

	import Button from '../components/Button'

	import { EyeIcon } from '@heroicons/vue/solid'
	import GithubIcon from '../components/icons/GithubIcon'

	export default {
		name: 'Projects',
		components: {
			Button,
			EyeIcon,
			GithubIcon,
		},
		methods: {
			beforeEnter(el) {
				el.style.opacity = 0
				el.style.transform = 'translateY(100px)'
			},
			enter(el, done) {
				gsap.to(el, {
					opacity: 1,
					y: 0,
					duration: 0.8,
					delay: el.dataset.index * 0.2,
					onComplete: done,
				})
			}
		}
	}
</script>