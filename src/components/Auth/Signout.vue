<template>
  <!-- ログイン中に表示される画面 -->
  <div v-if="isAuthenticated">
    {{ user.email }}でログイン中です<br />
    <button @click="signout">ログアウト</button><br />
    <nuxt-link to="/home">ホームへ</nuxt-link>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      const { uid, email, displayName } = user
      this.loginUser({ uid, email, displayName })
    })
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.loginUser(null)
          this.$router.push('/')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
