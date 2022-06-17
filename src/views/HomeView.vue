<template>
  <div>
    <div>
      <Notice />
      <NavFull />
      <Carousel />
    </div>
    <div>
      <NavSecondary />
      <div class="container py-2">
        <h1 class='text-center py-3'>Lo mas nuevo</h1>
        <main class="row" v-if='loader'>
          <ArticlesPlaceholder />
          <ArticlesPlaceholder />
          <ArticlesPlaceholder />
          <ArticlesPlaceholder />
        </main>
        <Articles v-if='!loader'/>
      </div>
      <Parallax />
      <Contact />
      <FooterFull />
    </div>
  </div>
</template>


<script>
import Notice from '@/components/Notice.vue'
import NavFull from '@/components/NavFull.vue'
import Carousel from '@/components/Carousel.vue'
import NavSecondary from '@/components/NavSecondary.vue'
import Labels from '@/components/Labels'
import ArticlesPlaceholder from '@/components/ArticlesPlaceholder'
import Articles from '@/components/Articles.vue'
import Parallax from '@/components/Parallax.vue'
import Contact from '@/components/Contact.vue'
import FooterFull from '@/components/FooterFull.vue'


import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Notice, NavFull, Carousel, NavSecondary, Labels, ArticlesPlaceholder, Articles, Parallax, Contact, FooterFull
  },
  created(){
    this.getAllProducts();
  },
  computed: {
    ...mapState('blogger', ['loader'])
  },
  methods: {
    ...mapActions('blogger', ['getAllProducts'])
  }
}


</script>
