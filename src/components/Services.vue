<template>
  <div class="container py-5">
    <h2 class="font-weight-light my-5">Services</h2>

    <p class="lead">Permanent Make Up & Microblading</p>
    <b-card-group columns>
      <b-card v-for="pmu in pmus" :key="pmu.title" :img-src="pmu.img" img-top>
        <b-card-body
          :title="pmu.title"
          :sub-title="pmu.subtitle"
          title-tag="h6"
          class="small"
        >
          <p v-html="pmu.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>

    <hr class="my-5" />

    <p class="lead">Brows</p>
    <b-card-group columns>
      <b-card v-for="brow in brows" :key="brow.title" :img-src="brow.img" img-top>
        <b-card-body
          :title="brow.title"
          :sub-title="brow.subtitle"
          title-tag="h6"
          class="small"
        >
          <p v-html="brow.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>

    <hr class="my-5" />

    <p class="lead">Lashes</p>
    <div class="font-weight-light">
      <p>
        Eyelash Extensions are a cosmetic application used to enhance the
        length, curl, fullness, and thickness of natural eyelashes.
      </p>
      Products used:<br />
      <ul class="mb-5">
        <li>
          Adhesive: Nova Platinum bond lash adhesive: Nova Lash Glue is voted
          number 1 more than any other lash glue company in the World. Oil-Proof
          and instantly waterproof! You can go swimming right after get your
          lashes done without worrying about messing your lashes up. Clients
          will only require touch up every 4 weeks.
        </li>
        <li>
          Lashes: Extreme Lashes, professional handmade volume lashes from
          Parish Lash.
        </li>
      </ul>
    </div>
    <b-card-group columns>
      <b-card v-for="lash in lashes" :key="lash.title" :img-src="lash.img" img-top>
        <b-card-body
          :title="lash.title"
          :sub-title="lash.subtitle"
          title-tag="h6"
          class="small"
        >
          <p v-html="lash.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>

    <hr class="my-5" />

    <p class="lead text-capitalize">Sugaring Hair Removal</p>
    <b-card-group deck>
      <b-card v-for="hair in hairs" :key="hair.title" :img-src="hair.img" img-top>
        <b-card-body
          :title="hair.title"
          :sub-title="hair.subtitle"
          title-tag="h6"
          class="small"
        >
          <p v-html="hair.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>

    <hr class="my-5" />

    <p class="lead">Facials</p>
    <b-card-group columns>
      <b-card
        v-for="facial in facials"
        :key="facial.title"
        :img-src="facial.img"
        img-top
      >
        <b-card-body
          :title="facial.title"
          :sub-title="facial.subtitle"
          title-tag="h6"
          class="small"
        >
          <p v-html="facial.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>

    <hr class="my-5" />

    <p class="lead">Chemical Peels</p>
    <div class="font-weight-light">
      <p>
        PCA chemical peel is a powerful skin exfoliating solution applied to the
        face, neck, or hands to reveal the smooth and clear skin underneath. The
        benefits of chemical peels are included: treat acne, minimize pores,
        reduce fine lines and wrinkles, fade discoloration, lift skin, soothe
        scarring, balance texture, smooth skin, even skin tone. The chemical
        peel procedure involves: cleanser, hot towel, chemical peels,
        moisturizer, sunscreen, and product to take home.
      </p>
    </div>
    <b-card-group deck>
      <b-card v-for="peel in peels" :key="peel.title" :img-src="peel.img" img-top>
        <b-card-body
          :title="peel.title"
          :sub-title="peel.subtitle"
          title-tag="h6"
          class="small"
        >
          <p v-html="peel.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>

    <hr class="my-5" />

    <p class="lead">Extractions</p>
    <b-card-group deck>
      <b-card v-for="extraction in extractions" :key="extraction.title" :img-src="extraction.img" img-top>
        <b-card-body
          :title="extraction.title"
          :sub-title="extraction.subtitle"
          title-tag="h6"
          class="small"
        >
          <p v-html="extraction.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>

    <hr class="my-5" />

    <p class="lead">Nails</p>
    <b-card-group deck>
      <b-card v-for="nail in nails" :key="nail.title" :img-src="nail.img" img-top>
        <b-card-body
          :title="nail.title"
          :sub-title="nail.subtitle"
          title-tag="h6"
          class="small"
        >
          <p v-html="nail.body"></p>
        </b-card-body>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      pmus: [
        {
          title: "3D Microblading",
          img: "https://www.dropbox.com/s/zwn8q6y40j0hwfy/IMG_5932.jpg?raw=1",
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
          img: "",
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
          img: "https://www.dropbox.com/s/nj8h3yq62dulp85/IMG_5781.jpg?raw=1",
          subtitle: "Aproximately 2 hours",
          body: `
          <p>Ombre’ shading gives a soft shades brow pencil look. Once healed, it is more natural looking than solid color. It gives great definition and depth to the brows. The form of eyebrow style does not include any hair like strokes to mimic the look of natural brow hair. The head of the eyebrows starts out light and gradually fades darker all the way to the end of the eyebrows’ tail. This style is suitable for people who are looking for a fierce and sharp look.</p>
          `
        },
        {
          title: "Ombre’ 3D Microblading",
          img: "https://www.dropbox.com/s/mkvq56e3nwfq3yb/IMG_5910.jpg?raw=1",
          subtitle: "Aproximately 2 hours and 30 minutes",
          body: `
          <p>The procedure is the great combination between 3D Microblading and Ombre’ shading Eyebrows. The Microblading pigment is insert in the beginning at the eyebrows’ head, which blends into ombre’ shading throughout the tail. It is perfect for those who are looking for a super natural, yet more profound style of eyebrows.</p>
          `
        },
        {
          title: "Permanent Make Up Touch Up",
          img: "",
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
          img: "",
          subtitle: "50 minutes per sections.",
          body: `
          <p>It takes up to 6 treatments to remove all the pigment within 6 weeks apart between each treatment. Unlike with laser tattoo removal, any facial permanent make up such as microblading, lips, eyeliners can be removed without fear of scaring or losing your hairs. Magic Removal is effective and safest procedure to remove unwanted/ old permanent makeup for eyebrows, lips, and eyeliners.</p>
          `
        }
      ],
      brows: [
        {
          title: "Shaping",
          img: "https://www.dropbox.com/s/z5oplel3bdlf8cf/IMG_5917.jpg?raw=1",
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
          img: "https://www.dropbox.com/s/6wk2625b48uz06t/IMG_5924.jpg?raw=1",
          subtitle: "55 minutes",
          body: `<p>Take your eyebrows lamination service up to notch. When you add tinting to your brow lamination, the results are more defined and bolder beautiful brows. (See “brow lamination” for full description of this service alone)</p>`
        }
      ],
      lashes: [
        {
          title: "Classic Full Set",
          img: "https://www.dropbox.com/s/lqfido084z5we21/IMG_5911.jpg?raw=1",
          subtitle: "100 minutes",
          body: `Extreme Faux mink lash is used only (never real animal hairs). Mink is laser cut much thinner than silk which gives a lightweight feel and natural look. Mink has a matte finish. Very popular with first timers.`
        },
        {
          title: "Hybrid Full Set",
          subtitle: "100 minutes",
          body: `Hybrid sets are a mix between classic and volume. Perfect for clients with sparse lashes, gaps or just anyone looking for a little more fullness than classic but not quite as dense as a volume set. Hybrid sets at CMai Beauty Studio are created using pro-made fans.`
        },
        {
          title: "Volume Full Set",
          img: "https://www.dropbox.com/s/29e8qtb1326fav8/IMG_5915.jpg?raw=1",
          subtitle: "120 minutes",
          body: `Volume sets are multiple very lightweight extensions, made into a "fan" placed onto one natural lash. These sets create a very full, luxurious look. Perfect for clients with thin and sparse lashes and those who love a full, dense look. All volume sets at Cmai Beauty Studio are created using Parish pro-made fans.`
        },
        {
          title: "Wispy Full Set",
          img: "https://www.dropbox.com/s/l3cgfl40prta68g/IMG_5913.jpg?raw=1",
          subtitle: "120 minutes",
          body: `Wispy volume full set is a technique where a pro handmade lash fan is created using 2-9 lashes, then applied using alternating lash lengths, which gives them the appearance of a false strip lashes & Kadashian look. Wispy volume full sets are suitable for clients who desire a spikey false lash look. Wispy volume full set is my favorite!`
        },
        {
          title: "Mega Volume Full Set",
          subtitle: "120 - 150 minutes",
          body: `Mega Volume sets are created with upwards of 10 super tiny, lightweight extensions applied to one natural lash.  The lash extensions used for volume & mega volume are so tiny that they weight nearly nothing so there is no potential damage to your natural lash. Mega Volume lashes create very dark and dramatic sets. All volume sets at Cmai Beauty Studio are created using Parish Lash pro-handmade fans.`
        },
        {
          title: "Partial Set",
          subtitle: "60 minutes",
          body: `This set is subtle and flirty with 50%-75% of your natural lashes filled. This option is for new clients who have not have a refill in over 28-30 days. Partial set takes 60 minutes. It cost 55% of the full set.`
        },
        {
          title: "Classic Refill",
          subtitle:
            "Mini 45 minutes, Standard 60 minutes, Extended refill 75 minutes.",
          body: `Refills are exactly that intermittent appointments to fill in the lashes you've lost due to shedding and natural lash growth cycle or to add more on top of the set you already have. Prices are based on time so the better you care for your lashes, the less time you'll need!  Check out my care guide for tips.  Also, make sure to come to your lash appointment without any eye makeup to maximize your appointment time.`
        },
        {
          title: "Volume or Wispy Refill",
          subtitle:
            "Mini 45 minutes, Standard 60 minutes, Extended refill 75 minutes.",
          body: `Refills are exactly that intermittent appointments to fill in the lashes you've lost due to shedding and natural lash growth cycle or to add more on top of the set you already have. Prices are based on time so the better you care for your lashes, the less time you'll need!  Check out my care guide for tips.  Also, make sure to come to your lash appointment without any eye makeup to maximize your appointment time.`
        },
        {
          title: "Mega Refill",
          subtitle: "75 minutes",
          body: `Refills are exactly that intermittent appointments to fill in the lashes you've lost due to shedding and natural lash growth cycle or to add more on top of the set you already have. Prices are based on time so the better you care for your lashes, the less time you'll need!  Check out my care guide for tips.  Also, make sure to come to your lash appointment without any eye makeup to maximize your appointment time.`
        },
        {
          title: "Lash Extensions Removal",
          subtitle: "25 minutes",
          body: `Cmai Beauty Studio uses cream clash remover to soften the hard bonds from the adhesive so that the extensions slide off. It does not hurt a bit and is actually much quicker then getting the lash extensions put on in the first place. I do not do refill other artist’s work. Instead, I would recommend you to get the lashes extensions removal and full set done.`
        },
        {
          title: "Lash Lift and Lash Tint ",
          img: "https://www.dropbox.com/s/lhwsgirir33asya/IMG_5929.jpg?raw=1",
          subtitle: "60 minutes",
          body: `<p>A lash lift and tint treatment involves two separate processes, both designed to give you beautiful, fluttery eyelashes for up to 6 -8 weeks. It makes yours natural lashes bend upwards, leaving them looking longer, and your eyes more open and bright. Meanwhile, a black color tint is applied to make your eyelashes look darker, thicker, and fuller. It is particularly striking on those with naturally blonde or red lashes.	While lashes extensions can give a more dramatic look, a lash lift requires far less maintenance lasts several weeks longer, and the treatment itself is quicker and cheaper.</p><p>Aftercare: keep your lashes clean and dry for 24 hours after the procedure.</p>`
        },
        {
          title: "Eyelash Tinting",
          subtitle: "20 minutes",
          body: `Tinting is a process of applying a safe, semi-permanent vegetable dye to your eyelashes. This is done to make your dull lashes appear not only darker, but also longer and fuller. Eyelash tinting lasts up to 5 weeks.`
        }
      ],
      hairs: [
        {
          title: "Sugaring Hair Removal",
          subtitle: "",
          body: `
          <p><b>What is sugaring hair removal?</b> <br/> Similar to waxing, sugaring removes body hair quickly pulling the hair from the root. The name of this method comes from the paste itself, which consists of lemon, water, and sugar. The ingredients are all heated together until it reaches a candy-like consistency. Once it cools it’s applied directly to the skin.</p>
          <p>What are the benefits of sugaring over waxing? Applied at body temperature & will not burn the skin; not adhere to live skin cells; minimal irritation, hair removed in the direction of growth, less likely to get ingrown hair; lasts longer & lead to permanent; skin feels smooth and comfortable; no spatula or cotton strips ever required again.</p>
          
          <p><b>Before your appointment:</b> <br/> Grow your hair out to ¼ inch long. This process usually takes about 10-14 days. If it is longer than ½ inch, you might have to trim it before the appointment. A few days before your appointment, lightly exfoliate the area to remove dead skin cells and prevent ingrown hairs. The day before your appointment, lightly exfoliate the area to remove dead ski cells and prevents ingrown hairs. The day before your appointment, come with clean, dry skin. Avoid wearing lotions or creams. To avoid further sensitivity, don’t have any caffeine or alcohol and take an over –the counter pain reliever 30 minutes before.</p>
          
          <p><b>After treatment care:</b> <br/> For 24 hours after sugaring or waxing, keep in mind that your skin might be more sensitive. Avoid direct contact with the sun, such as tanning. And avoid hot baths, further exfoliation, and working out. All of these could aggravate the skin. Proper at home care will help to ensure a better experience for you. It is vital to exfoliate, hydrate, and detox your skin on a regular basis in between treatments. When your sin is in the best condition possible, hair is extracted easier and can grow back properly without causing ingrown hairs.</p>
          <p>What can you do to minimize ingrown hairs and other bumps? You can return to exfoliating about 48 hours after your appointment. Aim to exfoliate two to three times a week to help prevent ingrown hairs between appointments. Some people prefer sugaring because the method cleans out hair follicles, removing dead skin cells and dirt, which can lead to ingrown hairs.</p>
          
          <p><b>How long will the results last?</b> On average, results from both sugaring and waxing last around the same time. It ultimately comes down to how fast your hair grows and how dark your hair is, but usually each session will last around 3 to 4 weeks. If you keep up a regular hair removal schedule, the removal process should become less painful and easier overtime. Some people even report less hair growth overtime, though this isn’t true for everyone.</p>
          `
        }
      ],
      facials: [
        {
          title: "Cmai Beauty Facial",
          img: "https://www.dropbox.com/s/xcpu3zd3j4rl9r7/IMG_5812.jpg?raw=1",
          subtitle: "60 minutes",
          body: `<p>Something magical happens just by working on the face. During our facial rituals, the whole body will let go and its energy will shift into a balanced and more peaceful place. A BEAUTIFUL GLOW WILL SHINE AGAIN. The treatment included cleanser, exfoliate, custom chemical peel, extraction, infusion with hyaluronic acid and complex peptide, skinceuticals serum, Celluma LED light therapy. This treatment is universal facial, which is suitable for all skin type and condition especially who are suffering from acne.</p><p>The benefits include a more hydrated, bright, plump, and clear complexion. Additional, it can also improve signs of aging. The treatment reduces fine lines, and wrinkles increase firmness, evens tone, texture, and brown spots, as well as reducing enlarged pores.</p>`
        },
        {
          title: "Nano Infusion Therapy",
          subtitle: "60 minutes",
          body: `<p>The treatment is a cosmetic procedure that involves repeated nano puncturing the skin creating a micro injures to the skin and allow it to regenerate and create collagen for a youthful, smooth, and healthier skin. As the same time, your skin is infused with hyaluronic acid, and complex peptide. Celluma Led Light therapy is included for calming the skin and allows the product to absorb deeper into the skin.  This treatment lasts up to 3 months.</p><p>Nano infusion therapy is a non-invasive effective treatment for skin conditions including fine lines, wrinkles, scarring, and pigmentation. Nano infusion therapy offers immediate and long term results that enhances product absorption and drive active ingredients deep into the skin fro optimal skin restoration. This treatment stimulates circulation, visibly softens fine lines, reduces scarring, improves hydration levels, helps control breakouts, helps brighten up skin, and reduces puffy or sagging eyes.</p>`
        },
        {
          title: "Sculplla H2 Filler Facial",
          subtitle: "",
          body: `
            <p>The hottest service from Korea, the Carabella “Sculpt” facial utilizes Sculplla™, a serum made of PLLA(Poly-L-Lactic Acid) penetrated ultrasonically and an innovative PLLA/hydrogen mask which further pushes the ingredient deep into the skin. Followed by a 30 minutes Celluma LED light therapy, this facial erases lines, fills in scars and large pores to create smoother, more even- textured brighter skin! Best done 7-10 days apart, see amazing results in as few as 5 visits!</p>
            <ul>
              <li>Pain-Free & Needle Free</li>
              <li>Reduces fine lines & wrinkles</li>
              <li>Tightens & lifts the skin</li>
              <li>Stimulates collagen growth</li>
              <li>Improves skin tone</li>
              <li>Long lasting</li>
            </ul>
          `
        }
      ],
      peels: [
        {
          title: "Sensi Peel",
          subtitle: "",
          body: `Sensi peel is a unique chemical peel option for all patients, including those with sensitive skin. This universal 6% TCA solution and 12% Lactic Acid will improve surface texture and brighten the skin while helping promote an even skin tone. The multi faceted and skin-brightening treatment is an excellent option for sensitive skin and higher Fitzpatrick skin types.`
        },
        {
          title: "Cmai Advanced Peel",
          subtitle: "",
          body: `The most potent of Cmai Beauty Studio is a formula consisting of a blend of powerful ingredients that address most of clients concerns such as even out skin tone, improve texture, and clarity; provide more exfoliation for acne, oilier, thicker, and more resilient skin types, soften fine lines, wrinkles by reducing age spots and sun damage. It is extremely effective on sun-damaged and thickened skin. Cmai Beauty Advanced peel reveal a more youthful, glowing complexion.`
        }
      ],
      extractions: [
        {
          title: "Facial Extraction",
          img: "https://www.dropbox.com/s/59evawx7zijymih/IMG_5755.jpg?raw=1",
          subtitle: "30 minutes",
          body: `Cleanser, hot towel, skin scrubber face spatula is used to remove black and white head, moisturizing.`
        },
        {
          title: "Advanced facial extraction with chemical peel and Celluma Led light therapy",
          subtitle: "60 minutes",
          body: `Cleanser, hot towel, glycolic and salicylic acid peels are applied to soften the comedones and allow the skin to be prepare for the extraction, skin scrubber face spatula is used to remove black and white head, second layer of peel is applied with hyluaronic acid, peptide, moisturizing, Celluma led light therapy to kill the acne bacteria and calm the skin.`
        }
      ],
      nails: [
        {
          title: "Manicure",
          img: "https://www.dropbox.com/s/6ulld7js3pmmvn2/IMG_5934.jpg?raw=1",
          subtitle: "",
          body: `<p>Classic manicure 25 minutes <br/> Gel manicure 40 minutes <br/> Powder manicure 60 minutes</p>`
        },
        {
          title: "Pedicure",
          subtitle: "",
          body: `<p>Classic manicure 35 minutes <br/> Hot stone pedicure 50 minutes <br/> Organic pedicure 60 minutes</p>`
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
.card-img-top {
  padding: 10px;
}
</style>
