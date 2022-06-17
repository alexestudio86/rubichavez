<template>
  <main class="row">
    <article v-for='(post, index) of posts' :key='index' class="col-md-6 p-2" >
      <div class='card p-2'>
          <div class='row'>
            <header class="col-md-9 d-none d-sm-block">
              <h1 class='fs-4 text-uppercase text-primary card-title'>{{ post.title }}</h1> 
              <span class='fs-5 badge bg-secondary'>{{ filterLabels(post.labels) }}</span>
            </header>
            <div class="col-md-3" style="background: linear-gradient(0deg, rgba(231,236,216,1) 0%, rgba(255,255,255,1) 27%)">
              <img class='w-100 rounded-circle' v-bind='{alt: post.title, src:filterPostImages(post.images, post.content)}' style="width:100%; height:100%; object-fit:contain" />
            </div>
            <div class="col-md-9 bg-light d-block d-sm-none d-flex justify-content-between align-items-center">
              <h1 class='m-0 text-secondary fs-6 fw-bold'>{{ post.title }}</h1>
              <router-link class="btn" :to="{ name: 'Product', params: {id: post.id} }">
                <i class="far fa-caret-square-down text-primary fa-2x"></i>
              </router-link>
            </div>
          </div>
      </div>
    </article>
  </main>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Posts',
  computed: {
      ...mapState('blogger', ['posts'])
  },
  methods: {
    filterLabels(e){
      if(e.length == 0){
        return 'Varios'
      }else if (e.length == 1) {
        return e[0]
      } else {
        return e[1]
      }
    },
    filterPostImages( evt, body ){
      if(evt){
        if(evt.length == 0){
          return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
        }else if (evt.length == 1) {
          return evt[0].url.replace("s1024","s320")
        } else {
          return evt[0].url.replace("s1024","s320")
        }
      }else{
         const getUrlsFromText = body.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g);
         if( getUrlsFromText == 0 ){
          return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
         }else if( getUrlsFromText == 1 ){
           return getUrlsFromText[0].replace('s1024', 's320')
         }else{
           return getUrlsFromText[0].replace('s1024', 's320')
         }
      }
    },
    showPostModal(evt){
      this.obj = evt;
      let modal = new bootstrap.Modal( document.querySelector('div#postModal') );
      modal.toggle();
    }
  }
}
</script>