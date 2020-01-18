<template>
  <nav>
    <div class="menu">
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/about/">about</a></li>
        <li><a href="/works/">works</a></li>
        <!--<li><a href="/contact/">contact</a></li>-->
      </ul>
    </div>
    <div class="clearfix"></div>
  </nav>
</template>

<style>
nav {
  width: 100%;
  display: block;
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
