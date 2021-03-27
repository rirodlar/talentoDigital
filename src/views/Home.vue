<template>
  <div class="my-2 container-fluid">

      <div class="home">

        <div class="jumbotron">
          <h1 class="display-4 text-center">Vitrina</h1>

        </div>
        <h2>Bienvenido</h2>
        <p>Bienvenido al sistema de Gestión de Ventas de WorldPants</p>

        <div class="row">
           <div class="col-6 border">
              <h5 class="text-center">Venta Mensual</h5>
              <table align="center" width="100%">
                  <tr>
                    <td align="center">
                      <strong>
                       <h1>
                         {{ obtenerDashBoard.kpis[0].venta_mensual.valor * 100 / obtenerDashBoard.kpis[0].venta_mensual.meta}}%
                       </h1>
                      </strong>
                    </td>
                    <td align="center">
                      <strong>
                        {{ obtenerDashBoard.kpis[0].venta_mensual.valor }}
                      </strong>
                    </td>
                    <td align="center">
                      <strong>
                        {{ obtenerDashBoard.kpis[0].venta_mensual.meta }}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td  align="center"><a href="#">ver detalles</a> </td>
                    <td  align="center">ventas del mes</td>
                    <td  align="center">Meta del Ventas del mes</td>
                  </tr>
              </table>
           </div>
          <div class="col-6 border">
            <h5 class="text-center">Venta Anual</h5>
            <table align="center" width="100%">
              <tr>
                <td align="center">
                  <strong>
                   <h1>
                     {{ obtenerDashBoard.kpis[1].venta_anual.valor * 100 / obtenerDashBoard.kpis[1].venta_anual.meta}}%
                  </h1>
                  </strong>
                </td>
                <td align="center">
                  <strong>
                    {{ obtenerDashBoard.kpis[1].venta_anual.valor }}
                  </strong>
                </td>
                <td align="center">
                  <strong>
                    {{ obtenerDashBoard.kpis[1].venta_anual.meta }}
                  </strong>
                </td>
              </tr>
              <tr>
                <td  align="center"><a href="#">ver detalles</a> </td>
                <td  align="center">ventas del mes</td>
                <td  align="center">Meta del Ventas <br/> del mes</td>
              </tr>
            </table>
          </div>
        </div>

        <br/>
        <div class="row">
           <div class="col-6">
             <h4 class="titulo">Ranking de Vendedores</h4>
             <br/>
             <table class="table" style="color: #999">
               <thead>
                 <tr>
                   <th scope="col">ID Vendedor</th>
                   <th scope="col">Vendedor</th>
                   <th scope="col">Monto</th>
                   <th scope="col">Unidades</th>
                   <th scope="col">#</th>
                 </tr>
               </thead>
               <tbody>
               <tr v-for="(item, index) in obtenerDashBoard.ranking_vendedores" :key="index">
                 <th>{{item.id_vendedor}}</th>
                 <td>{{item.nombre}}</td>
                 <td>{{item.monto}}</td>
                 <td>{{item.unidades}}</td>
                 <td><a href="#">Ver Detalle</a> </td>
               </tr>
               </tbody>
             </table>

           </div>
          <div class="col-6">
            <h4 class="titulo">Ranking de Productos</h4>
            <br/>
            <table class="table"  style="color: #999">
              <thead>
              <tr>
                <th scope="col">Cod Producto</th>
                <th scope="col">Producto</th>
                <th scope="col">Unidades</th>
                <th scope="col">#</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in obtenerDashBoard.ranking_productos" :key="index">
                <th>{{item.cod_producto}}</th>
                <td>{{item.poducto}}</td>
                <td>{{item.unidades}}</td>
                <td><a href="#">Ver Detalle</a> </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
    <!--    <ListaJuguetes/>-->
      </div>
  </div>
</template>

<script>
// import ListaJuguetes from '@/components/ListaJuguetes'
import {mapGetters} from "vuex";

export default {
  name: 'Home',
  data() {
    return {
      codigo: '',
      nombre: '',
      precio: '',
      stock: '',
    }
  },
  computed: {
    ...mapGetters(['enviandoUser', 'enviandoJuguetes', 'obtenerDashBoard']),
  },
  methods: {
    listadoJuguete(){
      this.$router.push({path: '/administracion'})
    }
  },
  mounted (){
    this.$store.dispatch("obtenerDashBoard");
  },
  components: {
    // ListaJuguetes
  }
}
</script>

<style>
   .titulo{
     color: #333;
   }
</style>
