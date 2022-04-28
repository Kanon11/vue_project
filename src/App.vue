<template>
  <div>
  <app-head></app-head>
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <app-foot></app-foot>
  </div>
</template>
<script>
  import VueProjectHeader from './Components/Header_Footer/header.vue';
  import VueProjectFooter from './Components/Header_Footer/footer.vue';
export default {

  data() {
    return {
      name: "kanon",
      age: 29,
    };
  },
  components:{
    'app-head':VueProjectHeader,
    'app-foot':VueProjectFooter

  }
};
</script>

<style  scoped>
</style>