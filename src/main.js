import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//Definition API
Vue.prototype.$api = axios.create({
  baseURL : 'https://allweb.fun/coop/api/',
  params : {
    test : 'true'
  },
  headers : {'Authorization':
        "42b8d844e77b64e8c66af14d06f75f1b8d39be38"}
});

Vue.prototype.$api.interceptors.request.use(function (config) {
  console.log(config);
  if(store.state.token) {
    config.params.token = store.state.token;
  }
  return config;
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
