<template>
  <div class="menu">
    <div class="logo">
      <img src="@/assets/imgs/logo.png" alt>
    </div>
    <div class="menu-item">
      <div class="m_lable">
        <i class="el-icon-menu"></i>
        <span>产品简介</span>
      </div>
      <ul>
        <li>
          <router-link to="/sub/ITheory">技术原理</router-link>
        </li>
        <li>
          <router-link to="/sub/IAdvantage">产品优势</router-link>
        </li>
        <li>
          <router-link to="/sub/IAssistant">产品功能</router-link>
        </li>
        <li>
          <router-link to="/sub/ISpecification">产品规格</router-link>
        </li>
        <li>
          <router-link to="/sub/parames">技术参数</router-link>
        </li>
      </ul>
      <div class="m_line"></div>
      <div class="m_lable">
        <i class="el-icon-location"></i>
        <span>安装引导</span>
      </div>
      <ul>
        <li>
          <router-link to="/sub/NInstall">安装包安装</router-link>
        </li>
        <li>
          <router-link to="/sub/NDelivery">硬件交付</router-link>
        </li>
        <li>
          <router-link to="/sub/NAgent">Agent设置</router-link>
        </li>
      </ul>
      <div class="m_line"></div>
      <div class="m_lable">
        <i class="el-icon-document"></i>
        <span>使用手册</span>
      </div>
      <ul>
        <li>
          <router-link to="/sub/MExplain">介绍说明</router-link>
        </li>
        <li>
          <router-link to="/sub/MAbout">相关操作说明</router-link>
        </li>
      </ul>
      <div class="m_line"></div>
      <div class="m_lable">
        <i class="el-icon-edit-outline"></i>
        <span>API</span>
      </div>
      <ul>
        <li>
          <router-link to="/sub/AExplain">介绍说明</router-link>
        </li>
        <li>
          <router-link to="/sub/AAbout">相关操作说明</router-link>
        </li>
        <li>
          <router-link to="/sub/AAgent">Agent设置</router-link>
        </li>
      </ul>
      <div class="m_line"></div>
      <div class="m_feedback">
        <!-- <ul>
        <li>-->
        <router-link to="/sub/Feedback">
          <i class="el-icon-question"></i>&nbsp;问题反馈
        </router-link>
        <!-- </li>
        </ul>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  height: 100%;
  position: relative;
  background: url("../../assets/imgs/bg.png") no-repeat;
  background-color: #263556;
  color: #fff;
}

.menu::before {
  content: "";
  display: table;
}

.menu .logo {
  height: 80px;
  margin: 35px 10px;
}

.m_lable {
  margin: 20px 0 10px 30px;
}

.menu ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0px;
}

.menu ul li {
  text-align: left;
  /* background-color: blue; */
}

.menu ul li:last-child {
  padding-bottom: 20px;
}

.menu ul li a {
  width: 100%;
  display: block;
  padding: 15px 0px;
  text-decoration: none;
  padding-left: 60px;
  color: #fff;
  /* background: red; */
}

/* .m_feedback {
  margin: 20px 0 10px 0px;
} */

.menu .m_feedback > a {
  width: 100%;
  display: block;
  text-decoration: none;
  padding: 15px 0px;
  padding-left: 30px;
  color: #fff;
}

.m_feedback {
  margin-top: 5px;
  margin-left: 0;
  /* padding-left: 30px; */
  /* background: blue; */
}

.menu .m_feedback .router-link-active {
  background: linear-gradient(to right, #238bf6, #30ffee);
}

.menu ul .router-link-active {
  background: linear-gradient(to right, #238bf6, #30ffee);
}
/* 分割线 */
.m_line {
  float: left;
  width: 170px;
  height: 1px;
  background: #fff;
  margin: 0 30px;
}
</style>

<script>
import menu from "@/config/menu-config";

export default {
  data() {
    return {
      menu: menu
    };
  },
  methods: {
    // 打开下拉菜单
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 关闭下拉菜单
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
