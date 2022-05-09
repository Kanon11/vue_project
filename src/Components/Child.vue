<template>
  <h1>{{ name }}</h1>
  <hr />
  <ul>
    <li v-for="item in tec" :key="item">
      {{ item }}
    </li>
  </ul>
  <hr>
  <button @click="f()">call</button>
</template>
<script>
export default {
  name: "ChildComponent",
  props: {
    name: String,
    tec: [],
    f:Function
  },
};
</script>