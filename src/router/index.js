import { createRouter, createWebHistory } from "vue-router";
import Skills from "../views/Skills.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: Skills,
	},
	{
		path: "/skills",
		name: "skills",
		component: Skills,
	},
	{
		path: "/projects",
		name: "projects",
		component: Projects,
	},
	{
		path: "/about",
		name: "about",
		component: About,
	},
	{
		path: "/contact",
		name: "contact",
		component: Contact,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
			};
		}
	},
});

export default router;
