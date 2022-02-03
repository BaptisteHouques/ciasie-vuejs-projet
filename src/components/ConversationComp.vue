<template>
  <div>
    <router-link :to="{name:'Conversation', params:{idConversation:conversation.id}}">
      {{conversation.label}} :
      {{conversation.topic}}
    </router-link>
    <button @click="deleteConv(conversation.id)">x</button>
  </div>
</template>

<script>
export default {
  name: "Conversation",
  props : ["conversation"],
  methods : {
    deleteConv(id) {
      if(confirm("Voulais-vous vraiment supprimer cette conversation?")) {
        this.$api
            .delete(`channels/${id}`)
            .then(response => {this.$router.go();})
      }
    }
  }
}
</script>

<style scoped>
div {
  margin-top: 20px;
}
</style>