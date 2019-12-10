import Vue from 'vue';
import {MediaQueries} from 'vue-media-queries';
import VueResource from 'vue-resource';
import App from './page/App.vue';
import VueRouter from "vue-router";
import Home from './page/AllPost';
import Register from './page/Register';
import VueRecaptcha from 'vue-recaptcha'
import Message from "./page/Message";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);
Vue.use(VueRouter);
Vue.use(VueRecaptcha);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue . http . options . emulateJSON = false;
Vue.config.productionTip = false;

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
Vue.component('tweet-component', {
  template: `  
    <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{tweet}}</strong> <small>{{tweet}}</small>
                <br>
                {{tweet}}
              </p>
            </div>
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                  <span class="likes">{{tweet}}</span>
                </a>
              </div>
          </div>
        </article>
      </div>
    </div> 
`,
  props: {
    tweet: Object
  }
});

