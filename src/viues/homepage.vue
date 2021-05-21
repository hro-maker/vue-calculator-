<template>
  <div class="homepage">
    <form class="form" v-on:submit.prevent="onSubmit">
      <input placeholder="email" class="for_item" v-model="email" type="text" />
      <input
        placeholder="password"
        class="for_item"
        v-model="password"
        type="password"
      />
      <button style="cursor: pointer" class="for_item" type="submit">
        login
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Homepage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.homepage {
  min-width: 100vw;
  min-height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
}
.for_item {
  width: 200px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 20px;
  background-color: black;
  color: white;
  border: 2px solid white;
  box-shadow: 2px 2px 10px 9px yellow;
}
</style>