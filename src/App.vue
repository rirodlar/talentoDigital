<template>
  <div>
    <div>
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar },
  name: 'App',
  mounted() {
    this.$store.dispatch('user',"test");
    // este metodo permite supervisar la conexion de los usuarios (si entran o salen de sesión)
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
      //  this.$store.dispatch('user',user); // si entra se envia la inforamcion del usuario a la store
    //   } else {
    //     console.log("cierre de sesion");
    //     this.$store.dispatch('user',null); //si sale, se borra la informacion de la store
    //   }
    // });
    //
    // console.log("obtenerJuguetes")


    // this.$store.dispatch('obtenerJuguetes');
    this.$store.dispatch('obtenerDashBoard');

  },
}
</script>

<style lang="scss">

</style>
