<template>
  <div>
	  <h3>Tech</h3>
    <hr>
    <div class="list-unstyled" v-for="tech in techs" :key="tech._id">
      <li class="media">
        <img v-if="tech.imageURL" class="mr-3" :src="tech.imageURL" :alt="tech.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">posted by: {{tech.username}}</h4>
          <h5 class="mt-0 mb-1">topic: {{tech.subject}}</h5>
          {{tech.message}}
          <br />
          <small>{{ tech.created | date }} </small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
// const API_URL = "http://localhost:4000/tech";
const API_URL = "https://infinite-meadow-59034.herokuapp.com/tech";
 
export default {
  name: "Tech",
  data: () => ({
    error: "",
    techs: []
  }),
 
  mounted() {
    fetch(API_URL)
		.then(response => response.json())
		.then(result => {
			this.techs = result;
      });
  },
  methods: {
	  
  }
};
</script>