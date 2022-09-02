<template>
  <div class="py-5 bg-light small">
    <b-container>
      <h2 class="font-weight-light mb-5">Terms and Policies</h2>
      <b-card-group columns>
        <b-card v-for="term in terms" :key="term.title">
          <b-card-body :title="term.title" title-tag="h6">
            {{ term.body }}
          </b-card-body>
        </b-card>
      </b-card-group>

      <hr class="my-5" />

      <h2 class="font-weight-light my-5">
        Additional Terms for Permanent Makeup & Microblading Clients
      </h2>
      <b-card-group columns>
        <div>
          <b-card v-for="mblade in mblades" :key="mblade.title">
            <b-card-body :title="mblade.title" title-tag="h6">
              {{ mblade.body }}
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
      mblades: [
        {
          title: "Complimentary Sessions",
          body: "Initial procedure appointments receive a complimentary touch up. This appointment must be scheduled between 4 to 8 weeks following your first session. If you need to book this appointment after 8 weeks, it is no longer complimentary and will incur an additional charge. Complimentary touchup is not mandatory, nor is it necessary for every client, but we offer it for those clients who would need a follow up. Healing can be unpredictable. If additional touch-up appointment is needed fees will apply."
        },
        {
          title: "Future Touch ups for return clients",
          body: "If you are a returning client of ours and you need to schedule a touch up appointment, please call directly to me at (205) 207-2659. Touch-up price is calculated since your last paid appointment, this appointment does not include a complimentary touch-up."
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
