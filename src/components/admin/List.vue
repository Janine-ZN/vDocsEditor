<template>
  <div class="content">
    <el-table :data="info.data" style="width: 100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="menu" label="一级菜单" width="180"></el-table-column>
      <el-table-column prop="submenu" label="二级菜单" width="180"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="created_time" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="last_modified_time" label="最近修改时间" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
      data: ""
    };
  },
  mounted() {
    this.$axios.get("http://10.0.2.226:3000/editor/list").then(response => {
      this.info = response;
      this.data = this.info.data;
      console.log("获取全部List：",this.info.data);
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, this.data[index].id);
      this.$router.push({
        path: "/admin/add-update",
        query: {
          id: this.data[index].id
        }
      });
    },
    handleDelete(index, row) {
      console.log(this.data[index].id, row);
      this.$axios
        .get("http://10.0.2.226:3000/editor/delete?id=" + this.data[index].id)
        .then(response => {
          this.info = response;
          console.log("what?",this.info);
          location.reload();//刷新
          // this.$router.go(0);
        });
    }
  }
};
</script>
<style lang="scss">
.content {
  width: 70%;
  margin: 50px auto;
  border: 1px solid #ebeef5;
  padding: 20px 15px 40px 15px;
  .el-table {
    color: #000;
    thead {
      color: #000;
    }
    .cell {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
}
</style>

