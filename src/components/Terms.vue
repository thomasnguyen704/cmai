<template>
  <div class="py-5 bg-light small">
    <b-container>
      <h2 class="font-weight-light mb-5">Terms and Policies</h2>
      <b-card-group columns>
        <b-card v-for="item in appointment_2024" :key="item.title">
          <b-card-body :title="item.title" title-tag="h6">
            {{ item.body }}
          </b-card-body>
        </b-card>
      </b-card-group>

      <hr class="my-5" />

      <h2 class="font-weight-light my-5">
        Additional Terms for Permanent Makeup & Microblading Clients
      </h2>
      <b-card-group columns>
        <div>
          <b-card v-for="item in pmu_2024" :key="item.title">
            <b-card-body :title="item.title" title-tag="h6">
              {{ item.body }}
            </b-card-body>
          </b-card>
        </div>
      </b-card-group>

      <h2 class="font-weight-light my-5">
        Important for all Permanent Makeup & Microblading Clients
      </h2>
      <b-card-group columns>
        <div>
          <b-card v-for="item in important_2024" :key="item.important_2024">
            <b-card-body>
              {{ item.body }}
            </b-card-body>
          </b-card>
        </div>
      </b-card-group>

    </b-container>
  </div>
</template>

<script>
export default {
  name: "Terms",
  data() {
    return {
      appointment_2024: [
        {
          title: "48 Hours Notice",
          body: "Changes can be made online twice per appointment up to 48 hours before the scheduled time. Canceling within 48 hours or not showing up will result in a 70% fee to rebook. Emergency or medical reasons with proof result in a 30% fee."
        },
        {
          title: " No Call, No Show",
          body: "A no-show directly impacts income and results in a 70% fee to rebook if late or canceled within 48 hours. Three instances of no show within 12 months lead to a booking ban."
        },
        {
          title: "Late Grace Period",
          body: "Arrive on time or 5 minutes early. 5-minute grace period with additional charges $1/1 minute for being late. After 15 minutes, the appointment may be canceled, and up to a 70% fee is charged for rescheduling."
        },
        {
          title: "Preparation and Guests",
          body: "Appointments are reserved for individual attention, so please plan accordingly. Extra guests, children, or pets are discouraged unless receiving a service together."
        },
        {
          title: "Thank You",
          body: "Express gratitude for clients' trust and support. Request understanding and adherence to the policies. Appreciation for ongoing support from the Carolynn and Cmai Beauty Team."
        },
      ],
      pmu_2024: [
        {
          title: "Microblading Client",
          body: "Future Touch-ups for Return Clients: Returning clients needing touch-up appointments should call directly at (205) 207-2659."
        },
        {
          title: "Waitlist",
          body: "Recommended to book appointments in advance to secure a slot. Waitlist available for clients seeking earlier appointment times. Contact to be added, but availability is not guaranteed."
        },
        {
          title: "Existing Brow Permanent Make Up",
          body: "Selective when working over existing tattoos or others' work. Prior brow permanent make-up approval required by emailing clear photos to (205) 207- 2659 Appointment scheduling without approval may forfeit the deposit."
        },
      ],
      important_2024: [
        {
          title: "",
          body: "Multiple-step process with healed results varying for each client."
        },
        {
          title: "",
          body: "Additional sessions may be necessary for optimal results at an extra charge."
        },
        {
          title: "",
          body: "No guarantees due to individual healing variations influenced by factors like skin type, age, scarring, diet, stress, skincare products, sun exposure, etc."
        },
        {
          title: "",
          body: "Compliance with Pre-Appointment Restrictions and After Care crucial for proper healing and best results."
        },
        {
          title: "",
          body: "Excessive bleeding during the procedure may impact pigment retention and results."
        },
        {
          title: "",
          body: "Cmai Beauty Studio reserves the right to refuse service, and prices are subject to change at any time."
        },
      ],
      promo_2024: [
        {
          title: "Sale/ Promotion ",
          body: "New clients can enjoy a 15% discount, while returning clients receive a 10% discount on services when you book with Shayla Austin. This promotion is ongoing until further notice."
        }
      ],
      policies_2023: [
        {
          title: "48 Hours Notice",
          body: "If you need to cancel or reschedule, you can make any changes online up to 48 hours prior to your scheduled appointment. You can reach twice per appointment. Canceling within 48 hours of your appointment will result in a 50% of the appointment fee to rebook. Canceling because of emergency or medical reasons with proof is pictures or doctors note will result in a 30% of the appointment fee to rebook."
        },
        {
          title: "No Call, No Show",
          body: "Please understand that when a guest doesn’t show for a scheduled appointment. We do not have an opportunity to replace the appointment. A no show results in a direct loss of our income. Therefore we have a strictly skin calls, no show policies: No calls or no shows will be charged 70% of the appointment fee to rebook. 3 no calls no shows within 12 months, you will be banned from booking."
        },
        {
          title: "Late Grace Period",
          body: "We have a 5 minute grace period. If you arrive 6-14 minutes late, you will be charged  extra for the late fee with every 1 minute late for $2 extra. After 15 mins late, your appointment will be canceled and you will need to pay 50% of the appointment fee to rebook. We try our best to accommodate late clients but most times it is not possible"
        },
        {
          title: "Preparation and Guests",
          body: "Appointments are reserved especially for you. We understand that sometimes schedule adjustments are necessary, therefore, We respectfully ask you to plan ahead. Plan on traffic and come 5 minutes earlier than your actual appointment time. Due to the nature and attention of detailed treatment we provide, we kindly request that you do NOT bring extra guests, children, or pets. Unless you are the parent/ guardian or receiving a service together. "
        },
        {
          title: "Thank You!",
          body: "We are thankful, grateful and truly  blessed. We appreciate everyone who enters our studio and trusts us with your beauty needs. We hope you understand and respect these policies. Thank you for your love and  continuing to support our small business. Carolynn and Cmai Beauty Team"
        },
      ],
      mblades: [
        {
          title: "Future Touch ups for return clients",
          body: "If you are a returning client of ours and you need to schedule a touch up appointment, please call directly to me at (205) 207-2659."
        },
        {
          title: "Waitlist",
          body: "I always recommend booking an appointment to reserve your time. However, I do have a waitlist available, this list is to serve the need for clients who wants an earlier appointment time then they already reserved. When an appointment time opens up, I contact from top to bottom of the list and the first to confirm will be booked. You can be added to the list by calling me. Please keep in mind that availability is not guaranteed."
        },
        {
          title: "Existing Brow Tattoos",
          body: "I am extremely selective when working over existing tattoos and other tattoo artists' work. If you have had your eyebrows previously tattooed, I request that you email me via cmaibeautystudio@gmail.com a clear photos of your brows for approval. After sending your photos, please give me 1-3 business days for me to get back to you. If for any reason you schedule an appointment without approval from me, your deposit will be forfeited."
        },
        {
          title: "Important for all Permanent Makeup & Microblading Clients",
          body: "Microblading and all permanent cosmetics are considered a multiple-step appointment process. Healed results will vary with each individual client. Additional sessions (at an additional charge) may be required to obtain optimal desired results. Although I give my best efforts to provide you with quality service, many factors can result in a less than desired out come as each client will heal differently. NO guarantees will be made. It is impossible to predict how the skin will react in each individual and many factors are taken into consideration; skin type; age; scarring; diet; stress level; facial products used, sun exposure, etc. These all play a key role in how the pigment will hold. In order for your new brows to heal properly (and look their very best) please follow all Pre-Appointment Restrictions and After Care! These instructions are designed to limit bleeding and skin sensitivities during the service. Excessive bleeding during the procedure can dilute and expel the pigment color and lead to poor results. CMAI BEAUTY STUDIO reserves the right to refuse service to anyone. Prices are subject to change at anytime."
        }
      ],
      terms: [
        {
          title: "Welcome",
          body: "I believe your experience should be my primary focuses…every guest…every time. If you’re looking for a spa that not only allows you a great skin care treatment and beautiful nails, with my eyes on current techniques, products lines, affordable, personal attention to your specific needs… you’ve found the place! CMAI BEAUTY STUDIO operates by appointments only. I have great respect for my clients and my time, I kindly ask you to follow our policies and terms of service. For all new appointments, I charge your card a deposit from $10 - $50 in order to hold your appointment. This amount will be debited immediately upon payment and your remaining balance is due on the day of your appointment."
        },
        {
          title: "Late",
          body: "Please familiarize yourself with my location and prepare yourself for the traffic. I know sometimes things can happen so plan to arrive about 10 minutes EARLIER to avoid being late. Give yourself plenty of time for the length of your appointment. Out of respect for everyone's time we have a strict no-tolerance policy for late arrivals. Over 8 minutes late arrivals will be a no-show and and you will need to pay up to $100 to rebook.. If your appointment is complimentary, then your subsequent appointment will no longer be complimentary. An additional deposit will be required to reschedule your appointment if you arrive late for your scheduled appointment time."
        },
        {
          title: "Cancellation & Rescheduling",
          body: "Appointments are strongly encouraged, though I do accept walk-ins when possible. I look forward to meeting you in the not too distant future. Cmai Beauty Studio is 100% committed to holding your preferred reservation date and time. In an effort to ensure the same 100% commitment from our guests we do kindly request at least 48 hours (2 days, I close on Saturday, Sunday, and Monday) notice when rescheduling or cancelling your appointment. You can reschedule twice per appointment. Additional $100 charge for permanent make up appointment or $50 charge for any other services will be required to reschedule your appointment if you give less than 48 hours notice. We know some day-to-day issues are unavoidable so we do consider each situation on a case-by-case basis."
        },
        {
          title: "Appointment & Consultation",
          body: "I do offer FREE of charge virtual consultation. Consultation is not required as an additional appointment separately from your initial appointment. However, if for any reason, at the time of your appointment, your procedure does not follow through.  You will be charged 20% of the appointment fee."
        },
        {
          title: "No Show",
          body: "Please understand that when a guest doesn’t show for a scheduled appointment. I do not have an opportunity to replace the appointment. A “No Show” results in a direct loss of my income. To avoid this, I have a very strict No Show policy. You will be charge $100 for permanent make up appointment or $50 for any other services for no show appointment to rebook. 3 no show within 12 months, you will be banned from booking. I review each situation carefully and it is my desire not to ever enforce this. Please don’t make me enforce this policy and simply do the right thing and cancel at least two days prior to your appointment."
        },
        {
          title: "Guests",
          body: "Due to the nature and attention to detailed treatments I provide, I kindly request that you do not bring children, and/or pets to accompany you into the studio. Service dogs are allowed with their ID card, however they cannot be with you in the procedure room and we cannot be responsible for them in our lobby area while you are doing your procedure."
        },
        {
          title: "Service Deposits",
          body: "A deposit is due immediately upon booking to secure all services appointments. Deposits will be charged to the credit card you provided to Square upon booking your online appointment. This deposit is to ensure that you are serious about your booking and will be deducted from the total cost of your initial session and your remaining balance will be charged on the day of your appointment."
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg {
  background-color: green;
}
</style>
