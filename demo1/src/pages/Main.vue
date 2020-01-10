<template>
    <div class="pgc-wrapper">
      <Header/>
      <div class="pgc-content">
        <Menu/>
        <div class="garr-panel">
          <div class="garr-container">
              <router-view/>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Header from '@/components/header/Header'
import Menu from '@/components/content/left/Menu'
export default {
  name: 'Main',
  components: {
    Header, Menu
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.pgc-wrapper {
  position: relative;
  padding: 80px 0 0;
  min-height: 100vh;
  display: flex;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-direction: column;
  flex-direction: column;
}
.pgc-content {
  margin: 0 auto;
  width: 1180px;
}
.garr-panel {
  margin-left: 200px;
  position: relative;
}
.garr-container {
  vertical-align: top;
  width: 980px;
  margin: auto;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
}
</style>
