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
						<router-link @click="this.open = false" :to="{ name: 'skills' }" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
							Skills
						</router-link>
						<router-link @click="this.open = false" :to="{ name: 'projects' }" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
							Projects
						</router-link>
						<router-link @click="this.open = false" :to="{ name: 'about' }" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
							About
						</router-link>
						<router-link @click="this.open = false" :to="{ name: 'contact' }" class="block py-2 px-4 hover:bg-tapa-800 hover:text-orange-400 rounded-md cursor-pointer">
							Contact
						</router-link>
					</ul>
				</div>
			</div>

			<div class="px-10 xl:px-40 flex items-center py-7 relative">
				<!-- Menu -->
				<div class="block lg:hidden">
					<MenuIcon @click="this.openSideBar" class="h-7 w-7 text-tapa-200 hover:text-orange-400 cursor-pointer"/>
				</div>
				
				<div class="logo pl-10 lg:pl-0">
					<router-link :to="{ name: 'home' }" v-slot="{ href, navigate }" custom>
						<a :href="href" 
							@click="navigate"
							class="text-orange-400 font-bold text-3xl"
						>
							ANjo
						</a>
					</router-link>
				</div>

				<ul class="flex justify-center sm:justify-start space-x-10 hidden lg:block ml-auto text-tapa-200 ">
					<router-link :to="{ name: 'skills' }" v-slot="{ href, navigate, isActive }" custom>
						<a class="font-medium hover:text-orange-400" 
							:href="href" 
							@click="navigate"
							:class="[isActive ? 'text-orange-400' : '']"
						>
							Skills
						</a>
					</router-link>
					<router-link :to="{ name: 'projects' }" v-slot="{ href, navigate, isActive }" custom>
						<a class="font-medium hover:text-orange-400" 
							:href="href" 
							@click="navigate"
							:class="[isActive ? 'text-orange-400' : '']"
						>
							Project
						</a>
					</router-link>
					<router-link :to="{ name: 'about' }" v-slot="{ href, navigate, isActive }" custom>
						<a class="font-medium hover:text-orange-400" 
							:href="href" 
							@click="navigate"
							:class="[isActive ? 'text-orange-400' : '']"
						>
							About
						</a>
					</router-link>
					<router-link :to="{ name: 'contact' }" v-slot="{ href, navigate, isActive }" custom>
						<a class="font-medium hover:text-orange-400" 
							:href="href" 
							@click="navigate"
							:class="[isActive ? 'text-orange-400' : '']"
						>
							Contact
						</a>
					</router-link>
					<!-- <router-link :to="{ name: 'home'}" v-slot="{ href, navigate, isActive }" custom>
						<a class="pb-5 pt-5 text-tapa-100 font-medium" 
							:href="href" 
							@click="navigate" 
							:class="[isActive ? 'font-bold border-b-4 border-tapa-400' : '']"
						>
							Home
						</a>
					</router-link> -->
				</ul>
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