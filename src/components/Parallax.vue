<template>
    <div class="d-flex justify-content-center bg-parallax">
      <div class="align-self-center text-center">
        <h1 class="text-white fs-1">Producto Orgánico</h1>
        <p class="text-white fs-2">Nuestra línea integra en todas sus fórmulas ingredientes de la más alta calidad para brindar el cuidado que necesitas</p>
        <a class="btn bg-white fs-3" href="#">Saber mas</a>
      </div>
    </div>
</template>

<script>
export default {

  name: 'Parallax'

}
</script>

<style scoped>

  @media (min-width:576px){
    .bg-parallax {
      min-height:             600px;
      background-attachment:  fixed;
      background-size:        cover;
      background-position:    50% 50%;
      background-image:       url('../assets/bg-parallax.jpg')
    }
  };
  @media (max-width:576px){
    .bg-parallax {
      background-image:       url('../assets/bg-parallax.jpg');
      height:                 100vh;
      width:                  100%;
      background-position:    center;
      background-repeat:      no-repeat;
      background-size:        cover;
    }
  }

</style>