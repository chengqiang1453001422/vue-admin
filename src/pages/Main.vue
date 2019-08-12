<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']">
        <a-menu-item key="1" @click="toNavigate('/main/home')">
          <a-icon type="bank" />
          <span>主页</span>
        </a-menu-item>
        <a-menu-item key="4" @click="toNavigate('/main/user')">
          <a-icon type="team" />
          <span>用户</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="gold" />
            <span>组件</span>
          </span>
          <a-menu-item key="11" @click="toNavigate('/main/button')">按钮</a-menu-item>
          <a-menu-item key="12" @click="toNavigate('/main/icon')">图标</a-menu-item>
          <a-menu-item key="13" @click="toNavigate('/main/modals')">对话框</a-menu-item>
          <a-menu-item key="14" @click="toNavigate('/main/tabs')">标签页</a-menu-item>
          <a-menu-item key="15" @click="toNavigate('/main/form')">表单</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="scissor" />
            <span>css扩展语言</span>
          </span>
          <a-menu-item key="16" @click="toNavigate('/main/less')">less</a-menu-item>
          <a-menu-item key="17" @click="toNavigate('/main/sass')">sass</a-menu-item>
          <a-menu-item key="18" @click="toNavigate('/main/css')">css变量</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="scissor" />
            <span>组件高级</span>
          </span>
          <a-menu-item key="16" @click="toNavigate('/main/slot')">插槽</a-menu-item>
          <a-menu-item key="17" @click="toNavigate('/main/sass')">sass</a-menu-item>
          <a-menu-item key="18" @click="toNavigate('/main/css')">css变量</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="2" @click="toNavigate('/main/my')">
          <a-icon type="video-camera" />
          <span>表格</span>
        </a-menu-item>
        <a-menu-item key="3" @click="toNavigate('/main/upload')">
          <a-icon type="credit-card" />
          <span>卡片</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="changeState()"
        />
        <div :style="{float:'right'}">
          <a-menu theme="light" mode="horizontal" :style="{ lineHeight: '64px' }">
            <a-menu-item key="1">
              <a-icon type="arrows-alt" />
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="notification" />
              <a-badge count="110" />
            </a-menu-item>
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper">
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </span>
              <a-menu-item-group title="用户中心">
                <a-menu-item key="setting:1">你好，管理员</a-menu-item>
                <a-menu-item key="setting:2">个人信息</a-menu-item>
                <a-menu-item key="setting:2" @click="liginOut">退出登录</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="设置中心">
                <a-menu-item key="setting:3">个人设置</a-menu-item>
                <a-menu-item key="setting:4">系统设置</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ padding: '24px', minHeight: '280px' }">
        <transition name="router-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapState } from "vuex";
import { Events } from "../constants";
export default {
  data() {
    return {
      
    };
  },
  computed: {
    //对象展开运算符，不用为每个state设置为计算属性
    ...mapState({
      collapsed: state => state.collapsed
    })
  },
  methods: {
    changeState:function() {
      this.$store.dispatch(Events.COLLAPSED);
    },
    toNavigate(url) {
      //alert(url)
      this.$router.push(url);
      //this.$router.push({ path: '/teacher' });
    },
    liginOut() {
      var _this = this;
      this.$confirm({
        title: "提示",
        content: "确认退出吗？",
        onOk() {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
        },
        onCancel() {}
      });
    }
  },
  mounted() {
    console.log(this);
    console.log(this.$router);
  },
  beforeRouteUpdate(to, from, next) {
    console.log("重用的组件里调用此方法，路由更新之前");
    console.log(to);
    next();
  }
};
</script>
<style>
#app,
.ant-layout {
  width: 100%;
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>