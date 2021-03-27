<template>
  <div class="container-fluid my-5">
    <h2>Detalle  Vendedor</h2>


    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">General</a>
        <ul>
          <li><strong>ID Vendedor: </strong>{{obtenerDetalleVendedor.vendedor.id}}</li>
          <li><strong>Nombre: </strong>{{obtenerDetalleVendedor.vendedor.nombre}}</li>
          <li><strong>Email: </strong>{{obtenerDetalleVendedor.vendedor.email}}</li>
          <li><strong>Telefono: </strong>{{obtenerDetalleVendedor.vendedor.fono}}</li>
          <li><strong>Oficina: </strong>{{obtenerDetalleVendedor.vendedor.oficina}}</li>
          <li><strong>Manager: </strong>{{obtenerDetalleVendedor.vendedor.Manager}}</li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cartera Cliente</a>

      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cumplimiento</a>
      </li>
    </ul>

    <button class="btn btn-secondary m-3" @click="regresar()">Regresar</button>

  </div>
</template>

<script>
// import {mapGetters} from 'vuex';

import {mapGetters} from "vuex";

export default {
  name: 'DetalleVendedor',
  computed: {
    ...mapGetters(['obtenerDetalleVendedor'])
  },
  methods:{
    regresar(){
      this.$router.push({path: '/Vendedores'})
    },
  },
  mounted() {
    this.$store.dispatch('obtenerDetalleVendedor');

  }
}
</script>

<style>

</style>
