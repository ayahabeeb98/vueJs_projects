<template>
    <section class="container">
        <div v-if="loading" class="loading">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="details-wrapper" v-else>
            <header class="d-flex details-header">
                <img :src="details.company_logo" :alt="details.company">
                <div class="company-header">
                    <h3>{{details.company}}</h3>

                    <a :href="details.company_url">{{details.company_url}}</a>
                </div>
                <a :href="details.company_url" class="btn btn-outline-info btn-site">Company Site</a>
            </header>
            <div class="wrapper text-left">
                <div class="time-wrapper">
                    <time class="postTime">16h ago</time>
                    <span style="font-size: 30px"> · </span>
                    <span class="job-type">{{details.type}}</span>
                </div>
                <div class="my-2">
                    <div class="title">
                        <h2>
                            {{details.title}}
                        </h2>
                        <p>
                            {{details.location}}
                        </p>
                        <div v-html="details.how_to_apply" class="apply "></div>

                    </div>
                </div>
                <div v-html="details.description"></div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "JobDetails",
        data() {
            return {
                loading: true,
                details: null,
            }
        },
        created() {
            axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.$route.params.id}.json`)
                .then(response => {
                    this.loading = false;
                    this.details = response.data;
                })
                .catch(e => {
                    this.loading = false;
                    console.log(e)
                })
        }
    }
</script>

<style scoped>
    .details-wrapper {
        width: 70%;
        margin: 0 auto;
        padding: 1em;
        box-shadow: 0 6px 10px rgba(0, 0, 0, .16);
    }


    .details-header {
        position: relative;
        top: -4.5em;
        align-items: center;
        text-align: left;
        background-color: #effcff;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .16);
    }

    .details-header img {
        width: 120px;
        height: 120px;
        object-fit: contain;
        margin-right: 2em;
    }

    .btn-site {
        position: absolute;
        right: 1rem;
    }

    .company-header h3 {
        font-size: 1.5em;
        font-weight: bold;
    }

    .company-header a {
        color: #33365b;
    }

    .wrapper {
        margin-top: -3em;
    }

    .apply p {
        margin-bottom: 0;
    }
</style>