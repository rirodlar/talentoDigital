import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
//import { firebaseConfig } from "./config/configFirebase"; //exportando la variable del archivo de configuracion de firebase
//import firebase from 'firebase';
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios)

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';





// import firebase from 'firebase/app';
// import 'firebase/firestore';

window.$ = window.jQuery = require('jquery')

Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2);

// var firebaseConfig = {
//   apiKey: "AIzaSyCSiofhZsROTy4QvJWJy2SfnZSdnW7uT9g",
//   authDomain: "inventario-otto-klaus.firebaseapp.com",
//   projectId: "inventario-otto-klaus",
//   storageBucket: "inventario-otto-klaus.appspot.com",
//   messagingSenderId: "811527286812",
//   appId: "1:811527286812:web:51bad05b73d6f113912fd9"
// };



// inicializando Firebase
//firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
