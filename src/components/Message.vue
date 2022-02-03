<template>
    <div>
      <div v-if="!edition">
        <button id="delete" v-if="message.member_id === $store.state.member.id" @click="deleteMessage(message.id)">x</button>
        <router-link :to="{name:'MemberProfil', params:{idMember:message.member_id}}">
          {{message.member_id}} :
        </router-link>
        <span v-html="message.message"></span>
        <button id="edit" v-if="message.member_id === $store.state.member.id" @click="editMessage(message.id)">✎</button>
      </div>
      <div v-else>
        <form @submit.prevent="modification(message.id)">
            <input type="text" required v-model="newMessage"/>
          <button>Valider</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: "Message",
  props : ["message"],
  data() {
    return {
      edition : false,
      newMessage: "",
    }
  },
  methods : {
    deleteMessage(id) {
      if(confirm("Voulais-vous vraiment supprimer ce message?")) {
        this.$api
            .delete(`channels/${this.message.channel_id}/posts/${id}`)
            .then(response => {
              this.$router.go();
            })
      }
    },
    editMessage(id) {
      this.edition = true
    },
    modification(id) {
      let donnees = {
        message: this.newMessage,
      };
      this.$api
          .put(`channels/${this.$route.params.idConversation}/posts/${id}`, donnees)
          .then(response => {this.$router.go();})
          .catch((error) => {
            alert(error.response.data.message);
          });
    },
  }
}
</script>

<style scoped>
button {
  border: 2px solid black;
  border-radius: 5px;
}
#delete {
  background-color: darkred;
}
#edit {
  background-color: darkgreen;
}
div {
  margin-bottom: 20px;
}
</style>
