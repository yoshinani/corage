<template>
  <div>
    <input v-model="email" type="text" placeholder="メールアドレス" /><br />
    <input v-model="password" type="password" placeholder="パスワード" /><br />
    <button @click="signup">Signup</button>
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
  mounted() {
    fireauth.onAuthStateChanged(user => {
      this.setUser(user)
    })
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    signup: function() {
      fireauth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('登録が完了しました')
          // ログインしたら飛ぶページを指定することもできます
          // this.$router.push("/")
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
