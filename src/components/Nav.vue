<template>
	<div @click="this.open = false" 
		class="fixed top-0 w-full h-screen bg-tapa-900 opacity-70 overflow-hidden z-20"
		:class="{'hidden': open === false}"
	></div>
	<nav :class="[scrollPosition > 50 ? 'bg-tapa-800 shadow' : '', 'fixed w-full z-10 transition-all duration-300 ease-in-out']">
		<div :class="[scrollPosition >= 50 ? 'h-20' : 'h-24', 'px-10 xl:px-40 flex items-center transition-all duration-300 ease-in-out']">
			<div class="logo">
				<a href="#home">
					<img src="../assets/images/logo/Logo.svg" class="h-16 w-16" alt="Logo.svg">
				</a>
			</div>

			<!-- Menu Icon -->
			<div class="block lg:hidden ml-auto z-30">
				<div class="px-5">
					<MenuIcon v-show="!open" @click="openSideBar" class="h-7 w-7 text-tapa-200 hover:text-orange-400 cursor-pointer"/>
				</div>
			</div>

			<div class="hidden lg:block ml-auto">
				<ul class="flex items-center justify-center space-x-10 text-tapa-200 px-5">
					<li class="links skills"><a href="#skills" class="font-medium hover:text-orange-400">Skills</a></li>
					<li class="links projects"><a href="#projects" class="font-medium hover:text-orange-400">Projects</a></li>
					<li class="links about"><a href="#about" class="font-medium hover:text-orange-400">About</a></li>
					<li class="links contact"><a href="#contact" class="font-medium hover:text-orange-400">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="fixed z-30">
		<!-- Sidebar -->
		<div class="absolute h-screen inset-0 transform duration-200 w-80 bg-orange-400 text-tapa-800" 
			:class="{'translate-x-0 ease-in': open === true, '-translate-x-full ease-out': open === false}"
		>
			<div class="py-5">
				<div class="flex items-center px-5">
					<a href="#home">
						<img src="../assets/images/logo/Logo-tapa.svg" class="h-16 w-16" alt="Logo-tapa.svg">
					</a>
					<button @click="this.openSideBar" type="button" class="transform duration-300 hover:scale-125 rounded-md p-2 ml-auto">
						<ChevronLeftIcon class="h-7 w-7" />
					</button>
				</div>
				
				<ul class="mt-8 px-2 font-medium text-lg">
					<li>
						<a href="#skills" @click="open = false" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
							Skills
						</a>
					</li>
					<li>
						<a href="#projects" @click="open = false" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
							Projects
						</a>
					</li>
					<li>
						<a href="#about" @click="open = false" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
							About
						</a>
					</li>
					<li>
						<a href="#contact" @click="open = false" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
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