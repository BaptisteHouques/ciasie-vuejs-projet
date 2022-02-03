import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Conversations',
    component: () => import('../views/Conversations')
  },
  {
    path: '/creation-compte',
    name: 'CreationCompte',
    component: () => import('../views/CreationCompte')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import('../views/Connexion')
  },
  {
    path: '/member-list',
    name: 'MemberList',
    component: () => import('../views/MemberList')
  },
  {
    path: '/post-conversation',
    name: 'PostConversation',
    component: () => import('../views/PostConversation')
  },
  {
    path: '/member-profil/:idMember',
    name: 'MemberProfil',
    component: () => import('../views/MemberProfil')
  },
  {
    path: '/conversation/:idConversation',
    name: 'Conversation',
    component: () => import('../views/Conversation')
  },
  {
    path: '/post-message',
    name: 'ConversationPost',
    component: () => import('../views/Conversation')
  },
]

const router = new VueRouter({
  mode : 'history',
  base : process.env.BASE_URL,
  routes
})

export default router
