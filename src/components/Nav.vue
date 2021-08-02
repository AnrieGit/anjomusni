<template>
	<div>
		<nav :class="[scrollPosition > 50 ? 'bg-tapa-800 shadow' : '', 'transition duration-300 ease-in-out']">
			<!-- Sidebar -->
			<div class="absolute h-screen z-20 inset-0 transform duration-200 w-80 bg-orange-400 text-tapa-800" 
				:class="{'translate-x-0 ease-in': this.open === true, '-translate-x-full ease-out': this.open === false}"
			>
				<div class="py-5">
					<div class="flex item-center justify-between px-5">
						<span class="text-tapa-800 font-bold text-3xl">
							ANjo
						</span>
						<button @click="this.openSideBar" type="button" class="focus:outline-none hover:bg-tapa-800 hover:text-orange-400 rounded-md p-2">
							<ChevronLeftIcon class="h-7 w-7" />
						</button>
					</div>
					
					<ul class="mt-8 px-2 font-medium text-lg">
						<li>
							<a href="#skills" @click="this.open = false" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
								Skills
							</a>
						</li>
						<li>
							<a href="#projects" @click="this.open = false" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
								Projects
							</a>
						</li>
						<li>
							<a href="#about" @click="this.open = false" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
								About
							</a>
						</li>
						<li>
							<a href="#contact" @click="this.open = false" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="px-10 xl:px-40 flex items-center py-7">
				<!-- Menu Icon -->
				<div class="block lg:hidden">
					<MenuIcon @click="this.openSideBar" class="h-7 w-7 text-tapa-200 hover:text-orange-400 cursor-pointer"/>
				</div>
				
				<div class="logo pl-10 lg:pl-0">
					<a href="#home" class="text-orange-400 font-bold text-3xl">ANjo</a>
				</div>

				<div class="hidden lg:block ml-auto">
					<ul class="flex items-center justify-center space-x-10 text-tapa-200">
						<li class="links skills"><a href="#skills" class="font-medium hover:text-orange-400">Skills</a></li>
						<li class="links projects"><a href="#projects" class="font-medium hover:text-orange-400">Projects</a></li>
						<li class="links about"><a href="#about" class="font-medium hover:text-orange-400">About</a></li>
						<li class="links contact"><a href="#contact" class="font-medium hover:text-orange-400">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	import { ref } from 'vue'
	import { MenuIcon, ChevronLeftIcon, } from '@heroicons/vue/solid'
	import Button from '../components/Button'

	export default {
		name: 'Nav',
		components: {
			MenuIcon,
			ChevronLeftIcon,
			Button,
		},
		setup() {
			const scrollPosition = ref(0);
			const open = ref(false);

			return { scrollPosition, open };
		},
		mounted() {
			window.addEventListener('scroll', this.updateScrollPostion);
		},
		methods: {
			updateScrollPostion() {
				this.scrollPosition = window.scrollY;
			},

			openSideBar() {
				this.open = !this.open
			}
		},
	}
</script>