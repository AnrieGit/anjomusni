<template>
	<div>
		<div class="px-10 lg:px-40 pt-40 pb-40 bg-tapa-800 bg-profile bg-no-repeat bg-center shadow-lg">
			<div class="flex justify-center space-x-0 lg:space-x-40 items-center">
				<!-- <img src="../assets/images/svg/profile.svg" class="hidden lg:block w-80" alt="profile.svg"> -->
				<div class="flex flex-col justify-center gap-10 items-center">
					<div class="relative border-2 border-orange-400 rounded-full">
						<!-- <div class="absolute h-44 w-44 top-0 -left-5 bg-orange-300 rounded-full opacity-70 filter blur-lg animate-blob"></div>
						<div class="absolute h-44 w-44 top-0 -right-5 bg-orange-300 rounded-full opacity-70 filter blur-lg animate-blob animation-delay-2s"></div>
						<div class="absolute h-44 w-44 -bottom-5 -left-2 bg-tapa-300 rounded-full opacity-70 filter blur-lg animate-blob animation-delay-4s"></div> -->
						<img class="relative rounded-full w-40 h-40" src="../assets/images/pic.jpg" alt="pic.jpg">
					</div>
					
					<div class="text-white max-w-2xl">
						<div>
							<div class="flex items-center">
								<span class="text-bold text-2xl"><span class="text-orange-400">Anjo</span> Musni</span>
								<a href="mailto:anjomusni@gmail.com">
									<MailIcon class="h-6 w-6 ml-5 text-orange-400"/>
								</a>
								<a href="https://github.com/AnrieGit" target="__blank">
									<img src="../assets/images/skills/github.svg" alt="github.svg" class="h-6 w-6 ml-3 text-white">
								</a>
							</div>
							<div class="text-sm text-tapa-400">
								Web Developer
							</div>
						</div>
						<div class="text-tapa-200 mt-10">
							<div class="mb-3">I'm a web developer living in Novaliches, Quezon City, Philippines.</div>
							<div class="mb-3">I worked as an I.T staff for 4 years and was given a duty to make web applications and websites for the company. I've learned a lot of things along the way not only in web development but also in computer and network troubleshooting and computer software and hardware installation.</div>
							<div>I am really interested, and truly enjoy coding and building different web applications and websites usually with PHP, Laravel, Vuejs, and MySQL.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { MailIcon } from '@heroicons/vue/outline'

export default {
	name: 'About',
	components: {
		MailIcon,
	}
}
</script>