<template>
    <div class="container">
        <div class="row form-wrapper">
            <div class="col-md-8 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <h2 class="form-title">
                            Login
                        </h2>
                    </div>
                    <div class="card-body">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <form action="#" @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <input
                                            id="email"
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            value
                                            required
                                            autofocus
                                            v-model="form.email"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input
                                            id="password"
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            required
                                            v-model="form.password"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-0 justify-content-center">
                                <div class="col-md-6 offset-md-2">
                                    <button type="submit" :disabled="isLoading" class="btn btn-primary w-100">
                                        {{isLoading ? 'Loading ...' : 'Login' }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {auth} from '../services/firebase'
    export default {
        name:'Login',
        data(){
            return {
                form: {
                    email:'',
                    password:'',
                },
                isLoading:false,
                error:null
            }
        },
        methods: {
            submit(){
                this.isLoading = true;
                auth.signInWithEmailAndPassword(this.form.email, this.form.password)
                    .then(() => {
                        this.isLoading = false;

                        this.$router.push({ name: "Home" }).catch(error => {
                            console.info(error.message)
                        });
                    })
                    .catch(err => {
                        this.error = err.message;
                    });
            }
        }
    }
</script>