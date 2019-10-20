<template>
  <div class="register">
    <h1>{{ title }}</h1>
    <form class="register__form" action="">
      <label for="username">* Nome:</label>
      <input type="text" name="username" placeholder="Digite seu nome" required>
      <label for="lastname">Sobrenome:</label>
      <input type="text" name="lastname" placeholder="Digite seu sobrenome">
      <label for="email">* Email:</label>
      <input type="email" name="email" placeholder="Digite seu email" required>
      <label for="phone">* Telefone:</label>
      <input type="tel" name="phone" placeholder="Digite seu telefone" required>
      <label for="rg">* RG:</label>
      <input type="text" name="rg" placeholder="Digite seu RG" required>
      <label for="cpf">* CPF:</label>
      <input type="text" name="cpf" placeholder="Digite seu CPF" required>
      <label for="cep">CEP:</label>
      <input type="text" name="cep" placeholder="Digite o seu CEP">
      <label for="address">Endereço:</label>
      <input type="text" name="address" placeholder="Digite seu endereço">
      <button class="register__btn" type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    title: String
  }
}
</script>

<style scoped>
.register { 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.register__form {
  display: flex;
  font-size: 14px;
  flex-direction: column;
  align-items: flex-start;
}

.register__form > label {
  line-height: 1.6;
  font-weight: bold;
}

.register__form > input {
  display: block;
  width: 100%;
  margin-bottom: 25px;
  border: 1px solid #e1e1e1;
  padding: .5em 1em;
}

.register__btn {
  margin: 0 auto;
  background: none;
	border: 1px solid #000;
	padding: 6px;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.register__btn:hover {
  background: #000;
  color: #fff;
  transition: 0.4s ease-in;
}

</style>
