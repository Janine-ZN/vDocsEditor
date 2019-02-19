<template>
  <div>
    <header>
      <div class="search">
        <img src="@/assets/imgs/search_title.png" alt>
        <input type="text" placeholder="搜索你的问题">
        <div class="msg">DevSecOps下最佳安全测试工具</div>
      </div>
    </header>
    <div class="middle">
      <!-- <h1>我是中部</h1> -->
      <div class="left">
        <div class="introduce">
          <div class="content">
            <h4>产品介绍</h4>
            <p>
              VulHunter灰盒安全测试工具是国内首
              款基于“交互式应用安全测试 (IAST)
              技术的全新 一代“灰盒”代码审计、安
              全测试和第三方软件检测产品，由国内
              领先的软件安全开发生命周期 (S-SDLC)
              解决方案提供商SecZone自主研发，拥有
              自主知识产权。VulHunter灰盒安全测试
              工具是国内首款基于“交互式应用安全测
              试 (IAST)技术的全新 一代“灰盒”代码
              审计、安全测试和第三方软件检测产品
            </p>
            <!-- <router-link to="/BasicContainer">Go to Foo</router-link> -->
            <button @click="HandleJump"></button>
          </div>
        </div>
        <div class="api">
          <div class="content">
            <h4>API</h4>
            <p>
              VulHunter灰盒安全测试工具是国内首
              款基于“交互式应用安全测试 (IAST)
              技术的全新 一代“灰盒”代码审计、安
              全测试和第三方软件检测产品，由国内
              领先的软件安全开发生命周期 (S-SDLC)
              解决方案提供商SecZone自主研发，拥有
              自主知识产权。VulHunter灰盒安全测试
              工具是国内首款基于“交互式应用安全测
              试 (IAST)技术的全新 一代“灰盒”代码
              审计、安全测试和第三方软件检测产品
            </p>
            <button @click="HandleJump"></button>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="navigation">
          <div class="content">
            <h4>安装引导</h4>
            <p>
              VulHunter灰盒安全测试工具是国内首
              款基于“交互式应用安全测试 (IAST)
              技术的全新 一代“灰盒”代码审计、安
              全测试和第三方软件检测产品，由国内
              领先的软件安全开发生命周期 (S-SDLC)
              解决方案提供商SecZone自主研发，拥有
              自主知识产权。VulHunter灰盒安全测试
              工具是国内首款基于“交互式应用安全测
              试 (IAST)技术的全新 一代“灰盒”代码
              审计、安全测试和第三方软件检测产品
            </p>
            <button @click="HandleJump"></button>
          </div>
        </div>
        <div class="feedback">
          <div class="content">
            <h4>问题反馈</h4>
            <p>
              VulHunter灰盒安全测试工具是国内首
              款基于“交互式应用安全测试 (IAST)
              技术的全新 一代“灰盒”代码审计、安
              全测试和第三方软件检测产品，由国内
              领先的软件安全开发生命周期 (S-SDLC)
              解决方案提供商SecZone自主研发，拥有
              自主知识产权。VulHunter灰盒安全测试
              工具是国内首款基于“交互式应用安全测
              试 (IAST)技术的全新 一代“灰盒”代码
              审计、安全测试和第三方软件检测产品
            </p>
            <button @click="HandleJump"></button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="manual">
          <div class="content">
            <h4>使用手册</h4>
            <p>
              VulHunter灰盒安全测试工具是国内首
              款基于“交互式应用安全测试 (IAST)
              技术的全新 一代“灰盒”代码审计、安
              全测试和第三方软件检测产品，由国内
              领先的软件安全开发生命周期 (S-SDLC)
              解决方案提供商SecZone自主研发，拥有
              自主知识产权。VulHunter灰盒安全测试
              工具是国内首款基于“交互式应用安全测
              试 (IAST)技术的全新 一代“灰盒”代码
              审计、安全测试和第三方软件检测产品
            </p>
            <button @click="HandleJump"></button>
          </div>
        </div>
      </div>
      <div class="right_img" @click="HandleShow">
        <img src="@/assets/imgs/feedback.png" alt>
      </div>
      <div class="feedback_msg" v-show="isShow">
        <div class="feedback_title">给我们留言
          <img src="@/assets/imgs/pen.png" alt>
        </div>
        <div class="feedback_content">
          <div>姓名：
            <el-input class="m_input"></el-input>
          </div>
          <div>邮箱：
            <el-input class="m_input"></el-input>
          </div>
          <div>有什么我们可以帮助的？
            <el-input class="m_textare" type="textarea" :rows="12" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="feedback_btn">
          <el-button>取消</el-button>
          <el-button type="primary">提交</el-button>
        </div>
      </div>
    </div>
    <footer>
      <img src="../assets/imgs/brand.png" alt>
      www.seczone.cn
      | Copyright © 2013-2017 SECZONE Cloud.
      All Right Reserved.SECZONE
      中国 版权所有 京公网安备 11010802020287 京ICP备11018762号
    </footer>
  </div>
</template>
<script>
import "@/config/menu-config";
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    HandleJump: function() {
      console.log("this.$router", this.$router);
      // this.$router.push({ name: "ITheory" });
      this.$router.push({ path: "/sub/ITheory" });
    },
    HandleShow: function() {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>
<style scoped>
header {
  height: 797px;
  background: url("../assets/imgs/main_top.png") no-repeat;
}
header::before {
  content: "";
  display: table;
}
header .search {
  width: 60%;
  height: 175px;
  margin: 200px auto;
  border: 1px soild red;
}

header .search img {
  display: block;
  padding-bottom: 20px;
}

header .search input {
  width: 565px;
  height: 50px;
  padding-left: 15px;
  /* padding-right: 15px; */
  border: none;
  border-radius: 5px;
  background: url("../assets/imgs/search.png") no-repeat 96% center;
  background-color: #fff;
}
header .search .msg {
  color: #fff;
  padding-top: 20px;
  font-size: 18px;
}

.middle {
  height: 972px;
  /* border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  position: relative;
}

.middle .left,
.middle .center,
.middle .right {
  width: 370px;
  padding-top: 30px;
  margin: 10px;
  margin-top: 0px;
  /* border: 1px solid #ccc; */
}

.middle .center {
  margin-top: -50px;
}
.middle .left .introduce,
.middle .left .api,
.middle .center .navigation,
.middle .center .feedback,
.middle .right .manual {
  height: 437px;
  /* margin: 10px 0; */
  /* border: 1px solid #ccc; */
}

.middle .left .introduce::before,
.middle .left .api::before,
.middle .center .navigation::before,
.middle .center .feedback::before,
.middle .right .manual::before {
  content: "";
  display: table;
}

.middle .left .introduce,
.middle .left .api {
  background: url("../assets/imgs/left_background.png") no-repeat;
}

.middle .center .navigation,
.middle .center .feedback {
  background: url("../assets/imgs/center_background.png") no-repeat;
}

.middle .right .manual {
  background: url("../assets/imgs/left_background.png") no-repeat;
}

.middle .left .introduce:hover,
.middle .left .api:hover,
.middle .center .navigation:hover,
.middle .center .feedback:hover,
.middle .right .manual:hover {
  transform: translate(5px, -15px);
}

.middle .right_img {
  position: absolute;
  bottom: 100px;
  right: 200px;
}

.middle .feedback_msg {
  width: 450px;
  height: 630px;
  position: absolute;
  bottom: 170px;
  right: 200px;
  /* border: 1px solid #ddd; */
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #ddd;
  background-color: #fff;
}

.middle .feedback_msg .feedback_title {
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 22px;
  font-weight: 200;
  color: #fff;
  background-color: #7b9efa;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.middle .feedback_msg .feedback_title img {
  padding: 0 10px;
  vertical-align: middle;
}

.middle .feedback_msg .feedback_content {
  padding: 30px 40px;
}

.middle .feedback_msg .feedback_content .m_input {
  width: 80%;
  padding-bottom: 20px;
}

.middle .feedback_msg .feedback_content .m_textare {
  width: 95%;
  margin-top: 20px;
}

.middle .feedback_msg .feedback_btn {
  text-align: center;
}

.content {
  width: 70%;
  margin: 50px auto;
  margin-left: 49px;
  color: #fff;
}

.content > p,
.content > h4 {
  font-family: "微软雅黑", "Arial", "Hiragino Sans GB", "Helvetica",
    "sans-serif";
}

.content > p {
  font-size: 16px;
}

.content > button {
  width: 72px;
  height: 72px;
  float: right;
  /* 消除button的默认样式 */
  margin: 0;
  padding: 0;
  border: 1px solid transparent; /*自定义边框*/
  outline: none; /*消除默认点击蓝色边框效果*/
  background: url("../assets/imgs/arrow.png") no-repeat center center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 5px 5px 5px rgba(3, 51, 51, 0.2);
}
.content > button:hover {
  transform: scale(1.15);
}
footer {
  height: 80px;
  background-color: #f2f2f2;
  text-align: center;
  font-family: "Arial", "Hiragino Sans GB", "Helvetica", "sans-serif",
    "微软雅黑";
  columns: #333;
  font-size: 14px;
  line-height: 80px;
}

footer img {
  vertical-align: middle;
}
</style>


