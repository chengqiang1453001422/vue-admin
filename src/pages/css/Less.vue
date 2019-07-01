<template>
  <div class="container">
    <h2>概述</h2>
    <div
      class="exprice"
    >Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言。 浏览器环境中 JavaScript 开发的用于将 Less 样式转换成 CSS 样式的 Less.js 工具。</div>
    <h2>变量（Variables）</h2>
    <code>
      @width: 10px;
      @height: @width + 10px;
      #header {
      width: @width;
      height: @height;
      }
    </code>
    <h2>混合（Mixins）</h2>
    <code>
      .bordered {
      border-top: dotted 1px black;
      border-bottom: solid 2px black;
      }
      #menu a {
      color: #111;
      .bordered();
      }
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
    <h2>运算（Operations）</h2>
    <code>
      @base: 5%;
      @filler: @base * 2;
    </code>
    <h2>Escaping</h2>
    <code>
      @min768: ~"(min-width: 768px)";
      .element {
      @media @min768 {
      font-size: 1.2rem;
      }
      }
    </code>
    <div>编译为</div>
    <code>
      @media (min-width: 768px) {
      .element {
      font-size: 1.2rem;
      }
      }
    </code>
    <h2>函数（Functions）</h2>
    <code>
      @base: #f04615;
      @width: 0.5;
      .class {
      width: percentage(@width); // returns `50%`
      color: saturate(@base, 5%);
      background-color: spin(lighten(@base, 25%), 8);
      }
    </code>
    <h2>Namespaces and Accessors</h2>
    <code>
      #bundle() {
      .button {
      display: block;
      border: 1px solid black;
      background-color: grey;
      &:hover {
      background-color: white;
      }
      }
      .tab { ... }
      .citation { ... }
      }
    </code>
    <code>
      #header a {
      color: orange;
      #bundle.button(); // can also be written as #bundle > .button
      }
    </code>
    <h2>Maps</h2>
    <code>
      #colors() {
      primary: blue;
      secondary: green;
      }
      .button {
      color: #colors[primary];
      border: 1px solid #colors[secondary];
      }
    </code>
    <div>编译为</div>
    <code>
      .button {
      color: blue;
      border: 1px solid green;
      }
    </code>
    <h2>作用域（Scope）</h2>
    <code>
      @var: red;
      #page {
      @var: white;
      #header {
      color: @var; // white
      }
      }
    </code>
    <h2>导入（Importing）</h2>
    <code>
      @import "library"; // library.less
      @import "typo.css";
    </code>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "成强",
      age: 27
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
@padding-bg: 15px;
.container {
  padding: @padding-bg;
  background-color: #fff;
  h2 {
    color: #1d365d;
    font-weight: 500;
  }
  .exprice {
    margin-bottom: 1em;
  }
  code {
    color: #abb2bf;
    padding: @padding-bg;
    margin: 10px 0;
    display: block;
    background: #282c34;
  }
}
</style>


