import firebase from '~/plugins/firebase'

export default function({ route, store, redirect }) {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user || false)
    })
  })
}
