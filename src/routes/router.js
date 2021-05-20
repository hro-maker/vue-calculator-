// import Vue from 'vue'
import VueRouter from "vue-router";
import Calculator from '../components/HelloWorld.vue'
// Vue.use(VueRouter)
const router= new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/calculator',
            component:Calculator
        }
    ]
})
export default router