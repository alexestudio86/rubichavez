<template>
  <div class="fixed-bottom p-3" style="z-index: 11">
    <div id="liveToast" class="m-auto toast align-items-center success alert-success border border-success" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          Producto actualizado con éxito
        </div>
        <button type="button" class="btn-close btn-close-success me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>


<script>
export default {

  name: 'Toast',

}
</script>


<style scoped>
  .success{
    color:  #0f5132;
    background: #d1e7dd;
  }
</style>