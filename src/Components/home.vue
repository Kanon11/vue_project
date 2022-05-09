<template>
  <div>
    <h1>powered by {{ name }}</h1>
    <hr />
    <child :name="n" :tec="Technology" :f="getDate"></child>
  </div>
</template>
<script>
import child from './Child.vue'
export default {
  name: "homeWork",
  components:{
    child:child,
  },
  props: {
    name: String,
  },
  data() {
    return {
      n:"kanon",
      Technology: ["c", "java", "php", "c#"],
    };
  },
  methods:{
    getDate(){
      alert("parent function called");
    }
  }
};
</script>

