<template>
  <div>
    <hr>
    <div class="list-unstyled" v-for="message in messages" :key="message._id">
      <li class="media">
        <img v-if="message.imageURL" class="mr-3" :src="message.imageURL" :alt="message.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">posted by: {{message.username}}</h4>
          <h5 class="mt-0 mb-1">topic: {{message.subject}}</h5>
          	{{message.message}}
          <br />
          <small>{{ message.created | date }}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>
 
<script>
// const API_URL = "http://localhost:4000/messages";
const API_URL = "https://infinite-meadow-59034.herokuapp.com/messages";
 
export default {
  name: "Home",
  data: () => ({
    error: "",
    messages: []
  }),
 
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
		this.messages = result;
      });
  },
  methods: {
  }
};
</script>
 
<style>
img {
  max-width: 300px;
  height: auto;
}
</style>
