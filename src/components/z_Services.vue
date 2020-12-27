<template>
  <article class="py-5 d-flex align-items-center bg" id="services">
    <b-container>
      <b-row class="mb-5 text-white">
        <b-col cols="12">
          <h2 class="font-weight-light mb-4">
            Personalized Services Tailored For You
          </h2>
          <p>
            Contact me for seasonal specials. To book an appointment, call me at
            <a href="tel:205-207-2659">(205)207-2659</a> or visit my digial
            store-front at
            <a
              href="https://square.site/book/LMQXQF1APV2XD/cmai-beauty-studio-huntersville-nc"
              target="_blank"
              >Square Space</a
            >. Please visit my Square Space site to view a full list services
            and pricing information.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-card-group columns>
            <div v-for="service in services" :key="service.title">
              <b-card
                :title="service.title"
                :sub-title="service.subtitle"
                :img-src="
                  'https://www.dropbox.com/s' + service.image + '?raw=1'
                "
                :img-alt="service.imageAlt"
                img-top
                title-tag="h4"
              >
                <b-card-body>{{ service.body }}</b-card-body>
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
          image: "/cd6zzqkjiq5l1kj/manicure.jpg",
          imageAlt: "manicure and pedicure",
          body:
            "The Signature pedicure treatment includes foot soaking with pink pink Himalayan Mineral soak, nails shaping, cuticles cut, foot scrubbing with a pumice stone, exfoliate with Himalayan scrub infused with collagen and stem cell, moisturizer, and nails polishing. All disposable kits are used. Upgrade to the Hot Stone Pedicure treatment or an Organic Deluxe Spa Pedicure to relax and rejuvinate your precious feet."
        },
        {
          title: "Eye Lash Extensions",
          image: "/r6hc6qqs13ppd5l/lash_ext.jpg",
          imageAlt: "eye lash extensions"
        },
        {
          title: "Microblading",
          subtitle: "Fall Special: 3D Microblading (2 hours $340)",
          image: "/onb7g1ivjsujtim/mb_brow.jpg",
          imageAlt: "micro blading",
          body:
            "If you’ve been penciling your brows every morning, microblading may be for you! Microblading, also known as Phibrows or 3D Eyebrow Embroidery is a relatively new, increasingly popular method to fill in and reshape your natural eyebrows. This is a type of cosmetic tattooing and offers realistic results."
        },
        {
          title: "Facial",
          image: "/p1o9xqki1mb6cfq/facial.jpg",
          imageAlt: "facial",
          body:
            "CMAI Facial mimics hydracial includes: Step 1: Exfoliate Step 2: Glycolic acid peel Step 3: Extraction Step 4: Infusion with hyaluronic acid and peptide Step 5: Celluma LED light therapy."
        },
        {
          title: "Brow Lamination and Tinting",
          image: "/k5vkln7wlhcq6j7/shape_brow.jpg",
          imageAlt: "brow shapping",
          body:
            "Brow lamination provides a set, uniform shape for an extended period of time. Instead of curls, a setting lotion helps brow hair stay brushed up and lifted upward for about six to eight weeks. The lamination treatment comes with the brow shaping during the service, but it is advised to wait a week before tinting the brows."
        },
        {
          title: "XS Microblading",
          subtitle: "Fall Special: XS- Hair Strokes (2 hours, $380)",
          image: "/6so02z3kb4rn57w/lash_lift.jpg",
          imageAlt: "lash lift and tint",
          body:
            "XS- Hair Strokes are the newest eyebrows permanent makeup trend that are created using a cosmetic tattooing machine with a tiny needle which injects pigment into the skin.  The pigment is implanted much closer to the surface of the skin than in a traditional tattooing, also the pigment used in cosmetic tattooing is totally different to those used in body tattooing."
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg {
  background: url(https://www.dropbox.com/s/mp9em2o54vi0n10/makeup.jpg?raw=1) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
