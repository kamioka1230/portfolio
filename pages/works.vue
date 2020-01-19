<template>
<div>
  <div class="content">
    <h2>This site</h2>
    <p><span class="tech">Nuxt.js</span><br>このサイト</p>
    <h2><a href="https://3.113.6.192/order">Pizza order</a></h2>
    <p><span class="tech">Vue.js</span><br>ピザ注文画面</p>
    <h2><nuxt-link to="/movies/">Movie Index</nuxt-link></h2>
    <p><span class="tech">Nuxt.js</span><br>これまでに見た映画とそのサムネイルをOMDb APIを利用して一覧にしています。</p>
  </div>
</div>
</template>

<style>
.content {
  width: 70%;
  margin: 0 auto;
}
h2 {
  font-size: 1.8rem;
  margin-bottom: 0;
}
p {
  font-size: 1.4rem;
  margin-top: 2px;
}
p .tech {
  font-size: 1.2rem;
  font-style: italic;
}
</style>
