<template>
  <div id="app">
    <el-container class="main">
      <el-header></el-header>
      <el-main class="m_padding">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<style lang="scss">
.main {
  .el-header {
    height: 75px !important;
    background: url("../../assets/imgs/logo.png") no-repeat;
    background-color: #263556;
    background-position: 20px 10px;
  }
}
</style>
