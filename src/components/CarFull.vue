<template>
  <div class="bg-light vh-100">    
    <div class="container" >
      <div class='d-flex justify-content-between align-items-center py-1'>
        <button type="button" class='btn btn-outline-secondary' @click.stop="back">
          <i class='fas fa-chevron-left fa-lg'/>
        </button>
        <h5 class="text-uppercase" id='offcanvasRightLabel'>Lista de productos</h5>
      </div>

      <div class="border-bottom border-2 border-success" style="overflow:scroll; height:80vh">
        <ul class="list-group">
          <li class='ist-group-item bg-white m-0 my-1 p-1' v-for='(c, index) of car' :key="index">
            <div class='row m-0 p-0'>
              <div class='col-3 p-0'>
                <img class='rounded w-100' v-bind='{alt: c.title, src: c.picture}'/>
              </div>
              <div class='col-9 p-0 text-end'>
                <h1 class='fs-4 m-0'>{{ c.title }}</h1>
                <p class='text-secondary m-0'>1 x <span class='price'>{{ c.price }}</span></p>
                <span class='fw-bold price text-success'>{{ c.quantity * c.price }}</span>
              </div>
            </div>
            <div class='row m-0 p-0'>
              <div class='col-4 p-0 d-flex justify-content-center align-items-center'>
                <button class='btn' type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="asignID(index)" >
                  <i class='far fa-trash-alt text-danger fs-2'/>
                </button>
              </div>
              <div class='col-8 p-0'>
                <div class='rounded border border-secondary d-flex justify-content-between align-items-center'>
                  <button class='btn text-danger fs-3 px-3 py-0' @click='substractQuantity(index)'>&#8722;</button>
                  <span class='fs-3'>{{ c.quantity }}</span>
                  <button class='btn text-primary fs-3 px-3 py-0' @click='addQuantity(index)'>+</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class='bg-white d-flex justify-content-between align-items-center' v-if='car.length&gt;0'>
          <span>Total:</span>
          <div>
            <span class='fw-bold'>{{ totalItems }}</span> | <span class='fw-bold price'>{{ totalPrice }}</span>
          </div>
        </div>
      </div>

      <div class="py-3" v-if='car.length > 0'>
        <router-link class="btn btn-secondary w-100" to="/dataForm">
          Continuar
        </router-link>
      </div>
    </div>
    <DeleteModal :keyProduct='identifier' />
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import DeleteModal from '@/components/DeleteModal.vue'


export default {

  name: 'carFull',
  data(){
    return{
      identifier: null
    }
  },
  components: {
    DeleteModal
  },
  computed: {
    ...mapState(['car']),
    ...mapGetters(['totalItems', 'totalPrice'])
  },
  methods: {
    ...mapMutations(['addQuantity', 'substractQuantity']),
    back(){
      this.$router.go(-1)
    },
    asignID( e ){
      this.identifier   = e;
    }
  }

}
</script>

<style scoped>

  button.active{
    color:      black;
    background: #d1e7dd;
  }

</style>