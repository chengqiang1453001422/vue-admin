import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'
import 'echarts/theme/macarons.js'
import './assets/css/common.css'
import './assets/css/iconfont.css'
import echarts from 'echarts'
import { Layout,Icon,Menu,Button,Table,Card,Row,Col,Modal,Message,Avatar,Badge,Timeline,List,Form,Input,Select,Tabs } from 'ant-design-vue';

Vue.config.productionTip = false;
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Button);
Vue.use(Table);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Modal);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(VueRouter);
Vue.use(Timeline);
Vue.use(List);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(Tabs);

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  routes
})

Vue.prototype.$echarts = echarts;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
router.beforeEach((to, from, next) => {
  console.log(to)
  let logined = store.getters.logined;
  console.log('应用状态管理中logined：'+logined);
  // if(to.matched.some(res => res.meta.requireAuth)){
  //   console.log('需要登录才能访问');
  // }
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})
//注册一个全局的组件
Vue.component('my-component',{
  template:'<div>我是组件的内容</div>'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
