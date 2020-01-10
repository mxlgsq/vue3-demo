<template>
  <div id="root">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
    background-color: #f8f8f8;
    font-family: apple-system, BlinkMacSystemFont, "SF Pro SC", "SF Pro Text", "Helvetica Neue", Helvetica, "PingFang SC", "Segoe UI", Roboto, "Hiragino Sans GB", 'arial', "Microsoft YaHei", SimSun, sans-serif;
    overflow-y: auto;
    width: 100%;
}
#root {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  padding-left: calc(100vw - 100%)
}
a {
    background-color: transparent;
    text-decoration: none;
}
</style>
