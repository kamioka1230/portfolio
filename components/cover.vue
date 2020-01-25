<template>
  <div class="view">
    <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
      <div class="text-center white-text mx-5 wow fadeIn catch-message">
        <h1 class="mb-4"><strong>Java Web Developer</strong></h1>
        <p><strong>Welcome to my portofolio.</strong></p>
      </div>
    </div>
  </div>
</template>

<style media="screen">
.view {
  height: 100vh;
  background-image: url('~assets/img/main_20190731.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 1000px) {
  .view {
    background-position: 30%;
  }
}
@media screen and (max-width: 480px) {
  .catch-message {
    text-align: left !important;
  }
}
</style>