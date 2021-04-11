<template>
    <article class="job">
        <span class="company"
              :style="{backgroundColor: randomColor()}">
            {{firstLetter()}}
        </span>
        <router-link :to="{ name: 'JobDetails', params: { id: jobData.id }}" class="details">
            <i class="fas fa-eye"></i>
            View Details
        </router-link>
        <div class="time-wrapper">
            <time class="postTime">16h ago</time>
            <span style="font-size: 30px"> · </span>
            <span class="job-type">{{jobData.type}}</span>
        </div>
        <h3 class="job_title">
            {{jobData.title}}
        </h3>
        <p class="company_name">
           {{jobData.company}}
        </p>

        <p class="location">
            {{jobData.location}}
        </p>
    </article>
</template>

<script>
    export default {
        name: "JobCard",
        props:["jobData"],
        methods:{
            randomColor(){
                let r = Math.floor(Math.random() * 255) + 1;
                let g = Math.floor(Math.random() * 255) + 1;
                let b = Math.floor(Math.random() * 255) + 1;

                return `rgb(${r},${g},${b})`
            },
            firstLetter() {
                return this.jobData.company.slice(0,1);
            }
        }
    }
</script>

<style scoped>
    .job {
        width: 32%;
        border-radius: 8px;
        box-shadow: 0 6px 6px rgba(186, 251, 196, 0.16);
        position: relative;
        padding: 3em 1em 0;
        border: 1px dashed #fff996;
        text-align: left;
        margin: 1em 0;
    }

    .company,
    .details {
        position: absolute;
    }

    .company{
        /*background-color: #c72f6c;*/
        top: -1em;
        left: 1em;
        width: 40px;
        border-radius: 8px;
        padding: 5px 0;
        color: #FFFFFF;
        text-align: center;
    }

    .details {
        top: 0;
        right: 0;
        padding: .5em .75em;
        color: #5964E0;
        border-bottom-left-radius: 8px;
        cursor: pointer;
        text-decoration: none;
    }

    .details:hover {
        background-color: rgba(89, 100, 224, 0.36);
    }

    .time-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #a8b9d2;
        width: 60%;
    }


    .job_title {
        margin-bottom: .5em;
        font-size: 1.3em;
        font-weight: bold;
    }

    .location {
        color: #5964E0;
        font-weight: bold;
        font-size: 14px;
    }


    @media (max-width: 992px) {
        .job {
            width: 48%;
            margin: 1em 1%;
        }
    }

    @media (max-width: 765px) {
        .job{
            width: 100%;
            max-width: 320px;
            margin: 1.5em auto;
        }

    }
</style>