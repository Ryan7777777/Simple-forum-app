import Vue from 'vue';
import {MediaQueries} from 'vue-media-queries';
import App from './page/App.vue';
import VueRouter from "vue-router";
import Home from './page/AllPost';
import Register from './page/Register';
import VueRecaptcha from 'vue-recaptcha'
import Message from "./page/Message";
const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);
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
  mediaQueries: mediaQueries,
  render: h => h(App)
});

