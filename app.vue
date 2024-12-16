<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <switcher />
    <fooTer />

  </div>
</template>

<script>
import switcher from '@/components/Switcher.vue'
import fooTer from '@/components/footer.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    switcher,
    fooTer
  }
}
</script>