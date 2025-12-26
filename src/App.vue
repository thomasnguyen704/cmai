<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <b-modal
      id="my-modal"
      ref="myModal"
      title="Sale & Promotion"
      header-bg-variant="danger"
      header-text-variant="light"
      hide-footer
    >
      <ul>
        <li>
          <strong>Full Lash Set Discount</strong> <br />
          Enjoy 10% off all full lash sets at our Huntersville location. Limited time—book your appointment today!
        </li>
        <li>
          <strong>Client Referral Program</strong> <br />
          Refer a friend and receive $10 in studio credit for both you and your referral when they book their first service.
        </li>
        <li>
          <strong>Add-On Eyebrow Waxing</strong> <br />
          Add eyebrow waxing to your lash appointment and enjoy $2 off.
        </li>
        <li>
          <strong>Client Feedback Thank You</strong> <br />
          Love your experience? Share your genius feedback with a 5-star review on Google, or Facebook mom groups, and receive $2 off per platform as our thank-you.
        </li>
      </ul>
      <p class="mt-4">
        <em>Reminder: To ensure fairness, only one promotion or discount can be used per appointment.</em>
      </p>
    </b-modal>
    <b-navbar toggleable="lg" type="light" variant="white" sticky ref="navbar">
      <b-container>
        <b-navbar-brand href="/">
          <b-img
            class="fluid"
            src="https://www.dropbox.com/s/2lwotslgjbikr7f/logo.png?raw=1"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="small">
            <b-nav-item href="/" @click="scrollMeToNavbar('navbar')">
              Home
            </b-nav-item>
            <b-nav-item to="services" @click="scrollMeTo('navbar')">
              Services
            </b-nav-item>
            <b-nav-item to="clients" @click="scrollMeTo('navbar')">
              Consultations
            </b-nav-item>
            <b-nav-item href="https://carolynn-mai.square.site/">
              Products
            </b-nav-item>
            <b-nav-item to="terms" @click="scrollMeTo('navbar')">
              Terms & Policies
            </b-nav-item>
            <b-nav-item to="faq" @click="scrollMeTo('navbar')">
              FAQ
            </b-nav-item>
            <b-nav-item @click="scrollMeTo('footer')">
              Contact & Location
            </b-nav-item>
            <b-nav-item to="pricing" @click="scrollMeTo('navbar')">
              Pricing
            </b-nav-item>
            <b-nav-item
              href="https://squareup.com/appointments/book/kiz99xt2bir5gr/LMQXQF1APV2XD/services"
              target="blank"
            >
              <span class="text-danger">Book an Appointment</span>
            </b-nav-item>
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
        </b-collapse>
      </b-container>
    </b-navbar>

    <article class="bg-light">
      <router-view />
    </article>

    <footer class="bg-dark text-white" ref="footer">
      <b-container class="py-5">

        <b-row>
          <b-col>
            <a href="https://maps.app.goo.gl/hLsPxBg2VgZiDS8W9">
              <address class="mt-4">
                C Mai Beauty (Huntersville)<br />
                13111 Rosedale Hill Ave. <br />
                Huntersville, NC 28078
              </address>
            </a>
            <p>
              Find me inside Carolina Lashes. <br />
              Call or text at <a href="tel:205-207-2659">(205) 207-2659</a>
            </p>
          </b-col>
          <b-col>
            <b-embed
              frameborder="0"
              style="border:0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.817876132296!2d-80.8614253!3d35.409764599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a92e51adca5f%3A0x4afa617b6d23a1a4!2sCarolina%20Lashes%20%26%20Beautique!5e0!3m2!1sen!2sus!4v1766765671255!5m2!1sen!2sus"
              allowfullscreen
            />
          </b-col>
        </b-row>

        <hr class="my-5 border-grey" />

        <b-row>
          <b-col>
            <a href="https://maps.app.goo.gl/RQcJRaxeUDecR7f86">
              <address class="mt-4">
                C Mai Beauty (Uptown Chalrotte)<br />
                316 East Blvd #204<br />
                Charlotte, NC 28203
              </address>
            </a>
            <p>
              Find me inside Le Wink Lashes & Brows.<br />
              Call or text at <a href="tel:205-207-2659">205-207-2659</a>
            </p>
          </b-col>
          <b-col>
            <b-embed
              frameborder="0"
              style="border:0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.8439504057365!2d-80.85883652339687!3d35.210355772742986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569f7838b0c417%3A0x704b0f582c9b6548!2sLe%20Wink%20Lashes%20%26Brows!5e0!3m2!1sen!2sus!4v1751671432703!5m2!1sen!2sus"
              allowfullscreen
            />
          </b-col>
        </b-row>

        <hr class="my-5 border-grey" />

        <b-row class="py-5">
          <b-col class="text-center">
            <b-img
              src="https://www.dropbox.com/s/2lwotslgjbikr7f/logo.png?raw=1"
              class="invert footer-img"
            />
            <p class="my-3">
              <a
                href="https://www.facebook.com/carolynnmai8"
                target="_blank"
                class="m-1 btn btn-light fa fa-facebook"
              />
              <a
                href="https://www.instagram.com/cmaibeautystudio/"
                target="_blank"
                class="m-1 btn btn-light fa fa-instagram"
              />
            </p>
            <p>
              Call me at <a href="tel:205-207-2659">205-207-2659</a>
              to schedule a free phone consultation.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.myModal.show();
  },
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
.modal ul li {
  margin-bottom: 1rem;
}
.strong {
  font-weight: 600 !important;
}
.invert {
  filter: invert(100%);
}
.border-grey {
  border-color: grey;
}
footer {
  font-weight: 300;
}
footer a {
  color: skyblue;
}
footer .fa {
  width: 40px;
}
.footer-img {
  width: 25%;
}
</style>
