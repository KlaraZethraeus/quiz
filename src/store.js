import { createStore } from 'vuex'

const mutations = {
  increment(state) {
    state.counter += 1
  },
  incrementCorrectAnswers(state) {
    state.correctAnswers += 1
  }
}

const state = {
  counter: 0,
  correctAnswers: 0
}

export default createStore({ mutations, state, strict: true })
