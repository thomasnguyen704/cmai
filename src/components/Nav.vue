<template>
  <div>
    <div class="bg-danger text-white py-2">
      <b-container>
        <b-row>
          <b-col>
            <h2 class="cursiveFont">
              Carolynn Mai
              <br />
              Beauty Studio
            </h2>
          </b-col>
          <b-col class="text-right small">
            <a href="tel:205-207-2659" class="text-white">
              Phone: (205)207-2659
            </a>
            <br />
            <a
              class="text-white"
              href="https://square.site/book/LMQXQF1APV2XD/cmai-beauty-studio-huntersville-nc"
            >
              Book an appointment online on Square Space
            </a>
            <br />
            <div class="mt-2">
              <a
                href="https://www.facebook.com/carolynnmai8"
                class="mx-1 btn btn-light fa fa-facebook"
                target="_blank"
              />
              <a
                href="https://www.instagram.com/carolynn_mai8/"
                class="mx-1 btn btn-light fa fa-instagram"
                target="_blank"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-navbar toggleable="lg" type="light" variant="light" class="small">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-container>
          <b-navbar-nav>
            <b-nav-item href="#home">Home</b-nav-item>
            <b-nav-item href="#about">About</b-nav-item>
            <b-nav-item href="#services">Services</b-nav-item>
            <b-nav-item href="#footer">Contact</b-nav-item>
          </b-navbar-nav>
        </b-container>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped></style>
