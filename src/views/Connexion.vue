<template>
  <div>
    <h1>Se Connecter</h1>
    <form @submit.prevent="validation">
      <div>
        <input type="email" required placeholder="Email" v-model="email" />
      </div>
      <div>
        <input type="password" required placeholder="Mot de passe" v-model="password" />
      </div>
      <button>Valider</button>
      <p><router-link to="creation-compte">Suivez ce lien pour créer votre compte</router-link></p>
    </form>
  </div>
</template>

<script>
export default {
    name: "Connexion",
    data() {
      return {
        email : "baptistehouques38@gmail.com",
        password : "test"
      };
    },
    methods : {
      validation() {
        let donnees = {
          email: this.email,
          password: this.password,
        };
        this.$api
            .post('members/signin', donnees)
            .then((response) => {
              this.$store.commit('setToken', response.data.token);
              this.$store.commit('setMember', response.data.member);
              this.$router.push("/");
            })
            .catch((error) => {
              alert(error.response.data.message);
            });
      },
    },
  };
</script>

<style scoped>

</style>