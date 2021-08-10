<template>
	<div>
		<div class="pt-40 pb-40">
			<div class="px-10 xl:px-40">
				<div class="text-center text-orange-400">
					<h1>Projects</h1>
				</div>
			</div>

			<div class="px-10 xl:px-40 pt-20">
				<div id="project-boxes" class="relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 sm:px-5 py-10">
					<div class="relative box">
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

					<div class="relative box">
						<div class="absolute inset-0 bg-gradient-to-r from-tapa-600 to-tapa-500 rounded-md shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
						<div class="relative bg-tapa-800 shadow-lg rounded-lg h-full">
							<div class="flex flex-col justify-center items-center ">
								<div class="relative">
									<img src="../assets/images/svg/Wave1.svg" alt="Wave1.svg" class="absolute bottom-0 -mb-1">
									<img src="../assets/images/projects/aratna/aratna1.jpg" alt="aratna1.jpg" class="rounded-t-lg">
								</div>
								<div class="flex items-center pt-1 px-5 space-x-3">
									<img class="h-5 w-5" src="../assets/images/skills/laravel.svg" title="Laravel" alt="laravel.svg">
									<img class="h-5 w-5" src="../assets/images/skills/livewire.svg" title="Livewire" alt="livewire.svg">
									<img class="h-5 w-5" src="../assets/images/skills/mysql.svg" title="MySQL" alt="mysql.svg">
									<img class="h-5 w-5" src="../assets/images/skills/tailwind-css.svg" title="Tailwindcss" alt="tailwind-css.svg">
								</div>
								<h3 class="text-white pt-5 text-center">Aratna Travel & Tours</h3>
								<p class="text-tapa-200 text-sm p-5">
									Aratna Travel Management System is a web application that allows travel consultants to export sales reports, guest lists, and travel vouchers. It can also book a client, add tours, travel dates, guest lists, discounts, and user accounts.
								</p>
								<div class="flex flex-around items-centers gap-4 p-5">
									<ButtonLink link="https://youtu.be/4UkCxUGI8FU" target="__blank">
										<EyeIcon class="h-4 w-4"/>
									</ButtonLink>
								</div>
							</div>
						</div>
					</div>

					<div class="relative box">
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
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.box {
	opacity: 0;
	transform: translateY(100px);
}

@media (prefers-reduced-motion: no-preference) {
	.box {
		transition: opacity 1.5s ease, transform 1.5s ease;
	}
}

.box-transition {
		opacity: 1;
		transform: none;
	}
</style>

<script>
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
		mounted() {
			const boxes = document.querySelectorAll('.box');

			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					boxes.forEach((box, index) => {
						if(entry.isIntersecting) {
							box.classList.add('box-transition');
							return;
						}

						box.style.transitionDelay = (index * 0.2) +'s';
						box.classList.remove('box-transition');
					});
				});
			});

			observer.observe(document.querySelector('#project-boxes'));
		},
	}
</script>