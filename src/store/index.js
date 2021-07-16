import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

import './firebase.config'
require('firebase/firestore')

Vue.use(Vuex)
var db = firebase.firestore()
window.db = db

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    registerMentor({ commit }, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        db.collection('mentors').add({
          alumni: payload.alumni,
          available: payload.available,
          bio: payload.bio,
          experience: payload.experience,
          experience_description: payload.experience_description,
          name: payload.fname + ' ' + payload.lname,
          guidiance: payload.guidiance,
          linkedin: payload.linkedin,
          mail: payload.mail,
          previous_mentorship: payload.previous_mentorship,
          strength: payload.strength
        }).then(()=> {
          resolve()
        }).catch(error => {
          reject(error)
          commit()
        })
      })
    },
    registerSchool({ commit }, payload) {
      return new Promise((resolve, reject) => {
        let schoolData = payload[0]
        let facilitator = payload[1]
        db.collection('hss').add({
          school_address: schoolData.address,
          school_disabilities: schoolData.disabilities,
          school_funders: schoolData.fundedBy,
          informant: schoolData.informant,
          school_name: schoolData.name,
          school_type: schoolData.type,
          facilitator_name: facilitator.fname + ' ' +facilitator.lname,
          facilitator_mail: facilitator.mail,
          facilitator_country_code: facilitator.country_code,
          facilitator_whatsapp: facilitator.whatsapp
        }).then(()=> {
          resolve()
        }).catch(error => {
          reject(error)
          commit()
        })
      })
    }
  }
})
