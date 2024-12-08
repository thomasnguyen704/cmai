<template>
  <div class="container">
    <b-card no-body class="nav-card pt-4">
      <b-tabs pills small>

        <b-tab title="Lashes" active>
          <b-row class="font-weight-light">
            <b-col md="4">
              <b-img src="https://www.dropbox.com/s/yytd1x11u6uaxd9/image8.jpeg?raw=1" fluid />
            </b-col>
            <b-col md="8">
              <p>At CMAI Beauty Studio, we specialize in enhancing natural lashes with premium Eyelash Extensions, with a focus on retention, appearance, and client comfort. Our specially formulated adhesive, well known as oil-proof, water-proof, and heat-resistant properties, guarantees exceptional retention. Through meticulous application techniques that reduce irritation, clients can enjoy flawless and long-lasting results. The studio offers a range of lash options, such as handmade cashmere, flat, traditional classic lashes in various lengths, curls, thickness, and colored choices. Furthermore, we provide a complimentary fixing service within the first three days post-application to ensure complete satisfaction.</p>
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

        <b-tab title="Facials">
          <b-card-group columns>
            <b-card v-for="facial in facials" :key="facial.title" :img-src="facial.img" img-top>
              <b-card-body :title="facial.title" title-tag="h6" class="small">
                <p v-html="facial.body"></p>
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
            <p>Microblading, also known as eyebrows embroidery or 3D Microblading, is a semi-permanent tattoo technique that mimics natural hair strokes using a manual tool with tiny needles. The results are incredibly realistic, often indistinguishable from natural hair, and typically last around 1 year.</p>
            
            <p>After the procedure, your brows may initially appear dark and sharp, but the pigment will soften over time as it settles. Skin healing may involve dryness and flaking, which is a normal part of the process. Once fully healed, it's important to use SPF to prevent premature fading. Ideal for clients with dry skin with virgin eyebrows, microblading offers natural-looking eyebrows that enhance your features beautifully.</p>
          `
        },
        {
          title: "Cmai ‘s Hairstrokes Eyebrows",
          subtitle: "",
          img: "https://www.dropbox.com/s/ejxt1vi48gbuckx/image3.jpeg?raw=1",
          body: `<p>The Cmai's Hairstrokes Eyebrows technique, also known as machine nano hairstrokes, is a cutting-edge PMU (permanent makeup) method that utilizes digital technology and one tiny needle to create natural-looking hair strokes. This technique is considered less traumatic to the skin than traditional microblading, resulting in less bruising and bleeding, a smoother healing process, better pigment retention, and longer-lasting results of up to 3 years or more after first touch up. Cmai's Hairstrokes Eyebrows are particularly well-suited for individuals seeking the most natural eyebrow enhancement, especially those with thicker, oily skin or existing previous eyebrow work.</p>`
        },
        {
          title: "Ombre’ Shading Eyebrows",
          img: "https://www.dropbox.com/s/gjbc7bpp8sgflpc/image7.jpeg?raw=1",
          subtitle: "",
          body: `
            <p>Ombre Shading Eyebrows provide a soft, shaded brow pencil appearance that looks more natural than solid color once healed. This technique adds definition and depth to the brows without using hair-like strokes. The eyebrows transition from light to dark, starting from the head and fading gradually to the tail. Ombre Shading Eyebrows can last for 2 to 5 years and are ideal for those seeking a bold and sharp makeup aesthetic.</p>
          `
        },
        {
          title: "Combo Eyebrows",
          subtitle: "",
          img: "",
          body: `
            <p>Combo Eyebrows is a technique that combines the precision of hairstroke with the soft shading of Ombre eyebrows. The procedure involves creating hairstroke  at the beginning of the eyebrows, seamlessly blending into Ombre shading towards the tail. This style typically lasts about 2 years and is ideal for individuals seeking a natural yet enhanced eyebrow look.</p>
          `
        },
        {
          title: "Eyebrows Lamination",
          subtitle: "",
          img: "https://www.dropbox.com/s/56vm7k7tfqfqnir/image1.jpeg?raw=1",
          body: "Eyebrow Lamination is a cutting-edge brow grooming technique that restructures and sets the brow hairs in a uniform shape, resulting in a denser and fuller appearance. Similar to a perm for the brows, the effects can last up to 6 weeks. Unlike semi-permanent makeup, Eyebrow Lamination is temporary and is best suited for clients with a sufficient amount of natural brow hair who desire a temporary microblading look."
        },
        {
          title: "Lips Blushing",
          subtitle: "",
          img: "https://www.dropbox.com/s/88qui8m8fp9n820/image4.jpeg?raw=1",
          body: `
            <p>Lip Blushing is a semi-permanent cosmetic treatment that aims to improve and define the natural shape and color of the lips. It is beneficial for individuals with either light or dark natural lip colors, as it can hide imperfections and asymmetry. Lip Blushing is perfect for those desiring well-defined lip contours, a plumper look devoid of fillers, and those wanting to mask scars for symmetric lips.</p>
          `
        },
        {
          title: "Lashes Line Enhancement ",
          subtitle: "",
          img: "",
          body: `
            <p>Lashes Line Enhancement offers a long-lasting solution to traditional eyeliner application, available for both upper and lower lash lines. This procedure not only defines the eyes but also enhances the appearance of thicker, darker, and fuller eyelashes. With no side effects, scarring, or smudging, it is a safe and convenient way to save time and achieve a natural look lasting up to 5 years. For those seeking consistently defined eyes without the hassle of daily makeup application, Cmai Beauty Eyeliners provide a solution that ensures a youthful and polished appearance around the clock.</p>
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
          body: `Classic lashes are the perfect way to enhance natural lashes. With the classic technique, one individual lash is applied to one natural lash to create a set of longer and thicker lashes. Depending on the desired look, there are a variety of curls, lengths, and thicknesses to choose from.`
        },
        {
          title: "Hybrid Lashes",
          subtitle: "",
          img: "https://www.dropbox.com/s/0lnuwbcrp4bs52x/image17.jpeg?raw=1",
          body: `Hybrid sets are a mixture between classic and volume. Perfect for clients with sparse lashes, gaps or just anyone looking for a little more fullness than classic but not quite as dense as a volume set.`
        },
        {
          title: "Wet Hybrid Lashes",
          img: "https://www.dropbox.com/s/fu0x33mcd84svjd/image18.jpeg?raw=1",
          body: `Wet hybrid lash sets combine classic and volume extensions with a wet appearance, offering a unique post-shower look. Ideal for clients with short or sparse lashes seeking extra fullness while maintaining a natural look.`
        },
        {
          title: "Volume Lashes",
          img: "https://www.dropbox.com/s/a1cfgfi8zzr10ye/volume%20lash.jpeg?raw=1",
          subtitle: "",
          body: `Volume lashes extensions are multiple very lightweight extensions, made into a "fan" placed onto one natural lash. These sets create a very full, luxurious look. Perfect for clients with thin and sparse lashes and those who love a full, dense look. All volume sets at Cmai Beauty Studio are created by 100% handmade using Cmai ‘s premium handmade cashmere lashes 0.03.`
        },
        {
          title: "Wispy Lashes",
          subtitle: "",
          img: "https://www.dropbox.com/s/k8ab05hun1ozanf/image9.jpeg?raw=1",
          body: `Wispy lashes are the trendiest style because they look fluffy and feathery, so very natural. They are perfect for people who prefer a dramatic, makeup look and eyelashes that stand out. The wispy lashes set is my favorite! Wispy lashes are created by combining 5-9 wet lashes with 0.05 thickness to create spikes to apply on the first layer of natural lashes. For the second and third layers of natural lashes, either classic, hybrid or volume lashes bases are applied. Spikes are 2-4 mm longer than the base.`
        },
        {
          title: "Mega Volume Lashes",
          subtitle: "",
          img: "https://www.dropbox.com/s/4sqo73byxfsluq8/image10.jpeg?raw=1",
          body: `Mega volume lashes are created by adhering over 10 incredibly small and lightweight extensions to a single natural lash. These extensions, specifically crafted for both volume and mega volume, are exceptionally small to maintain minimal weight, safeguarding the integrity of your natural lashes. Mega Volume sets deliver bold, dark, and dramatic eyelash looks. Within Cmai Beauty Studio, all volume sets are artfully designed using Cmai's top-tier 100% handmade cashmere lashes ranging from 0.03 to 0.05 thickness.`
        },
        {
          title: "Lashes Refill",
          subtitle: "",
          body: `Lashes refill appointments are scheduled periodically to replace lost lashes due to shedding or natural growth cycles, involving the addition of extensions to maintain fullness. The cost of refills is based on time and lash quantity, emphasizing the need to care for lashes between visits. Regular appointments every 2-3 weeks help sustain the lushness and beauty of your lashes.`
        },
        {
          title: "Lash Removal",
          subtitle: "",
          body: `To remove lash extensions, Cmai Beauty Studio utilizes a cream lash remover to soften the strong bonds of the adhesive, allowing the extensions to effortlessly slide off. This process is painless and significantly faster than the initial application of lash extensions.`
        },
        {
          title: "Lash Lift and Tint",
          subtitle: "",
          img: "https://www.dropbox.com/s/9of82yjd5j5244g/image11.jpeg?raw=1",
          body: `A lash lift and tint treatment enhances your natural lashes for 6-8 weeks by lifting them upwards and darkening them with a black tint. Ideal for those with blonde or red lashes, this process creates longer, thicker, and fuller-looking lashes, giving your eyes a bright, open appearance. Compared to extensions, a lash lift is low-maintenance, longer-lasting, quicker, and more cost-effective. Remember to keep your lashes dry and clean for 24 hours post-treatment. Suitable for clients with medium to long, thick, downward natural lashes.`
        }
      ],
      facials: [
        {
          title: "Express Facial",
          img: "",
          subtitle: "",
          body: `<p>The express facial combines dermaplaning or microdermabrasion with our sensitive peel to address uneven skin tone and texture. It is perfect for those looking for quick skin rejuvenation on a budget. The treatment concludes with a serum and moisturizer application, leaving your skin refreshed, radiant, and hydrated with no downtime.</p>`
        },
        {
          title: "Cmai Beauty Facial",
          subtitle: "75 minutes",
          img: 'https://www.dropbox.com/s/ha3qpax6j95z78k/Cmai%20Beauty%20Facial.jpeg?raw=1',
          body: `
            <p>The Cmai Beauty Facial is a transformative experience that goes beyond the face, allowing the body to release and realign its energy for a peaceful state. This treatment includes a full range of services, from cleansing to microdermabrasion, extractions, a custom PCA chemical peel, hydro jelly mask under Celluma LED light therapy, and a soothing massage from hands to head and shoulders. It also features ingredients like hyaluronic acid, complex peptide, retinol, moisturizer, and sunscreen. Suitable for all skin types, particularly those with acne, this universal facial offers benefits such as hydrated, bright, plump, and clear skin, while also targeting fine lines, wrinkles, firmness, tone, texture, sunspots, and enlarged pores.</p>
          `
        },
        {
          title: "Sculplla H2 Filler Facial",
          img: "https://www.dropbox.com/s/xfj6bvvap5jb4p1/image12.jpeg?raw=1",
          subtitle: "90 minutes",
          body: `
            <p>he Sculplla H2 Filler Facial is an innovative facial treatment from South Korea designed to target wrinkles effectively. The treatment serum contains Poly L Lactic acid, similar to the injectable face filler Sculptra used by dermatologists, but with a higher dosage. It also includes anti-aging ingredients like caffeine and niacinamide to plump wrinkles by absorbing into the skin's top layer. The mask applied over the serum contains Hydrogen, which helps drive these active ingredients deep into the skin's layers.</p>
            <p>This facial delivers visible results after just one treatment! It includes a thorough cleansing, microdermabrasion, a goat milk peel, a PLLA serum penetrated ultrasonically, and an innovative PLLA/hydrogen mask for deep ingredient penetration. A jelly mask under Celluma LED light therapy calms the skin and enhances product absorption, followed by a relaxing massage from hands to head and shoulders. The treatment concludes with Sculplla stem cell mist, Sculplla caviplla O2 multi serum, and Promoter repair cell cream containing PLLA, growth factors, snail mucus filtrate, and plant collagen PGA.</p>
            <p>For optimal results, it is recommended to have this facial done 7-10 days apart, with significant improvements seen in as few as 5 visits. This facial tightens and lifts the skin, stimulates collagen growth, improves skin tone, reduces fine lines and wrinkles, fills scars and large pores, creating smoother, brighter skin, especially beneficial for dry and mature skin.</p>
          `
        },
        {
          title: "Microneedling",
          subtitle: "90 minutes",
          img: "https://www.dropbox.com/s/t2saxhnmh39gur9/image14.jpeg?raw=1",
          body: `
            <p>Microneedling is a non-invasive, effective treatment for various skin conditions like fine lines, wrinkles, scarring, and pigmentation and stimulation collagen induction. This therapy provides immediate and long-term results by improving product absorption and delivering active ingredients deep into the skin for optimal restoration. Benefits include improved circulation, softened fine lines, reduced scarring, enhanced hydration, brighter skin, and reduction of puffiness or sagging eyes, particularly beneficial for acne-scarred clients. </p>
            <p>The treatment involves a cleansing process, numbing, additional cleansing with a warm towel, and then the micro-puncturing of the skin to trigger collagen production and skin regeneration. Hyaluronic acid, complex peptides, growth factors, PCA sensi peel, and brightening agents are infused into the skin. A jelly mask under Celluma LED light therapy calms the skin and enhances product absorption. A soothing massage from hands to head and shoulders is included. This treatment's effects can last up to 3 months.</p>
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
            <p>Waxing is a temporary hair removal method that involves pulling hair from the root using wax. At Cmai Beauty Studio, we offer both Ezee turmeric hard wax and Ezee turmeric soft wax for hair removal from head to toe. Post-care instructions include avoiding contact with the treated area for 24 hours, using lukewarm or cold water for showers, wearing loose and clean clothing, refraining from exfoliation for 72 hours, and then exfoliating twice a week. It is advised to avoid activities like working out or swimming for at least 24 hours, refrain from tanning, sun exposure, swimming pools, saunas, and spas, and only use products recommended by your therapist.</p>
          `
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
