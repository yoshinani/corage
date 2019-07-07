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
      this.setUser({ uid, email, displayName })
    })
  },
  methods: {
    ...mapActions('auth', ['setUser']),
    logout() {
      fireauth
        .signOut()
        .then(() => {
          this.setUser(null)
          this.$router.push('/')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
