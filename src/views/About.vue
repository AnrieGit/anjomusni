<template>
	<div class="w-full pt-5">
		<h2 class="text-white bg-tapa-900 rounded-md p-5 bg-gradient-to-r from-tapa-500 to-tapa-700">
				About Me
		</h2>

		<div class="sm:px-5 text-center py-5">
			<transition appear name="about">
				<div class="p-10 bg-white font-medium text-left text-lg rounded-md shadow-md">
						I'm a self-taught web developer with 4 years of experience in making web applications using HTML, CSS, PHP, MySQL, and Javascript, I also have intermediate knowledge of computer troubleshooting and networking. After I graduated as an I.T student in college in 2016, I got a job right away as an I.T staff. I really have an interest and I truly enjoy web development, every day I spend my time learning and discover new technologies about web development from front end to back end. In January 2020 I decided to use Laravel, Laravel Livewire, and Vue JS in my future projects.
				</div>
			</transition>
			<small class="text-tapa-400">This is page is soon to be updated.</small>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'About',
	}
</script>

<style>
.about-enter-from,
.about-leave-to {
	opacity: 0;
	transform: translateX(200px);
}
.about-enter-active,
.about-leave-active {
	transition: all 0.5s ease;
}
</style>