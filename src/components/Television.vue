<template>
  <div>
	  <h3>Television</h3>
    <hr>
    <div class="list-unstyled" v-for="television in televisions" :key="television._id">
      <li class="media">
        <img v-if="television.imageURL" class="mr-3" :src="television.imageURL" :alt="television.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">posted by: {{television.username}}</h4>
          <h5 class="mt-0 mb-1">{{television.subject}}</h5>
          {{television.message}}
          <br />
          <small>{{ television.created | date }}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
const API_URL = "http://localhost:4000/television";
 
export default {
  name: "Television",
  data: () => ({
    error: "",
    televisions: []
  }),
 
  mounted() {
    fetch(API_URL)
	  .then(response => response.json())
		// .then(response => response.text())
		// .then(text => console.log(text))
		.then(result => {
			this.televisions = result;
      });
  },
  methods: {
	  formatDate() {
		  var d = new Date;
		  var n = d.toDateString();
		  return n;
	  }
  }
};
</script>