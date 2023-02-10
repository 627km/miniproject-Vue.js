<template>
    <header>
        <router-link to="/news">News</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/jobs">Jobs</router-link>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
body {font-family: 'Playfair Display', serif; font-size:18px; padding:0; margin:0;}
a {color: black;}
* {margin:0; padding:0}
li {list-style-type: none;}
p + p {margin-top:20px}
#app {padding:0 20px}
.content {padding:30px 20px}

header {
    position: relative;
    padding:20px 30px;
        margin-bottom:30px;
    background:black;
    font-size:24px;
    border-bottom:8px solid lime;
}
header h1 {position: absolute; color:white; top:21px; right:30px; font-size:18px;}
header a {color:white; text-decoration: none; padding-bottom:3px; }
header a + a {margin-left:20px}
header .router-link-active {
    color:coral;
    border-bottom:3px solid coral
}
</style>