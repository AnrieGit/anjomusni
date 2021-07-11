<template>
	<div>
		<nav :class="[scrollPosition > 50 ? 'bg-tapa-800 shadow' : '', 'transition duration-300 ease-in-out']">
			<div class="px-10 xl:px-40 flex items-center justify-between p-7">
				<div class="logo">
					<a href="#home">
						<img class="h-6" src="../assets/images/logo/Anjo.svg" alt="anjo.svg">
					</a>
				</div>

				<ul class="flex justify-center sm:justify-start space-x-10">
					<li class="text-tapa-200 font-medium hover:text-orange-400">
						<a href="#skills">Skills</a>
					</li>
					<li class="text-tapa-200 font-medium hover:text-orange-400">
						<a href="#projects">Projects</a>
					</li>
					<li class="text-tapa-200 font-medium hover:text-orange-400">
						<a href="#about">About</a>
					</li>
					<li class="text-tapa-200 font-medium hover:text-orange-400">
						<a href="#contact">Contact</a>
					</li>
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
	import Button from '../components/Button'

	export default {
		name: 'Nav',
		components: {
			Button,
		},
		setup() {
			const scrollPosition = ref(0);

			return { scrollPosition };
		},
		mounted() {
			window.addEventListener('scroll', this.updateScrollPostion);
		},
		methods: {
			updateScrollPostion() {
				this.scrollPosition = window.scrollY;
			}
		},
	}
</script>