import { fireauth } from '~/plugins/firebase'

export default function({ route, store, redirect }) {
  fireauth.onAuthStateChanged(user => {
    if (user) {
      store.dispatch('auth/loginUser', user)
    } else if (route.name === 'index') {
      redirect('/')
    } else if (route.name !== 'auth-login') redirect('/auth/login')
  })
}
