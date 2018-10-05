<template>
  <div id="app">
    <h1 class="text-danger">SIMONREDD</h1>
    <Title msg="Welcome to SimonRedd, a mini-Reddit clone"/>
	<NavLinks />
	<div class="paddings"></div>
	<transition name="slide" mode="out-in">
		<router-view></router-view>
	</transition>
	<Footer />
	
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Footer from './components/Footer.vue'
import NavLinks from './components/NavLinks.vue'




export default {
  name: 'app',
  components: {
    Title, Footer, NavLinks
  }
}
</script>

<style>
/* @import "https://bootswatch.com/4/sketchy/bootstrap.min.css";
@import "https://bootswatch.com/4/lux/bootstrap.min.css"; */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 6em;
  min-height: 100vh;
}
h3 {
  margin: 50px auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.paddings {
	height: 1em;
}

.slide-enter-active {
	animation: slide-in 600ms ease-out forwards;
}
.slide-leave-active {
	animation: slide-out 600ms ease-out forwards;
}

	@keyframes slide-in {
		from {
			transform: translateX(-30px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes slide-out {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(-30px);
			opacity: 0;
		}
	}
</style>
