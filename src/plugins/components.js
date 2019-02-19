// 全局注册组件
import Icon from 'vue-awesome/components/Icon'
import MainPage from '@/components/MainPage.vue'
export default (Vue) => {
    Vue.component("mainpage", MainPage),
        Vue.component('icon', Icon)
}