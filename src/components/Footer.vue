<template>
  <footer class="py-5 bg-secondary text-light font-weight-light" id="footer">
    <b-container class="pb-5">
      <b-row>
        <b-col md="8" class="px-5">
          <p class="lead">Location</p>
          <b-embed
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCFKg21pXAn0emYGvr7NJXMNCHEBysL998&q=Salons+by+JC+9747+A+Sam+Furr+Rd.,Huntersville+NC+28078"
            allowfullscreen
          >
          </b-embed>
          <address class="mt-4">
            Salons by JC <br />
            C Mai Beauty Studio, Room 8<br />
            9747 Suite A Sam Furr Rd. <br />
            Huntersville, NC 28078 <br />
          </address>
        </b-col>
        <b-col md="4" class="px-5">
          <b-row>
            <b-col>
              <p class="lead">Contact</p>
              Book an appointment
              <p>
                <a
                  class="text-white"
                  href="https://square.site/book/LMQXQF1APV2XD/cmai-beauty-studio-huntersville-nc"
                >
                  online
                </a>
                or call me at
                <a href="tel:980-254-5482" class="text-white">
                  (980) 253-5482
                </a>
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="lead">Socials</p>
              <p>
                <a
                  href="https://www.facebook.com/carolynnmai8"
                  target="_blank"
                  class="mx-1 btn btn-light fa fa-facebook"
                />
                <a
                  href="https://www.instagram.com/carolynn_mai8/"
                  target="_blank"
                  class="mx-1 btn btn-light fa fa-instagram"
                />
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style></style>
