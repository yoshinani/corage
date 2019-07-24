<template>
  <div>
    <input v-model="email" type="text" placeholder="メールアドレス" /><br />
    <input v-model="password" type="password" placeholder="パスワード" /><br />
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
import { fireauth } from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    login() {
      fireauth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/home')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
