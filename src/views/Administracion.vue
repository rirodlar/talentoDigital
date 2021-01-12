<template>
    <div class="container my-5">
        <h2>Administrando Juguetes</h2>
        <div class="my-4">
            <!-- Button trigger modal -->
            <button @click="limpiarFormulario()" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Juguete</button>


        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>image</th>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in enviandoJuguetes" :key="index">
                    <td>{{index+1}}</td>
                    <td>
                      <img :src="item.urlImagen" height="100" width="100" class="img-fluid">
                    </td>
                    <td>{{item.codigo}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.stock}}</td>
                    <td>{{item.precio}}</td>
                    <td><button type="button" class="btn btn-info" @click="editandoCurso(item.id)">Editar</button></td>
                    <td><button type="button" class="btn btn-danger" @click="eliminando(item.id)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>

      <div style="text-align: center">

        <button @click="volverHome()" type="button" class="btn btn-primary">Home</button>

      </div>

        <!-- modal para agregar juguetes -->
        <div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agregando Juguete</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
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
                        <form>
                          <div class="mb-3">
                            <label for="InputCodigo" class="form-label">Codigo</label>
                            <input type="text" class="form-control" id="InputCodigo" v-model="codigo">
                          </div>
                          <div class="mb-3">
                            <label for="InputNombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="InputNombre" v-model="nombre">
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Stock</label>
                            <input type="number"  class="form-control" id="exampleInputPassword1" v-model="stock">
                          </div>
                          <div class="mb-3">
                            <label for="InputPrecio" class="form-label">Precio</label>
                            <input type="number"  class="form-control" id="InputPrecio" v-model="precio">
                          </div>
                          <div class="mb-3">
                            <label for="InputUrlImage" class="form-label">URL imagen</label> (opcional)
                            <input type="text" class="form-control" id="InputUrlImage" v-model="urlImagen">
                          </div>

                        </form>
                      </div>
                    <div class="col-6">
                      <img :src="urlImagen" class="card-img-top img-fluid" width="100" height="100">
                    </div>
                  </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary"   @click.prevent="agregandoJuguete">Agregar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Administracion',
    data() {
        return {
            errors: [],
            nombre: '',
            stock:  null,
            precio: null,
            codigo: '',
            urlImagen: ''
        }
    },
    computed: {
        ...mapGetters(['enviandoJuguetes'])
    },
    methods: {
      limpiarFormulario(){
          this.codigo = '';
          this.nombre = '';
          this.urlImagen = '';
          this.precio = 0;
          this.stock = 0;
          this.errors = [];
      },
      agregandoJuguete(){
        this.urlImagen = '';
        console.log("validando ....");

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
                this.errors.push('El nombre debe tener como minimo 5 caracteres');
              }
            }
            if (!this.precio) {
              this.errors.push('El precio es obligatorio.');
            }else{
              let precio = Number(this.precio);
              if(precio < 0){
                this.errors.push('El precio debe ser mayor o igual cero.');
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
              };

              this.$swal({
                title: '¿esta seguro que desea añadir el juguete?',
                text: '',
                type: 'info',
                showCancelButton: true,
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
                showCloseButton: true,
                showLoaderOnConfirm: true
              }).then((result) => {
                if(result.value) {

                  window.$('.modal-backdrop').hide();

                  this.$store.dispatch('agregandoJuguete',datos);
                  this.$swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'El producto fue  guardardo correctamente',
                    showConfirmButton: true
                  })

                  this.limpiarFormulario();
              //    this.$router.push({path: '/home'})
                }
              })
            }
        },
        eliminando(id){
          this.$swal({
            title: '¿esta seguro que desea eliminar el juguete?',
            text: 'esta accion no se puede revertir',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            showCloseButton: true,
            showLoaderOnConfirm: true
          }).then((result) => {
            if(result.value) {
              this.$store.dispatch('borrandoJuguete',id);
              this.$swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El producto fue  eliminado correctamente',
                showConfirmButton: true
              })
            }
          })
          //
        },
        editandoCurso(idDoc){
            this.$router.push({name: 'Editando', params: {id: idDoc}});
        }
    },
}
</script>

<style>

</style>
