<template>
  <div>
    <input v-model="email" type="text" placeholder="メールアドレス" /><br />
    <input v-model="password" type="password" placeholder="パスワード" /><br />
    <button @click="signin">signin</button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
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
    signin() {
      firebase
        .auth()
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
