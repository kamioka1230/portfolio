<template>
<div>
  <div class="bg-img"></div>
  <Header />
  <main>
    <nuxt />
  </main>
</div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  components: {
    Header,
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 62.5%;
  font-family: Quicksand,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, .7);
  font-size: 1.6rem;
}
a {
  color: inherit;
  text-decoration: none;
}

.bg-img {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("../profile.jpg");
  background-size: cover;
  z-index: -10;
}
.bg-img::after {
  content: "";
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .95);
}
</style>
