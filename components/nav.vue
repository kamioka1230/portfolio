<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    <div class="container">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">AboutMe</a></li>
          <li class="nav-item"><a class="nav-link" href="#works">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills">Experiences</a></li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.fixed-top {
  position: absolute;
}
.nav-item {
  font-size: 14px;
  text-transform: uppercase;
}
</style>