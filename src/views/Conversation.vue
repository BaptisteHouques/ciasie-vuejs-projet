<template>
  <section>
    <div v-if="conversation">
      <p><u>Label</u> : {{conversation.label}}</p>
      <p><u>Topic</u> : {{conversation.topic}}</p>
      <p>Messages :</p>
      <div v-for="message in messages">
        <Message :message=message />
      </div>
    </div>
    <h1>Poster un message</h1>
    <form @submit.prevent="validation">
      <div>
        <input type="text" required v-model="postMessage"/>
      </div>
      <button>Valider</button>
    </form>
  </section>
</template>

<script>
import Message from "../components/Message";
export default {
  name: "Conversation",
  components: {Message},
  data() {
    return {
      conversation: false,
      messages: [],
      postMessage: "",
    };
  },
  mounted() {
    this.chargerConversation();
  },
  methods : {
    chargerConversation() {
      let id = this.$route.params.idConversation;
      this.$api.get(`channels/${id}`).then((response) => {
        this.conversation = response.data;
        this.chargerMessages();
      })
    },
    chargerMessages() {
      this.$api
          .get(`channels/${this.conversation.id}/posts`)
          .then((response) => {
            this.messages = response.data
          });
    },

    validation() {
      let donnees = {
        message: this.postMessage,
      };
      this.$api
          .post(`channels/${this.$route.params.idConversation}/posts`, donnees)
          .then(response => {this.$router.go();})
          .catch((error) => {
            alert(error.response.data.message);
          });
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 50px;
}
</style>
