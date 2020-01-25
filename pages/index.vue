<template>
  <div>
    <Cover />
    <Main />
</div>
</template>

<script>
import Main from "@/components/main.vue";
import Cover from "@/components/cover.vue";
export default {
  layout: 'index',
  components: {
    Main, Cover,
  }
}
</script>

<style>
.rgba-black-light, .rgba-black-light:after {
  background-color: rgba(0,0,0,0.7);
}
</style>