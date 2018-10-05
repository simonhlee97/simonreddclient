<template>
<div>
	
	<h3>Links, Resources</h3>

	<ul>
		<li><router-link to="/about">About</router-link></li>
		<li><a href="https://simonhlee97.github.io/" target="_blank" rel="noopener">Simon Lee</a></li>
		<li><a href="https://www.bootswatch.com/" target="_blank" rel="noopener">Bootswatch</a></li>
		<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">VueJS News</a></li>
	</ul>
	<p>Last Modified on: {{ date() }}</p>
	<p>Try out more Bootswatch Themes below</p>
	<form>
		<li><input type="submit" class="btn btn-success" onclick="switch_style('blue');return false;" name="theme" value="Lux" id="blue"></li>
		<li><input type="submit" class="btn btn-warning" onclick="switch_style('pink');return false;" name="theme" value="Sketchy" id="pink"></li>
		<li><input type="submit" class="btn btn-info" onclick="switch_style('cyborg');return false;" name="theme" value="Cyborg" id="cyborg"></li>
		<li><input type="submit" class="btn btn-primary" onclick="switch_style('journal');return false;" name="theme" value="Pulse" id="journal"></li>
		<li><input type="submit" class="btn btn-danger" onclick="switch_style('flatly');return false;" name="theme" value="Flatly" id="flatly"></li>
		<li><input type="submit" class="btn btn-secondary" onclick="switch_style('minty');return false;" name="theme" value="Minty" id="minty"></li>

	</form>
</div>
</template>

<script>
	export default {
		name: 'Footer',
		methods: {
			date: function() {
				return document.lastModified
			}
		},
		
	}
</script>

<style scoped>

</style>