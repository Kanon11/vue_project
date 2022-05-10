<template>
  <h1>Parent component</h1><hr>
  <h1>ChilName : {{ChildName}}</h1>
  <cm :getUserName="getUserName"></cm>
  <hr />
</template>
<script>
import cm from "./Child.vue";
export default {
  name: "parentComponent",
  components: {
    cm: cm,
  },
  data(){
      return{
          ChildName:"",
      }
  },
  methods:{
      getUserName(n){
          this.ChildName=n;
      }
  }
};
</script>