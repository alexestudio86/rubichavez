<template>
  <div>
    <div>
      <NavCompact />
      <Header />
    </div>
    <div>
      <Labels />
      <div class="container pt-5 pb-2">
        <h3 class='text-center py-2'>Resultados para: <i>{{ decodeURI(this.$route.params.text) }}</i></h3>
        <main class="row" v-if='loader'>
          <ArticlesPlaceholder />
          <ArticlesPlaceholder />
          <ArticlesPlaceholder />
          <ArticlesPlaceholder />
        </main>
        <Articles v-if='!loader' />
      </div>
    </div>
    <FooterCompact />
  </div>
</template>
<script>

import NavCompact from '@/components/NavCompact.vue'
import Header from '@/components/Header.vue'
import ArticlesPlaceholder from '@/components/ArticlesPlaceholder.vue'
import Articles from '@/components/Articles.vue'
import Labels from '@/components/Labels.vue'
import FooterCompact from '@/components/FooterCompact.vue'

import { mapState, mapActions } from 'vuex'

export default {

  name: 'ProductsView',
  components:{
    NavCompact, Header, ArticlesPlaceholder, Articles, Labels, FooterCompact
  },
  created(){
    this.getProductsBySearch(this.$route.params.text);
  },
  computed:{
    ...mapState('blogger', ['loader'])
  },
  methods: {
    ...mapActions('blogger', ['getProductsBySearch'])
  }

}
</script>
