<template>
  <div class="content">
    <div class="main_content">
      <div class="con_nav">安装引导 > 硬件交付</div>
      <div class="con_main">
        <div class="con_title">硬件交付</div>
        <div class="con_content">
          <!-- 代码区 -->
          输入 安装引导 > 硬件交付 的代码
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
