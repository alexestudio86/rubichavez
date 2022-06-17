<template>
  <div>
    <NavCompact />
    <ProductPlaceholder v-if='loader' />
    <Product v-if='!loader'/>
    <FooterCompact />
  </div>
</template>


<script>
import NavCompact from '@/components/NavCompact.vue'
import ProductPlaceholder from '@/components/ProductPlaceholder'
import Product from '@/components/Product.vue'
import FooterCompact from '@/components/FooterCompact.vue'


import { mapState, mapActions } from 'vuex'

export default {

  name: 'ProductView',
  components:{
    NavCompact, ProductPlaceholder, Product, FooterCompact
  },
  created: function(){
    this.getSingleProduct( this.$route.params.id );
  },
  computed: {
    ...mapState('blogger', ['loader'])
  },
  methods: {
    ...mapActions('blogger', ['getSingleProduct'])
  }

}
</script>
