<template id="template-home">
<div>
    <div v-for="n in 10">div</div>
    <div class="key" v-for="(n,key) in 10">{{key}}</div>
</div>
</template>

<script type='text/ecmascript-6'>
export default {}
</script>

<style>
body{
    color: red;
    background-color: black;
}
    .key{
        color: yellowgreen;
    }

</style>