import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from './components/Home';
import Create from "./components/Create";
import Movies from "./components/Movies";
import Sports from "./components/Sports";
import Tech from "./components/Tech";
import Games from "./components/Games";
import About from "./components/About";
import Television from "./components/Television";
import Music from "./components/Music";
import Jokes from "./components/Jokes";

import DateFilter from './filters/date';
Vue.filter('date', DateFilter);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
	{ path: "/", component: Home, name: 'Home' },
	{ path: "/about", component: About },
	{ path: "/create", component: Create },
	{ path: "/movies", component: Movies },
	{ path: "/sports", component: Sports },
	{ path: "/tech", component: Tech },
	{ path: "/games", component: Games },
	{ path: "/jokes", component: Jokes },
	{ path: "/television", component: Television },
	{ path: "/music", component: Music}
];
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
