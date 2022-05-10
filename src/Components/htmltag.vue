<template>
  <h1 v-html="tag" :class="change()"></h1>
  <div :class="change()">kanon</div>
  <button v-on:click="truFalse()">change</button>
</template>
<script>
export default {
  name: "htmlTag",
  data() {
    return {
      tag: "<span>kanon</span>",
      colorfull: true,
    };
  },
  methods: {
    truFalse() {
      this.colorfull = !this.colorfull;
    },
    change() {
      return {
        green: this.colorfull,
        red: true,
      };
    },
  },
};
</script>

<style scoped>
.green {
  background-color: blueviolet;
}
.red {
  color: rgb(22, 151, 80);
}
</style>
