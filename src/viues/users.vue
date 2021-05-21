<template>
  <div>
    dsjf
    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
      <div v-for="user in allusers" v-bind:key="user.id">
        <v-card color="deep-purple darken-4">
          <router-link :to="'/user/' + user.id">
            {{ user.username }}</router-link
          >
        </v-card>
      </div>
    </v-card>

    <button styles="{backdoundColor:black}" v-on:click="logusers">hello</button>
  </div>
</template>
<script>
export default {
  name: "users",
  methods: {
    logusers() {
      console.log(this.allusers);
    },
  },

  computed: {
    allusers: function () {
      return this.$store.getters.alluser;
    },
  },
};
</script>