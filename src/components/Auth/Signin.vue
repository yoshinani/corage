<template>
  <div>
    <input v-model="email" type="text" placeholder="メールアドレス" /><br />
    <input v-model="password" type="password" placeholder="パスワード" /><br />
    <button @click="signin">signin</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['signIn']),
    signin() {
      this.$store.dispatch('auth/signIn', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
