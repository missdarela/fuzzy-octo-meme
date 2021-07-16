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
        <h1 class="heading heading--fancy">Entrepreneurship Mentor Application Form</h1>
        <div class="alert alert--success" v-if="alert.status === 200">
          <h3 class="alert__heading">{{ alert.title }}</h3>
          <p class="alert__paragraph">{{ alert.message }}</p>
        </div>
        <template v-else>
          <div class="indicators">
            <div :class="`indicator ${step >= 1 ? 'indicator--active' : ''}`"></div>
            <div :class="`indicator ${step >= 2 ? 'indicator--active' : ''}`"></div>
            <div  :class="`indicator ${step >= 3 ? 'indicator--active' : ''}`"></div>
            <div  :class="`indicator ${step >= 4 ? 'indicator--active' : ''}`"></div>
          </div>
          <div class="alert alert--danger" v-if="alert.status">
            <h3 class="alert__heading">{{ alert.title }}</h3>
            <p class="alert__paragraph">{{ alert.message }}</p>
          </div>
          <form @submit.prevent="submitForm()">
            <template v-if="step == 0">
              <p class="section__paragraph">
                Thank you for your intrest in becoming a mentor with LUE Initiative mentorship program.
                <br /><br />
                Our Entrepreneurship mentorship program is designed to give our LUE students an opportunity to connect with and learn from experienced
                entrepreneurs and leaders over the training period and beyond. As a mentor, you will get to meet with these mentees to provide guidance, insight, support, and answers to questions to help the mentees in achieving
                their business goals.
                <br /><br />
                We host cycles of programs and trainings every year across the county that would require the invaluable input of our mentors.
                If you have any questions, kindly mail Joshua Kure at <a href="mailto:joshuakure@lueinitiative.org">joshuakure@lueinitiative.org</a>
              </p>
            </template>
            <template v-else-if="step == 1">
              <div class="row m-0 justify-content-between">
                <div class="col-7 pl-0">
                  <label for="first-name" class="input-group">
                    <span class="input-group__label">First Name</span>
                    <input class="input-group__input" type="text" id="first-name" v-model="mentor.fname" placeholder="John" required />
                  </label>
                </div>
                <div class="col-5 p-0">
                  <label for="last-name" class="input-group">
                    <span class="input-group__label">Last Name</span>
                    <input class="input-group__input" type="text" id="last-name" v-model="mentor.lname" placeholder="Doe" required />
                  </label>
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <label for="email" class="input-group">
                  <span class="input-group__label">Email</span>
                  <input class="input-group__input" type="text" id="email" v-model="mentor.mail" placeholder="johndoe@example.com" required />
                </label>
              </div>
              <div class="col-md-7 pl-0">
                <label for="linkedin-url" class="input-group">
                  <span class="input-group__label">LinkedIn URL</span>
                  <input class="input-group__input" type="link" id="linkedin-url" v-model="mentor.linkedin" placeholder="https://linkedin.com/in/johndoe" />
                </label>
              </div>
              <div class="col-md-7 pl-0">
                <label for="bio" class="input-group">
                  <span class="input-group__label">Professional Bio - If you don't have a LinkedIn profile.</span>
                  <textarea class="input-group__input" id="bio" v-model="mentor.bio" placeholder="A short bio"></textarea>
                </label>
              </div>
            </template>
            <template v-else-if="step == 2">
              <div class="col-md-7 pl-0">
                <div class="input-group">
                  <span class="input-group__label">What is your experience with entrepreneurship and leadership?</span>
                  <p class="input-group__paragraph">
                    Please tell us what best describes your experience on this in the question.
                  </p>
                  <br />
                  <label for="founder" class="input-group__radio">
                    <input type="radio" id="founder" name="experience" v-model="mentor.experience" value="founder" />
                    I am the founder of my own business.
                  </label><br />
                  <label for="builder" class="input-group__radio">
                    <input type="radio" id="builder" name="experience" v-model="mentor.experience" value="builder" />
                    I have experience growing/building a business.
                  </label><br />
                  <label for="expert" class="input-group__radio">
                    <input type="radio" id="expert" name="experience" v-model="mentor.experience" value="expert" />
                    I am a subject-matter or industry expert.
                  </label><br />
                  <label for="other" class="input-group__radio">
                    <input type="radio" id="other" name="experience" v-model="mentor.experience" value="other" />
                    Other experience
                  </label>
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <div class="input-group">
                    <span class="input-group__label">Please elaborate on your entrepreneurship experience to help us understad more about it.</span>
                    <p class="input-group__paragraph">
                      For example, what kind of business did you start, what is your role in the company, how many years of experience do you have, what industry/field you work in, e.t.c.
                      Please provide your company or business website if applicable.
                    </p>
                    <br />
                    <textarea class="input-group__input" id="bio" v-model="mentor.experience_description" placeholder="Description of your experience."></textarea>
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <div class="input-group">
                  <span class="input-group__label">What areas of entrepreneurship are your biggest strengths?(Please check all that apply.)</span>
                  <br />
                  <label for="business-growth-and-development" class="input-group__radio">
                    <input type="checkbox" id="business-growth-and-development" v-model="mentor.strength" value="Business Growth and Development" />
                    Business Growth and Development
                  </label><br />
                  <label for="business-plan" class="input-group__radio">
                    <input type="checkbox" id="business-plan" v-model="mentor.strength" value="Business Plan" />
                    Business Plan
                  </label><br />
                  <label for="early-stage-funding" class="input-group__radio">
                    <input type="checkbox" id="early-stage-funding" v-model="mentor.strength" value="Early-stage funding" />
                    Early-stage funding
                  </label><br />
                  <label for="human-resource" class="input-group__radio">
                    <input type="checkbox" id="human-resource" v-model="mentor.strength" value="Human resource" />
                    Human resource
                  </label><br />
                  <label for="accounting" class="input-group__radio">
                    <input type="checkbox" id="accounting" v-model="mentor.strength" value="Accounting" />
                    Accounting
                  </label><br />
                  <label for="finance-and-cash-flow" class="input-group__radio">
                    <input type="checkbox" id="finance-and-cash-flow" v-model="mentor.strength" value="Finance and cash-flow" />
                    Finance and cash-flow
                  </label><br />
                  <label for="prototype-design-and-development" class="input-group__radio">
                    <input type="checkbox" id="prototype-design-and-development" v-model="mentor.strength" value="Prototype design and development" />
                    Prototype design and development
                  </label><br />
                  <label for="new-product-development" class="input-group__radio">
                    <input type="checkbox" id="new-product-development" v-model="mentor.strength" value="New product development" />
                    New product development
                  </label><br />
                  <label for="IT" class="input-group__radio">
                    <input type="checkbox" id="IT" v-model="mentor.strength" value="IT/Technology" />
                    IT/technology
                  </label><br />
                  <label for="intellectual-property" class="input-group__radio">
                    <input type="checkbox" id="intellectual-property" v-model="mentor.strength" value="Intellectual property" />
                    Intellectual property
                  </label><br />
                  <label for="marketing" class="input-group__radio">
                    <input type="checkbox" id="marketing" v-model="mentor.strength" value="marketing" />
                    Marketing
                  </label><br />
                  <label for="digital-marketing" class="input-group__radio">
                    <input type="checkbox" id="digital-marketing" v-model="mentor.strength" value="Digital marketing" />
                    Digital marketing
                  </label><br />
                  <label for="digital-app-development" class="input-group__radio">
                    <input type="checkbox" id="digital-app-development" v-model="mentor.strength" value="Digital app development" />
                    Digital app development
                  </label><br />
                  <label for="international-business" class="input-group__radio">
                    <input type="checkbox" id="international-business" v-model="mentor.strength" value="International business" />
                    International business
                  </label><br />
                  <label for="textiles-business" class="input-group__radio">
                    <input type="checkbox" id="textiles-business" v-model="mentor.strength" value="Textiles business" />
                    Textiles business
                  </label><br />
                  <label for="Manufacturing" class="input-group__radio">
                    <input type="checkbox" id="Manufacturing" v-model="mentor.strength" value="Manufacturing" />
                    Manufacturing
                  </label><br />
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <div class="input-group">
                    <span class="input-group__label">
                      Please list any additional areas of expertise you feel you could support a new founder on.
                    </span>
                    <br />
                    <textarea class="input-group__input" id="bio" v-model="mentor.expertise" placeholder="Additional area of expertise"></textarea>
                </div>
              </div>
            </template>
            <template v-else-if="step == 3">
              <div class="col-md-7 pl-0">
                <label for="previous-mentorship" class="input-group">
                  <span class="input-group__label">Do you have previous experience with any other mentorship programs?</span>             
                  <br /><br />
                  <label for="mentored" class="input-group__radio">
                    <input type="radio" name="mentored" id="mentored" v-model="mentor.previous_mentorship" value="Yes, I've been mentored." />
                    Yes, I have mentored before.
                  </label><br />
                  <label for="currently-mentor" class="input-group__radio">
                    <input type="radio" name="mentored" id="currently-mentor" v-model="mentor.previous_mentorship" value="Yes, I've my own mentor." />
                    Yes, I have my own mentor.
                  </label><br />
                  <label for="not-mentored" class="input-group__radio">
                    <input type="radio" name="mentored" id="not-mentored" v-model="mentor.previous_mentorship" value="No previous experience." />
                    No previous experience but eager to mentor.
                  </label>
                </label>
              </div>
              <div class="col-md-7 pl-0">
                <div class="input-group">
                    <span class="input-group__label">
                      Do you have any guidance for us on what type of mentee you think would be good fit for you?
                    </span>
                    <br />
                    <textarea class="input-group__input" id="bio" v-model="mentor.guidance" placeholder="Additional guidiance on your type pf mentee."></textarea>
                </div>
              </div>
              <div class="col-md-7 pl-0">
                <label for="previous-mentorship" class="input-group">
                  <span class="input-group__label">When are you available for mentoring?</span>
                  <br /><br />
                  <label for="high-school-sparks" class="input-group__radio">
                    <input type="radio" name="available" id="high-school-sparks" v-model="mentor.available" value="HSS" />
                    High School Sparks (August)
                  </label><br />
                  <label for="LUE-incubator" class="input-group__radio">
                    <input type="radio" name="available" id="LUE-incubator" v-model="mentor.available" value="LUE Incubator" />
                    LUE Incubator (January - March)
                  </label><br />
                  <label for="think-tank" class="input-group__radio">
                    <input type="radio" name="available" id="think-tank" v-model="mentor.available" value="Think Tank Challenge" />
                    Think Tank Challenge (June)
                  </label><br />
                  <label for="all-programs" class="input-group__radio">
                    <input type="radio" name="available" id="all-programs" v-model="mentor.available" value="All" />
                    All Programs
                  </label>
                </label>
              </div>
              <div class="col-md-7 pl-0">
                <label for="previous-mentorship" class="input-group">
                  <span class="input-group__label">Where you a LUE alumni?</span>
                  <p class="input-group__paragraph">
                    Note: You don't have to be a LUE alumni to become a mentor; we also welcome mentors from outside the LUE community.
                  </p>
                  <label for="yes" class="input-group__radio">
                    <input type="radio" name="alumni" id="yes" v-model="mentor.alumni" value="Yes" />
                    Yes
                  </label><br />
                  <label for="no" class="input-group__radio">
                    <input type="radio" name="alumni" id="no" v-model="mentor.alumni" value="No" />
                    No
                  </label>
                </label>
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
              <button type="button" class="btn btn--link btn--cta" @click.prevent="step += 1" v-if="step !== 4">
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
import { mapActions } from "vuex";

export default {
  name: 'Home',
  data() {
    return {
      step: 0,
      mentor: {
        strength: []
      },
      clicked: false,
      alert: {}
    }
  },
  methods: {
    ...mapActions(['registerMentor']),
    submitForm() {
      this.clicked = true
      this.registerMentor(this.mentor).then( () => {
        this.alert = {
          status: 200,
          title: `Congratulations, ${this.mentor.fname}`,
          message: `Your application to be a mentor at LUE has been accepted. A confirmation mail will be sent to the provided email address.`
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
