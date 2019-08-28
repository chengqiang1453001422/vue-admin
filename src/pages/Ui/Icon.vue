<template>
  <div class="container icons-list">
    <a-icon type="home" />
    <a-icon type="setting" theme="filled" />
    <a-icon type="smile" theme="outlined" />
    <a-icon type="sync" spin />
    <a-icon type="loading" />
    <a-icon type="smile" theme="twoTone" />
    <a-icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
    <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
    <div>{{count}}</div>
  </div>
</template>
<script>
import { mapState,mapActions } from 'vuex'
export default {
  data(){
    return {

    }
  },
  created(){

  },
  computed: {
    //对象展开运算符，不用为每个state设置为计算属性
    ...mapState({
      count: state => state.count
    }),
    //将vuex状态申明为计算属性
    // count() {
    //   return this.$store.state.count;
    // }
  },
  mount(){

  },
  methods:{

  }
}
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>