<template>
  <div class="my-5 container">
    <div>

      <div class="jumbotron" style="text-align: center">
        <h1 class="display-4">Bienvenido a Otto Klaus</h1>
        <p class="lead">Porque jugar es mas que diversion</p>
        <hr class="my-4">
        <div >
          <img  src="https://image.freepik.com/foto-gratis/ninos-pequenos-casa-jugando-juguetes_23-2148630638.jpg" class="img-fluid"/>
          <br/><br/>
          <a class="btn btn-primary btn-lg" @click="listadoJuguete()" role="button">Listado Juguetes</a>
        </div>

      </div>


<!--      <h1 class="text-center">Bienvenido a Otto Klaus</h1>-->
<!--      <br/>-->
<!--      <h4>"Porque jugar es mas que diversion"</h4>-->

       <!--   <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item, index) in enviandoJuguetes" :key="index">
               <div class="card">
                 <img :src="item.urlImagen" class="card-img-top" :alt="item.nombre">
                   <div class="card-body">
                     <p class="card-title"><strong>Codigo:</strong> {{item.codigo}}
                     <p class="card-text"><strong>Nombre:</strong> {{item.nombre}}</p>
                     <p class="card-text"><strong>Precio: </strong>{{item.precio}}</p>
                     <p class="card-text"><strong>stock: </strong>{{item.stock}}</p>
                   </div>
               </div>
         </div>
-->



    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ListaJuguetes',
  data() {
    return {
      codigo: '',
      nombre: '',
      precio: '',
      stock: '',
    }
  },
  computed: {
    ...mapGetters(['enviandoUser', 'enviandoJuguetes']),
  },
  methods: {
    listadoJuguete(){
      this.$router.push({path: '/administracion'})
    }
  }
}
</script>

<style scoped lang="scss">
img{

}
</style>
