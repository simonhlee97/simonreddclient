<template>
  <div>
	  <h3>Sports</h3>
    <hr>
    <div class="list-unstyled" v-for="sport in sports" :key="sport._id">
      <li class="media">
        <img v-if="sport.imageURL" class="mr-3" :src="sport.imageURL" :alt="sport.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">posted by: {{sport.username}}</h4>
          <h5 class="mt-0 mb-1">topic: {{sport.subject}}</h5>
          {{sport.message}}
          <br />
          <small>{{sport.created | date}}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
// const API_URL = "http://localhost:4000/sports";
const API_URL = "https://infinite-meadow-59034.herokuapp.com/sports";
export default {
  name: "Sports",
  data: () => ({
    error: "",
    sports: []
  }),
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.sports = result;
      });
  },
  methods: {}
};
</script>
