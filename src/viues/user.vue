<template>
     <v-card
    class=" mx-auto"
    margin-left="200"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
     
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:"user",
    data() {
        return {
            user:{}
        }
    },
   methods: {
        ...mapGetters(['getbyid'])
   },
   mounted() {
      const id=this.$router.history.current.params.id
       this.user=this.$store.state.users.find(el=>el.id==id)
       console.log("ssssssss",this.user)
   },
}
</script>