import { createStore } from 'vuex'
import blogger from './modules/blogger.js'

export default createStore({
  state: {
    car: JSON.parse(localStorage.getItem('car')) || [],
    labels: ['Crema para peinar', 'Fijación', 'Herramientas', 'Mascarilla matizante', 'Multifuncionales', 'Multivitaminico', 'Semipermanentes', 'Shampoo']
  },
  getters: {
    totalItems(state){
      return state.car.reduce( (sum, value) => (typeof value.quantity === 'number' ? sum + (value.quantity) : sum), 0 );
    },
    totalPrice(state){
      return state.car.reduce( (sum, value) => (typeof value.quantity === 'number' ? sum + (value.quantity * value.price) : sum), 0 );
    }
  },
  mutations: {
    substractQuantity( state, e ){
      if( state.car[e].quantity > 1 ){
        state.car[e].quantity--
      }
      this.commit('setLocal');
    },
    addQuantity( state, e ){
      if( state.car[e].quantity < 50 ){
        state.car[e].quantity++
      }
      this.commit('setLocal');
    },
    setLocal( state ){
      const carString = JSON.stringify(state.car);
      localStorage.setItem('car', carString);
    },
    deleteProduct( state, e ){
      state.car.splice(e, 1);
      const getModal = document.getElementById('deleteModal');
      const modal = bootstrap.Modal.getOrCreateInstance(getModal);
      modal.hide();
    }
  },
  actions: {
  },
  modules: {
    blogger
  }
})
