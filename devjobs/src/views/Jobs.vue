<template>
    <section>
        <h2 class="mb-3">
            Find And Apply To Your Dream Job
        </h2>
        <SearchForm :loading="loading" @handleSearch="handleJobSearch(...arguments)"></SearchForm>
        <div v-if="loading" class="loading">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else class="jobList">
            <JobCard v-for="job in filteredJobs" :key="job.id" :jobData="job"></JobCard>

        </div>

        <button @click="loadMore" v-show="JobsData.length > 0" class="my-3 btn btn-info">
            <template v-if="loadingBtn">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </template>
            <template v-else>
                Load More?
            </template>
        </button>

    </section>
</template>

<script>
    import JobCard from '../components/JobCard';
    import SearchForm from '../components/SearchForm';
    import axios from 'axios';
    import store from '../store';

    export default {
        name: "Jobs",
        components: {
            JobCard,
            SearchForm
        },
        data() {
            return {
                JobsData: [],
                loading: true,
                page: 1,
                loadingBtn: true,
                searchResults:[]
            }
        },
        created() {
            this.handlePage(1);
        },
        computed: {
          filteredJobs: {
            get: function() {
                return this.JobsData
            },
            set: function (newVal) {
               return newVal
            }
        }
        },
        methods: {
            handlePage() {
                axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${this.page}`)
                    .then(response => {
                        store.dispatch("fetchJobs", response.data);
                        this.loading = false;
                        this.loadingBtn = false;
                        this.JobsData = [...this.JobsData, ...response.data];
                    })
                    .catch(e => {
                            this.loading = false;
                            this.loadingBtn = false;
                            console.log(e)
                        }
                    )
            },

            loadMore() {
                this.loadingBtn = true;
                this.page += 1;
                this.handlePage();
                console.log('got it')
            },

            handleJobSearch(searchTerms) {
                const {description, location, checked} = searchTerms;
                this.loading = true;
                if (description.length === 0
                    && location.length === 0
                    && !checked) {
                    this.loading = false;
                    console.log(this.$store.state.jobs);
                    return  this.JobsData = this.$store.state.jobs
                } else {
                    // const descRegexp = new RegExp(description, 'i');
                    // const locationRegexp = new RegExp(location, 'i');
                    // const filteredList = this.JobsData.filter(job => {
                    //         return  descRegexp.test(job.title) ||
                    //         descRegexp.test(job.description) ||
                    //         locationRegexp.test(job.location) });
                    //
                    //
                    // return this.JobsData= filteredList.filter(job => {
                    //     this.loading = false;
                    //    return checked ? job.type === "Full Time" : job.type !== "Full Time"
                    // })


                    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&full_time=${checked}&location=${location}`)
                        .then(response=>{
                            this.loading=false;
                            this.JobsData=response.data
                        })
                        .catch(e=>console.log(e))
                }
            }
        },

    }
</script>


<style>
    .jobList {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media (max-width: 992px) {
        .jobList {
            justify-content: center;
        }
    }
</style>