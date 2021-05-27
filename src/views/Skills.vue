<template>
	<div class="w-full pt-5">
		<!-- HTML -->
		<h2 class="text-white bg-tapa-900 rounded-md p-5 bg-gradient-to-r from-tapa-500 to-tapa-700">HTML</h2>
		<transition-group appear tag="ul" name="html" class="flex flex-wrap justify-center lg:justify-start">
			<li v-for="(skill, index) in html" :key="index" class="grid grid-cols-1 justify-items-center p-5 w-32 lg:w-40">
				<img :src="skill.path" :alt="skill.image" class="max-h-16">
				<div class="mt-3 font-bold text-center text-tapa-500">
					{{ skill.name }}
				</div>
			</li>
		</transition-group>

		<!-- CSS -->
		<h2 class="text-white bg-tapa-900 rounded-md p-5 bg-gradient-to-r from-tapa-500 to-tapa-700">CSS</h2>
		<transition-group appear tag="ul" name="css" class="flex flex-wrap justify-center lg:justify-start">
			<li v-for="(skill, index) in css" :key="index" class="grid grid-cols-1 justify-items-center p-5 w-32 lg:w-40">
				<img :src="skill.path" :alt="skill.image" class="max-h-16">
				<div class="mt-3 font-bold text-center text-tapa-500">
					{{ skill.name }}
				</div>
			</li>
		</transition-group>

		<!-- Javascript -->
		<h2 class="text-white bg-tapa-900 rounded-md p-5 bg-gradient-to-r from-tapa-500 to-tapa-700">Javascript</h2>
		<transition-group appear tag="ul" name="javascript" class="flex flex-wrap justify-center lg:justify-start">
			<li v-for="(skill, index) in javascript" :key="index" class="grid grid-cols-1 justify-items-center p-5 w-32 lg:w-40">
				<img :src="skill.path" :alt="skill.image" class="max-h-16">
				<div class="mt-3 font-bold text-center text-tapa-500">
					{{ skill.name }}
				</div>
			</li>
		</transition-group>

		<!-- Backend -->
		<h2 class="text-white bg-tapa-900 rounded-md p-5 bg-gradient-to-r from-tapa-500 to-tapa-700">Backend</h2>
		<transition-group appear tag="ul" name="backend" class="flex flex-wrap justify-center lg:justify-start">
			<li v-for="(skill, index) in backend" :key="index" class="grid grid-cols-1 justify-items-center p-5 w-32 lg:w-40">
				<img :src="skill.path" :alt="skill.image" class="max-h-16">
				<div class="mt-3 font-bold text-center text-tapa-500">
					{{ skill.name }}
				</div>
			</li>
		</transition-group>

		<!-- Version Control -->
		<h2 class="text-white bg-tapa-900 rounded-md p-5 bg-gradient-to-r from-tapa-500 to-tapa-700">Version Control</h2>
		<transition-group appear tag="ul" name="versioncontrol" class="flex flex-wrap justify-center lg:justify-start">
			<li v-for="(skill, index) in versioncontrol" :key="index" class="grid grid-cols-1 justify-items-center p-5 w-32 lg:w-40">
				<img :src="skill.path" :alt="skill.image" class="max-h-16">
				<div class="mt-3 font-bold text-center text-tapa-500">
					{{ skill.name }}
				</div>
			</li>
		</transition-group>

		<!-- Others -->
		<h2 class="text-white bg-tapa-900 rounded-md p-5 bg-gradient-to-r from-tapa-500 to-tapa-700">Others</h2>
		<transition-group appear tag="ul" name="others" class="flex flex-wrap justify-center lg:justify-start">
			<li v-for="(skill, index) in others" :key="index" class="grid grid-cols-1 justify-items-center p-5 w-32 lg:w-40">
				<img :src="skill.path" :alt="skill.image" class="max-h-16">
				<div class="mt-3 font-bold text-center text-tapa-500">
					{{ skill.name }}
				</div>
			</li>
		</transition-group>
	</div>
</template>

<script>
	import { ref } from 'vue'

	export default {
		name: 'Skills',
		setup() {
			const html = ref([
				{
					name: 'HTML5',
					image: 'html5.png',
					path: require('../assets/images/skills/html/html5.png')
				},
				{
					name: 'Blade',
					image: 'blade.png',
					path: require('../assets/images/skills/html/blade.png')
				},
			])
			const css = ref([
				{
					name: 'CSS3',
					image: 'css3.png',
					path: require('../assets/images/skills/css/css3.png')
				},
				{
					name: 'Bootstrap',
					image: 'bootstrap.png',
					path: require('../assets/images/skills/css/bootstrap.png')
				},
				{
					name: 'Tailwindcss',
					image: 'tailwind-css.png',
					path: require('../assets/images/skills/css/tailwind-css.png')
				},
				{
					name: 'Materialize',
					image: 'materialize.png',
					path: require('../assets/images/skills/css/materialize.png')
				},
				{
					name: 'Sass',
					image: 'sass.png',
					path: require('../assets/images/skills/css/sass.png')
				},
			])
			const javascript = ref([
				{
					name: 'Vue',
					image: 'vuejs.png',
					path: require('../assets/images/skills/javascript/vuejs.png')
				},
				{
					name: 'Javascript',
					image: 'javascript.png',
					path: require('../assets/images/skills/javascript/javascript.png')
				},
				{
					name: 'Jquery',
					image: 'javascript.png',
					path: require('../assets/images/skills/javascript/jquery.png')
				},
				{
					name: 'Node',
					image: 'nodejs.png',
					path: require('../assets/images/skills/javascript/nodejs.png')
				},
			])
			const backend = ref([
				{
					name: 'PHP',
					image: 'php.png',
					path: require('../assets/images/skills/backend/php.png')
				},
				{
					name: 'Laravel',
					image: 'laravel.png',
					path: require('../assets/images/skills/backend/laravel.png')
				},
				{
					name: 'Livewire',
					image: 'livewire.png',
					path: require('../assets/images/skills/backend/livewire.png')
				},
				{
					name: 'MySQL',
					image: 'mysql.png',
					path: require('../assets/images/skills/backend/mysql.png')
				},
			])
			const versioncontrol = ref([
				{
					name: 'Git',
					image: 'git.png',
					path: require('../assets/images/skills/versioncontrol/git.png')
				},
				{
					name: 'Github',
					image: 'github.png',
					path: require('../assets/images/skills/versioncontrol/github.png')
				},
				{
					name: 'Bitbucket',
					image: 'bitbucket.png',
					path: require('../assets/images/skills/versioncontrol/bitbucket.png')
				},
			])
			const others = ref([
				{
					name: 'Heroku',
					image: 'heroku.png',
					path: require('../assets/images/skills/others/heroku.png')
				},
				{
					name: 'Photoshop',
					image: 'photoshop.png',
					path: require('../assets/images/skills/others/photoshop.png')
				},
				{
					name: 'Sony Vegas',
					image: 'sony-vegas.png',
					path: require('../assets/images/skills/others/sony-vegas.png')
				},
				{
					name: 'Filmora',
					image: 'filmora.png',
					path: require('../assets/images/skills/others/filmora.png')
				},
			])

			return { html, css, javascript, backend, versioncontrol, others }
		}
	}
</script>

<style>
	.html-enter-from,
	.html-leave-to,
	.css-enter-from,
	.css-leave-to,
	.javascript-enter-from,
	.javascript-leave-to,
	.backend-enter-from,
	.backend-leave-to,
	.versioncontrol-enter-from,
	.versioncontrol-leave-to,
	.others-enter-from,
	.others-leave-to {
		opacity: 0;
		transform: scale(0.6);
	}
	.html-enter-active,
	.html-leave-active,
	.css-enter-active,
	.css-leave-active,
	.javascript-enter-active,
	.javascript-leave-active,
	.backend-enter-active,
	.backend-leave-active,
	.versioncontrol-enter-active,
	.versioncontrol-leave-active,
	.others-enter-active,
	.others-leave-active {
		transition: all 0.5s ease;
	}
</style>