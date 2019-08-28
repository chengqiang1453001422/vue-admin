<template>
  <div>
    <a-row :gutter="10">
      <a-col :span="12">
        <div class="gutter-box">
          <a-card :bordered="false">
            <a-button type="primary" @click="changeState">修改全局vuex状态</a-button>
            <a-button @click="vueEvent($event,666)">vue事件中如何使用event对象</a-button>
            <a-button @click="changeState1(20)" type="dashed">用mapActions修改全局状态</a-button>
            <a-button type="danger">Danger</a-button>
          </a-card>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="gutter-box">
          <a-card :bordered="false">
            <a-button type="primary">$nextTick的使用</a-button>
            <a-button>Default</a-button>
            <a-button type="dashed">Dashed</a-button>
            <a-button type="danger">Danger</a-button>
          </a-card>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div>{{count}}</div>
            <my-component></my-component>
          </a-card>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div>{{mycount}}</div>
            <div>$nextTick,在修改数据之后立即使用这个方法，获取更新后的 DOM</div>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { mapState,mapActions } from 'vuex'
import {Events} from '../../constants'
export default {
  name:'Button',
  data() {
    return {
      num:0,
      mycount:1
    }
  },
  methods: { 
    ...mapActions({
      changeState1:Events.COUNT
    }),
    changeState:function() {
      console.log(this);
      this.$store.dispatch(Events.COUNT,10);
      //官方不建议用这种方法
      //this.$store.commit(Events.COUNT,10);
      this.num = this.$store.state.count;
      console.log(this.$store.state.count)
    },
    vueEvent:function(event,val) {
      console.log(event);
      this.mycount++;
      // this.$nextTick(function() {
      //   console.log('修改数据之后立即使用这个方法，获取更新后的 DOM')
      // })
      // 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
      this.$nextTick().then(function() {
        console.log('修改数据之后立即使用这个方法，获取更新后的 DOM')
      })
    }
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
  beforeCreate() {
    console.log('实例初始化之后,button组件实例创建之前,不可以修改data里的值和触发方法');
    console.log(this);
  },
  created() {
    console.log('实例创建完成,可以修改data里的值和触发方法');
    console.log(this);
  },
  beforeMount() {
    console.log('挂载开始之前被调用');
    console.log(this);
  },
  mounted() {
    console.log('挂载之后调用');
  },
  beforeUpdate() {
    console.log('这里的更新对象是模板');
  },
  updated() {
    console.log('组件 DOM 已经更新，可以执行依赖于 DOM 的操作');
  },
  beforeDestroy() {
    console.log('销毁定时器、解绑全局事件、销毁插件对象等操作');
  },
  destroyed() {
    console.log('Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁');
  },
  beforeRouteEnter(to, from, next) {
    console.log('路由进入之前');
    console.log(to)
    // 这里还无法访问到组件实例，this === undefined
    next( vm => {
      // 通过 `vm` 访问组件实例
      console.log(vm)
    })
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('路由离开之前');
    console.log(to)
    next();
  }
}
</script>
<style scoped>
  .gutter-box .ant-card{
    height:150px;
  }
</style>


