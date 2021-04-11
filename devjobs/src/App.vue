<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view/>
    </main>
  </div>
</template>
<script>
  import Header from './components/Headr'

  export default {
    name:'App',
    components: {
      Header
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .loading {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
