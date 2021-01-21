<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.clearfix {
  clear: both;
}
.clearfix::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  line-height: 0;
  overflow: hidden;
}
#app {
  height: 100%;
}
</style>
