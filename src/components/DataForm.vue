<template>
  <div class="bg-light vh-100">    
    <div class="container" >

      <div class='d-flex justify-content-between align-items-center py-1'>
        <button type="button" class='btn btn-outline-secondary' @click.stop="back">
          <i class='fas fa-chevron-left fa-lg'/>
        </button>
        <h5 class="text-uppercase" id='offcanvasRightLabel'>Datos de usuario</h5>
      </div>

      <form @submit.prevent="checkForm">
        <div class="border-bottom border-2 border-success" style="overflow:scroll; height:80vh">
          <div class="py-3">
            <div class="py-2">
              <label for="guest" class="form-label">Nombre</label><span class="text-danger" v-if='name.length > 0 && name.length < 4'> (Mínimo 4 caracteres))</span>
              <input type="text" class="form-control" id="guest" placeholder="ej. José Blaz" pattern="[A-z ]{4,15}" v-model='name' required />
            </div>
            <div class="py-2">
              <label for="phone" class="form-label">Teléfono</label><span class="text-danger" v-if='phone.length > 0 && phone.length < 10'> (Mínimo 10 números)</span>
              <input type="tel" class="form-control" id="phone" placeholder="ej. 5512345678" pattern="[0-9]{10}" v-model='phone' required />
            </div>
          </div>
        </div>
        {{ errors }}
  
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
import { mapMutations } from 'vuex';


export default {

  name: 'DataForm',
  data(){
    return{
      name: '',
      phone: '',
      errors: true
    }
  },
  updated(){
    if( this.name.length > 3 && this.phone.length > 9 ){
      this.errors = false
    }else{
      this.errors = true
    }
  },
  components: {
    Thankyou
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    checkForm(){
      this.offCanvas()
    },
    offCanvas(){
      console.log('hello');
      const myOffCanvas = document.getElementById('offcanvasBottom');
      const offCanvas   = bootstrap.Offcanvas.getOrCreateInstance( '#offcanvasBottom' );
      offCanvas.show();
    },
    finish(){
      setTimeout( this.clearCar, 2000)
    },
    ...mapMutations(['clearCar'])
  }

}
</script>