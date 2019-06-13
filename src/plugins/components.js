// 全局注册组件
import Icon from 'vue-awesome/components/Icon'
import MainPage from '@/components/MainPage.vue'
import Editor from '@/components/Editor.vue'
export default (Vue) => {
  Vue.component("mainpage", MainPage),
  Vue.component("editor", Editor),
  Vue.component('icon', Icon)
}
