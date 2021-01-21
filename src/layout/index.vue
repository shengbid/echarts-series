<template>
  <div class="common-layout">
    <div class="left-contianer">
      <SiderMeun></SiderMeun>
    </div>
    <div class="right-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SiderMeun from './menu'

export default {
  components: { SiderMeun }
}
</script>

<style lang="less">
.common-layout {
  height: 100%;
  display: flex;
  .left-contianer {
    flex-basis: 220px;
    height: 100%;
  }
  .right-container {
    flex: 1;
    padding: 20px;
    max-height: 100%;
    overflow-y: scroll;
  }
}
</style>