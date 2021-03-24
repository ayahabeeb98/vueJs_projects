<template>
    <main>
        <transition name="fade">
            <div class="card">
                <div class="card-header">
                    <img :src="userInfo.avatar_url" class="avatar" alt="">
                    <a :href="userInfo.url">
                        <h2 class="username">
                            {{userInfo.name}}
                        </h2>
                        <button class="follow">Follow</button>
                    </a>
                    <p class="bio">
                        {{userInfo.bio}}
                    </p>
                </div>

                <div class="card-body">
                    <div class="box">
                        <h4>Followers</h4>
                        <p>{{userInfo.followers}}</p>
                    </div>
                    <div class="box">
                        <h4>Repos</h4>
                        <p>{{userInfo.public_repos}}</p>
                    </div>
                    <div class="box">
                        <h4>Followers</h4>
                        <p>{{userInfo.following}}</p>
                    </div>
                </div>
            </div>
        </transition>
    </main>
</template>

<script>
    export default {
        name: "Card",
        props: ["userInfo"]
    }

</script>

<style>
    .card {
        border: 2px solid #3A4F63;
        width: 300px;
        margin: 1em auto 0;
        box-shadow: 0 6px 8px rgba(0, 0, 0, .165);
    }

    .card-header {
        margin: 1em 0;
    }

    a {
        text-decoration: none;
    }

    .follow {
        margin-top: .5em;
        background-color: #2EA043;
        border: 1px solid transparent;
        padding: .5rem .9375rem;
        font-weight: bold;
        color: #FFF;
        cursor: pointer;
    }

    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    .username {
        color: #2c3e50;
        text-decoration: none;
        margin: 8px 0 0;
        font-size: 2em;
    }

    .bio {
        margin: 8px;
    }

    .card-body {
        width: 300px;
        margin: 0 auto;
        background-color: #2c3e50;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .box {
        width: 33%;
        background-color: rgba(44, 62, 80, 0.66);
    }

    .box > h4 {
        margin-bottom: 0;
    }

    .box > p {
        font-size: 1.2em;
        margin: 10px;
    }


    .card-body > div:nth-child(2) {
        background-color: #3A4F63;
    }


    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-enter /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>