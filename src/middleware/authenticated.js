import { fireauth } from '~/plugins/firebase'

export default function({ route, store, redirect }) {
  return new Promise((resolve, reject) => {
    fireauth.onAuthStateChanged(user => {
      resolve(user || false)
    })
  })
}
