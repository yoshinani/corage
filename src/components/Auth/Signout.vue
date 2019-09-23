<template>
  <!-- ログイン中に表示される画面 -->
  <div v-if="isAuthenticated">
    {{ user.email }}でログイン中です<br />
    <button @click="signout">ログアウト</button><br />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    signout() {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>
