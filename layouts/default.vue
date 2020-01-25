<template>
  <div id="wrapper">
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Nav,
    Footer,
  }
}
</script>

<style>
body, html, #wrapper {
  height: 100%;
}
</style>