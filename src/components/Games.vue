<template>
  <div>
	  <h3>Games</h3>
    <hr>
    <div class="list-unstyled" v-for="game in games" :key="game._id">
      <li class="media">
        <img v-if="game.imageURL" class="mr-3" :src="game.imageURL" :alt="game.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">posted by: {{game.username}}</h4>
          <h5 class="mt-0 mb-1">topic: {{game.subject}}</h5>
          {{game.message}}
          <br />
          <small>{{game.created | date}}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
// const API_URL = "http://localhost:4000/games";
const API_URL = "https://infinite-meadow-59034.herokuapp.com/games";

 
export default {
  name: "Games",
  data: () => ({
    error: "",
    games: []
  }),
 
  mounted() {
    fetch(API_URL)
	  .then(response => response.json())
		// .then(response => response.text())
		// .then(text => console.log(text))
		.then(result => {
			this.games = result;
      });
  },
  methods: {}
};
</script>