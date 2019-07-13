<template>
  <!-- ログイン中に表示される画面 -->
  <div v-if="isAuthenticated">
    {{ user.email }}でログイン中です<br />
    <button @click="logout">ログアウト</button><br />
    <a href="/home">ホームへ</a>
  </div>
</template>

<script>
import { fireauth } from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  mounted() {
    fireauth.onAuthStateChanged(user => {
      const { uid, email, displayName } = user
      this.loginUser({ uid, email, displayName })
    })
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    logout() {
      fireauth
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
