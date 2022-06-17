<template>
  <div class="bg-dark py-2 sticky-top text-center" style="overflow: auto; white-space: nowrap" >
    <router-link tag="button" v-for="(label, index) of labels" :key="index" 
    class="btn badge rounded-pill bg-light text-dark p-2 m-1" 
    :to="{ name:'ResultsByLabels', params: {tag: encodeURI(label)} }" 
    @click="getProductsByLabels( encodeURI(label) )" >
      {{ label }}
    </router-link>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {

  name: 'Labels',
  data(){
    return{
      labels: ['Crema para peinar', 'Fijación', 'Herramientas', 'Mascarilla matizante', 'Multifuncionales', 'Multivitaminico', 'Semipermanentes', 'Shampoo']
    }
  },
    methods: {
    ...mapActions('blogger', ['getProductsByLabels'])
  }

}
</script>

<style scoped>

  .router-link-active{
    background: rgba(var(--bs-primary-rgb),var(--bs-bg-opacity)) !important;
    color: rgba(var(--bs-white-rgb),var(--bs-text-opacity)) !important;
    padding: 8px !important;
    margin: 0 2px;
  }

</style>