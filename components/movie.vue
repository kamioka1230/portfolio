<template>
<div class="movie">
  <div class="thumbnail">
    <img :src="thumbnail" />
  </div>
  <div class="title">{{ title }}</div>
</div>
</template>

<script>
export default {
  props: [
    "thumbnail", "title",
  ]
}
</script>

<style>
.movie {
  width: 150px;
}
.movie .thumbnail {
  width: 100px;
  margin: 0 auto;
}
.movie .thumbnail img {
  width: 100px;
}
.movie .title {
  text-align: center;
  font-size: 1.4rem;
  text-transform: uppercase;
}
</style>
