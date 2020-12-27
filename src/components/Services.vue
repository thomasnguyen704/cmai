<template>
  <div class="container py-5 small">
    <h2 class="font-weight-light my-5">Services</h2>

    <p class="lead">Permanent Make Up & Microblading</p>
    <b-card-group columns>
      <b-card v-for="service in mb_services" :key="service.title">
        <b-card-body
          :title="service.title"
          :sub-title="service.subtitle"
          title-tag="h6"
        >
          <p v-html="service.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>

    <hr class="my-5" />

    <p class="lead">Brows</p>
    <b-card-group columns>
      <b-card v-for="service in face_services" :key="service.title">
        <b-card-body
          :title="service.title"
          :sub-title="service.subtitle"
          title-tag="h6"
        >
          <p v-html="service.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>

    <hr class="my-5" />
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      mb_services: [
        {
          title: "3D Microblading",
          subtitle: "Aproximately 2 hours. Cancellation fee $50. Minimal pain.",
          body: `
          <p>Microblading also known as eyebrows embroidery is a semi permanent tattoo that creates hair like-like strokes with the use of a manual pen containing very small needles. These needles implant pigment into the basal layer (bottom layer) of the epidermis. This is a type of cosmetic tattooing and offer realistic results. This method creates very natural appearing eyebrows, and typically you can’t tell the difference between the pigmented lines and natural hair. The results of microblading vary by clients and can last anywhere from 1 to 3 years.</p>
          <p>Microblading is ideal for anyone wanting to enhance the look of your eyebrows. People suffering from alopecia or any other condition that causes hair loss benefit greatly from Microblading, as well as people who simply are not happy with their eyebrows. This method is not recommended for heavily oily and large pores skin. The drier the skin, the longer eyebrows are going to last.</p>
          <p>Why is microblading only semi-permanent? Traditional method of permanent makeup consists of implanting pigment to the dermis. The dermis is live skin made up of blood vessels, sebaceous glands, sweat glands and nerves. Since this layer of skin is alive, it usually retains pigments permanently. In microblading, pigment is deposited right above the dermis into the basal layer of the epidermis. Because the cells of the basal layer continuously divide, the pigment is then broken down and eventually migrates to the surface causing the pigment to fade away.</p>
          <p>What is the maintenance for Microblading PMU?  A mandatory 4-8 week touch up is required to ensure the skin has retained the pigment and/or to insert additional strokes for a fuller look. We recommend that clients schedule a touch up visit once a year to maintain the shape and ensure pigment retention.</p>
          <p>Clients who are NOT eligible: Women who are breastfeeding. Clients who are keloid prone. Clients who are currently using Accutane. Clients who are currently receiving chemotherapy. Skin treatments that include the exfoliation of the brow area (such as microdermabrasion), certain chemical, fruit peeling or laser treatments may affect the result of microblading. Clients must abstain from retinols for 30 days after the treatment. Sunlight – both natural and artificial – can also affect the results.</p>
          <p>During and after treatment. It is normal for your new brows to go through several phases. Immediately following the procedure, they may seem dark and the strokes will appear very crisp. Throughout the weeks, the pigment will soften gradually as it settles into the skin. Once the skin starts to heal, it may appear dry and flake a bit. This is a normal healing process. Once your results are healed completely, the use of SPF is strongly recommended in order to prevent premature fading.</p>
          `
        },
        {
          title: "Cmai X Strokes Eyebrows",
          subtitle: "Aproximately 2 hours and 30 minutes",
          body: `
          <p>Cmai X Strokes Eyebrows are created using a cosmetic tattooing machine with a tiny needle, which injects pigment into the skin.  The pigment is implanted much closer to the surface of the skin than in a traditional tattooing, also the pigment used in cosmetic tattooing is totally different to those used in body tattooing.</p>
          <p>Cmai X Strokes Eyebrows technique to be much less traumatic to the skin than microblading, so causes less bruising and bleeding, saying this depending which needles are used, it can be more uncomfortable, and can take longer than Microblading as you have to work very slowly to ensure the pigment is implanted accurately.</p>
          <p>Cmai X Strokes Eyebrows creates natural hair strokes with digital technique using tiny 1 point needles or Nano needles, but can also add depth and strength easily.</p>
          <p>Results can vary from dramatic looks, mimicking the look of makeup or individual hair strokes for a subtler more natural look.</p>
          <p>Cmai X Strokes Eyebrows tend to retain pigment and last longer in the skin than microblading, after the initial treatment from 4 - 6 weeks touch up I would recommend a color boost at around 9-12 months.</p>
          <p>What's the difference? So, to conclude there isn’t a great deal of difference between 4 techniques, your skin type and life style will ultimately dictate which treatment will work best for you. Feedback from my clients seems to favor X strokes eyebrows because it lasts longer, also there is a distinctive grating noise with Microblading, most clients cringe at, which your don’t get with digital.</p>
          <p>Which do I prefer doing? I prefer the Cmai X strokes eyebrows method, the grating noise and physically cutting someone’s skin isn’t the most pleasant part of my job, whereas the buzzing noise (like and electric toothbrush) and sensation you get with the digital technique I find quite relaxing, I have had clients nod off during the digital treatment because the buzzing is like white noise to a baby!</p>
          `
        },
        {
          title: "Ombre’ Shading Eyebrows",
          subtitle: "Aproximately 2 hours",
          body: `
          <p>Ombre’ shading gives a soft shades brow pencil look. Once healed, it is more natural looking than solid color. It gives great definition and depth to the brows. The form of eyebrow style does not include any hair like strokes to mimic the look of natural brow hair. The head of the eyebrows starts out light and gradually fades darker all the way to the end of the eyebrows’ tail. This style is suitable for people who are looking for a fierce and sharp look.</p>
          `
        },
        {
          title: "Ombre’ 3D Microblading",
          subtitle: "Aproximately 2 hours and 30 minutes",
          body: `
          <p>The procedure is the great combination between 3D Microblading and Ombre’ shading Eyebrows. The Microblading pigment is insert in the beginning at the eyebrows’ head, which blends into ombre’ shading throughout the tail. It is perfect for those who are looking for a super natural, yet more profound style of eyebrows.</p>
          `
        },
        {
          title: "Permanent Make Up Touch Up",
          subtitle: "",
          body: `
          <ul>
            <li>First touch up from 4 -8 weeks | 60 minutes | free</li>
            <li>Yearly touch up between 12 months – 18 months | 90 minutes</li>
            <li>Touch up after 18 months -24 months | 100 minutes | 80% of full price</li>
            <li>Touch up after 24 months | 2 hours | full price</li>
          </ul>
          <p><strong>Please Note:</strong> First touch up is included for the initial procedure price. All permanent make up procedures require two sections to complete the final look. Sometimes third session is required at an extra cost. Almost every Permanent make up cancellation fee is $50. The prices of Microblading PMU are subject to increase in the near future.</p>
          `
        },
        {
          title: "Permanent Make Up Removal",
          subtitle: "50 minutes per sections.",
          body: `
          <p>It takes up to 6 treatments to remove all the pigment within 6 weeks apart between each treatment. Unlike with laser tattoo removal, any facial permanent make up such as microblading, lips, eyeliners can be removed without fear of scaring or losing your hairs. Magic Removal is effective and safest procedure to remove unwanted/ old permanent makeup for eyebrows, lips, and eyeliners.</p>
          `
        }
      ],
      face_services: [
        {
          title: "Shaping",
          subtitle: "20 minutes",
          body: `
          <p>One way eyebrows can help you look and feel more beautiful is by shaping them in the form of sugaring. Sugaring remove unwanted hair in a safe and natural way that suits every skin type. Made of organic sugar, lemon, and water, it does not get more natural than that.</p>
          <p>I will measure your brows according to your bone structure and make measurements that will best flatter you and frame your face.</p>
          `
        },
        {
          title: "Tweezing",
          subtitle: "20 minutes",
          body: `<p>Brow tweezing is a great and recommended option for clients who are hyper sensitive to wax and more specially for clients who just had a peel or are using Retin A or salicylic acid products in their skin care regimen. Since those products perform an in the skin I do not want to double exfoliations by waxing or sugaring. Please inform me of your new skin care routine if you are unsure.</p>`
        },
        {
          title: "Tinting",
          subtitle: "20 minutes",
          body: `<p>Eyebrows tinting is the process of applying semi-permanent dye to enhance the shape and define your brows by darkening your eyebrows to a suitable shade for your complexion. Brow tinting last up to 6 weeks.</p>`
        },
        {
          title: "Shaping or Tweeze Plus Tinting",
          subtitle: "30 minutes",
          body: `<p>Get the beauty of a brow shaping service and give your brow pencil or a powder break. Brow tinting is a great option for clients wanting to add depth and fullness to their brows. Whether for a special occasion or just because, it is a great stand-alone or add on service. It lasts up to 6 weeks depending on your skin care regimen and skin type. The dye is strategically applied to your brow shape and then removed after a few minutes to reveal a fuller looking filled in brow.</p>`
        },
        {
          title: "Lamination and Shaping",
          subtitle: "45 minutes",
          body: `<p>Want fuller looking, wispy, modelesque brows? Then this service is for you! Eyebrows lamination is a brow relaxing treatment that will temporarily realign your hair growth pattern to get your desired shape, and creates shiny, smooth brows. The results last up to 8 weeks.Eyebrows lamination may help address a variety of concerns you many have with your own brows, including: thinning hair that may occur with age; gaps in your brows from over plucking or over waxing in the past; unruly hairs that tend to go different directions despite brushing them; a lack of shape or unevenness. Eyebrows shaping or tweezing is performing after brow lamination. Get ready to be obsessed with your new favorite service!</p>
          <p>After care: keep your brows clean and dry for 24 hours after the procedure. It is recommended using Castrol oil or coconut oil to keep your brows healthy and nourished post-lift. After 24 hours, you may wash your brows, brush them, and apply Castrol oil daily.</p>`
        },
        {
          title: "Lamination and Tint",
          subtitle: "55 minutes",
          body: `<p>Take your eyebrows lamination service up to notch. When you add tinting to your brow lamination, the results are more defined and bolder beautiful brows. (See “brow lamination” for full description of this service alone)</p>`
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-subtitle {
  font-weight: 400;
  font-size: 0.8rem;
}
</style>
