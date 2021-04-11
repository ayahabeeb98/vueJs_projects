<template>
    <form class="searchForm" @submit.prevent="$emit('handleSearch',{description,location,checked})">
        <label class="mr-2">
            <input type="text" v-model="description"
                   name="description"
                   class="search_input" autocomplete="off"
                   placeholder="Search by Job Description"
                   >
        </label>
        <label>
            <input type="text" v-model="location"
                   name="location"
                   class="search_input" autocomplete="off"
                   placeholder="city"
            >
        </label>

        <div class="form-check form-check-inline">
            <input class="form-check-input" v-model="checked" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Full time only</label>
        </div>

        <button class="btn btn-primary search_icon" type="submit">
            <template v-if="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </template>
            <template v-else>
                Search
            </template>
        </button>
    </form>
</template>

<script>
    export default {
        name: "SearchForm",
        props:['loading'],
        data() {
            return {
                description: '',
                location: '',
                checked: false
            }
        }
    }
</script>

<style scoped>

    .searchForm {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        align-items: center;
        padding: .5em 2.5em .5em .5em;
        border-radius: 8px;
        width: 65%;
        margin: 2em auto;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .165);
    }

    label {
        margin-bottom: 0;
        max-width: 390px;
        margin-right: .5em;

    }
    .search_input {
        border: 3px solid #8c8c8c;
        box-sizing: border-box;
        display: inline-block;
        height: 50px;
        line-height: 2;
        padding: 10px 10px 10px 10px;
        outline: none;
        transition: all 0.45s ease 0s;
        -webkit-appearance: none;
        border-radius: 0;
        text-align: left;
        width: 100%;
        max-width: 320px;
    }

    .search_icon {
        border: medium none;
        color: #FFF;
        font-size: 1.2em;
        right: 5px;
        background-color: #4a57e9;
        top: 50%;
        height: 45px;
        transform: translateY(-50%);
        line-height: 1;
        padding: 8px 15px;
        position: absolute;
        cursor: pointer;
    }


    @media (max-width: 992px) {
        .search_icon {
            position: unset;
            transform: unset;
            width: 80%;
            margin:1em auto;
            display: inline-block;
        }

        label {
            width: 80%;
        }
        .search_input {
            margin-bottom: 10px;

        }

        .searchForm {
            padding-top: 1.5em;

            flex-direction: column;
        }
    }
</style>