<template>
  <div v-for="user in users" :key="user.name">
    <user :user="user" :getUsername="getUsername"></user>
  </div>
</template>
<script>
import user from "./user.vue";

export default {
  name: "homeWork",
  components: {
    user: user,
  },
  data() {
    return {
      users: [
        { name: "kanon", email: "kanon@gmail.com" },
        { name: "mukti", email: "mukti@gmail.com" },
        { name: "kpol", email: "kpol@gmail.com" },
      ],
    };
  },
  methods:{
    getUsername(name){
      alert(name);
    }
  }
};
</script>

