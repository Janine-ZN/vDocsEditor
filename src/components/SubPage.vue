<template>
  <div id="app">
    <el-container>
      <el-aside width="230px" class="m_aside" v-show="isShow">
        <navmenu></navmenu>
      </el-aside>
      <el-container>
        <el-header class="m_padding">
          <vheader/>
        </el-header>
        <el-main class="m_padding">
          <div class="shrink" @click="HandleShow">&lt;</div>
          <vmain/>
        </el-main>
        <el-footer class="m_padding">
          <vfooter/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavMenu from "@/components/asidemenu/NavMenu";
import Header from "@/components/contents/Header";
import Main from "@/components/contents/Main";
import Footer from "@/components/contents/Footer";

export default {
  name: "app",
  mounted(){
  },
  data() {
    return {
      isShow: true
    };
  },
  components: {
    navmenu: NavMenu,
    vheader: Header,
    vmain: Main,
    vfooter: Footer
  },
  methods: {  
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

<style>
.header {
  background-color: #409eff;
  color: #fff;
  line-height: 60px;
}

/* 隐藏滚动条 */
.m_aside {
  overflow: hidden;
}

.m_padding .shrink {
  width: 15px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #5c5c5c;
  position: relative;
  top: 450px;
  left: 0;
  background-color: rgba(10, 10, 10, 0.2);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.m_padding .shrink:hover {
  transform: scale(1.05);
}

.m_padding {
  padding: 0px;
  margin-bottom: 18px;
}

.el-main {
  background-color: #f7f7f7;
  margin: 0;
}

</style>