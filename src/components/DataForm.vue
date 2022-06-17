<template>
  <div class="bg-light vh-100">    
    <div class="container" >
      <div class='d-flex justify-content-between align-items-center py-1'>
        <button type="button" class='btn btn-outline-secondary' @click.stop="back">
          <i class='fas fa-chevron-left fa-lg'/>
        </button>
        <h5 class="text-uppercase" id='offcanvasRightLabel'>Datos de usuario</h5>
      </div>

      <div class="border-bottom border-2 border-success" style="overflow:scroll; height:80vh">
        <div class="py-3">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ej. José Blaz" v-model='name'>
            <div class="form-text" v-if='name.length > 0 && name.length < 4'>Su nombre no puede ser tan corto</div>
          </div>
        </div>
      </div>

      <div class="py-3" v-if='name.length > 4'>
        <button class="btn btn-secondary w-100" type="button" data-bs-target="#carouselCar" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">
          Realizar pedido
        </button>
      </div>
    </div>
  </div>
</template>

<script>


export default {

  name: 'DataForm',
  data(){
    return{
      name: ''
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    }
  }

}
</script>