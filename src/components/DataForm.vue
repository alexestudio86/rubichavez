<template>
  <div class="bg-light vh-100">    
    <div class="container" >

      <div class='d-flex justify-content-between align-items-center py-1'>
        <button type="button" class='btn btn-outline-secondary' data-bs-target="#carCarousel" data-bs-slide="prev" >
          <i class='fas fa-chevron-left fa-lg'/>
        </button>

        <h5 class="text-uppercase" id='offcanvasRightLabel'>Datos de usuario</h5>
      </div>

      <form @submit.prevent="checkForm">
        <div class="border-bottom border-2 border-success" style="overflow:scroll; height:80vh">
          <div class="py-3">
            <div class="py-2">
              <label for="guest" class="form-label">Nombre</label><!--<span class="text-danger" v-if='dataUser.name.length > 0 && dataUser.name.length < 4'> (Mínimo 4 caracteres))</span>-->
              <input type="text" class="form-control" id="guest" placeholder="ej. José Blaz" pattern="[A-z ]{4, 30}" title="Mínimo 5 caracteres sin números" v-model='dataUser.name' required />
            </div>
          </div>
        </div>
  
        <div class="py-3">
          <button id="pedido" :disabled=" errors " class="btn btn-primary w-100" type="submit" >
            Realizar pedido
          </button>
        </div>
      </form>


      <Thankyou />

    </div>
  </div>
</template>

<script>
import Thankyou from '@/components/Thankyou.vue';
import { mapMutations, mapState } from 'vuex';


export default {

  name: 'DataForm',
  data(){
    return{
      errors: true
    }
  },
  updated(){
    if( this.dataUser.name.length > 3 ){
      this.errors = false
    }else{
      this.errors = true
    }
  },
  components: {
    Thankyou
  },
  methods: {
    checkForm(){
      this.offCanvas()
    },
    offCanvas(){
      const myOffCanvas = document.getElementById('offcanvasBottom');
      const offCanvas   = bootstrap.Offcanvas.getOrCreateInstance( '#offcanvasBottom' );
      offCanvas.show();
      this.sendData();
    },
    ...mapMutations(['sendData'])
  },
  computed: {
    ...mapState(['dataUser'])
  }

}
</script>