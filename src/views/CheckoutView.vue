<template>
  <div id="carCarousel" class="bg-light vh-100 carousel slide" data-bs-interval="false" data-bs-wrap="false" >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <CarFull />
      </div>
      <div class="carousel-item">
        <DataForm />
      </div>
    </div>
  </div>
</template>


<script>
import CarFull from '@/components/CarFull.vue';
import DataForm from '@/components/DataForm.vue';

import { mapState } from 'vuex';

export default {

  name: 'CheckoutView',
  components:{
    CarFull, DataForm
  },
  computed: {
    ...mapState(['car'])
  }

}
</script>
