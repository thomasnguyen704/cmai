<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white" sticky ref="navbar">
      <b-container>
        <b-navbar-brand href="/">
          <b-img class="fluid" src="https://www.dropbox.com/s/2lwotslgjbikr7f/logo.png?raw=1"/>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="small">
            <b-nav-item href="/" @click="scrollMeToNavbar('navbar')" >Home</b-nav-item>
            <b-nav-item to="services" @click="scrollMeTo('navbar')">Services</b-nav-item>
            <b-nav-item to="clients" @click="scrollMeTo('navbar')" >Consultations</b-nav-item>
            <b-nav-item href="https://carolynn-mai.square.site/" >Products</b-nav-item>
            <b-nav-item to="terms" @click="scrollMeTo('navbar')" >Terms & Policies</b-nav-item>
            <b-nav-item to="faq" @click="scrollMeTo('navbar')">FAQ</b-nav-item>
            <b-nav-item @click="scrollMeTo('footer')">Contact & Location</b-nav-item>
            <b-nav-item 
              href="https://squareup.com/appointments/book/kiz99xt2bir5gr/LMQXQF1APV2XD/services"
              target="blank"
              ><span class="text-danger">Book an Appointment</span>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://www.facebook.com/carolynnmai8" target="_blank">
              <span class="fa fa-facebook fa-2x" target="_blank"></span>
            </b-nav-item>
            <b-nav-item href="https://www.instagram.com/cmaibeautystudio/" target="_blank">
              <span class="fa fa-instagram fa-2x"></span>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <article class="bg-light">
      <router-view />
    </article>

    <footer class="bg-dark text-white" ref="footer">
      <b-container class="py-5">
        <b-row>
          <b-col sm=6 md=2 class="text-center">
            <b-img fluid src="https://www.dropbox.com/s/2lwotslgjbikr7f/logo.png?raw=1" class="invert"/>
            <p class="my-3">
              <a href="https://www.facebook.com/carolynnmai8" target="_blank" class="m-1 btn btn-light fa fa-facebook" />
              <a href="https://www.instagram.com/cmaibeautystudio/" target="_blank" class="m-1 btn btn-light fa fa-instagram" />
            </p>
          </b-col>

          <b-col sm=6 md=4>
            <a href="https://maps.google.com/?q=Salons+by+JC+9747+A+Sam+Furr+Rd.,Huntersville+NC+28078" >
              <address>
                C Mai Beauty Studio<br />
                9747_A Sam Furr Rd. Suite 08 Unit C <br />
                Huntersville, NC 28078
              </address>
            </a>
            <p>
              Find me inside Salons by JC between Kohls and Old Navy in Norcorss Shopping Center. You can call me at <a href="tel:205-207-2659">(205) 207-2659</a> to schedule a free phone consultation.
            </p>

          </b-col>

          <b-col>
            <b-embed
              frameborder="0"
              style="border:0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCFKg21pXAn0emYGvr7NJXMNCHEBysL998&q=Salons+by+JC+9747+A+Sam+Furr+Rd.,Huntersville+NC+28078"
              allowfullscreen
            />
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    scrollMeToNavbar(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
};
</script>

<style>
* {
  border-radius: 0px !important;
}
.navbar-brand img {
  width: 30px;
  height: 30px;
}
article {
  padding-bottom: 20vh;
}
footer {
  font-weight: 300;
}
footer a {
  color: skyblue;
}
.strong {
  font-weight: 600 !important;
}
.invert {
  filter: invert(100%);
}
footer .fa {
  width: 40px;
}
footer img {
  max-height: 70%;
}
</style>
