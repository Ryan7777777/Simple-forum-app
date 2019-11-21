import Vue from 'vue';
import App from './page/App.vue';
import VueRouter from "vue-router";
import Home from './page/AllPost.vue';
import Register from './page/Register.vue';
import VueRecaptcha from 'vue-recaptcha'
Vue.use(VueRouter);
Vue.use(VueRecaptcha);
const routes = [{
  path : "/",
  component : Home
},
  {
    path: "/newuser",
    component: Register
  }
];
const router = new VueRouter ({
  routes : routes,
  mode : 'history'
});
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
