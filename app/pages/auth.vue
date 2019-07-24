<template>
  <section class="container">
    <div>
      <signup />
      <login />
    </div>
  </section>
</template>

<script>
import Signup from '~/components/Auth/signup.vue'
import Login from '~/components/Auth/login.vue'

export default {
  components: {
    Signup,
    Login
  }
}
</script>
