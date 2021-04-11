<template>
    <b-navbar toggleable="lg">
        <div class="container">
            <router-link to="/" class="navbar-brand">devJobs</router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>

                <ul class="navbar-nav mr-auto"></ul>
                <ul class="navbar-nav ml-auto">
                    <template v-if="user.loggedIn">
                        <div class="nav-item">{{user.data.displayName}}</div>
                        <li class="nav-item">
                            <a class="nav-link" @click.prevent="signOut">Sign out</a>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <router-link to="login" class="nav-link">Login</router-link>
                        </li>
                        <li class="d-md-block d-none">
                            |
                        </li>
                        <li class="nav-item">
                            <router-link to="register" class="nav-link">Register</router-link>
                        </li>
                    </template>
                </ul>
            </b-collapse>
        </div>
</b-navbar>
</template>


<script>
    import { mapGetters } from "vuex";
    import {auth} from '../services/firebase'

    export default {
        computed: {
            ...mapGetters({
// map `this.user` to `this.$store.getters.user`
                user: "user"
            })
        },
        methods: {
            signOut(){
                auth.signOut().then(() => {
                    // Sign-out successful.
                    this.$router.push('/login')
                })
            }
        }
    }
</script>

<style scoped>
    .navbar-expand-lg {
        background-color: #5964E0;
        margin-bottom: 1em;
    }

    .navbar-expand-lg .navbar-nav {
        align-items: center;
        color: #FFF;
    }
    .navbar-light .navbar-brand,
    .navbar-light .navbar-nav .nav-link{
        color: #FFF;
    }
</style>