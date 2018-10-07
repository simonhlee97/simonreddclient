<template>
	<div class="hello">
		<h4>{{ msg }}</h4>
		<router-link id="postbtn" to="/create" class="btn btn-danger">Post</router-link>
	</div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#postbtn {
	margin: 2em 0;
}

</style>
