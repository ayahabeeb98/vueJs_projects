<template>
   <header>
       <form @submit.prevent="handleSubmit">
           <label>
               <input type="text" class="form-control"
                      v-model="username" placeholder=" Type a user name ...">
           </label>

           <button class="btn" type="submit">
               <span class="sr-only">Search</span>
               <img src="../assets/search-icon.svg" alt="">
           </button>
           <p v-show="error" class="error">{{error}}</p>

       </form>
   </header>
</template>


<script>
    export default {
        name: "SearchBox",
        data(){
            return {
                username: '',
                error:''
            }
        },
        methods: {
            handleSubmit(){
                if(this.username.length){
                    this.$emit('search',this.username)
                }else {
                    this.error = "Please Write a username"
                }
            }
        }
    }

</script>

<style>
    .sr-only {
        display: none;
    }
    .error {
        color: #cd2f24;
    }



    .form-control {
        padding:.75rem .9375rem;
        font-size: 1em;
        border:1px dashed #888;
        border-bottom: 2px solid #000000;
        background-color: rgba(255, 255, 255, 0.69);
        outline: none;
        margin-left: 2rem;
    }

    .btn {
        bottom: 5px;
        left: -2%;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: relative;
        background-color: #3b3b3b;
        cursor: pointer;
        margin-top: .5em;
        transition: all .5s ease-in-out;
        border: 1px solid transparent;
    }

    .btn img{
        position: absolute;
        width: 35px;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
    }
    .btn:hover {
        background-color: #2c3e50;
        border-color: #2c3e50;
        color: #2c3e50;
    }
</style>