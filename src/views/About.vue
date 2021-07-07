<template>
	<div class="pt-5">

		<div class="text-center pb-5">
			<transition appear name="about" mode="in-out">
				<div class="relative overflow-hidden bg-white font-medium text-tapa-500 text-left text-lg rounded-md shadow-md">
					<div class="absolute -mt-14 bg-tapa-900 p-16 w-full transform skew-y-3 bg-gradient-to-r from-tapa-500 to-tapa-700"></div>
					<div class="py-28 px-10 md:px-20 lg:px-40">
						<h2 class="text-center text-tapa-700 pb-10 px-10">
							About Me
						</h2>
						I'm a self-taught web developer with experience in making web applications using HTML, CSS, PHP, MySQL, and Javascript.
					</div>
					<div class="absolute -mt-14 bg-tapa-900 p-16 w-full transform skew-y-3 bg-gradient-to-r from-tapa-500 to-tapa-700"></div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'About',
	}
</script>

<style scoped>
.about-enter-from,
.about-leave-to {
	opacity: 0;
	transform: translateY(-100px);
}
.about-enter-active,
.about-leave-active {
	transition: all 0.5s ease;
}
</style>