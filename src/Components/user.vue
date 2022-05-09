<template>
<div class="user">
    <h1>Name: {{user.name}}</h1>
    <h2>Email: {{user.email}}</h2>
    <button @click="getUsername(user.name)">User name get</button>
    <br>
</div>
</template>
<script>
export default{
    name:'UserComponent',
    props:{
        user:Object,
        getUsername:Function,
    }
}
</script>

<style scoped>
.user{
    background-color: blueviolet;
}
</style>