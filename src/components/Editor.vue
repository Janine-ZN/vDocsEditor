<template>
  <div class="rich-text">
    <div :id="editorId"></div>
    <button>更新文章</button>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";

import "tinymce/plugins/image"; // 插入上传图片插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/wordcount"; // 字数统计插件

export default {
  props: {
    inline: { type: Boolean, default: false }, // 是否 inline 模式
    html: { type: String, default: "<p></p>" }, // HTML 内容
    minHeight: { type: Number, default: 300 }, // 最小高度
    toolbar: {
      type: Number,
      default: 0,
      validator(value) {
        return value >= 0 && value <= 1;
      }
    } // 工具栏的下标: 0 或 1
  },
  model: {
    prop: "html",
    event: "text-changed" // 编辑器的内容发生变化后触发, 参数为编辑的 HTML
  },
  data() {
    return {
      editor: null,
      toolbars: [],
      baseToolbar: "styleselect | bold italic underline strikethrough",
      uploadMode: 0
    };
  },
  mounted() {
    // 创建各种场景使用的 toolbar
    const toolbar1 = `${this.baseToolbar} image media attachment`; // 普通场景使用
    const toolbar2 = `${this.baseToolbar} image media fitb`; // 编辑题目使用
    this.toolbars = [toolbar1, toolbar2];

    this.initEditor();
  },
  methods: {
    // 创建编辑器
    initEditor() {
      const self = this;

      tinymce
        .init({
          selector: `#${this.editorId}`,
          inline: this.inline,
          min_height: this.minHeight,
          toolbar: this.toolbars[this.toolbar],
          language: "zh_CN",
          branding: false,
          elementpath: false,
          statusbar: false,
          relative_urls: false, // 不把绝对路径转换为相对路径
          menubar: false,
          plugins: "lists image media table wordcount",
          toolbar:
            "undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image table | removeformat",
          setup: function(editor) {
            // 编辑器内容发生变化后更新 html 的内容
            editor.on("change keyup", () => {
              self.$emit("text-changed", editor.getContent());
            });
          },
          // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
          // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
          images_upload_handler: (blobInfo, success, failure) => {
            const img = "data:image/jpeg;base64," + blobInfo.base64();
            success(img);
          }
        })
        .then(editors => {
          this.editor = editors[0];
          this.editor.setContent(this.html);

          // inline 时的最小高度
          if (self.inline && self.minHeight !== 101) {
            document.getElementById(self.editorId + "").style.minHeight =
              self.minHeight + "px";
          }
        });
    },
  },
  computed: {
    // 使用时间戳和随机数生成 editorId
    editorId() {
      const time = new Date().getTime();
      const rand = Math.floor(Math.random() * 100000000);
      return `editor-${time}-${rand}`;
    }
  },
  beforeDestroy() {
    // 销毁编辑器
    this.editor.remove();
  },
  watch: {
    // 外部修改 v-model 绑定的 html 的值时更新编辑器的内容
    html(newValue, oldValue) {
      if (newValue != this.editor.getContent()) {
        this.editor.setContent(newValue || "<p></p>");
      }
    }
  }
};
</script>

<style lang="scss">
.rich-text {
  width: 80%;
  // 微调 Full featured 的编辑器阴影, 工具栏阴影
  .mce-tinymce {
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.25);

    .mce-top-part::before {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }
  }

  // inline 模式的边框和得到焦点的样式
  .mce-content-body {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 3px;

    &.mce-edit-focus {
      outline: none;
      border-color: #47a4f5;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1) inset;
    }
  }

  .mce-notification {
    display: none;
  }
}

// 工具栏样式: 缩小字体, 修改按钮的 hover 背景色等
.mce-panel {
  border: none !important;

  .mce-toolbar .mce-btn-group {
    padding: 0;

    &:not(:first-child) {
      margin-left: 0;
    }

    .mce-btn {
      margin-left: 0;

      &:hover {
        border-color: transparent;
        background: #808695;
        color: white;

        .mce-ico,
        button {
          color: white;
        }
      }

      .mce-ico {
        font-size: 14px;
      }
    }
  }
}
</style>