export const strict = false

// state:コンポーネントでいうdata
export const state = () => ({
  user: null
})

// mutations:コンポーネントでいうmethod（と言うかsetter）
// stateを唯一変更できるもの
export const mutations = {
  // vuexでは引数をpayloadと呼ぶっぽい
  // payloadはオブジェクトにするべき（いっぱい入れれるし）
  setUser(state, payload) {
    state.user = payload
  }
}

// actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
export const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  }
}

// getters:コンポーネントでいうcomputed的なもの
export const getters = {
  // isAuthenticatedを使用するgetter
  isAuthenticated(state) {
    return !!state.user
  }
}
