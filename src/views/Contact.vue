<template>
	<div class="pt-5">
		<div class="pb-5">
			<transition appear name="contact">
				<div class="relative overflow-hidden font-medium bg-white shadow-md rounded-md">
					<img class="absolute transform rotate-180" src="../assets/images/background/wave.svg" alt="wave.png">
					<h2 class="relative text-tapa-700 text-center py-5 sm:pt-10 px-5 z-10">
						Get In Touch
					</h2>
					<div class="relative py-10 px-10 md:px-20 lg:px-28">
						<form @submit.prevent="submit" method="POST">
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

								<div class="sm:col-span-1">
									<label for="name" class="block font-medium text-tapa-700">Name</label>
									<div class="mt-1">
										<Input v-model="name" name="name" type="text" autofocus required/>
									</div>
								</div>

								<div class="sm:col-span-1">
									<label for="email" class="block font-medium text-tapa-700">Email</label>
									<div class="mt-1">
										<Input v-model="email" name="email" type="email" required />
									</div>
								</div>

								<div class="sm:col-span-2">
									<label for="message" class="block font-medium text-tapa-700">Message</label>
									<div class="mt-1">
										<TextArea v-model="message" name="message" rows="10" required />
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
			</transition>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
import emailjs from 'emailjs-com'
import vueRecaptcha from 'vue3-recaptcha2';

import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'

import { PaperAirplaneIcon } from '@heroicons/vue/outline'
import LoadingIcon from '../components/icons/LoadingIcon'

export default {
		name: 'Contact',
		components: {
			vueRecaptcha,
			Input,
			TextArea,
			Button,
			PaperAirplaneIcon,
			LoadingIcon,
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

								const message = 'Message Sent.'
								this.$emit('show-alert', {message: message, status: 'success'})

								this.$router.push('contact')
							} else {
								const message = res.text
								this.$emit('show-alert', {message: message, status: 'error'})
							}
						})

					} else {
						const message = 'Don\'t forget to tick the reCaptcha.'
						this.$emit('show-alert', {message: message, status: 'error'})
					}

				} else {
					const message = 'Name, Email, and Message are required.'
					this.$emit('show-alert', {message: message, status: 'error'})
				}
				
			}
		}
}
</script>

<style scoped>
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