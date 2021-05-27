<template>
	<div>
		<ul class="flex justify-center sm:justify-start space-x-5 border-b border-tapa-200">
			<router-link to="/" v-slot="{ href, navigate, isActive }" custom>
				<a class="pb-5 pt-5 text-tapa-700 font-medium" 
					:href="href" 
					@click="navigate" 
					:class="[isActive ? 'font-bold border-b-4 border-tapa-400' : '']"
				>
					Skills
				</a>
			</router-link>
			<router-link to="/projects" v-slot="{ href, navigate, isActive }" custom>
				<a class="pb-5 pt-5 text-tapa-700 font-medium" 
					:href="href" 
					@click="navigate" 
					:class="[isActive ? 'font-bold border-b-4 border-tapa-400' : '']"
				>
					Projects
				</a>
			</router-link>
			<router-link to="/about" v-slot="{ href, navigate, isActive }" custom>
				<a class="pb-5 pt-5 text-tapa-700 font-medium" 
					:href="href" 
					@click="navigate" 
					:class="[isActive ? 'font-bold border-b-4 border-tapa-400' : '']"
				>
					About
				</a>
			</router-link>
			<router-link to="/contact" v-slot="{ href, navigate, isActive }" custom>
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
	export default {
		name: 'Nav'
	}
</script>