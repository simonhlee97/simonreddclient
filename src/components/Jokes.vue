<template>
  <div>
	  <h3>Jokes</h3>
    <hr>
    <div class="list-unstyled" v-for="joke in jokes" :key="joke._id">
      <li class="media">
        <img v-if="joke.imageURL" class="mr-3" :src="joke.imageURL" :alt="joke.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">posted by: {{joke.username}}</h4>
          <h5 class="mt-0 mb-1">topic: {{joke.subject}}</h5>
          {{joke.message}}
          <br />
          <small>{{joke.created | date}}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
// const API_URL = "http://localhost:4000/jokes";
const API_URL = "https://infinite-meadow-59034.herokuapp.com/jokes";

 
export default {
  name: "Jokes",
  data: () => ({
    error: "",
    jokes: []
  }),
 
  mounted() {
    fetch(API_URL)
	  .then(response => response.json())
		// .then(response => response.text())
		// .then(text => console.log(text))
		.then(result => {
			this.jokes = result;
      });
  },
  methods: {}
};
</script>