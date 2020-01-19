<template>
  <div class="movie-list">

  <Movie
    v-for="movie in movies"
    :key="movie.title"
    :title="movie.title"
    :thumbnail="movie.thumbnail"
  />

  </div>
</template>

<script>
import Movie from "@/components/movie.vue"
export default {
  components: {
    Movie,
  },
  data: function() {
    return {
      movies: [
        {
          title: "Pulp Fiction",
          thumbnail: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
          title: "Shooter",
          thumbnail: "https://m.media-amazon.com/images/M/MV5BMGRjMzY0OGItNDc4YS00OGNlLWI3MGYtZjRkNjdiNWUyNDY4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          title: "Fury",
          thumbnail: "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg"
        },
        {
          title: "Focus",
          thumbnail: "https://m.media-amazon.com/images/M/MV5BMTUwODg2OTA4OF5BMl5BanBnXkFtZTgwOTE5MTE4MzE@._V1_SX300.jpg"
        },
        {
          title: "Focus",
          thumbnail: "https://m.media-amazon.com/images/M/MV5BMTUwODg2OTA4OF5BMl5BanBnXkFtZTgwOTE5MTE4MzE@._V1_SX300.jpg"
        },
      ]
    }
  }
}
</script>

<style>
.movie-list {
  display: flex;
}
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
