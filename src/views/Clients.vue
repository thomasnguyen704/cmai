<template>
  <div>
    <b-container>
      <b-row class="py-5 section">
        <b-col lg="8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdpz5g3FyC6c1LG5D6oyVgoMj0pVzOZe_Aq6rd8Gp-iVlgrPA/viewform?embedded=true"
            width="100%"
            height="1800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Loading…</iframe
          >
        </b-col>
        <b-col lg="4">
          <div>
            <b-card
              title="Book an Appointment on SquareSpace"
              img-src="https://picsum.photos/600/300/?image=1027"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <b-button
                href="https://squareup.com/appointments/book/kiz99xt2bir5gr/LMQXQF1APV2XD/services"
                variant="danger"
              >
                Book Appointment
              </b-button>
            </b-card>
          </div>

          <h1 class="lead mt-5">Consent Forms</h1>
          <p>
            Please read and sign the consent forms below 24-48 hours before your
            appointment. Forms can be signed on your mobile/smart device.
          </p>
          <ul>
            <li>
              <a
                href="https://www.jotform.com/build/202914287619058"
                target="_blank"
                >Eyebrows, Lip Blush, Eyeliners Permanent Make Up
              </a>
            </li>
            <li>
              <a
                href="https://www.jotform.com/build/203066788062055"
                target="_blank"
                >Lashes Extensions, Brows Lamination, Lash Lift, Tint, Waxing
              </a>
            </li>
            <li>
              <a
                href="https://www.jotform.com/build/203506010848044"
                target="_blank"
                >Facials and Skincare
              </a>
            </li>
            <li>
              <a
                href="https://www.jotform.com/build/210497421489058"
                target="_blank"
                >Manicure and Pedicure
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Clients"
};
</script>

<style scoped>
.section {
  min-height: 50vh;
}
</style>
