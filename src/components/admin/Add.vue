<template>
  <el-container>
    <el-header>Docs-新增</el-header>
    <el-main>
      <el-row>
        <el-col :span="12">
          <div class>
            一级菜单：
            <el-input v-model="menu" placeholder="请输入一级菜单" size="small"></el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class>
            二级菜单：
            <el-input v-model="submenu" placeholder="请输入二级菜单" size="small"></el-input>
          </div>
        </el-col>
      </el-row>
      <div class="editor-demo">
        <Editor v-model="html"/>
      </div>
      <button @click="add()">新增文章</button>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Editor from "@/components/admin/Editor";

export default {
  components: { Editor },
  data() {
    return {
      html: "在此处编辑文档或将一些好的word粘贴进来稍作修改",
      info: "",
      menu: "",
      submenu: "",
      params: {}
    };
  },
  methods: {
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
</style>
