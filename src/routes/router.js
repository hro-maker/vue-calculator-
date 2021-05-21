// import Vue from 'vue'
import VueRouter from "vue-router";
import Calculator from '../components/HelloWorld.vue'
import Homepage from '../viues/homepage.vue'
// Vue.use(VueRouter)
const router= new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/calculator',
            component:Calculator
        },
        {
            path:'/',
            component:Homepage
        },
         {
            path:'/users',
            component:()=>{return import('../viues/users.vue')}
        },
        {
            path:'/user/:id',
            component:()=>{return import('../viues/user.vue')}
        },

    ]
})
export default router