import firebase from '~/plugins/firebase'
import auth from '~/plugins/auth'
export const strict = false

export const state = () => ({
  user: null
})

// stateを唯一変更できるもの
export const mutations = {
  setSignInState(state, payload) {
    state.user = payload
  }
}

export const actions = {
  async signUp({ commit }, payload) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        // TODO: 登録後の処理を考える
        alert('登録が完了しました\nsigninしてください')
      })
      .catch(error => {
        alert(error)
      })
  },
  async signIn({ commit }, payload) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setSignInState', payload)
        this.$router.push('/home')
      })
      .catch(error => {
        alert(error)
      })
  },
  async signOut({ commit }) {
    await firebase
      .auth()
      .signOut()
      .then(res => {
        commit('setSignInState', false)
      })
  },
  async checkAuth({ commit }) {
    await auth().then(user => commit('setSignInState', user))
  }
}

export const getters = {
  // isAuthenticatedを使用するgetter
  isAuthenticated(state) {
    return !!state.user
  }
}
