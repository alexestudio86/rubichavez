import { createStore } from 'vuex'
import blogger from './modules/blogger.js'

export default createStore({
  state: {
    car: JSON.parse(localStorage.getItem('car')) || [],
    labels: ['Crema para peinar', 'Fijación', 'Herramientas', 'Mascarilla matizante', 'Multifuncionales', 'Multivitaminico', 'Semipermanentes', 'Shampoo'],
    dataUser: {
      name: ''
    },
    whatsappNumber: '+5214531157233'
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
    deleteProduct( state, e ){
      state.car.splice(e, 1);
      const getModal = document.getElementById('deleteModal');
      const modal = bootstrap.Modal.getOrCreateInstance(getModal);
      modal.hide();
    },
    setLocal( state ){
      const carString = JSON.stringify(state.car);
      localStorage.setItem('car', carString);
    },
    sendData( state ){
      // Saludo
      const introText = '%5F'+encodeURIComponent('Hola, me gustaría ordenar')+'%5F%0A%0A';
      // Texto
      const bodyText = state.car.map( c => {
        const body = c.quantity+'%20x%20'+encodeURIComponent(c.title)+' - $'+encodeURIComponent(c.quantity * c.price)+'%0A';
        return body;
      }).join('');
      // Cantidad
      const dinero = state.car.reduce( (sum, value) => (typeof value.quantity == 'number' ? sum + (value.quantity * value.price) : sum), 0 );
      // Divisiòn
      const dineroTotal = '____________________'+'%0A'+encodeURIComponent("Total: ")+dinero+'%0A'
      // Final message
      const finalText = '%0A'+encodeURIComponent('A nombre de: ');
      // Nombre
      const nameValidated = '%2A'+state.dataUser.name+'%2A';
      // Link
      const link = 'https://wa.me/'+state.whatsappNumber+'/?text='+introText+bodyText+dineroTotal+finalText+nameValidated;
      state.car.splice(0, state.car.length);
      localStorage.removeItem('car');
      setTimeout( ()=> {
        window.location.replace(link);
      }, 1000 );
    }
  },
  actions: {
  },
  modules: {
    blogger
  }
})
