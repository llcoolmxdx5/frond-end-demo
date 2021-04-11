import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSlash,
  faUserCheck,
  faTrash,
  faComment,
  faUsers,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUsers)
library.add(faUser)
library.add(faUserSlash)
library.add(faUserCheck)
library.add(faTrash)
library.add(faComment)

Vue.component('font-awesome-icon', FontAwesomeIcon)