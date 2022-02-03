import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins : [vuexLocal.plugin],
  state: {
    token : '',
    member : false,
    members : [],
    conversations : [],
    ready: false,
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setMember(state, member) {
      state.member = member
    },
    setMembers(state, members) {
      state.members = members
    },
    setConversations(state, conversation) {
      state.conversations = conversation
    },
    setReady(state, ready) {
      state.ready = ready
    }
  },
  getters : {
    getMember: (state) => (idMember) => {
      return state.members.find(member => member.id ===
      idMember)
    }
  },
  actions: {
  },
  modules: {
  }
})
