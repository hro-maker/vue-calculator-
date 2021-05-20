<template>
  <div>
    <div class="wraper">
      <div class="black_board">{{ count }}</div>
      <div class="subwraper">
        <div v-on:click="resetnuber" class="item">C</div>
        <div v-on:click="plyusminus" class="item">+/-</div>
        <div v-on:click="persent" class="item">%</div>
        <div v-on:click="divaite" class="item">/</div>
        <div v-on:click="addnumber(7)" class="item">7</div>
        <div v-on:click="addnumber(8)" class="item">8</div>
        <div v-on:click="addnumber(9)" class="item">9</div>
        <div v-on:click="time" class="item">x</div>
        <div v-on:click="addnumber(4)" class="item">4</div>
        <div v-on:click="addnumber(5)" class="item">5</div>
        <div v-on:click="addnumber(6)" class="item">6</div>
        <div v-on:click="minus" class="item">-</div>
        <div v-on:click="addnumber(1)" class="item">1</div>
        <div v-on:click="addnumber(2)" class="item">2</div>
        <div v-on:click="addnumber(3)" class="item">3</div>
        <div v-on:click="pluse" class="item">+</div>
        <div v-on:click="addnumber(0)" class="item big_item">0</div>
        <div v-on:click="dote" class="item">.</div>
        <div v-on:click="equal" class="item">=</div>
      </div>
      <div class="condition" v-if="prevvale" >{{prevvale}} {{oper}} ?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      count: "0",
      operator: null,
      prevvale: null,
      oper: null,
    };
  },
  methods: {
    addnumber(num) {
      if (this.count == "0") {
        this.count = num.toString();
      } else {
        this.count += num;
      }
    },
    resetnuber() {
      this.count = "0";
      this.operator = null;
      this.prevvale = null;
    },
    plyusminus() {
      if (this.count !== "0") {
        this.count = `${this.count * -1}`;
      }
    },
    persent() {
      this.count = `${parseFloat(this.count) / 100}`;
    },
    dote() {
      if (!this.count.includes(".")) {
        this.count += ".";
      }
    },
    pluse() {
      if (this.count !== "0") {
        this.operator = (a, b) => parseFloat(a) + parseFloat(b);
        this.prevvale = this.count;
        this.count = "0";
        this.oper = "+";
      }
    },
    minus() {
      if (this.count !== "0") {
        this.operator = (a, b) => parseFloat(a) - parseFloat(b);
        this.prevvale = this.count;
        this.count = "0";
        this.oper = "-";
      }
    },
    time() {
      if (this.count !== "0") {
        this.operator = (a, b) => parseFloat(a) * parseFloat(b);
        this.prevvale = this.count;
        this.count = "0";
        this.oper = "*";
      }
    },
    divaite() {
      if (this.count !== "0") {
        this.operator = (a, b) => parseFloat(a) / parseFloat(b);
        this.prevvale = this.count;
        this.count = "0";
        this.oper = "/";
      }
    },
    equal() {
      if (this.prevvale) {
        this.count = `${this.operator(this.prevvale, this.count)}`;
        this.prevvale = null;
        this.operator = null;
        this.oper = null;
      } else {
        this.count = "0";
        this.prevvale = null;
        this.operator = null;
        this.oper = null;
      }
    },
  },
};
</script>


<style scoped lang="scss">
.wraper {
  width: 30%;
  min-height: 40%;
  margin: 100px auto;
}
.black_board {
  width: 100%;
  height: 30px;
  font-size: 40px;
  padding: 10px 0;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.subwraper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}
.item {
  background-color: rgb(236, 78, 15);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  padding: 5px;
  margin: 2px;
  cursor: pointer;
}
.big_item {
  grid-column: 1 / 3;
}
.condition {
  color: black;
  font-size: 30px;
}
</style>
