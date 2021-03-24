<template>
    <div id="app" v-cloak>
        <SearchBox @search="getUserData"></SearchBox>
        <div id="loading" v-show="loading"></div>
        <div class="errorMsg" v-if="error">
            <h3 class="er-h">Oops !!!</h3>
            <p class="er-p">
                We couldn't find any users matching <span> {{username}} </span>
                <br>
                Please try again
            </p>
        </div>
        <Card v-if="found" :user-info="userInfo"></Card>
        <footer>
            <p>Made with ❤ using <a href="https://vuejs.org/">Vue.Js</a></p>
        </footer>
    </div>
</template>

<script>
    import SearchBox from './components/SearchBox.vue'
    import Card from './components/Card.vue'
    import axios from 'axios';

    export default {
        name: 'App',
        components: {
            SearchBox,
            Card
        },
        data: function () {
            return {
                userInfo: '',
                username: '',
                error: false,
                found: false,
                loading: false
            }
        },
        methods: {
            getUserData(username) {
                this.username = username;
                this.loading = true;
                axios.get(`https://api.github.com/users/${username}`)
                    .then(response => {
                        this.userInfo = response.data;
                        this.found = true;
                        this.loading = false;
                    })
                    .catch(() => {
                        this.error = true;
                        this.loading = false;
                        this.found = false;
                    });

                this.userInfo = '';
                this.error = '';
            }

        }
    }
</script>

<style>

    #app {
        position: relative;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size: 16px;
        padding-top: 30px;
        padding-bottom: 30px;
        min-height: 90vh;
        background-image: linear-gradient(360deg, #d4d4d4, #f3f3f3);
    }

    .er-h {
        font-size: 2.5em;
        color: #cd2f24;
    }

    .er-p span {
        font-size: 1.2em;
        font-weight: bold;
        color: #000000;
    }


    [v-cloak] > * {
        display: none;
    }

    #loading {
        display: flex;
        position: absolute;
        left: 45%;
        top: 30%;
        transform: translate(-30%, -50%);
        transform-origin: center;
        border: 10px solid #f3f3f3; /* Light grey */
        border-top-color: #3498db; /* Blue */
        border-bottom-color: #3498db;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }


    footer {
        position: absolute;
        bottom: 0;
        left: 15%;
        right: 15%;
    }

</style>
