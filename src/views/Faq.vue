<template>
  <div>
    <b-container class="py-5">
      <h1 class="lead">
        Permanent Make-up (Eyebrows, Lips Blushing, Eyeliners)
      </h1>
      <hr />
      <div v-for="item in faq_pmu" :key="item.title">
        <p class="strong">{{ item.title }}</p>
        <p v-html="item.body"></p>
      </div>

      <h1 class="lead mt-5">Lip Blushing</h1>
      <hr />
      <div v-for="item in faq_lip" :key="item.title">
        <p class="strong">{{ item.title }}</p>
        <p v-html="item.body"></p>
      </div>

      <h1 class="lead mt-5">Eye Liners</h1>
      <hr />
      <div v-for="item in faq_eye" :key="item.title">
        <p class="strong">{{ item.title }}</p>
        <p v-html="item.body"></p>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      faq_pmu: [
        {
          title: "What should you prepare 1-2 weeks before the procedure?",
          body:
            "If you are drinking blood thinner medicine, you will need to consult with your doctor whether you can stop drinking blood thinner 5 days before the procedure. If you prone to cold sores/fever blisters, you MUST take an anti-viral Valtrex or Lysine 5-7 days prior to treatment, especially for lips procedure to prevent an outbreak and loss of pigment. Please stop taking antibiotics at least 5 days prior to the procedure. Do not shape wax, tint your brows 3 days before the procedure. • Botox, AHA products, and retinoid should be avoided for 2 weeks prior to the procedure. • Hormone therapies can affect pigmentation and/or cause sensitivity. Contraindications for permanent makeup: The following medical conditions require a note from your doctor giving consent Diabetes Type 1 and 2, high blood pressure, auto-immune disease, thyroid / Graves’ disease. Any other medical condition that causes slow healing, excess bleeding, or a high risk of infection."
        },
        {
          title: "What should you do 2 days before the procedure?",
          body:
            "	You are advised to pick up the numbing cream in order to use and apply a medium-thick layer of numbing cream on the clean and dry designed area 30 minutes (reapply) and 1 hour prior to the procedure and cover the area with clear plastic wrap to activate the numbing. The artist will clean the numbing cream before the procedure. Although numbing cream is used during the procedure, you may still feel sensitivity or discomfort. I cannot accept responsibility if the area to be treated does not respond to the numbing cream. Each individual is different according to skin type. Some clients report the area to be completely numb, while others may experience some discomfort."
        },
        {
          title: "What should you do 24-48 hours before the procedure?",
          body:
            "Do NOT consume any alcohol, caffeine, antibiotics, aspirin, niacin, vitamin e, ibuprofen, omega 3, or take any blood thinner medicine. Tylenol is ok to consume. Do NOT work out or sunbathing. Allergy: A patch test may be performed unless waived by the client. If you do suffer from an allergic reaction, you should contact your doctor immediately. Allergic reaction responses may show through redness, swelling, rash, blistering, dryness, or any other symptoms associated with an allergic reaction."
        },
        {
          title: "What to expect during the procedure?",
          body:
            "A typical PMU appointment lasts from 2-3 hours, and the touch-up lasts from 1-2 hours depending on the work needing to be done. The PMU artist will clean the area, taking a before photo, the designed area is drawn with a pencil, to give the client an idea of shape and form. (Please note that majority of faces are not completely symmetrical. Eyebrows, lips, or eyeliners are not meant to be identical and it is impossible to attain this look even with natural brow hair or natural face shape. It is also not possible to match a photo of your favorite celebrities’ eyebrows, lips, or eyeliners when you may have an entirely different face shape.) Once both the permanent makeup artist and client have agreed on a final shape (ultimately it is the client's decision – but the artist may make recommendations based on their knowledge of what suits a person aesthetically), The artist will shape your eyebrows, lips, or eyeliners then we will decide on the color. Before the shaping and procedure, the numbing anesthetic will be administered to ensure comfort. Once you’re numb, the pigment is deposited. Then, the secondary liquid numb is applied on the open skin before the second round of deposited pigment with the final pigment mask. When the procedure is finished, the artist will take after photos with the client's approval of the finished design, and give the client aftercare instruction."
        },
        {
          title: "What are the aftercare instructions?",
          body:
            "Day 1 (right after the procedure): Gently blot the area with a clean and dry tissue to absorb excess lymph fluid. Do this every 5-10 minutes for about 1- 4 hours until the oozing has stopped. Removing this fluid prevents the hardening of the lymphatic fluids (minimizes scabbing). Keep the area clean and dry, do NOT do anything to make your permanent makeup area sweat, steamy, dusty, or wet 24 hours right after the procedure."
        },
        {
          title: "What to avoid?",
          body: `<p>Day 1 - 10 after the procedure: Do NOT pick or scratch your PMU area and Do NOT attempt to pick at flaking brows, or you risk pulling out the pigment and/or causing scarring. Let the scab fall off naturally. No makeup or any other products except the recommended aftercare. No swimming, sunbathing, extraneous exercise, steaming, sauna, facials, hot tub, hot shower, hot water, no sleeping on the face. Diet: do NOT shrimp, beef, seafood, sticky rice as they affects the color and texture of the heealing skin process. Pork, chicken, vegetable is a good option.</p>
          
          <p>Day 1- 30: Avoid sunbathing/direct sun exposure, Light therapy, chemical peels, Microdermabrasion, Botox. Always avoid creams containing regeneration factors (Retinol, Vitamin E, Vitamin C, Anti-Aging, Acne Creams, Lasers treatments near the PMU area. Noteworthy: The use of antibiotics and hormonal therapy can lead to faster pigment fading. Always protect your new brows from the sun with a minimum SPF 50 (with the exception of the first 7 days), or a hat whenever sun exposure is anticipated to prevent premature fading of your new PMU Brows.</p>`
        },
        {
          title: "What To Expect after your PMU session?",
          body: `<p>Your PMU eyebrows, lips, or eyeliners will go through several phases during the healing cycle.</p>
          
          <p>Days 1-4: The pigment will appear very sharp and dark. This is because the pigment is still sitting on top of your skin, and has not yet settled in completely. The color of the pigment will soften gradually. Do not be alarmed if you see some pigment on the cotton swab, as this is an excess pigment and/or body fluid that are naturally exiting your skin. Your brows, lips, eyeliners.</p>
          
          <p>Days 5-7: Once the healing of the skin starts taking place, it will look like dandruff flakes or dry skin. This might give you the impression that the pigment is fading too quickly, however, this is just superficial color and dry skin being naturally removed from your eyebrows. The pigment may be faded from 30-60% after day 4 of the procedure. </p>

          <p>	Day 8-12: Your brows, lips, eyeiners may look as though the pigment has completely faded – do not panic – take a deep breath and trust the process as mentioned above regarding the "Milk Skin" phenomenon.</p>

          <p>	Days 14-28: Your brows may still look a little patchy or uneven, but the pigment will start to “reappear” as the pigment settles and the healing continues.  You may get your touch-up/perfecting procedure done no sooner than 4 weeks for Microblading / Ombre’ shading brows, 6 weeks for Powdered Ombre/Combo/Nano Brows, and 8 weeks for lips or eyeliners to complete the look.</p>

          <p>	Healing process: During the healing process, it is normal to experience some pigment loss; this is why a touch-up is done. As a result of the treatment, combined with the use of the numbing cream, you can expect to experience some redness/swelling that can last 1-4 days. You must ALWAYS follow your post-procedure advice and aftercare as instruction for the best results. I do NOT guarantee if you false to follow the after-care process as it is out of my hand.</p>

          <p>	Lasting result: Typically the lengths clients can go between touch-up appointments are as follows Microblading: 6 months - 2 Years. Ombre /Combo Brows: 1-3 Years. Nano Brows, Lips Blushing, Eyeliners: 2-5 Years.</p>
          `
        }
      ],
      faq_lip: [
        {
          title: "How is the Lip Blushing service performed?",
          body: `	The technique is performed using a PMU machine and pigment designed for the technique, which provides a subtle, matte, natural toned, tint effect as the final result. (It’s important to be aware that Lip Blushing will not provide a solid lipstick look but rather a tint effect).`
        },
        {
          title: "How long does the procedure take?",
          body: `The first procedure takes approximately 2-2.5 hours, the 6 week touch up is about 1.5 hours.`
        },
        {
          title: "How long will it last for?",
          body: `Your Lip Blushing will last anywhere from 1-3 years depending on your skin type, lifestyle and after care of your lips.`
        },
        {
          title: "What will I look like immediately after?",
          body: `	There will be swelling typically for the first 24-48 hours. While the swelling starts going down right away and most people are back to normal by the following morning, plan on 48 hours of staying low key to be safe! The color will appear bright or darker the first week, but will gradually scab and lighten.`
        },
        {
          title: "What can I expect after the treatment?",
          body: `<p>If your lips are kept clean and moisturized then only a thin film (not a scab) will appear. The film will start peeling off by itself around day 3 and may not exfoliate evenly. During this time, your lips may feel tight, cracked, chapped and itchy as the flakes are coming away. Leave the film alone; picking will cause irritation, can lead to scars and will lift color from the treated area resulting in unevenness and blank spots. Let the area heal naturally for best results and keep your lips moisturized at all times to help soothe and heal them. The color implanted will fade by 50-60% during the first healing process.</p>
          
          <p>While the film is peeling, it may seem as though the treatment hasn't worked well. The color may look weak or it may seem as though the pigment has disappeared. Why? Lip tattoos are not as deep as a 'normal' tattoo - your new healing skin is covering the pigment and when your skin and the pigment start to settle (between weeks 2-4), you'll notice that your lip tattoo starts coming back. It didn't disappear in the first place; it was just harder to see through a thicker layer of healing skin. If the color is still weak/patchy at weeks 5-6, don't worry! This is a delicate tattoo to heal, and is why we do 2 sessions.</p>

          <p>Healing is specific to each client and it’s important to realize that you’ll need a color boost every 12 / 18 / 24 months to maintain the vibrancy of your lip tattoo. Your lifestyle choices, age, genetics, and skin type will contribute to the retention of your lip tattoo. If you regularly bite your lips, use lip exfoliator, use tanning beds, sunbathe, don't use sun protection, smoke, use anti-aging products (on your lips), or get your lips filled after having your lips tattooed, your lip tattoo WILL fade faster and you’ll need more regular touch ups.</p>

          <p>Permanent makeup is an art, not a science. Your results will vary and using lip liner, lip-gloss or lipstick may still be needed, especially when wearing heavy coverage make up. This is not necessarily a no maintenance treatment, but a low maintenance treatment.</p>`
        },
        {
          title: "Are there any pre-care instructions?",
          body: `If you are prone to cold sores, it is recommended to take a regimen of Valtrex or Lysine 7-10 days prior to the procedure to avoid an outbreak and loss of pigment. Do not take Aspirin, Niacin, Vitamin E, Vitamin C or Advil/Ibuprofen 48 hours before procedure. Tylenol is OK. Avoid sun and tanning one week prior to procedure.`
        },
        {
          title: "What are the post-care instructions?",
          body: ` <ul>
            <li>Apply the given ointment as often as possible for 1 week. Do not let your lips dry out completely, since this can cause scabbing and cracking of skin surface.</li>
            <li>For at least 5 days, please do not consume any hot drinks or food. The hotness can result in the pigment fading faster and your lips will peel.</li>
            <li>For 5 days, please prevent going into a sauna, pool, and taking hot showers/bath. You can get your lips wet (i.e. when washing your face/mouth) but please do not get any hot water near your lip area. In other words, do not soak your face underwater in a bathtub or allow the shower to spray directly in your face.</li>
            <li>No exercising for 24 hours after the procedure.</li>
            <li>No lip fillers for 4 weeks post procedure.</li>
            <li>Do not scrub, scratch, or pick at the tattoo site at any time during the healing process – this can cause you to lose color that may not be repairable.</li>
            <li>No facials or masks for 15 days, and avoid them in the lips area indefinitely.</li>
            <li>No Neosporin, Vaseline, or other petroleum products while your lips are healing.</li>
            <li>No anti-acne products (i.e. Benzoyl Peroxide, Pro-active) or lightening creams (bleach creams) – this will cause rapid fading.</li>
            <li>No anti-aging products or facial products containing Alpha Hydroxyls (AHAs), Retin-A, Lactic or Glycolic Acids.</li>
          </ul>`
        },
        {
          title: "Does it hurt?",
          body: `During the procedure, anesthetics will be used to minimize the pain by numbing your lips. Lips are prone to swelling due to their sensitive nature. Swelling will typically subside in 3-5 days`
        }
      ],
      faq_eye: [
        {
          title: "What happens during the procedure?",
          body: `<ul>
            <li>Step 1 - The design: Your lash line or semi-permanent eyeliner will be designed based on your individual needs, the shape of your eyes, as well as personal style.</li>
            <li>Step 2 - Color: We will help choose the most natural looking color for you. Our colors are custom blended, non-toxic, they are made from natural mineral-based pigments.</li>
            <li>Step 3 - Pigmentation: Individual hair follicles are gently layered in the dermal layer of the skin. Cmai Beauty utilizes proprietary technology and a system emulating the look of real eyelashes to create a natural semi-permanent eyeliner. Our Equipment uses a single acupuncture needle that gently vibrates on the dermal layers of the skin depositing a mineral based pigment into the skin. A pigment is precisely applied in thin layers until the ideal color and shape are achieved creating a completely natural look. During the 1st session, we take necessary precautions. Less is more. This session is about getting a nice base started and the fine-tuning takes place in the 2nd appointment.</li>
            <li>Step 4 - Touch up: 4-6 weeks after your 1st session you’ll return for a touch-up appointment to review the color and shape with your technician and make adjustments if needed to ensure that you have the look that you want to achieve.</li>
          </ul>`
        },
        {
          title: "Will my eyeliner look normal the next day?",
          body: `Yes, there will be swelling right after the procedure. The swelling starts coming down right away and in most people, it is back to normal by the following morning.`
        },
        {
          title: "Does the eyeliner procedure hurt?",
          body: `The eyeliner or lash line procedure is more psychologically scary to most clients but there are very few nerve endings in the lash line so it is an easy procedure. Before starting pigmentation a strong topical numbing cream is applied and reapplied during the procedure. Cmai Beauty uses a single acupuncture needle that gently vibrates on the outer dermal layers of the skin, therefore discomfort is minimal and there is no downtime.`
        },
        {
          title: "Is it safe for me to drive myself after the procedure?",
          body: `Yes, we use a strong local numbing cream to alleviate discomfort but this does not impair any motor skills and wears off after the procedure concludes.`
        },
        {
          title: "What do I need to know before the eyeliner procedure?",
          body: `Arrive at your appointment 10 minutes before your scheduled appointment, well rested and relaxed in order to complete paperwork and that you get the most out of your session. Please remove contact lenses before your procedure.`
        },
        {
          title: "Are my eyes open during the eyeliner procedure?",
          body: `
          <p>No, your eyes are closed during the entire procedure, although there are frequent short breaks of a minute or two throughout the procedure so you can relax. These breaks also enable the technician to precisely calibrate the application for how it looks with your eyes open. The eyeliner procedure is safe, with a 100% safety record with thousands of satisfied clients treated.</p>
          <p>Drawing upon techniques from similar surgical and related procedures, experts have refined a technique specifically for Cmai Beauty. The artist will work slowly and carefully with a stable grip on a small section of skin that immobilizes it so cannot move (and you will get many short breaks).</p>
          <p>New clients are sometimes concerned that the needle could go into the eye. This can never happen due to the equipment, the technique – and the fact that the artist undergoes several months of full-time training and practice before they are certified to treat patients unsupervised. Most clients’ eyes will twitch during the procedure, and this is normal.</p>
          `
        },
        {
          title: "Can I get the eyelash procedure if I have eyelash extensions?",
          body: `Yes, although during the process it may cause some of the eyelash extensions to fall `
        }
      ]
    };
  }
};
</script>

<style>
.strong {
  font-weight: 800;
  margin: 2rem 0 0.5rem 0;
}
</style>
