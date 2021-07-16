<template>
  <section style="overflow-x: hidden;">
    <header class="header header--transparent">
      <a href="//lueinitiative.org" title="Go to LUE Initiative homepage">
        <img src="@/assets/img/lue-logo.png" class="header__logo" alt="LUE's logo" />
      </a>
    </header>
    <main class="row section">
      <div class="col-md-5 section__fixed">
      </div>
      <div class="col-md-7 section__scroll">
        <h1 class="heading heading--fancy">High School Spark Challenge Form</h1>
        <div class="alert alert--success" v-if="alert.status === 200">
          <h3 class="alert__heading">{{ alert.title }}</h3>
          <p class="alert__paragraph">{{ alert.message }}</p>
        </div>
        <template v-else>
          <div class="indicators justify-content-start">
            <div :class="`indicator ${step >= 1 ? 'indicator--active' : ''}`"></div>
            <div :class="`indicator ${step >= 2 ? 'indicator--active' : ''}`"></div>
            <div :class="`indicator ${step >= 3 ? 'indicator--active' : ''}`"></div>
          </div>
          <div class="alert alert--danger" v-if="alert.status">
            <h3 class="alert__heading">{{ alert.title }}</h3>
            <p class="alert__paragraph">{{ alert.message }}</p>
          </div>
          <form @submit.prevent="submitForm()">
            <template v-if="step==0">
              <div class="section__paragraph">
                The HSS Challenge is open to high schools across the capital of Niger State, Minna. Schools outside Minna are not eligible to apply for the challenge.
                <br /><br />
                <h3 class="input-group__label">Do not fill this form if:</h3>
                <br />
                <ul>
                  <li>If your school is outside Minna</li>
                  <li>If you have registered before</li>
                  <li>Are an individual. Only Schools can apply for the challenge. And entrant schools will get to register two participants from their schools.</li>
                </ul>
                <br />
                <h3 class="input-group__label">How will we use the information you provide?</h3>
                <br />
                LUE takes your privacy seriously and will not pass on your information to any third party.
                <br />
                The information you provide will only be used for the program. If at any point you no longer wish for us to hold your school's information, you can request for us to delete it by sending a mail to <a href="mailto:info@lueinitiative.org">info@lueinitiative.org</a>
              </div>
            </template>
            <template v-else-if="step==1">
              <div class="col-md-7 pl-0">
                <label for="school-name" class="input-group">
                  <span class="input-group__label">School Name</span>
                  <input class="input-group__input" type="text" id="school-name" v-model="school.name" placeholder="School name" required />
                </label>
              </div>
              <div class="col-md-7 pl-0">
                <label for="school-address" class="input-group">
                  <span class="input-group__label">School Address</span>
                  <textarea class="input-group__input" id="school-address" v-model="school.address" placeholder="School Address"></textarea>
                </label>
              </div>
              <div class="col-md-7 pl-0">
                <div class="input-group">
                  <span class="input-group__label">Type of school</span>
                  <br />
                  <label for="boarding" class="input-group__radio">
                    <input type="radio" id="boarding" v-model="school.type" value="Boarding" />
                    Boarding
                  </label><br />
                  <label for="day" class="input-group__radio">
                    <input type="radio" id="day" v-model="school.type" value="Day" />
                    Day
                  </label><br />
                  <label for="both" class="input-group__radio">
                    <input type="radio" id="both" v-model="school.type" value="Both" />
                    Both
                  </label><br />
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <div class="input-group">
                  <span class="input-group__label">Is your school specifically for students with special needs or disabilities?</span>
                  <br />
                  <label for="Yes" class="input-group__radio">
                    <input type="radio" id="ye" v-model="school.disabilities" value="Yes" />
                    Yes
                  </label><br />
                  <label for="No" class="input-group__radio">
                    <input type="radio" id="No" v-model="school.disabilities" value="No" />
                    No
                  </label><br />
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <div class="input-group">
                  <span class="input-group__label">How is your school funded? You can select more than one option</span>
                  <br />
                  <label for="government" class="input-group__radio">
                    <input type="checkbox" id="government" v-model="school.fundedBy" value="Government" />
                    Government
                  </label><br />
                  <label for="private" class="input-group__radio">
                    <input type="checkbox" id="private" v-model="school.fundedBy" value="Private" />
                    Private
                  </label><br />
                  <label for="charity" class="input-group__radio">
                    <input type="checkbox" id="charity" v-model="school.fundedBy" value="Charity" />
                    Charity
                  </label><br />
                  <label for="religious-organization" class="input-group__radio">
                    <input type="checkbox" id="religious-organization" v-model="school.fundedBy" value="Religious Organization" />
                    Religious Organization
                  </label><br />
                  <label for="school-business" class="input-group__radio">
                    <input type="checkbox" id="school-business" v-model="school.fundedBy" value="School Business" />
                    School Business
                  </label><br />
                  <label for="community-backed" class="input-group__radio">
                    <input type="checkbox" id="community-backed" v-model="school.fundedBy" value="Community" />
                    Community
                  </label><br />
                  <label for="other-means-of-funding" class="input-group__radio">
                    <input type="checkbox" id="other-means-of-funding" v-model="school.fundedBy" value="Other" />
                    Other
                  </label><br />
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <label for="how-did-you-hear-about-hss" class="input-group">
                  <span class="input-group__label">How did you hear about the LUE High School Spark Challenge?</span>
                  <input class="input-group__input" type="text" id="how-did-you-hear-about-hss" v-model="school.informant" placeholder="How did you hear about HSS" required />
                </label>
              </div>
            </template>
            <template v-else-if="step==2">
              <div class="row m-0 justify-content-between">
                <div class="col-7 pl-0">
                  <label for="first-name" class="input-group">
                    <span class="input-group__label">First Name</span>
                    <input class="input-group__input" type="text" id="first-name" v-model="facilitator.fname" placeholder="John" required />
                  </label>
                </div>
                <div class="col-5 p-0">
                  <label for="last-name" class="input-group">
                    <span class="input-group__label">Last Name</span>
                    <input class="input-group__input" type="text" id="last-name" v-model="facilitator.lname" placeholder="Doe" required />
                  </label>
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <div class="input-group">
                  <span class="input-group__label">Gender</span>
                  <br />
                  <label for="male" class="input-group__radio">
                    <input type="radio" id="male" v-model="facilitator.gender" value="Male" />
                    Male
                  </label><br />
                  <label for="female" class="input-group__radio">
                    <input type="radio" id="female" v-model="facilitator.gender" value="Female" />
                    Female
                  </label><br />
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <label for="personal-email" class="input-group">
                  <span class="input-group__label">Your personal email</span>
                  <p class="input-group__paragraph">
                    Please provide an email address that you have regular access to. This is the email address which we will use to send important communications regarding the challenge.
                  </p>
                  <input class="input-group__input" type="email" id="personal-email" v-model="facilitator.mail" placeholder="johndoe@example.com" required />
                </label>
              </div>
              <div class="col-md-7 pl-0">
                <div class="row m-0 justify-content-between">
                  <div class="col-4 pl-0">
                    <label for="country-code" class="input-group">
                      <span class="input-group__label">Dial code</span>
                      <input class="input-group__input" type="text" id="country-code" v-model="facilitator.country_code" placeholder="+234" required />
                    </label>
                  </div>
                  <div class="col-8 p-0">
                    <label for="whatsapp-number" class="input-group">
                      <span class="input-group__label">WhatsApp Number</span>
                      <input class="input-group__input" type="number" id="whatsapp-number" v-model="facilitator.whatsapp" placeholder="999 999 9999" required />
                    </label>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <br />
              <p class="input-group__paragraph">
                <b>Terms of use:</b> Let's Use Entrepreneurship (LUE) is committed to protection of personal information. LUE has developed a privacy policy in conformity with the subject to the application requirements of the personal information protection.
                <br />
                By submitting this form, you consent to the collection, use and disclosure of your personal information as described above.
              </p>
            </template>
            <div class="row mt-5 m-0 justify-content-between align-items-center">
              <button type="button" class="btn btn--link" @click.prevent="step -= 1" v-if="step !== 0">
                Prev
              </button>
              <div class="p-5" v-else>
              </div>
              <button type="button" class="btn btn--link btn--cta" @click.prevent="step += 1" v-if="step !== 3">
                Next
              </button>
              <button type="submit" class="btn btn--link btn--cta" v-else :disabled="clicked">
                Submit Response
              </button>
            </div>
          </form>
        </template>
      </div>
    </main>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HSS-view',
  data() {
    return {
      step: 0,
      school: {
        fundedBy: []
      },
      facilitator: {},
      alert: {},
      clicked: false
    }
  },
  methods: {
    ...mapActions(['registerSchool']),
    submitForm() {
      this.clicked = true
      this.registerSchool([this.school, this.facilitator]).then( () => {
        this.alert = {
          status: 200,
          title: `Congratulations, ${this.facilitator.fname}`,
          message: `Your school: ${this.school.name} has been registered for the LUE HSS challenge. A message will be sent to the emails provided.`
        }
      }).catch(error => {
        this.clicked = false
        this.alert = {
          status: 400,
          title: `An error occurred.`,
          message: error.message
        }
      })
    }
  }
}
</script>