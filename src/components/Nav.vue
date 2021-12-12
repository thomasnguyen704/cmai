<template>
  <div>
    <div class="bg-danger text-white py-2">
      <b-container>
        <b-row>
          <b-col>
            <h2 class="cursiveFont">
              Carolynn Mai <br />
              Beauty Studio
            </h2>
          </b-col>
          <b-col class="text-right small">
            <a href="https://maps.google.com/?q=Salons+by+JC+9747+A+Sam+Furr+Rd.,Huntersville+NC+28078">
              <address class="mt-1">
                C Mai Beauty Studio<br />
                9747_A Sam Furr Rd. Suite 08 Unit C <br />
                Huntersville, NC 28078
              </address>
            </a>
            <a href="tel:205-207-2659" class="text-white">
              Phone: (205) 207-2659
            </a>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-navbar toggleable="lg" type="light" variant="light" class="small">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-container>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="services">Services</b-nav-item>
            <b-nav-item to="clients">Clients</b-nav-item>
            <b-nav-item href="https://carolynn-mai.square.site/">Products</b-nav-item> 
            <b-nav-item to="terms">Terms & Policies</b-nav-item>
            <b-nav-item to="faq">FAQ</b-nav-item>
            <b-nav-item to="footer">Contact</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item 
              href="https://www.facebook.com/carolynnmai8" 
              target="_blank"
            >
              <span class="fa fa-facebook fa-2x" target="_blank"></span>
            </b-nav-item>
            <b-nav-item
              href="https://www.instagram.com/cmaibeautystudio/" 
              target="_blank"
            >
              <span class="fa fa-instagram fa-2x"></span>
            </b-nav-item>
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

<style scoped>
.navbar .fa {
  color: black;
}
address {
  color: white;
  margin: 0;
}
</style>
