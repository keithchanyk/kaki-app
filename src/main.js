import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/main.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLock, faLink, faUserSecret,faShare, faEnvelope } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret, faLock, faLink, faShare, faEnvelope)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

