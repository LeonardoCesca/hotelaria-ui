<template>
  <div class="register">
    <h1 class="register__title">Cadastro de Novos Clientes</h1>
    <Form />
  </div>
</template>

<script>
import Form from '../components/Forms'

export default {
  name: 'register',
  components: {
    Form,
  }
}
</script>

<style scoped>
  .register {
    position: absolute;
    width: 80%;
    right: 0;
  }
</style>
