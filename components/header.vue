<template>
  <nav>
    <div class="menu">
      <ul>
        <li><nuxt-link to="/">home</nuxt-link></li>
        <li><nuxt-link to="/works/">works</nuxt-link></li>
      </ul>
    </div>
    <div class="clearfix"></div>
  </nav>
</template>

<style>
nav {
  width: 100%;
  display: block;
  font-size: 1.6rem;
}
nav .menu {
  float: right;
}
nav .menu li {
  list-style: none;
}
nav .menu li {
  float: left;
  margin: 0 15px;
  text-transform: capitalize;
}
nav .clearfix {
  clear: both;
}
</style>
