<template>
  <div class="form-wrap">
    <form @submit.prevent="addMessage" class="mb-3">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{error}}</p>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="message.username"
          type="text"
          class="form-control"
          id="username" placeholder="Your username" required>
      </div>

	<div class="form-group">
		<label for="subject">Topic</label>
		<select class="custom-select" v-model="message.subject" id="subject" required>
			<option value="" selected disabled hidden>Choose Topic</option>
			<option value="movies">Movies</option>
			<option value="music">Music</option>
			<option value="television">Television</option>
			<option value="sports">Sports</option>
			<option value="tech">Tech</option>
			<option value="games">Games</option>
			<option value="jokes">Funny/Jokes</option>
		</select>
	</div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          v-model="message.message"
          class="form-control"
          id="message"
          rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="imageURL">Image URL</label>
        <input
          v-model="message.imageURL"
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Enter URL to an image">
      </div>
      <button type="submit" class="btn btn-primary">Post</button>
    </form>
    
  </div>
</template>
 
<script>
// const API_URL = "http://localhost:4000/messages";
const API_URL = "https://infinite-meadow-59034.herokuapp.com/messages";

 
export default {
  name: "Create",
  data: () => ({
    error: "",
    message: {
      username: "",
      subject: "",
      message: "",
	  imageURL: "",
    }
  }),
  computed: {
    // reversedMessages() {
    //   return this.messages.slice().reverse();
    // }
  },
  
  methods: {
    addMessage() {
    //   console.log(this.message);
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.message),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map(detail => detail.message)
              .join(". ");
            this.error = error;
          } else {
            this.error = "";
            this.showMessageForm = false;
			this.messages.push(result);
			
		  }
		//   this.$router.push('/')
		});
	
    }
  }
};
</script>
 
<style scoped>
.form-wrap {
	padding: 0 7em;
	margin-bottom: 4em;
}
</style>
