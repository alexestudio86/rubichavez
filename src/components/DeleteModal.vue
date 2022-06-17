<template>
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" >¿Desea eliminar éste producto?</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
              <button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Cancelar</button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-danger w-100" @click="deleteProduct(keyProduct)">Borrar</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          Esta acción no se puede deshacer
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex';


export default {

  name: 'DeleteModal',
  props: {
    keyProduct: Number
  },
  computed: {
    ...mapState(['car'])
  },
  methods: {
    ...mapMutations(['deleteProduct']),
  }

}
</script>