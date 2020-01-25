<template>
  <div>
    <Cover />
    <Main />
    <!-- SCRIPTS -->
    <!-- JQuery -->
    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="js/mdb.min.js"></script>
    <!-- Initializations -->
    <script type="text/javascript">
      // Animations initialization
      new WOW().init();

    </script>
    
  </div>
</template>

<script>
import Main from "@/components/main.vue";
import Cover from "@/components/cover.vue";
export default {
  layout: 'index',
  components: {
    Main, Cover,
  },
}
</script>
<style>
.rgba-black-light, .rgba-black-light:after {
  background-color: rgba(0,0,0,0.7);
}
</style>