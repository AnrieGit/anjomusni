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
						<div class="relative bg-tapa-800 shadow-lg rounded-lg h-full">
							<div class="flex flex-col justify-center items-center ">
								<div class="relative">
									<img src="../assets/images/svg/Wave1.svg" alt="Wave1.svg" class="absolute bottom-0 -mb-1">
									<img src="../assets/images/projects/portfolio/portfolio1.jpg" alt="portfolio1.jpg" class="rounded-t-lg">
								</div>
								<div class="flex items-center pt-1 px-5 space-x-3">
									<img class="h-5 w-5" src="../assets/images/skills/vue.svg" title="VueJS" alt="vue.svg">
									<img class="h-5 w-5" src="../assets/images/skills/tailwind-css.svg" title="Tailwindcss" alt="tailwind-css.svg">
								</div>
								<h3 class="text-white pt-5 text-center">My Portfolio</h3>
								<p class="text-tapa-200 text-sm p-5">
									Built using VueJS and Tailwindcss with EmailJS.
								</p>
								<div class="flex flex-around items-centers gap-4 p-5">
									<ButtonLink link="https://anjomusni.herokuapp.com/">
										<EyeIcon class="h-4 w-4"/>
									</ButtonLink>
									<ButtonLink link="https://github.com/AnrieGit/anjomusni" target="__blank">
										<GithubIcon class="h-4 w-4"/>
									</ButtonLink>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" :key="1" :data-index="1">
						<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-lg h-full">
							<div class="flex flex-col justify-center items-center ">
								<div class="relative">
									<img src="../assets/images/svg/Wave1.svg" alt="Wave1.svg" class="absolute bottom-0 -mb-1">
									<img src="../assets/images/projects/adventuristas/adventuristas1.jpg" alt="adventuristas1.jpg" class="rounded-t-lg">
								</div>
								<div class="flex items-center pt-1 px-5 space-x-3">
									<img class="h-5 w-5" src="../assets/images/skills/laravel.svg" title="Laravel" alt="laravel.svg">
									<img class="h-5 w-5" src="../assets/images/skills/livewire.svg" title="Livewire" alt="livewire.svg">
									<img class="h-5 w-5" src="../assets/images/skills/mysql.svg" title="MySQL" alt="mysql.svg">
									<img class="h-5 w-5" src="../assets/images/skills/tailwind-css.svg" title="Tailwindcss" alt="tailwind-css.svg">
								</div>
								<h3 class="text-white pt-5 text-center">Travel Management System</h3>
								<p class="text-tapa-200 text-sm p-5">
									Travel Management System is a web application that can add, edit, update and delete records of clients, tours, travel dates, travel vouchers, and discounts. It has a function that can export sales reports, guest lists, travel vouchers, and a database for backup.
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
						<div class="relative bg-tapa-800 shadow-lg rounded-lg h-full">
							<div class="flex flex-col justify-center items-center">
								<div class="relative">
									<img src="../assets/images/svg/Wave1.svg" alt="Wave1.svg" class="absolute bottom-0 -mb-1">
									<img src="../assets/images/projects/tasktracer/tracktracer1.jpg" alt="tracktracer1.jpg" class="rounded-t-lg">
								</div>
								<div class="flex items-center pt-1 px-5 space-x-3">
									<img class="h-4" src="../assets/images/skills/vue.svg" title="VueJS" alt="vue.svg">
									<img class="h-4" src="../assets/images/skills/tailwind-css.svg" title="Tailwindcss" alt="tailwind-css.svg">
								</div>
								<h3 class="text-white pt-5 text-center">Task Tracer</h3>
								<p class="text-tapa-200 text-sm p-5">
									Task Tracer is a simple web application built using VueJS3.
								</p>
								<div class="flex flex-around items-centers gap-4 p-5">
									<ButtonLink link="https://task-er.herokuapp.com/" target="__blank">
										<EyeIcon class="h-4 w-4"/>
									</ButtonLink>
									<ButtonLink link="https://github.com/AnrieGit/task-er" target="__blank">
										<GithubIcon class="h-4 w-4"/>
									</ButtonLink>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" :key="3" :data-index="3">
						<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-lg h-full">
							<div class="flex flex-col justify-center items-center">
								<div class="relative">
									<img src="../assets/images/svg/Wave1.svg" alt="Wave1.svg" class="absolute bottom-0 -mb-1">
									<img src="../assets/images/projects/accesswebsite/accesswebsite1.jpg" alt="accesswebsite1.jpg" class="rounded-t-lg">
								</div>
								<div class="flex items-center pt-1 px-5 space-x-3">
									<img class="h-5 w-5" src="../assets/images/skills/laravel.svg" title="Laravel" alt="laravel.svg">
									<img class="h-5 w-5" src="../assets/images/skills/vue.svg" title="VueJS" alt="vue.svg">
									<img class="h-5 w-5" src="../assets/images/skills/mysql.svg" title="MySQL" alt="mysql.svg">
									<img class="h-5 w-5" src="../assets/images/skills/bootstrap.svg" title="Bootstrap" alt="bootstrap.svg">
								</div>
								<h3 class="text-white pt-5 text-center">ACCESS Computer College</h3>
								<p class="text-tapa-200 text-sm p-5">
									Main website of ACCESS Computer College.
								</p>
								<div class="flex flex-around items-centers gap-4 p-5">
									<ButtonLink link="https://access.edu.ph" target="__blank">
										<EyeIcon class="h-4 w-4"/>
									</ButtonLink>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" :key="4" :data-index="4">
						<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-lg h-full">
							<div class="flex flex-col justify-center items-center ">
								<div class="relative">
									<img src="../assets/images/svg/Wave1.svg" alt="Wave1.svg" class="absolute bottom-0 -mb-1">
									<img src="../assets/images/projects/diploma/diploma1.jpg" alt="diploma1.jpg" class="rounded-t-lg">
								</div>
								<div class="flex items-center pt-1 px-5 space-x-3">
									<img class="h-5 w-5" src="../assets/images/skills/laravel.svg" title="Laravel" alt="laravel.svg">
									<img class="h-5 w-5" src="../assets/images/skills/livewire.svg" title="Livewire" alt="livewire.svg">
									<img class="h-5 w-5" src="../assets/images/skills/mysql.svg" title="MySQL" alt="mysql.svg">
									<img class="h-5 w-5" src="../assets/images/skills/tailwind-css.svg" title="Tailwindcss" alt="tailwind-css.svg">
								</div>
								<h3 class="text-white pt-5 text-center">Online Diploma System</h3>
								<p class="text-tapa-200 text-sm p-5">
									It is used to manage and organize the diploma of students.
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

					<div class="relative" :key="5" :data-index="5">
						<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-lg h-full">
							<div class="flex flex-col justify-center items-center ">
								<div class="relative">
									<img src="../assets/images/svg/Wave1.svg" alt="Wave1.svg" class="absolute bottom-0 -mb-1">
									<img src="../assets/images/projects/id/id1.jpg" alt="id1.jpg" class="rounded-t-lg">
								</div>
								<div class="flex items-center pt-1 px-5 space-x-3">
									<img class="h-5 w-5" src="../assets/images/skills/php.svg" title="PHP" alt="php.svg">
									<img class="h-5 w-5" src="../assets/images/skills/mysql.svg" title="MySQL" alt="mysql.svg">
									<img class="h-5 w-5" src="../assets/images/skills/jquery.svg" title="Jquery" alt="jquery.svg">
									<img class="h-5 w-5" src="../assets/images/skills/bootstrap.svg" title="Bootstrap" alt="bootstrap.svg">
								</div>
								<h3 class="text-white pt-5 text-center">Online I.D System</h3>
								<p class="text-tapa-200 text-sm p-5">
									Online I.D System or OIDS is a simple CRUD web application. It can also export and print the I.D of employees and students.
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
	import ButtonLink from '../components/ButtonLink'

	import { EyeIcon } from '@heroicons/vue/solid'
	import GithubIcon from '../components/icons/GithubIcon'

	export default {
		name: 'Projects',
		components: {
			Button,
			ButtonLink,
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