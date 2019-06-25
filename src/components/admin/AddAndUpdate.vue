<template>
  <div class="add">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="更新" name="first">
        <el-row>
          <el-col>
            <el-input v-model="changeMenu" placeholder="请输入一级菜单" size="medium"></el-input>
            <el-input v-model="changeSubmenu" placeholder="请输入二级菜单" size="medium"></el-input>
          </el-col>
          <el-col class="editor-demo">
            <Editor v-model="changeHtml"/>
            <!-- <div v-html="html"></div> -->
            <!-- <div>获取到的数据 ==》 {{ html }}</div> -->
            <!-- <div>{{info}}</div> -->
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button type="primary" @click="update()">发布</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="添加" name="second">
        <el-row>
          <el-col>
            <el-input v-model="menu" placeholder="请输入一级菜单" size="medium"></el-input>
            <el-input v-model="submenu" placeholder="请输入二级菜单" size="medium"></el-input>
          </el-col>
          <el-col class="editor-demo">
            <Editor v-model="html"/>
            <!-- <div v-html="html"></div> -->
            <!-- <div>获取到的数据 ==》 {{ html }}</div> -->
            <!-- <div>{{info}}</div> -->
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button type="primary" @click="add()">添加</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Editor from "@/components/admin/Editor";

export default {
  components: { Editor },
  data() {
    return {
      activeName: "first",
      changeHtml: "更新内容",
      html: "在此处编辑文档或将一些好的word粘贴进来稍作修改",
      changeMenu: "",
      menu: "",
      changeSubmenu: "",
      submenu: "",
      msg: ""
    };
  },
  mounted() {
    console.log(this.$route.query.id);
    this.$axios
      .get("http://10.0.2.226:3000/editor/single?id=" + this.$route.query.id)
      .then(response => {
        if (response.data.status === 1) {
          this.msg = response.data.msg[0];
          console.log("内容：", this.msg.content);
          this.changeMenu = this.msg.menu;
          this.changeSubmenu = this.msg.submenu;
          this.changeHtml = this.msg.content;
        }
      });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    update() {
      console.log(this.changeHtml);
      this.$axios
        .post("http://10.0.2.226:3000/editor/update", {
          menu: this.changeMenu,
          submenu: this.changeSubmenu,
          content: this.changeHtml
        })
        .then(response => {
          this.info = response;
          console.log(this.info.data.code);
        });
    },
    add() {
      console.log(this.html);
      this.$axios
        .post("http://10.0.2.226:3000/editor/add", {
          menu: this.menu,
          submenu: this.submenu,
          content: this.html
        })
        .then(response => {
          this.info = response;
          alert(this.info.data.msg);
        });
    }
  }
};
</script>
<style lang="scss">
.add {
  width: 80%;
  margin: 50px auto;

  .el-tabs__header {
    margin: 0 !important;
  }

  .el-tabs__content {
    border: 1px solid #e4e7ed !important;
    border-top: none !important;
    padding: 40px;
    .el-input {
      display: inline;
    }

    .el-input--medium .el-input__inner {
      width: 15%;
    }
  }
  .el-tabs__item:hover,
  .el-tabs__item.is-active {
    color: #6b6b6b;
  }

  .el-button {
    padding: 10px 40px;
    margin-top: 10px;
  }
}
</style>
