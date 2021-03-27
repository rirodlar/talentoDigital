import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    user: null,
    respuestaApi: {},
    fichaVendedor:{},
    vendedores: [],
    oficinas: [],
    manager:[],
    bashboard: {
      "kpis": [
        {
          "venta_mensual": {
            "valor": 0,
            "meta": 0
          }
        },
        {
          "venta_anual": {
            "valor": 0,
            "meta": 0
          }
        }
      ],
      "ranking_vendedores": [],
      "ranking_productos": []
    },
    pacientes: []
  },
  getters: {
    enviandoUser(state){
      return state.user;
    },
    enviandoAPI(state){
      return state.respuestaApi;
    },


    obtenerOficinas(state){
      return state.oficinas;
    },

    obtenerManager(state){
      return state.manager;
    },

    obtenerVendedores(state){
      return state.vendedores;
    },

    obtenerDashBoard(state){
      return state.bashboard;
    },

    obtenerDetalleVendedor(state){
      return state.fichaVendedor;
    },

  },
  mutations: {
    mutarUser(state,datoUser){
      state.user = datoUser; 
    },
    mutandoAPI(state,datos){
      state.respuestaApi = datos;
    },

    mutandoDashBoardJson(state,datos){
      state.bashboard = datos;
    },
    mutandoVendedoresJson(state, datos){
      state.vendedores = datos;
    },

    mutandoOficinasJson(state, datos){
      state.oficinas = datos;
    },
    mutandoManagerJson(state, datos){
      state.manager = datos;
    },

    mutandoDetalleVendedorJson(state, datos){
      state.fichaVendedor = datos;
    }

  },
  actions: {
    user({commit},datoUser){
      commit('mutarUser',datoUser);
    },

    obtenerDashBoard({commit}){

      console.log("obtenerDashBoard JSON");
      axios.get('json/dashboard.json').then(respuesta => {
                 console.log(respuesta.data);
                 commit('mutandoDashBoardJson',respuesta.data);
               }).catch(error => console.error(error));

    },
    obtenerVendedores({commit}){
      console.log("obtenerVendedores JSON");
      axios.get('json/vendedores.json').then(respuesta => {
        console.log(respuesta.data);
        commit('mutandoVendedoresJson',respuesta.data);
      }).catch(error => console.error(error));

    },

    obtenerOficinas({commit}){
      console.log("obtenerOficinas JSON");
      axios.get('json/oficinas.json').then(respuesta => {
        console.log(respuesta.data);
        commit('mutandoOficinasJson',respuesta.data);
      }).catch(error => console.error(error));

    },

    obtenerManager({commit}){
      console.log("obtenerManager JSON");
      axios.get('json/managers.json').then(respuesta => {
        console.log(respuesta.data);
        commit('mutandoManagerJson',respuesta.data);
      }).catch(error => console.error(error));

    },

    obtenerDetalleVendedor({commit}){
      console.log("obtenerManager JSON");
      axios.get('json/ficha_vendedor.json').then(respuesta => {
        console.log(respuesta.data);
        commit('mutandoDetalleVendedorJson',respuesta.data);
      }).catch(error => console.error(error));

    },


  },
})
