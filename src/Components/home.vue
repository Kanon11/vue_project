<template>
<h1>HOme</h1><hr>
<input type="text" ref="first"><br>
<button v-on:click="getData">Click</button>
</template>
<script>


export default {
  name: "homeWork",
  methods:{
    getData(){
      this.$refs.first.focus();
      let value=this.$refs.first.value;
      console.warn(value);
      this.$refs.first.style.color="red";
    }
  }
};
</script>

