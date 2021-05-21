import axios from 'axios'
export const Authmodule={
    state:()=>({
        loading:false,
        user:null,
        error:null
    }),
    actions:{
       async login({commit},user){
                 await axios.post('https://eccomers-rest-server.herokuapp.com/api',user).then((res)=>{
                     console.log(res.data)
                     commit("loginsucces",res.data)
                 }) 
                  
        }
    },
    mutations:{
        loginsucces(state,user){
                    state.user=user
        }
    }
}