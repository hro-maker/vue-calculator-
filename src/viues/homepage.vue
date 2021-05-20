<template>
  <div class="hr">
    <form v-on:submit.prevent="hello">
      <input v-model="email" type="text" />
      <input v-model="password" type="password" />
      <button type="submit">login</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Homepage",
  data() {
      return {
          email:this.$store.state.count,
          password:""
      }
  },
  methods: {
    hello() {
      this.$store.commit('increment')
    },
  },
  watch:{
      email:function(){
          this.email=this.$store.state.count
      }
  }
};
</script>