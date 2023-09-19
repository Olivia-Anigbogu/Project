import Vue from 'vue'
import App from './App.vue'
import './assets/css/style-freedom.css'
import router from './router'

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
// library.add(faPhone)
// library.add(fas);
// library.add(far);
// library.add(fab);

// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
