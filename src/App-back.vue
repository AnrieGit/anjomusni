<template>
	<div class="min-h-screen">
		<!-- Alert -->
		<Alert :show="show_alert" :message="message" :status="status" />

		<!-- Header -->
		<Header />

		<div class="grid grid-cols-1 justify-items-center">

			<div class="w-full sm:w-3/4 max-w-7xl px-5 ms:px-0 -mt-40 z-10">
				<div class="grid sm:grid-cols-2 bg-white shadow-md rounded-t-md justify-items-center">
					<!-- Image -->
					<div class="sm:pl-5 sm:pb-5 sm:mr-auto">
						<img src="./assets/images/pic.jpg" alt="pic" class="-mt-24 rounded-full border-4 border-white h-48">
					</div>

					<!-- Icons -->
					<div class="p-5 sm:ml-auto">
						<div class="flex space-x-5">
							<a href="mailto:350anviera195@gmail.com" class="no-underline">
								<MailIcon class="h-7 w-7 text-tapa-700 hover:text-tapa-500 cursor-pointer" />
							</a>
							<a href="https://github.com/AnrieGit" class="no-underline" target="_blank">
								<GithubIcon class="h-7 w-7 text-tapa-700 hover:text-tapa-500 cursor-pointer" />
							</a>
						</div>
					</div>

					<!-- Name -->
					<div class="sm:col-span-2 px-5 pb-5 text-center sm:text-left sm:mr-auto text-tapa-700">
						<h2 class="font-medium">Hi, I am Anjo Musni</h2>
						<p class="font-medium">Web Developer</p>
					</div>

				</div>

				<!-- Nav -->
				<div id="top"></div>
				<div class="sticky top-0 bg-white px-5 pb-5 rounded-b-md z-50">
					<Nav />
				</div>

				<!-- Content -->
				<div class="sm:px-5 pb-5">
					<router-view @show-alert="showAlert" />
				</div>
			</div>

			<!-- Footer -->
			<Footer />
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'

import { MailIcon } from '@heroicons/vue/outline'
import GithubIcon from './components/icons/GithubIcon'

import Alert from './components/Alert'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: 'Home',
  components: {
    MailIcon,
    GithubIcon,
		Alert,
    Header,
    Nav,
    Footer,
	},
	emits: ['show-alert'],
	setup() {
		const show_alert = ref(false)
		const message = ref('')
		const status = ref(null)

		return { 
			show_alert,
			message,
			status,
		}
	},
	methods: {
		showAlert(response) {
			this.show_alert = true;
			this.message = response.message
			this.status = response.status

			setTimeout(()=>{ this.show_alert = false }, 3000)
		}
	}
}
</script>

<style>
#app {
	font-family: Quicksand, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	background-color: #f2f1f0;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%23484441' fill-opacity='0.03'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
