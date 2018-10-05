<template>
	<div class="about">
		<div class="card border-info mb-3" style="max-width: 23rem;">
			<div class="card-header">About SimonRedd</div>
			<div class="card-body">
			<h4 class="card-title">Back-end technologies</h4>
				<p class="card-text"><a href="https://nodejs.org/en/">NodeJS</a></p>
				<p class="card-text"><a href="https://www.expressjs.com/">expressJS</a></p>
				<p class="card-text"><a href="https://www.mongodb.com/">MongoDB (NoSQL database)</a></p>
				<p class="card-text"><a href="https://www.npmjs.com/package/monk">monk (database ORM)</a></p>
				<p class="card-text"><a href="https://www.npmjs.com/package/joi">Joi (form validation)</a></p>
			</div>
		</div>

		<div class="card border-info mb-3" style="max-width: 23rem;">
			<div class="card-header">About SimonRedd</div>
			<div class="card-body">
				<h4 class="card-title">Front-end technologies</h4>
				<p class="card-text"><a href="https://vuejs.org/">VueJS</a></p>
				<p class="card-text"><a href="https://router.vuejs.org/">vue-router</a></p>
				<p class="card-text"><a href="https://bootswatch.com/">bootswatch</a></p>
			</div>
		</div>
		
	</div>
</template>


<script>
	export default {
		
	}
</script>

<style scoped>
.about {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
}
.about > div {
	margin: 5px;
	padding: 10px;
}
</style>