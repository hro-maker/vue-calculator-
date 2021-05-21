import Vue from 'vue'
import Vuex from 'vuex'
import {Authmodule} from './authmodule'
import {usersmodeule} from './users'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    auth:Authmodule,
    users:usersmodeule
  }
})
export default store