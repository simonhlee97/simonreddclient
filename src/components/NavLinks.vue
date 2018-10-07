<template>
	<div class="margin">
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/movies">Movies</router-link></li>
			<li><router-link to="/music">Music</router-link></li>
			<li><router-link to="/television">Television</router-link></li>
			<li><router-link to="/sports">Sports</router-link></li>
			<li><router-link to="/tech">Tech</router-link></li>
			<li><router-link to="/games">Games</router-link></li>
			<li><router-link to="/jokes">Funny/Jokes</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'NavLinks'
	}
</script>

<style scoped>
.links{
	margin: 3em 0;
}
</style>