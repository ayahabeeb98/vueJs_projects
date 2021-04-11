<template>
  <div class="container mt-3">
        <Jobs></Jobs>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import {auth} from '../services/firebase';
import Jobs from './Jobs';

export default {
  name: 'Home',
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
components:{
  Jobs
}
,
  methods: {
    logout(){
      auth.signOut().then(() => {
        // Sign-out successful.

        this.$router.push('/login').catch(error => {

          console.info(error.message)
        })
      }).catch((error) => {
        console.log(error)
        // An error happened.
      });
    }
  }
}
</script>
