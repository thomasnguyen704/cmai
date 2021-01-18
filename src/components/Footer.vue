<template>
  <footer class="py-5 bg-secondary text-light font-weight-light">
    <b-container class="pb-5">
      <b-row>
        <b-col md="8" class="px-5">
          <p class="lead">Location</p>
          <b-embed
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCFKg21pXAn0emYGvr7NJXMNCHEBysL998&q=Salons+by+JC+9747+A+Sam+Furr+Rd.,Huntersville+NC+28078"
            allowfullscreen
          />
          <a href="https://maps.google.com/?q=Salons+by+JC+9747+A+Sam+Furr+Rd.,Huntersville+NC+28078">
            <address class="mt-4">
              Salons by JC <br />
              C Mai Beauty Studio, Room 8 <br />
              9719 Sam Furr Rd. Unit C <br />
              Huntersville, NC 28078
            </address>
          </a>
        </b-col>
        <b-col md="4" class="px-5">
          <b-row>
            <b-col>
              <p class="lead">Contact</p>
              <p>
                Call me at
                <a href="tel:205-207-2659" class="text-white">
                  (205)207-2659
                </a>
                to schedule a free phone consulation
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

<style scoped>
address {
  color: white;
}
</style>
