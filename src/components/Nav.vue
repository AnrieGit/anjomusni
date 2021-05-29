<template>
	<div>
		<ul class="flex justify-center sm:justify-start space-x-5 border-b border-tapa-200">
			<router-link :to="{ name: 'home'}" v-slot="{ href, navigate, isActive }" custom>
				<a class="pb-5 pt-5 text-tapa-700 font-medium" 
					:href="href" 
					@click="navigate" 
					:class="[isActive ? 'font-bold border-b-4 border-tapa-400' : '']"
				>
					Home
				</a>
			</router-link>
			<router-link :to="{ name: 'skills'}" v-slot="{ href, navigate, isActive }" custom>
				<a class="pb-5 pt-5 text-tapa-700 font-medium" 
					:href="href" 
					@click="navigate" 
					:class="[isActive ? 'font-bold border-b-4 border-tapa-400' : '']"
				>
					Skills
				</a>
			</router-link>
			<router-link :to="{ name: 'projects'}" v-slot="{ href, navigate, isActive }" custom>
				<a class="pb-5 pt-5 text-tapa-700 font-medium" 
					:href="href" 
					@click="navigate" 
					:class="[isActive ? 'font-bold border-b-4 border-tapa-400' : '']"
				>
					Projects
				</a>
			</router-link>
			<router-link :to="{ name: 'about'}" v-slot="{ href, navigate, isActive }" custom>
				<a class="pb-5 pt-5 text-tapa-700 font-medium" 
					:href="href" 
					@click="navigate" 
					:class="[isActive ? 'font-bold border-b-4 border-tapa-400' : '']"
				>
					About
				</a>
			</router-link>
			<router-link :to="{ name: 'contact'}" v-slot="{ href, navigate, isActive }" custom>
				<a class="pb-5 pt-5 text-tapa-700 font-medium" 
					:href="href" 
					@click="navigate" 
					:class="[isActive ? 'font-bold border-b-4 border-tapa-400' : '']"
				>
					Contact
				</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import Button from '../components/Button'

	export default {
		name: 'Nav',
		components: {
			Button,
		}
	}
</script>