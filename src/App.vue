<template>
  <div>
    <Nav class="sticky-top" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer
  }
};
</script>

<style>
article {
  min-height: 45vh;
}
footer {
  min-height: 25vh;
}
.hidden {
  display: none;
}
</style>
