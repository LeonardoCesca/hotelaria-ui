<template>
  <div id="app">
    <Register title="Formulário de Cadastro"/>
  </div>
</template>

<script>
import Register from './components/Register'

export default {
  name: 'app',
  components: {
    Register 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
