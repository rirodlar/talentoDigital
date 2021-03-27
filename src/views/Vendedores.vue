<template>
  <div class="container-fluid my-5">
    <h2>Monitor de Vendedores</h2>
      <!-- Button trigger modal -->
          <div class="row border p-2">
              <div class="col-2">
                Oficina<br/>
                  <select name="oficina">
                    <option v-for="(item, index) in obtenerOficinas.oficinas" :key="index">
                      {{ item.name }}
                    </option>
                </select>
              </div>
            <div class="col-2">
              Manager<br/>
              <select name="manager">
                <option v-for="(item, index) in obtenerManager.managers" :key="index">
                  {{ item.nombre }}
                </option>
              </select>
            </div>
            <div class="col-2">
              Periodo Consulta
              <input name="periodoConsulta">
            </div>
            <div class="col-2"><br/>
                <button class="btn-primary">Buscar</button>
            </div>
          </div>
    <br/>


    <table class="table">
      <thead>
      <tr>
        <th>ID Vendedor</th>
        <th>Vendedor</th>
        <th>Venta Unidades</th>
        <th>Venta Pesos</th>
        <th>Meta Venta</th>
        <th>Cumplimiento Meta</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in obtenerVendedores.vendedores" :key="index">
        <td>{{ item.id_vendedor }}</td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.venta_unid }}</td>
        <td>{{ item.venta_pesos }}</td>
        <td>{{ item.meta_venta }}</td>
        <td>
          <div class="progress">
            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                 aria-valuemax="100"></div>
          </div>
        </td>
        <td>
          <button type="button" class="btn btn-info" @click="verDetalle(item.id_vendedor)">Ver Detalle</button>
        </td>
      </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Vendedores',

  computed: {
    ...mapGetters(['obtenerVendedores', 'obtenerManager', 'obtenerOficinas'])
  },
  methods: {
    verDetalle(id){
      console.log(id);
      this.$router.push({path: '/detalleVendedor'})
    }
  },
  mounted() {
    this.$store.dispatch('obtenerVendedores');
    this.$store.dispatch('obtenerOficinas');
    this.$store.dispatch('obtenerManager');
  }
}
</script>

<style>

</style>
