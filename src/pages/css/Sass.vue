<template>
  <div class="container">
    <h2>概述</h2>
    <div
      class="exprice"
    >Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。</div>
    <div class="exprice">Sass是成熟、稳定、强大的CSS预处理器，而SCSS是Sass3版本当中引入的新语法特性，完全兼容CSS3的同时继承了Sass强大的动态功能。</div>
    <h2>变量（Variables）</h2>
    <code>
      $highlight-color: #F90;
      .selected {
      border: 1px solid $highlight-color;
      }
    </code>
    <h2>混合（Mixins）</h2>
    <code>
      @mixin rounded-corners {
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
      }
    </code>
    <code>
      notice {
      background-color: green;
      border: 2px solid #00aa00;
      @include rounded-corners;
      }
    </code>
    <h2>混合器传参</h2>
    <code>
      @mixin link-colors($normal, $hover, $visited) {
      color: $normal;
      &:hover { color: $hover; }
      &:visited { color: $visited; }
      }
    </code>
    <code>
      a {
      @include link-colors(blue, red, green);
      }
    </code>
    <div>编译为</div>
    <code>
      a { color: blue; }
      a:hover { color: red; }
      a:visited { color: green; }
    </code>
    <h2>嵌套（Nesting）</h2>
    <code>
      #header {
      color: black;
      .navigation {
      font-size: 12px;
      }
      .logo {
      width: 300px;
      }
      }
    </code>
    <code>
      article a {
      color: blue;
      :hover { color: red }
      }
    </code>
    <h2>导入（Importing）</h2>
    <code>
      @import "library"; // library.less
      @import "typo.css";
    </code>
    <h2>使用选择器继承来精简CSS</h2>
    <code>
      //通过选择器继承继承样式
      .error {
      border: 1px solid red;
      background-color: #fdd;
      }
      .seriousError {
      @extend .error;
      border-width: 3px;
      }
    </code>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="css" scoped>
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


