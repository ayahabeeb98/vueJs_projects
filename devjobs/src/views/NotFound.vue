<template>
    <div class="wrapper">
        <h1>Not found <span>:(</span></h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>

        <i>404</i>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
    .wrapper {
        padding: 1em;
        background-color: #24202c;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #dac8f9;
    }

    .wrapper h1 {
        font-size: 3em;
    }

    .wrapper p {
        font-size: 1.5em;
    }

    .wrapper i {
        font-size: 6em;
    }
</style>