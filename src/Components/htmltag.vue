<template>
    <div v-html="tag"></div>
</template>
<script>
export default{
    name:"htmlTag",
    data(){
        return{
            tag:"<span>kanon</span>"
        }
    }
}
</script>
