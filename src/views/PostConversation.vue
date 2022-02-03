<template>
  <div>
    <h1>Poster une conversation</h1>
    <form @submit.prevent="validation">
      <div>
        <input type="text" required placeholder="Sujet" v-model="label"/>
      </div>
      <div>
        <input type="text" required v-model="topic"/>
      </div>
      <button>Valider</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "postConversation",
  data() {
    return {
      label: "",
      topic: ""
    };
  },
  methods : {
    validation() {
      let donnees = {
        label: this.label,
        topic: this.topic
      };
      this.$api
          .post('channels', donnees)
          .then(response => window.location.href = '../')
          .catch((error) => {
            alert(error.response.data.message);
          });
    },
  }
}
</script>

<style scoped>

</style>