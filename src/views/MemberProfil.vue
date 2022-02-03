<template>
  <section>
      <div v-if="member">
        <p><u>Nom</u> : {{member.fullname}}</p>
        <p><u>Email</u> : {{member.email}}</p>
      </div>
      <h1 v-else>L'utilisateur n'existe pas ou a été supprimé</h1>
  </section>
</template>

<script>
export default {
  name: "MemberProfil",
  data() {
    return {
      idMember: this.$route.params.idMember,
      member : false,
      exist: false,
    };
  },
  mounted() {
    this.$api
        .get('members')
        .then((response) => {
          this.member = response.data.find(el => el.id === this.idMember);
        })
  },
}
</script>

<style scoped>

</style>
