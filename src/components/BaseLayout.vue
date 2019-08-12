<template>
  <div class="panel">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "base-layout",
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
.panel {
  height: 200px;
  margin-top:5px;
  padding:10px;
  background-color: #fff;
}
</style>


