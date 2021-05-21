import axios from 'axios'

export const usersmodeule={
    state:()=>({
            users:null
    }),
    actions:{
      async  getusers({commit}){
            await axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
                commit("changeusers",res.data)
            })
        }
    },
    mutations:{
        changeusers(state,users){
                state.users=users
        }
    },
    getters:{
         alluser(state){
             return state.users
         }   
    }
}