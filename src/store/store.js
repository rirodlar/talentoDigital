import Vue from 'vue';
import Vuex from 'vuex';
import { conexApi } from '../services/apiConfig'; // variable con la función de conexión a api mediante axios en archivo externo
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    respuestaApi: {},
    juguetes: [],
    pacientes: []
  },
  getters: {
    enviandoUser(state){
      return state.user;
    },
    enviandoAPI(state){
      return state.respuestaApi;
    },
    enviandoJuguetes(state){
      return state.juguetes;
    },

  },
  mutations: {
    mutarUser(state,datoUser){
      state.user = datoUser; 
    },
    mutandoAPI(state,datos){
      state.respuestaApi = datos;
    },
    mutandoJuguetesDd(state,datos){
      state.juguetes = datos;
    },

  },
  actions: {
    user({commit},datoUser){
      commit('mutarUser',datoUser);
    },
    async llamarAPI({commit}){
      // con esta accion se llama a la funcion que conecta con la api, la cual se encuentra en un archivo externo
      let resultado = await conexApi();
      commit('mutandoAPI', resultado);
      /* axios.get('https://yesno.wtf/api').then(respuesta => {
        console.log(respuesta.data);
        commit('mutandoAPI',respuesta.data);
      }).catch(error => console.error(error)); */
    },
    obtenerJuguetes({commit}){
      /* usar get cuando no se necesite leer datos en tiempo real, usar onSnapshot cuando se necesite leer siempre los datos para actualizar en tiempo real */
      firebase.firestore().collection('juguetes').onSnapshot((res)=>{
        let datos = [];
        res.forEach(element => {
          console.log("element :"+element);
          datos.push({
            id:  element.id,
            codigo: element.data().codigo,
            nombre: element.data().nombre,
            precio: element.data().precio,
            stock: element.data().stock,
            urlImagen: element.data().urlImagen
          })
        })
      commit('mutandoJuguetesDd', datos);
      }, error => console.error(error));
    },
    agregandoJuguete(context, datos){
      // se usa el add para agregar un nuevo documento a la base de datos, se debe usar despues de una collection
      firebase.firestore().collection('juguetes').add({
        codigo: datos.codigo,
        nombre: datos.nombre,
        precio: datos.precio,
        stock: datos.stock,
        urlImagen: datos.urlImagen
      }).then(() => console.log("Agregado...")).catch(error => console.error(error));
    },
    borrandoJuguete(context,id){
      // se usa el delete para borrar un documento, se debe utilizar despues de un doc indicando el id o identificacion del documento a borrar
      firebase.firestore().collection('juguetes').doc(id)
        .delete()
        .then(()=>console.log('eliminado'))
        .catch(error => console.error(error));
    },
    actualizandojuguete(context, datos){
      // el update se utiliza para actualizar un documento en especifico, se debe indicar cual es el id del documento. Se puede pasar uno o todos los valores a actualizar, no borrar los valores que no se actualicen.
      firebase.firestore().collection('juguetes').doc(datos.idDoc).update({
        codigo: datos.codigo,
        nombre: datos.nombre,
        precio: datos.precio,
        stock: datos.stock,
        urlImagen: datos.urlImagen
      })
        .then(()=> console.log("Se actualizo"))
        .catch(error => console.error(error));
    }
  },
})
