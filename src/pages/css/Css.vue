<template>
  <div class="container">
    <h2>概述</h2>
    <div
      class="exprice"
    >2017年3月，微软宣布 Edge 浏览器将支持 CSS 变量。这个重要的 CSS 新功能，所有主要浏览器已经都支持了。本文全面介绍如何使用它，你会发现原生 CSS 从此变得异常强大。</div>
    <h2>变量的申明</h2>
    <div class="exprice">声明变量的时候，变量名前面要加两根连词线（--）,变量名大小写敏感。</div>
    <code>body{--foo:#fff;}</code>
    <h2>var()函数</h2>
    <div class="exprice">用于读取变量。var()函数还可以使用第二个参数，表示变量的默认值。如果该变量不存在，就会使用这个默认值。var()函数还可以用在变量的声明。</div>
    <code>
      :root {
      --primary-color: red;
      --logo-text: var(--primary-color);
      }
    </code>
    <h2>作用域</h2>
    <div class="exprice">同一个 CSS 变量，可以在多个选择器内声明。读取的时候，优先级最高的声明生效。这与 CSS 的"层叠"（cascade）规则是一致的。</div>

    <p>蓝色</p>
    <div>绿色</div>
    <div id="alert">红色</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  counted() {}
};
</script>
<style scoped>
:root {
  --color: blue;
}
div {
  --color: green;
}
#alert {
  --color: red;
}
* {
  color: var(--color);
}
.container {
  background-color: #fff;
  padding: 15px;
}
h2 {
  color: #1d365d;
  font-weight: 500;
}
.exprice {
  margin-bottom: 1em;
}
code {
  color: #abb2bf;
  padding: 15px;
  margin: 10px 0;
  display: block;
  background: #282c34;
}
</style>


