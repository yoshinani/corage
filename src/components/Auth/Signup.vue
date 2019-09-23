<template>
  <div>
    <input v-model="email" type="text" placeholder="メールアドレス" /><br />
    <input v-model="password" type="password" placeholder="パスワード" /><br />
    <button @click="signup">Signup</button>
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
    ...mapActions('auth', ['signUp']),
    signup: function() {
      this.$store.dispatch('auth/signUp', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
