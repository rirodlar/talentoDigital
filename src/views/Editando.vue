<template>
    <div class="container my-5">
        <h2>Editando a: {{nombre}}</h2>
        <div>
          <div class="row">
            <div class="col-12">
                <p v-if="errors.length">
                  <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                </p>
                <ul>
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>


            <div class="col-6">
              <form @submit.prevent="actualizarCurso">
                <div class="mb-3">
                  <label for="InputCodigo" class="form-label">Codigo</label>
                  <input disabled type="text" class="form-control" id="InputCodigo" v-model="codigo">
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" v-model="nombre">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Precio</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" v-model="precio">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Stock</label>
                  <input type="text" class="form-control" id="escuela" v-model="stock">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">URL imagen</label>
                  <input type="text" class="form-control" id="imagen" v-model="urlImagen">
                </div>

                <button type="submit" class="btn btn-primary">Actualizar</button>
              </form>
            </div>
            <div class="col-6">
              <img :src="urlImagen" class="card-img-top img-fluid" width="100" height="100">

            </div>
          </div>

        </div>
        
        <div class="text-center my-5">
            <button type="button" class="btn btn-info" @click="$router.go(-1)">Regresar</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Editando',
    props: ['id'],
    data() {
        return {
            errors: [],
            codigo: '',
            nombre: '',
            precio: '',
            stock: '',
            urlImagen: '',

        }
    },
    computed: {
        ...mapGetters(['enviandoJuguetes'])
    },
    methods: {
        actualizarCurso(){
          this.errors = [];

          if (!this.codigo) {
            this.errors.push('El codigo es obligatorio.');
          }else{
            if(this.codigo.length < 4){
              this.errors.push('El codigo debe tener como minimo 5 caracteres');
            }
          }
          if (!this.nombre) {
            this.errors.push('El nombre es obligatorio.');
          }else{
            if(this.nombre.length <= 4){
              this.errors.push('El nombre debe tener como minimo 4 caracteres');
            }
          }
          if (!this.precio) {
            this.errors.push('El precio es obligatorio.');
          }else{
            let precio = Number(this.precio);
            if(precio < 0){
              this.errors.push('El precio debe ser mayor o igual a cero.');
            }
          }
          if (!this.stock) {
            this.errors.push('El stok es obligatorio.');
          }else{
            let stock = Number(this.stock);
            if(stock < 0){
              this.errors.push('El stock ser mayor o igual a cero.');
            }
          }

          if(this.errors.length == 0){
            let datos = {
              codigo: this.codigo,
              nombre: this.nombre,
              precio: this.precio,
              stock: this.stock,
              urlImagen: this.urlImagen,
              idDoc: this.id
            };

            this.$swal({
              title: '¿esta seguro que desea actualizar el juguete?',
              text: '',
              type: 'info',
              showCancelButton: true,
              confirmButtonText: 'Aceptar',
              cancelButtonText: 'Cancelar',
              showCloseButton: true,
              showLoaderOnConfirm: true
            }).then((result) => {
              if(result.value) {
                this.$store.dispatch('actualizandojuguete',datos);
                this.$router.push({path: '/administracion'})
              }
            })
          }
        }
    },
    mounted(){
        let datos = this.enviandoJuguetes.find(juguete => juguete.id === this.id);
        if (datos !== undefined) {
            this.codigo = datos.codigo;
            this.nombre = datos.nombre,
            this.precio = datos.precio,
            this.stock = datos.stock,
            this.urlImagen = datos.urlImagen
        } else {
            console.log("No existe el curso");
            setTimeout(()=>{
                this.$router.push({name: 'Administracion'});
            },1000);
        }
    }
}
</script>

<style>

</style>
