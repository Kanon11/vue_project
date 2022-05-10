<template>
  <h1>child</h1>
  <button  v-on:click="getUserName(name)">click</button>
</template>
<script>
export default {
  name: "ChildComponent",
  data(){
    return{
      name:"Accelaration"
    }
  },
  props:{
    getUserName:Function
  }
};
</script>