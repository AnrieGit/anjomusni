<template>
	<div class="w-full pt-5">
		<h2 class="text-white bg-tapa-900 rounded-md p-5 bg-gradient-to-r from-tapa-500 to-tapa-700">
			Contact
		</h2>

		<div class="sm:px-5 py-5 text-center">
			<transition appear name="contact">
				<div class="p-5 sm:p-40 font-medium bg-white text-center text-tapa-700 rounded-md">
					<span class="text-tapa-400">Feel free to email me at</span> 
					<p>350anviera195@gmail.com</p>
				</div>
			</transition>
			<small class="text-tapa-400">This is page is soon to be updated.</small>
		</div>
	</div>
</template>

<script>
	export default {
			name: 'Contact',
	}
</script>

<style>
.contact-enter-from,
.contact-leave-to {
	opacity: 0;
	transform: translateX(-200px);
}
.contact-enter-active,
.contact-leave-active {
	transition: all 0.5s ease;
}
</style>