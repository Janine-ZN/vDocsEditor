<template>
  <div class="editor-demo">
    <Editor v-model="html"/>
    <!-- <div v-html="html"></div> -->
    <div>获取到的数据 ==》 {{ html }}</div>
    <div>{{info}}</div>
  </div>
</template>

<script>
import Editor from "@/components/Editor";

export default {
  components: { Editor },
  data() {
    return {
      html: "在此处编辑文档或将一些好的word粘贴进来稍作修改",
      info: ""
    };
  },
  mounted() {
    /* this.$axios
      .get("http://10.0.2.226:3000/editor/list")
      .then(response => (this.info = response)); */
  }
};
</script>

<style lang="scss">
</style>
