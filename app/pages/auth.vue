<template>
  <section class="container">
    <div>
      <signup />
      <signin />
    </div>
  </section>
</template>

<script>
import Signup from '~/components/Auth/Signup.vue'
import Signin from '~/components/Auth/Signin.vue'

export default {
  components: {
    Signup,
    Signin
  }
}
</script>
