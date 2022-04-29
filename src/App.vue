<template>
  <div>
    <VueProjectHeader></VueProjectHeader>
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <VueProjectFooter></VueProjectFooter>
  </div>
</template>
<script>
import VueProjectFooter from "./Components/Header_Footer/footer.vue";
import  VueProjectHeader  from './Components/Header_Footer/header.vue'
export default {
  data() {
    return {
      name: "kanon",
      age: 29,
    };
  },
  components: {
    VueProjectFooter,
    VueProjectHeader
  },
};
</script>

<style  scoped>
h1{
  color: aquamarine;
}
</style>