<template>
  <div class="padding-middle">
    <a-row :gutter="10">
      <a-col :span="8">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div class="box">
              <NavigationLink url="/profile">
                <a-icon type="gold" />模板组件插槽
              </NavigationLink>
            </div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div class="box">
              <navigation-link url="/profile">全局组件插槽{{url}}</navigation-link>
            </div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div class="box">
              <input v-focus placeholder="请输入用户名"/><br/><br/>
              <!-- <input v-autofocus> -->
            </div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="gutter-box">
          <BaseLayout>
            <template v-slot:header>
              <h1>Here might be a page title</h1>
            </template>

            <p>A paragraph for the main content.</p>
            <p>And another one.</p>

            <template v-slot:footer>
              <p>Here's some contact info</p>
            </template>
          </BaseLayout>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import NavigationLink from "../../components/NavigationLink";
import BaseLayout from "../../components/BaseLayout";
export default {
  data() {
    return {};
  },
  mounted() {},
  components: {
    NavigationLink,
    BaseLayout
  },
  //注册局部指令
  directives: {
    focus: {
      bind: function(el,binding,vnode){
        console.log(el)
        console.log(binding)
        console.log(vnode)
      },
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
<style scoped>
.box {
  height: 200px;
}
</style>


