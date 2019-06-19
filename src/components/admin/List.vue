<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-table :data="info.data" style="width: 100%" border>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="menu" label="一级菜单" width="180"></el-table-column>
        <el-table-column prop="submenu" label="二级菜单" width="180"></el-table-column>
        <el-table-column prop="content" label="内容"></el-table-column>
        <el-table-column prop="created_time" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="last_modified_time" label="最近修改时间" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      info: ""
    };
  },
  mounted() {
    this.$axios
      .get("http://10.0.2.226:3000/editor/list")
      .then(response => ((this.info = response), console.log(this.info.data)));
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: "/update" });
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
