<template>
  <div>
	  <h3>Movies</h3>
    <hr>
    <div class="list-unstyled" v-for="movie in movies" :key="movie._id">
      <li class="media">
        <img v-if="movie.imageURL" class="mr-3" :src="movie.imageURL" :alt="movie.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">posted by: {{movie.username}}</h4>
          <h5 class="mt-0 mb-1">topic: {{movie.subject}}</h5>
          {{movie.message}}
          <br />
          <small>{{ movie.created | date}}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
// const API_URL = "http://localhost:4000/movies";
const API_URL = "https://infinite-meadow-59034.herokuapp.com/movies";

 
export default {
  name: "Movies",
  data: () => ({
    error: "",
    movies: []
  }),
 
  mounted() {
    fetch(API_URL)
	  .then(response => response.json())
		// .then(response => response.text())
		// .then(text => console.log(text))
		.then(result => {
			this.movies = result;
      });
  },
  methods: {
	  
  }
};
</script>