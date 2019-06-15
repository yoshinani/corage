<template>
  <section>
    <div>
      <Hero />
      <Shimoza />
    </div>
  </section>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Shimoza from '~/components/Shimoza.vue'

export default {
  components: {
    Hero,
    Shimoza
  }
}
</script>
