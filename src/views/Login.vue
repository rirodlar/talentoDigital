<template>
  <div class="my-5 container">
    <h1>Login Usuarios</h1>
    <form @submit.prevent="loginUser">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
        <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
      </div>
      <p>Ingrese sus credenciales de usuario</p>
      <button type="submit" class="btn btn-primary">Ingresar</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginUser(){
      //validacion basica
      if (this.email && this.password.length >= 1) {
          this.$router.push({name: 'Home'});

      } else {
         this.$swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Favor Ingrese sus credenciales',
        })
      }
    }

  },
}
</script>
