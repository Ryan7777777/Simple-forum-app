import Vue from 'vue';
import App from './page/App.vue';
import VueRouter from "vue-router";
import Home from './page/AllPost';
import Register from './page/Register';
import VueRecaptcha from 'vue-recaptcha'
import Message from "./page/Message";
Vue.use(VueRouter);
Vue.use(VueRecaptcha);
const routes = [{
  path : "/",
  component : Home
},
  {
    path: "/newuser",
    component: Register
  },
  {
    path:"/message",
    component: Message
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
