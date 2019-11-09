import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {store} from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert.vue'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
   created () {
     firebase.initializeApp({
     apiKey: 'AIzaSyA-Y7sjR9t9B4ztACOSWCAc6SQsqIYZJks',
     authDomain: 'meetup-bils.firebaseapp.com',
     databaseURL: 'https://meetup-bils.firebaseio.com',
     projectId:'meetup-bils',
     storageBucket: 'meetup-bils.appspot.com',
     messagingSenderId: '62673188495',
     appId: '1:62673188495:web:91c4b748814a9210eca2fa',
     measurementId: 'G-5ZTY4WPDKK'
     })
   }
}).$mount('#app')
