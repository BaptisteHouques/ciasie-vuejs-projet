<template>
  <div>
    <h1>Conversations</h1>
    <p>
      Connecté en tant que
      <b>{{$store.state.member.fullname}}</b>
    </p>
    <button><router-link to="post-conversation">Créer une conversation</router-link></button>
    <div v-for="conversation in $store.state.conversations">
      <ConversationComp :conversation="conversation" />
    </div>
  </div>
</template>

<script>
import ConversationComp from "../components/ConversationComp";
export default {
  name: "Conversations",
  components: {ConversationComp},
  mounted() {
    this.$api
        .get('channels')
    .then((response) => {
      this.conversations = response.data;
    })
  },
}
</script>

<style scoped>

</style>
