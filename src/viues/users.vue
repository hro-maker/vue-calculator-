<template>
  <div>dsjf
       <button v-on:click="logusers">hello</button>
  </div>
 
</template>
<script>
export default {
  name: "users",
  methods: {
      logusers(){
          console.log(this.allusers)
      }
  },
  mounted() {
    this.$store.dispatch("getusers")
  },
  computed: {
    allusers: function () {
      return this.$store.getters.alluser;
    },
  },
};
</script>