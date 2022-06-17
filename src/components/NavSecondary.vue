<template>
  <ul class="nav bg-secondary justify-content-center py-1 sticky-top" style="z-index: 5">
    <li class="nav-item">
      <router-link class="nav-link text-uppercase" aria-current="page" :to="{ name:'ResultsByLabels', params: {tag: encodeURI('0 Línea capilar')} }" >Línea Capilar</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-uppercase" aria-current="page" :to="{ name:'ResultsByLabels', params: {tag: encodeURI('0 Línea cosmética')} }" >Línea Cosmética</router-link>
    </li>
  </ul>
</template>

<script>
export default {

  name: 'NavSecondary'

}
</script>

<style scoped>
.nav-link{
  color: rgba(255,255,255,.55);
}
</style>