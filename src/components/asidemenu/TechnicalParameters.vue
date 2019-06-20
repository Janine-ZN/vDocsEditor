<template>
  <div class="content">
    <div class="main_content">
      <div class="con_nav">{{ menu }} > {{ submenu }}</div>
      <div class="con_main">
        <div class="con_title">{{ submenu }}</div>
        <div class="con_content">
          <!-- 代码区 -->
          <div v-html="content"></div>
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
      info: "",
      content: "",
      menu: "产品简介",
      submenu: "技术参数"
    };
  },
  mounted() {
    // this.pageScroll;
    document.documentElement.scrollTop = 0;
    this.$axios
      .post("http://10.0.2.226:3000/editor/article", {
        menu: this.menu,
        submenu: this.submenu
      })
      .then(response => {
        this.info = response;
        console.log(this.info.data);
        if (this.info.data.length) {
          console.log("获取文章内容");
          this.content = this.info.data[0].content;
        } else {
          console.log("该文章还未发布");
          this.content = "该文章还未发布";
        }
      });
  }
};
</script>

<style scoped>
@import "../../assets/css/content.css";
</style>
