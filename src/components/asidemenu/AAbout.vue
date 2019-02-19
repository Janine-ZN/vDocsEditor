<template>
  <div class="content">
    <div class="main_content">
      <div class="con_nav">安装引导 > 相关操作说明</div>
      <div class="con_main">
        <div class="con_title">相关操作说明</div>
        <div class="con_content">
          <!-- 代码区 -->
          输入 安装引导 > 相关操作说明 的代码
          <!-- 代码区 -->

          <!-- <h1>{{ primary_title }}</h1>
          <div v-for="item in paragraph">
            <p>{{ item.content }}</p>
            <img :src="imgsSrc + item.picture" alt="">
            <!-- <img :src="item.picture" alt=""> -->
            <!-- <img src="@/assets/imgs/2.png" alt=""> -->
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from "../../api/getdata.js";
export default {

  data(){
    return{
      imgURL: "http://localhost:80"
    }
  },
  mounted() {
    // this.pageScroll;
    document.documentElement.scrollTop = 0;
  }

  /* data() {
    return {
      primary_title: "",
      secondary_title: "",
      paragraph: [],
      imgsSrc:"http://localhost:80/vhelp/about/"
    };
  },
  methods: {
    HandleAjax: function() {
      login()
        .then(res => {
          var data = res.data;
          this.paragraph = data.paragraph;
          this.primary_title = data.primary_title;
          console.log(res.data.paragraph);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted: function() {
    this.HandleAjax();
  } */
};
</script>

<style scoped>
@import "../../assets/css/content.css";
</style>
