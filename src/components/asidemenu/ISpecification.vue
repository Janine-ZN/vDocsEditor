<template>
  <div class="content">
    <div class="main_content">
      <div class="con_nav">产品简介 > 产品规格</div>
      <div class="con_main">
        <div class="con_title">产品规格</div>
        <div class="con_content">
          <!-- 代码区 -->
          请输入 产品简介 > 产品规格 的代码
          <!-- 代码区 -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgURL: "http://localhost:80"
    };
  },
  mounted() {
    // this.pageScroll;
    document.documentElement.scrollTop = 0;
  }
};
</script>
<style scoped>
@import "../../assets/css/content.css";
</style>
