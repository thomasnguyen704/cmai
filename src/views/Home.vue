<template>
  <div>
    <b-jumbotron class="j-bg">
      <b-container>
        <b-row class="section text-center">
          <b-col md="12" class="my-auto">
            <h1 class="pink-font cursiveFont">C Mai Beauty Studio</h1>
            <p class="lead-lg">
              At C Mai Beauty Studio, we provide advanced services including eyelash extensions, skincare, permanent makeup procedures, and waxing to cater to your beauty requirements. We prioritize listening to your concerns and delivering personalized, top-notch client care. Our goal is to make quality care convenient, comfortable, and affordable. We are dedicated to going the extra mile to ensure your visit is accommodated with utmost satisfaction.
            </p>
            <p>
              <b-button pill variant="outline-danger" class="mx-1" to="clients"
                >Click For Free Consultation</b-button
              >
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>

    <div>
      <div class="bg-danger">
        <b-container>
          <b-row class="py-5 section text-white">
            <b-col md="6" class="my-auto">
              <h1 class="display-3">Hi Beautiful!</h1>
              <p class="lead-lg">
                Thank you for your continue supporting. My name is Carolynn Mai,
                the owner and founder of CMAI BEAUTY STUDIO. The services that I
                offer come over 9 years of experience in the Beauty Industry. I
                have provided services as a Permanent Make Up Artist,
                Esthetician, Lashes Technician, and Nail Manicurist. To ensure
                my services are performed at a high level, I have completed
                rigorous trainings.
              </p>
            </b-col>
            <b-col class="my-auto">
              <b-img
                fluid
                src="https://www.dropbox.com/s/o0fvmr3at3x1976/MiaRosePhotography-575.png?raw=1"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>

      <b-container>
        <b-row class="section pt-5">
          <b-col sm="4">
            <img 
              src="https://www.dropbox.com/s/3k4z8dilv6vux3z/about.jpg?raw=1" 
              class="rounded img-fluid" 
              alt="Carolynn"
            >
          </b-col>
          <b-col>
            <h5>Carolynn Mai</h5>
            <p>
              The talented owner of CMAI BEAUTY STUDIO, boasts more than a decade of experience in the Beauty Industry, excelling in Permanent Makeup, Lash artistry, and Skincare. Her expertise is well-supported by extensive training and certifications acquired since 2011, including specialized Microblading and Permanent Makeup courses. Carolynn's commitment to top-notch service is evident in her proficiency in Lash Extensions, MediClinical Aesthetics, and Laser treatments. Her educational achievements include graduating from the esteemed Aveda Institute Birmingham's esthetician program, where she refined her skills under expert mentorship.
            </p>
            <p>
              Driven by a passion for beauty that ignited during her time in Vietnam in 2010, Carolynn was inspired by the transformative art of Microblading. This passion led her to pursue a career in the United States, blending her manicurist background with Microblading expertise. Her personal skincare journey, marked by struggles with acne since adolescence, fueled her determination to explore various treatments, eventually finding solace in glycolic acid peels during pregnancy. Carolynn's quest for clear, radiant skin not only benefitted her but also inspired her to help others achieve healthy skin. Her dedication to skincare and beauty showcases her unwavering commitment to excellence and transformation.
            </p>
          </b-col>
        </b-row>

        <b-row class="section pt-5">
          <b-col sm="4">
            <img 
              src="https://www.dropbox.com/scl/fi/x1a4qkwk4pwx9gvv9rcpq/ShaylaAustin.jpg?rlkey=o2lp4zznikb4b9ix0dws99tjg&raw=1" 
              class="rounded img-fluid" 
              alt="Shayla"
            >
          </b-col>
          <b-col>
            <h5>Shayla Austin</h5>
            <p>
              A talented esthetician from Akron, Ohio, with a deep-rooted passion for enhancing beauty through the art of lashes. With 8 years of experience in the field, Shayla has established herself as a sought-after self-employed esthetician known for her precision and attention to detail. Through her commitment to perfection, Shayla has built a reputation for delivering exceptional lash services, earning the trust and admiration of clients who seek unparalleled quality. Shayla invites individuals to experience her dedication to elevating their lash game to new levels of beauty and perfection.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
p {
  font-weight: 200;
}
.jumbotron {
  min-height: 60vh;
  margin: 0px;
}
.j-bg {
  background: url(https://www.dropbox.com/s/dnqg7zudaanq997/models.jpeg?raw=1)
    no-repeat center center fixed;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.j-bg::before {
  background-color: rgba(255, 255, 255, 0.9);
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.pink-font {
  color: #d9597b;
  text-shadow: 2px 3px 10px grey;
  font-size: 6rem;
}
.lead-lg {
  font-size: 1.5rem;
  font-weight: 200;
}
.bg-danger {
  background-color: #d9597b !important;
}
.section-scroll {
  height: 70vh;
  overflow-x: scroll;
}
.section,
.section-col {
  min-height: 50vh;
}
.section-bg {
  background: url(https://www.dropbox.com/s/3k4z8dilv6vux3z/about.jpg?raw=1)
    no-repeat center top;
  background-size: cover;
}
.section-bg2 {
  background: url(https://www.dropbox.com/scl/fi/x1a4qkwk4pwx9gvv9rcpq/ShaylaAustin.jpg?rlkey=o2lp4zznikb4b9ix0dws99tjg&raw=1)
    no-repeat center top;
  background-size: cover;
}
.section-spacer {
  margin: 6rem 0 5rem 0;
}
</style>
