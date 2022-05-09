<template>
  <div>
<<<<<<< HEAD
  <homeWork name="kanon"></homeWork>
  </div>
</template>
<script>
  import x from './Components/home.vue';
export default {

  components:{
    'homeWork':x,

  }
=======
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
>>>>>>> 66988411abe060aa6d76921f015443dd05bd6af5
};
</script>

<style  scoped>
h1{
  color: aquamarine;
}
</style>