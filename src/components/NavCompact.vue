<template>
    <nav class="navbar navbar-dark bg-dark sticky-top">
        <div class="container">
            <router-link class="btn" to='/'>
                <i class="fas fa-home fa-2x text-white"></i>
            </router-link>
            <router-link class="btn btn-dark d-block d-sm-none" to='/checkout'>
                <i class="fas fa-shopping-cart fa-lg me-1"></i>
                <span class="badge rounded-pill bg-danger">{{ totalItems }}</span>
            </router-link>
        </div>
    </nav>
</template>


<script>
import { mapGetters } from 'vuex'

export default {

  name: 'Navfull',
  computed: {
    ...mapGetters(['totalItems'])
  }

}
</script>