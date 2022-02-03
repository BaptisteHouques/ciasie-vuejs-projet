<template>
  <div>
    <h1>Liste des membres</h1>
    <div v-for="member in $store.state.members">
        <p>
          <router-link :to="{name:'MemberProfil', params:{idMember:member.id}}">
            {{member.fullname}} :
            {{member.email}}
          </router-link>
          <button v-if="member.id !== $store.state.member.id" @click="deleteMember(member.id)">x</button>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberList",
  methods : {
    deleteMember(id) {
      if(confirm("Voulais-vous vraiment supprimer ce membre?")) {
        this.$api.delete(`members/${id}`).then(response => {
          this.$api.get('members').then(response => {
            this.$store.commit("setMembers", response.data)
          })
        })
      }
    }
  },
}
</script>

<style scoped>

</style>
