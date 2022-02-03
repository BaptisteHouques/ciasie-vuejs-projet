<template>
  <div>
    <h1>Créer un compte</h1>
    <form @submit.prevent="validation">
      <div>
        <input type="text" required placeholder="nom prénom" v-model="fullname" />
      </div>
      <div>
        <input type="email" required placeholder="Email" v-model="email" />
      </div>
      <div>
        <input type="password" required placeholder="Mot de passe" v-model="password" />
      </div>
      <button>Valider</button>
      <p><router-link to="connexion">Aller à la page de connexion</router-link></p>
      <p></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreationCompte",
  data() {
    return {
      fullname : "Baptiste Houques",
      email : "baptistehouques38@gmail.com",
      password : "test"
    }
  },
  methods : {
    validation() {
      let donnees = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
      };
      this.$api
        .post('members', donnees)
        .then((response) => {
          alert("Votre compte a été créé, vous pouvez vous connecter");
          this.$router.push('/connexion');
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