<template>
  <a v-bind:href="url" class="nav-link">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped>
.nav-link{
    display: block;
    color:blue;
}
</style>


