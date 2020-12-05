<template>
  <article class="py-5 d-flex align-items-center bg-light" id="services">
    <b-container>
      <b-row class="mb-5">
        <b-col cols="12">
          <h2 class="font-weight-light mb-4">
            Personalized Services Tailored For You
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-card-group columns>
            <div v-for="service in services" :key="service.title">
              <b-card
                :title="service.title"
                :img-src="
                  'https://www.dropbox.com/s' + service.image + '?raw=1'
                "
                :img-alt="service.imageAlt"
                img-top
                title-tag="h4"
                text-variant="white"
                bg-variant="light"
                overlay
              >
              </b-card>
            </div>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </article>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          title: "Manicure and Pedicure",
          image: "/h7ktypg0i877uq6/emma%204%20mo%202.jpg",
          imageAlt: "Manicure and Pedicure"
        },
        {
          title: "Eye Lash Extensions",
          image: "/h7ktypg0i877uq6/emma%204%20mo%202.jpg",
          imageAlt: "Eye Lash Extensions"
        },
        {
          title: "Microblading",
          image: "/h7ktypg0i877uq6/emma%204%20mo%202.jpg",
          imageAlt: "Microblading"
        },
        {
          title: "Facial 1",
          image: "/v7ghizt4c0fqdsm/DSC04701.png",
          imageAlt: "Facial"
        },
        {
          title: "Facial 2",
          image: "/v7ghizt4c0fqdsm/DSC04701.png",
          imageAlt: "Facial"
        },
        {
          title: "Facial 3",
          image: "/v7ghizt4c0fqdsm/DSC04701.png",
          imageAlt: "Facial"
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-title {
  text-shadow: 2px 2px 4px #000000;
}
</style>
