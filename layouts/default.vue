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
}
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, .7);
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
