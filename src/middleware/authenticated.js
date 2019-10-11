import firebase from '~/plugins/firebase'

export default function({ route, store, redirect }) {
  console.log('処理前')
  const storageItem = JSON.parse(sessionStorage.getItem('CorageAuthStatus'))
  console.log(storageItem === null)
  // sessionがnullの場合認証処理を行う
  if (storageItem === null) {
    const auth = new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user || false)
      })
    })
    auth.then(function() {
      if (auth === undefined) {
        redirect('/auth')
      }
      if (auth === false) {
        redirect('/auth')
      }
      store.commit('auth/setSignInState', auth)
    })
  }
  // {"auth":{"user":{}}} だった場合再認証させる
  // ↑基本的にはログアウトのタイミングですべて消しておきたい
  if (Object.keys(storageItem.auth.user).length) {
    // ログアウトアクション叩きたい
    // そのあとリダイレクトしたい
  }
  console.log('処理後')
  // sessionを消すと以下はnullになる
  console.log(sessionStorage.getItem('CorageAuthStatus'))
  return store.state.auth.user
}
