<template>
  <div class="container">
    <b-card no-body class="nav-card pt-4">
      <b-tabs pills small>
        <b-tab title="Facials" active>
          <b-card-group columns>
            <b-card v-for="facial in facials" :key="facial.title" :img-src="facial.img" img-top>
              <b-card-body :title="facial.title" title-tag="h6" class="small">
                <p v-html="facial.body"></p>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-tab>
        <b-tab title="Lashes">
          <b-row class="font-weight-light">
            <b-col md="4">
              <b-img src="https://www.dropbox.com/s/yytd1x11u6uaxd9/image8.jpeg?raw=1" fluid />
            </b-col>
            <b-col md="8">
              <p>Cmai’s Eyelashes Extensions are a cosmetic application used to enhance the length, curl, fullness, and thickness of natural eyelashes.</p>
              <div>
                Products used: Cmai’s adhesive and Cmai’s Lashes<br />
                <ul class="mb-5">
                  <li>Cmai‘s adhesive: The best lashes adhesive on the market! Cmai’s adhesive included instant oil proof, water proof, heat resistant, latex free, formaldehyde free, paraben free. You can go swimming right after the lashes appointment without worrying bout messing up your lashes like other adhesive that you have to wait 24 hours for them to dry completely. </li>
                  <li>Cmai’s lashes: Cmai’s 100% handmade luxury ellipse flat 0.15 classic lashes with split tips offer great retention due to their wider bonding surface. They are also softer, lighter, causing less damage to the natural lashes. Cmai‘s premium handmade cashmere lashes 0.03 mm volume lashes creates a larger contact area between natural lashes and an extension, providing a stronger, longer lasting bond. Cashmere lashes are also thinner from top to bottom, making them more flexible and incredible soft to touch. Cashmere eyelashes extensions are the newest trend in the lash industry.</li>
                </ul>
              </div>
            </b-col>
          </b-row>
          <b-card-group columns>
            <b-card v-for="lash in lashes" :key="lash.title" :img-src="lash.img" img-top>
              <b-card-body :title="lash.title" title-tag="h6" class="small">
                <p v-html="lash.body"></p>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-tab>
        <b-tab title="Permanent Makeup">
          <div class="font-weight-light">
            <p>Eyebrows, lips blushing, or eyeliners permanent makeup procedure normally requires multiple treatment sessions. For best results, clients will be required to return for at least one touch-up appointment. This will take place within 4-8 weeks after the initial procedure. Those with oily skin may require an additional touch-up.</p>
          </div>
          <b-card-group columns>
            <b-card v-for="pmu in pmus" :key="pmu.title" :img-src="pmu.img" img-top>
              <b-card-body :title="pmu.title" title-tag="h6" class="small">
                <p v-html="pmu.body"></p>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-tab>
        <b-tab title="Waxing">
          <div class="font-weight-light"></div>
          <b-card-group columns>
            <b-card v-for="waxing in waxings" :key="waxing.title" :img-src="waxing.img" img-top>
              <b-card-body :title="waxing.title" title-tag="h6" class="small">
                <p v-html="waxing.body"></p>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-tab>
        <b-tab title="Makeup">
          <div class="font-weight-light"></div>
          <b-card-group columns>
            <b-card v-for="makeup in makeups" :key="makeup.title" :img-src="makeup.img" img-top>
              <b-card-body :title="makeup.title" title-tag="h6" class="small">
                <p v-html="makeup.body"></p>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      pmus: [
        {
          title: "Microblading",
          subtitle: "",
          img: "https://www.dropbox.com/s/b4xezhj0d4gijge/image13.jpeg?raw=1",
          body: `
            <p>Microblading also known as eyebrows embroidery or 3D Microblading is a semi permanent tattoo that creates hair like-like strokes with the use of a handheld manual tool containing very small needles. This method creates very natural appearing eyebrows, and typically you can’t tell the difference between the pigmented lines and natural hair. The results of microblading vary by clients last around 1 year.</p>
            
            <p>During and after treatment, it is normal for your new brows to go through several phases. Immediately following the procedure, they may seem dark and the strokes will appear very crisp. Throughout the weeks, the pigment will soften gradually as it settles into the skin. Once the skin starts to heal, it may appear dry and flake a bit. This is a normal healing process. Once your results are healed completely, the use of SPF is strongly recommended in order to prevent premature fading. Microblading is best suites for clients who have dry skin type.</p>
          `
        },
        {
          title: "Cmai ‘s Hairstrokes Eyebrows",
          subtitle: "",
          img: "https://www.dropbox.com/s/ejxt1vi48gbuckx/image3.jpeg?raw=1",
          body: `<p>Cmai ‘s Hairstrokes Eyebrows also known as machine nano hairstrokes, or Hairstrokes eyebrows is the most advance and latest eyebrows pmu technique, which creates natural hair strokes with digital technique using tiny 1- 9 point needles. Cmai Hairstrokes Eyebrows technique to be much less traumatic to the skin than Microblading, so causes less bruising and bleeding, better healing process, better pigment retention, longer lasting result up to 3 years or more. Cmai ‘s Hairstrokes Eyebrows are best suite for individuals looking for the most natural results possible and often recommended for those with thicker, oily skin or have previous eyebrows done.</p>`
        },
        {
          title: "Ombre’ Shading Eyebrows",
          img: "https://www.dropbox.com/s/gjbc7bpp8sgflpc/image7.jpeg?raw=1",
          subtitle: "",
          body: `
            <p>Ombre’ shading gives a soft shades brow pencil look. Once healed, it is more natural looking than solid color. It gives great definition and depth to the brows. The form of eyebrow style does not include any hair like strokes to mimic the look of natural brow hair. The head of the eyebrows starts out light and gradually fades darker all the way to the end of the eyebrows’ tail. The Ombre’ shading eyebrows last from 2- 5 years. This style is suitable for people who are looking for a fierce and sharp makeup look.</p>
          `
        },
        {
          title: "Ombre’ Microblading",
          subtitle: "",
          img: "https://www.dropbox.com/s/5vi4j4rjsuapkws/image2.jpeg?raw=1",
          body: `
          <p>The procedure is the great combination between Microblading and Ombre’ shading Eyebrows. The Microblading pigment is insert in the beginning at the eyebrows’ head, which blends into Ombre’ shading throughout the tail. Ombre’ Microblading lasts around 2 years. It is perfect for those who are looking for a super natural, yet more profound style of eyebrows.</p>
          `
        },
        {
          title: "Eyebrows Lamination",
          subtitle: "",
          img: "https://www.dropbox.com/s/56vm7k7tfqfqnir/image1.jpeg?raw=1",
          body: "This latest brow grooming procedure enables the brow hairs to be redirected and set in an even shape—creating a thicker, fuller feel to the brow. It&#39;s almost like a perm for the brows that last up to 6 weeks. This is not a semi permanent make up and best suite for clients who has good amount of un rules natural eyebrows and those to get the microblading look temporary."
        },
        {
          title: "Lips Blushing",
          subtitle: "",
          img: "https://www.dropbox.com/s/88qui8m8fp9n820/image4.jpeg?raw=1",
          body: `
            <p>Lips Blushing is a form of semi-permanent makeup that enhances and defines both the natural shape and color of a client’s natural lips. It can also be used to help mask scars and imperfections of the lips and to create asymmetry. Lip blushing is for you if: You have pale or dark to black natural lips. You want to redefine the contours of your lips. You want to achieve a fuller lip look without fillers.</p>
          `
        },
        {
          title: "Eyeliners Permanent Makeup",
          subtitle: "Aproximately 2 hours and 30 minutes",
          img: "https://www.dropbox.com/s/zskwug373glfr4j/image6.jpeg?raw=1",
          body: `
            <p>Eyeliners permanent make up eliminates the need to apply eyeliner with makeup, and can be done on the upper and lower lashes lines. Permanent eyeliners can also frame the eyes and make eyelashes appear thicker, darker, and fuller. There are no side effects, no scarring, safe &amp; easy, save time, no more smeared eyeliner, extremely natural looking results that last up to 5 years or more.</p>

            <p>Most of us aren’t so blessed as to have eyes that stand out without wearing eyeliner. However, if your eyeliner is less than perfect, it will create the appearance of premature aging. Cmai Beauty Eyeliners creates natural-looking defined eyes 24/7 no matter what you are doing.</p>
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
            <p><strong>Please Note:</strong> First touch up is included for the initial procedure price. All permanent make up procedures require two sections to complete the final look. Sometimes third session is required at an extra cost. Almost every Permanent make up cancellation fee is up to $100. The prices of Permanent make up are subject to increase in the near future.</p>
          `
        }
      ],
      brows: [
        {
          title: "Shaping",
          //img: "https://www.dropbox.com/s/z5oplel3bdlf8cf/IMG_5917.jpg?raw=1",
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
      ],
      lashes: [
        {
          title: "Classic Lashes",
          img: "https://www.dropbox.com/s/eoaz2ila2crauti/classic%20lash.jpeg?raw=1",
          subtitle: "",
          body: `Cmai’s 100% handmade luxury ellipse flat 0.15 lashes are used to give a lightweight soft feel, natural look, longer lasting. Best suites for clients who has great amount of natural medium length lashes, get lashes for the first time and those who love natural looking lashes.`
        },
        {
          title: "Hybrid Lashes",
          subtitle: "",
          img: "https://www.dropbox.com/s/0lnuwbcrp4bs52x/image17.jpeg?raw=1",
          body: `Hybrid sets are a mixture between classic and volume. Perfect for clients with sparse lashes, gaps or just anyone looking for a little more fullness than classic but not quite as dense as a volume set. Cmai ‘s premium handmade cashmere lashes 0.03 and Cmai’s 100% handmade luxury ellipse flat 0.15 are used.`
        },
        {
          title: "Wet Hybrid Lashes",
          img: "https://www.dropbox.com/s/fu0x33mcd84svjd/image18.jpeg?raw=1",
          body: `Wet hybrid sets are a mixture between classic and volume lash extensions that are wet. Imagine what your set of extensions would look like after you step out of your shower. Yep, this is when all the volume fans close up. Perfect for clients with short, sparse lashes, or just anyone looking for a little more fullness than classic but still want natural looking. Cmai ‘s premium handmade cashmere lashes 0.03 and Cmai’s 100% handmade luxury ellipse flat 0.15 are used.`
        },
        {
          title: "Volume Lashes",
          img: "https://www.dropbox.com/s/a1cfgfi8zzr10ye/volume%20lash.jpeg?raw=1",
          subtitle: "",
          body: `Volume lashes extensions are multiple very lightweight extensions, made into a &quot;fan&quot; placed onto one natural lash. These sets create a very full, luxurious look. Perfect for clients with thin and sparse lashes and those who love a full, dense look. All volume sets at Cmai Beauty Studio are created by 100% handmade that using Cmai ‘s premium handmade cashmere lashes 0.03.`
        },
        {
          title: "Wispy Lashes",
          subtitle: "",
          img: "https://www.dropbox.com/s/k8ab05hun1ozanf/image9.jpeg?raw=1",
          body: `Wispy lashes are the trendiest style because they look fluffy and feathery, so very natural. They are perfect for people who prefer a dramatic, makeup look and eyelashes that stand out. Wispy lashes set is my favorite! Wispy lashes are created by combining of 5-9 wet lashes to create spikes to apply on the first layer of natural lashes. For the second and third layers of natural lashes, either hybrid or volume lashes base are applied. Spikes are 2-4 mm longer than the base. Cmai ‘s premium handmade cashmere lashes 0.03 and/or Cmai’s 100% handmade luxury ellipse flat 0.15 are used.`
        },
        {
          title: "Mega Volume Lashes",
          subtitle: "",
          img: "https://www.dropbox.com/s/4sqo73byxfsluq8/image10.jpeg?raw=1",
          body: `Mega Volume sets are created with around 10 super tiny, lightweight extensions applied to one natural lash. The lash extensions used for volume &amp; mega volume are so tiny that they weight nearly nothing so there is no potential damage to your natural lash. Mega Volume lashes create very dark and dramatic sets. All volume sets at Cmai Beauty Studio are created using Cmai ‘s premium 100% handmade cashmere lashes 0.03.`
        },
        {
          title: "Refill Lashes",
          subtitle: "",
          body: `Refill lashes are exactly that intermittent appointments to fill in the lashes you&#39;ve lost due to shedding and natural lash growth cycle or to add more on top of the set you already have. Prices are based on time so the better you care for your lashes, the less time you&#39;ll need! Check out my care guide for tips. Also, make sure to come every 2-3 weeks to your lash appointment without any eye makeup to maximize your appointment time.`
        },
        {
          title: "Lash Extensions Removal",
          subtitle: "",
          body: `Cmai Beauty Studio uses cream clash remover to soften the hard bonds from the adhesive so that the extensions slide off. It does not hurt a bit and is actually much quicker then getting the lash extensions put on in the first place.`
        },
        {
          title: "Lash Lift and Tint",
          subtitle: "",
          img: "https://www.dropbox.com/s/9of82yjd5j5244g/image11.jpeg?raw=1",
          body: `A lash lift and tint treatment involves two separate processes, both designed to give you beautiful, fluttery eyelashes for up to 6 - 8 weeks. It makes yours natural lashes bend upwards, leaving them looking longer, and your eyes more open and bright. Meanwhile, a black color tint is applied to make your eyelashes look darker, thicker, and fuller. It is particularly striking on those with naturally blonde or red lashes. While lashes extensions can give a more dramatic look, a lash lift requires far less maintenance lasts several weeks longer, and the treatment itself is quicker and cheaper. Aftercare: keep your lashes clean and dry for 24 hours after the procedure. Best suites for clients who have medium to long, thick, downward natural lashes.`
        }
      ],
      facials: [
        {
          title: "The “Glow Better” Facial (50 minutes)",
          img: "https://www.dropbox.com/s/iafxnp1arql10kx/image16.jpeg?raw=1",
          subtitle: "50 minutes",
          body: `<p>A customized facial that includes dual exfoliation treatments! We will combine dermaplaning and our sensi peel to improve uneven skin tone &amp; texture. This facial is great for anyone who wants to rejuvenate their skin. You will leave with your face feeling fresh, plump, and glowing. This facial is great for all skin types including those with rosacea with no downtime post treatment.</p>`
        },
        {
          title: "Cmai Beauty Facial",
          subtitle: "75 minutes",
          img: 'https://www.dropbox.com/s/ha3qpax6j95z78k/Cmai%20Beauty%20Facial.jpeg?raw=1',
          body: `
            <p>Something magical happens just by working on the face. During our facial rituals, the whole body will let go and its energy will shift into a balanced and more peaceful place. A beautiful glow will shine. This treatment includes cleanser, microdermabrasion, extractions, custom PCA chemical peel, hydro jelly mask under Celluma LED light therapy, massage from hands to head and shoulder, hyaluronic acid and complex peptide, retinol, moisturizer, and sunscreen. This treatment is universal facial, which is suitable for all skin type and condition especially who is suffering from acne.</p>
            <p>The benefits include hydrated, bright, plump, and clear complexion skin. The treatment reduces fine lines, and wrinkles increase firmness, evens tone, texture, and sunspots, as well as reducing enlarged pores, especially for oil and active acne skin.</p>
          `
        },
        {
          title: "Sculplla H2 Filler Facial",
          img: "https://www.dropbox.com/s/xfj6bvvap5jb4p1/image12.jpeg?raw=1",
          subtitle: "90 minutes",
          body: `
            <p>The latest wrinkles earing facial treatment from South Korea. This new treatment serum contains the same Poly L Lactic acid found in the injectable face filler Sculptra used by dermatologists. It has been doubled in dosage along with a blend of anti-aging favorites of caffeine and niacinamide that absorb into the top layer of the skin to plump wrinkles. The mask applied over the serum contains Hydrogen which drives these active ingredients deep into the skin’s layers.</p>
            <p>Visible results after just a single treatment! This facial included cleanser, microdermabrasion, goat milk peel, a serum made of PLLA(Poly-L-Lactic Acid) penetrated ultrasonically and an innovative PLLA/hydrogen mask which further pushes the ingredient deep into the skin. Followed by jelly mask under Celluma LED light therapy for calming the skin and allows the product to absorb deeper into the skin. At the same time, you will get massage from hands to head and shoulders. Finishing with Scullplla stem cell mist, Sculplla caviplla O2 multi serum, Promoter repair cell cream containing PLLA + 4 GF + snail mucus filtrate + PGA of plant collagen. Best done 7-10 days apart, see amazing results in as few as 5 visits! This facial tighten &amp; lift the skin, stimulate collagen growth, improves skin tone, reduce fines lines &amp; wrinkles, fills in scars and large pores to create smoother, more even- textured brighter skin especially for dry and mature skin.</p>
          `
        },
        {
          title: "Microneedling",
          subtitle: "90 minutes",
          img: "https://www.dropbox.com/s/t2saxhnmh39gur9/image14.jpeg?raw=1",
          body: `
            <p>Nano infusion therapy is a non-invasive effective treatment for skin conditions including fine lines, wrinkles, scarring, and pigmentation. Nano infusion therapy offers immediate and long- term results that enhance product absorption and drive active ingredients deep into the skin optimal skin restoration. This treatment stimulates circulation, visibly softens fine lines, reduces scarring, improves hydration levels, helps control breakouts, helps brighten up skin, and reduces puffy or sagging eyes especially for client who has acne scarring.</p>
            <p>The treatment includes cleanser, numbing, another cleanser with warm towel, repeated nano puncturing the skin creating a micro injures to the skin and allow it to regenerate and create collagen for a youthful, smooth, and healthier skin. At the same time, your skin is infused with hyaluronic acid, and complex peptide, growth factors, PCA sensi peel, brightening agent. Jelly mask under Celluma Led Light therapy is included for calming the skin and allows the product to absorb deeper into the skin. In addition, you will get massage from hands to head and shoulders. This treatment lasts up to 3 months!</p>
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
        },
        {
          title: "Sculplla H2 Filler Facial",
          subtitle: "90 minutes",
          img: "",
          body: `
            <p>The latest wrinkles earing facial treatment from South Korea. This new treatment serum contains the same Poly L Lactic acid found in the injectable face filler Sculptra used by dermatologists. It has been doubled in dosage along with a blend of anti-aging favorites of caffeine and niacinamide that absorb into the top layer of the skin to plump wrinkles. The mask applied over the serum contains Hydrogen which drives these active ingredients deep into the skin’s layers.</p>

            <p>Visible results after just a single treatment! This facial included cleanser, microdermabrasion, goat milk peel, a serum made of PLLA(Poly-L-Lactic Acid) penetrated ultrasonically and an innovative PLLA/hydrogen mask which further pushes the ingredient deep into the skin. Followed by jelly mask under Celluma LED light therapy for calming the skin and allows the product to absorb deeper into the skin. At the same time, you will get massage from hands to head and shoulders. Finishing with Scullplla stem cell mist, Sculplla caviplla O2 multi serum, Promoter repair cell cream containing PLLA + 4 GF + snail mucus filtrate + PGA of plant collagen. Best done 7-10 days apart, see amazing results in as few as 5 visits! This facial tighten &amp; lift the skin, stimulate collagen growth, improves skin tone, reduce fines lines &amp; wrinkles, fills in scars and large pores to create smoother, more even- textured brighter skin especially for dry and mature skin.</p>
          `
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
          title:
            "Advanced facial extraction with chemical peel and Celluma Led light therapy",
          subtitle: "60 minutes",
          body: `Cleanser, hot towel, glycolic and salicylic acid peels are applied to soften the comedones and allow the skin to be prepare for the extraction, skin scrubber face spatula is used to remove black and white head, second layer of peel is applied with hyluaronic acid, peptide, moisturizing, Celluma led light therapy to kill the acne bacteria and calm the skin.`
        }
      ],
      nails: [
        {
          title: "Classic Manicure",
          img: "",
          subtitle: "$17 (25 minutes, add on)",
          body: `Relax and enjoy soaking your fingers. The nails are shaped, cuticles are cleaned up, and the hand is massaged with refreshing lotion. Finish with buff shine or custom regular polish.`
        },
        {
          title: "Milk and Honey Manicure",
          img: "",
          subtitle: "$25 (30 minutes)",
          body: `All the benefits of a Classic Manicure plus an exfoliating hand massage with real homemade honey sugar scrub to remove dry dead skin, revealing new smooth skin, moist milk masque wrapped in warm towels. Finish with custom regular polish or buff shine.`
        },
        {
          title: "Hawaii Organic Manicure ",
          img: "",
          subtitle: "$35 (40 minutes)",
          body: `For those with dry hands, enjoy our lavender aromatherapy with organic lavender scrub, real fresh orange fruit, moist Collagen cream masque wrap with warm towels, extended massage with collagen lotion, finish with custom regular polish or buff shine.`
        },
        {
          title: "Gel Maicure",
          img: "",
          subtitle: "$38 (45 minutes)",
          body: `Are you gelling? Say hello to gel nails and goodbye to chips, smudges and drying time. Gel nails wear flawlessly up to 14 days of gloss shine. Treatment includes cleansing, shaping, cuticle care, custom gel polished, finish with nourishing lotion massage and warm towels.`
        },
        {
          title: "Dipping Powder & SNS",
          img: "",
          subtitle: "45+ (60 minutes)",
          body: `<p>Are you looking for something a little different than your traditional manicure? We can provide you with SNS powder. Includes everything in basic manicure but finish with dipping power. I do NOT dip anyone’s fingers into the same container. We promote healthy nails and want to give an option for those of you who want a better alternative. To learn more about SNS nails, please reach out to our nail salon today!</p>`
        },
        {
          title: "Classic Pedicure ",
          img: "",
          subtitle: "$30 (35 minutes). Get $5 discount for any Pedi & Mani combo",
          body: `<p>When the time is essence, we can help you renew your feet and relax by: soaking feet to sea salt whirlpool bath, nails and cuticles are carefully groomed, basic callus removal, exfoliate sugar scrub, moisturizing mini massage, hot towel wraps, custom polish or buff shine.</p>`
        },
        {
          title: "Milk and Honey Pedicure ",
          img: "",
          subtitle: "$45 (50 minutes). Get $5 discount for any Pedi & Mani combo.",
          body: `<p>Treat yourself with our finest products and extended massage start with soaking your feet in warm milk bath, nails and cuticles are nicely trimmed, callus and dead skin removal treatment, homemade exfoliating sugar scrub with real honey, moist milk masque wrapped in warm towels, extended massage with honey butter lotion, custom polished or buff shine.</p>
          <p>Benefits from milk and honey for anti-fungal: Honey is anti-bacterial, anti-fungal, reduces inflammation, possesses, helps the skin to heal quickly, and contains many vitamins and minerals. Milk contains lactic acid, a gentle, effective alpha-hydroxyl acid that is very efficient in eliminating toxins from your skin. It also exfoliates the top layer of your skin, resulting in a soft and smooth feel and look, which translates into a marvelous, youthful glow.</p>`
        },
        {
          title: "Hawaii Organic Pedicure",
          img: "",
          subtitle: "$70 (80 minutes). Get $5 discount for any Pedi & Mani combo",
          body: `<p>Our top of the line signature spa pedicure designed to give you an extraordinary spa experience with the finest nature and organic ingredients. We use real fresh fruit to bring you an ultimate experience by natural goodness. We promise, it is a pedicure you will not forget! This includes: your feet are soak in lavender detox bubbling volcano eruption warm bath, nails and cuticles are trimmed beautifully, callus and dead skin removal treatment, exfoliate lavender scrub and fresh real orange fruit, moist collagen cream masque wrap with warm towels, extended massage with collagen lotion and volcanic hot stones, custom polished or buff shine.</p>
          <p>	Benefits of Orange kiss for walking all day feet: Being an excellent source of vitamin C, orange can do wonders for your skin. It helps in restoring collagen in your body, which is responsible for skin firming and prevents premature aging of skin. The topical application of orange on the skin removes dead cells and dirt as well as keeps the skin moisturized and providing the appearance of healthy, glowing skin.</p>`
        }
      ],
      waxings: [
        {
          title: "Waxing",
          img: "https://www.dropbox.com/s/m8b6cyy92w663jm/image0.jpeg?raw=1",
          subtitle: "",
          body: `
            <p>Waxing is the process of temporary hair removal from the root by using a covering and pulling out the hair from the follicle. Cmai Beauty Studio offers Ezee turmeric hard wax and Ezze turmeric soft wax from head to toes.</p>
            <p>Aftercare: Avoid touching treated area for 24 hours. No hot showers or bath (use lukewarm or cold water). Wear clean, loose fitting clothes. No exfoliating for 72 hours, after exfoliate twice a week. Avoid working out or swimming for at least 24 hours. No tanning, sunbathing, sun beds, or fake tans. Avoid swimming pool, sauna and spa environment. Only apply products recommended by your therapist.</p>
          `
        }
      ],
      makeups: [
        {
          title: "Special Occasion Make up",
          subtitle: "1 hour",
          body: `From parties to photo shoots or any special day that you want to look glamorous. (Lash application additional $15) 1 hour`
        },
        {
          title: "Bridal Trial Make up",
          subtitle: "1 hour 15 minutes",
          body: `Recommended for any soon to be bride to create that perfect look before the perfect day that required service before a “Bridal Makeup session”. (lashes application included)`
        },
        {
          title: "Bridal Makeup",
          subtitle: "1 hour 30 minutes",
          body: `The perfect look for the perfect day! Best bundled with the trail with lash application included. Extra $100 for bundled.`
        },
        {
          title: "Make Up Lesson 1hr",
          subtitle: "1 hour",
          body: `You bring the tools and I will provide the technique. Together we will learn new ways to best flatter your features with makeup. It is available in person or virtually. (Lash application technique included for in person).`
        }
      ]
    };
  }
};
</script>

<style scoped>
.body-scroll {
  height: 60vh;
  overflow-x: scroll;
}
.card-subtitle {
  font-weight: 400;
  font-size: 0.8rem;
}
.card-img-top, .card-img-bottom {
  padding: 10px;
}
.tab-pane {
  margin: 1rem 0 1rem 0;
  /*height: 75vh;
  overflow-x: scroll;*/
}
.nav {
  background-color: #f8f9fa;
  width: 100%;
  z-index: 1;
}
.nav-card {
  border: none;
  background-color: #f8f9fa;
}
.pill-pad {
  padding-top: 50px;
}
</style>
