<template>
  <div id="app">
    <template v-if="this.$store.state.ready">
      <div id="nav" v-if="this.$store.state.ready">
        <router-link to="/">Conversations</router-link> |
        <router-link to="/member-list">Liste Membres</router-link> |
        <button @click="logout">Déconnexion</button>
      </div>
      <h2>Coop</h2>
      <router-view />
    </template>
    <template v-else>
      Chargement en cour ...
    </template>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    this.$store.commit("setReady", false);

    if(!this.$store.state.token) {
      this.seConnecter();
    } else {
      this.$api
          .get(`members/${this.$store.state.member.id}/signedin`)
          .then(this.demarrer)
          .catch(this.seConnecter);
    }
  },

  methods : {
    logout() {
      this.$api.delete('members/signout');
      this.$store.commit('setToken', '');
      this.$store.commit('setMember', false);
      this.$router.push("/connexion");
    },
    demarrer() {
      this.$api.get('members').then((response) => {
        this.$store.commit("setMembers", response.data);
        this.ready();
      })
      this.$api.get('channels').then((response) => {
        this.$store.commit("setConversations", response.data);
        this.ready();
      })
    },
    seConnecter() {
      this.ready();
      this.$store.commit('setToken', false);
      this.$router.push("/connexion");
    },
    ready() {
      this.$store.commit("setReady", true);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
