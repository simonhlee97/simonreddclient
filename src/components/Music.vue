<template>
  <div>
	  <h3>Music</h3>
    <hr>
    <div class="list-unstyled" v-for="music in musics" :key="music._id">
      <li class="media">
        <img v-if="music.imageURL" class="mr-3" :src="music.imageURL" :alt="music.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">posted by: {{music.username}}</h4>
          <h5 class="mt-0 mb-1">topic: {{music.subject}}</h5>
          {{music.message}}
          <br />
          <small>{{music.created | date}}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
// const API_URL = "http://localhost:4000/music";
const API_URL = "https://infinite-meadow-59034.herokuapp.com/music";

 
export default {
  name: "Music",
  data: () => ({
    error: "",
    musics: []
  }),
 
  mounted() {
    fetch(API_URL)
	  .then(response => response.json())
		// .then(response => response.text())
		// .then(text => console.log(text))
		.then(result => {
			this.musics = result;
      });
  },
  methods: {}
};
</script>