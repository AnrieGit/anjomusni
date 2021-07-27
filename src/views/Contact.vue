<template>
	<div class="relative flex justify-center bg-tapa-900">
		<div id="contact" class="absolute px-10 -mt-60 xl:px-40">
			<div class="overflow-hidden bg-tapa-700 font-medium shadow rounded-lg">
				<div class="px-10 py-10 xl:px-40">
					<div class="text-center text-orange-400">
						<h1>Get in Touch</h1>
					</div>
				</div>
				<div class="py-10 px-10 md:px-20 lg:px-28">
					<form @submit.prevent="submit" method="POST">
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

							<div class="sm:col-span-1">
								<label for="name" class="block font-medium text-tapa-200">Name</label>
								<div class="mt-1">
									<Input v-model="name" name="name" type="text" required/>
								</div>
							</div>

							<div class="sm:col-span-1">
								<label for="email" class="block font-medium text-tapa-200">Email</label>
								<div class="mt-1">
									<Input v-model="email" name="email" type="email" required />
								</div>
							</div>

							<div class="sm:col-span-2">
								<label for="message" class="block font-medium text-tapa-200">Message</label>
								<div class="mt-1">
									<TextArea v-model="message" name="message" rows="5" required />
								</div>
							</div>

						</div>
						<div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4 justify-content-center items-center mt-4">	
							<!-- <div class="mx-auto lg:mx-0 g-recaptcha" data-sitekey="6LdWQvsaAAAAAHg2tFbb_Ye2ydCGOj8wJUu_Aj0V" data-callback="captchaCallBack"></div> -->
							<vueRecaptcha class="mx-auto lg:mx-0" ref="vueRecaptcha" siteKey="6LdWQvsaAAAAAHg2tFbb_Ye2ydCGOj8wJUu_Aj0V" @verify="recaptchaVerified" @expire="recaptchaExpired" />
							<Button :loading="loading" class="lg:ml-auto" name="send" type="submit">
								<LoadingIcon v-if="loading" />
								<PaperAirplaneIcon v-else class="h-5 w-5 mr-2 transform rotate-45" />
								Send
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>

		<Footer />
	</div>
</template>

<script>
import { ref } from 'vue'
import emailjs from 'emailjs-com'
import vueRecaptcha from 'vue3-recaptcha2';

import { PaperAirplaneIcon } from '@heroicons/vue/outline'
import LoadingIcon from '../components/icons/LoadingIcon'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import Footer from '../components/Footer'

export default {
	name: 'Contact',
	components: {
		vueRecaptcha,
		PaperAirplaneIcon,
		LoadingIcon,
		Input,
		TextArea,
		Button,
		Footer,
	},
	setup() {
		const name = ref('')
		const email = ref('')
		const message = ref('')
		const loading = ref(false)
		const captcha = ref(false)

		return { 
			name,
			email,
			message,
			loading,
			captcha,
		}
	},
	// mounted() {
	// 	let recaptchaScript = document.createElement('script')
    //   recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    //   document.head.appendChild(recaptchaScript)
	// },
	methods: {
		recaptchaVerified(response) {
			this.captcha = true
		},
		recaptchaExpired() {
			this.$refs.vueRecaptcha.reset();
		},
		sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms))
		},
		submit(e) {

			if(this.name != '' && this.email != '' && this.message != '') {
				if(this.captcha) {
					this.loading = true 

					emailjs.sendForm('contact_service', 'portfolio_contact_form', e.target, 'user_yb649EsgU2C7s0gMllsBm')
					.then(res => {
						if(res.status == 200) {
							this.loading = false;
							this.captcha = false;
							this.recaptchaExpired()

							this.name = ''
							this.email = ''
							this.message = ''

							this.$router.push('contact')
						}
					})
				}
			}
		}
	}
}
</script>