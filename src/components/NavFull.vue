<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand d-none d-sm-block" href="/">
                <img src="../assets/logo_arminda-dark.png" alt="Logo arminda" height="74">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="navbar-toggler-icon"></i>
            </button>
            <router-link class="btn btn-dark d-block d-sm-none" to='/checkout' >
                <i class="fas fa-shopping-cart fa-lg me-1"></i>
                <span class="badge rounded-pill bg-danger">{{ totalItems }}</span>
            </router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-uppercase" href="#home">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-uppercase" href="#services">
                            Servicios
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-uppercase" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li v-for="(label, index) of labels" :key="index">
                            <a class="dropdown-item" href="#">{{ label }}</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                <form class="d-flex" @submit.prevent="search">
                    <input v-model="searchText" class="form-control me-2" type="search" placeholder="ej. shampoo" aria-label="Search">
                    <!-- Change router link to button -->
                    <button class="btn btn-outline-success" type="submit" >Buscar</button>
                </form>
            </div>
        </div>
    </nav>
</template>


<script>
import router from '@/router'
import { mapState, mapGetters } from 'vuex'

export default {

  name: 'Navfull',
  data(){
      return{
          searchText: ''
      }
  },
  computed: {
    ...mapState(['labels']),
    ...mapGetters(['totalItems']),
    search(){
        router.push({ name:'ResultsBySearch', params: {text: encodeURI(this.searchText)} });
    }
  }

}
</script>