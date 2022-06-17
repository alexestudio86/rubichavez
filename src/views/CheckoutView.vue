<template>
  <div>
    <CarFull />
  </div>
</template>


<script>
import CarFull from '@/components/CarFull.vue'
import { mapState } from 'vuex'

export default {

  name: 'CheckoutView',
  components:{
    CarFull
  },
  computed: {
    ...mapState(['car'])
  }

}
</script>
