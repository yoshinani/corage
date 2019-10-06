import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'CorageAuthStatus',
      paths: ['auth.user'],
      storage: window.sessionStorage
    })(store)
  })
}
