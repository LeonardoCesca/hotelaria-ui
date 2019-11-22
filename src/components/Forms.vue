<template>
  <div class="forms">
    <form class="register__form" @submit.prevent="validateForm" ref="form">
      <div class="group">
        <label for="name">* Nome:</label>
        <input type="text" name="name" placeholder="Digite seu nome" v-model="user.name" />
        <span class="label-error" v-if="errorClass.name">{{errors.name}}</span>
      </div>
      <div class="group">
        <label for="lastname">Sobrenome:</label>
        <input type="text" name="lastname" placeholder="Digite seu sobrenome" />
      </div>
      <div class="group">
        <label for="email">* Email:</label>
        <input type="email" name="email" placeholder="Digite seu email" v-model="user.email" />
        <span class="label-error" v-if="errorClass.email">{{errors.email}}</span>
      </div>
      <div class="group">
        <label for="phone">* Celular:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Digite seu telefone"
          v-model="user.phone"
          v-mask="'(##) #####-####'"
        />
        <span class="label-error" v-if="errorClass.phone">{{errors.phone}}</span>
      </div>
      <div class="group">
        <label for="rg">* RG:</label>
        <input type="text" name="rg" placeholder="Digite seu RG" v-model="user.rg" />
        <span class="label-error" v-if="errorClass.rg">{{errors.rg}}</span>
      </div>
      <div class="group">
        <label for="cpf">* CPF:</label>
        <input
          type="text"
          name="cpf"
          placeholder="Digite seu CPF"
          v-model="user.cpf"
          v-mask="'###.###.###-##'"
        />
        <span class="label-error" v-if="errorClass.cpf">{{errors.cpf}}</span>
      </div>
      <div class="group">
        <label for="cep">CEP:</label>
        <input type="text" name="cep" placeholder="Digite o seu CEP" v-model="user.cep" />
      </div>
      <div class="group">
        <label for="address">Endereço:</label>
        <input type="text" name="address" placeholder="Digite seu endereço" v-model="user.address" />
      </div>
      <button class="register__btn" type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "forms",
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        rg: "",
        cpf: "",
        cep: "",
        address: "",
      },
      errors: {
        name: undefined,
        email: undefined,
        phone: undefined,
        rg: undefined,
        cpf: undefined
      },
      errorClass: {
        name: false,
        email: false,
        phone: false,
        rg: false,
        cpf: false
      },
      message: undefined,
      responseUsers: []
    };
  },
  methods: {
    validateForm(e) {
      e.preventDefault();
      const errorMessage = "Campo obrigatório.";

      this.errors = {};

      if (!this.user.name) {
        this.errorClass.name = true;
        this.errors.name = errorMessage;
      } else {
        this.errorClass.name = false;
      }

      if (!this.user.email) {
        this.errorClass.email = true;
        this.errors.email = errorMessage;
      } else {
        this.errorClass.email = false;
      }

      if (!this.user.phone) {
        this.errorClass.phone = true;
        this.errors.phone = errorMessage;
      } else {
        this.errorClass.phone = false;
      }

      if (!this.user.rg) {
        this.errorClass.rg = true;
        this.errors.rg = errorMessage;
      } else {
        this.errorClass.rg = false;
      }

      if (!this.user.cpf) {
        this.errorClass.cpf = true;
        this.errors.cpf = errorMessage;
      } else {
        this.errorClass.cpf = false;
      }

      if (
        !!this.user.name &&
        !!this.user.email &&
        !!this.user.phone &&
        !!this.user.rg &&
        !!this.user.cpf
      ) {
        this.save();
      }
    },

    save() {
      this.responseUsers.push(this.user.name);
      this.responseUsers.push(this.user.email);
      this.responseUsers.push(this.user.phone);
      this.responseUsers.push(this.user.rg);
      this.responseUsers.push(this.user.cpf);
      this.responseUsers.push(this.user.cep);
      this.responseUsers.push(this.user.address);

      axios
        .post("https://cadastro-de-cliente.herokuapp.com/customer", {
          nome: this.user.name,
          telefone: this.user.phone,
          endereco: this.user.address,
          rg: this.user.rg,
          cpf: this.user.cpf,
        })
        .catch(e => {
          alert(e);
        });
    }
  }
};
</script>

<style scoped>
.forms {
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

.group > label {
  display: flex;
  line-height: 1.6;
  font-weight: bold;
  margin-top: 25px;
}

.group > input {
  display: block;
  width: 100%;
  border: 1px solid #e1e1e1;
  padding: 0.5em 1em;
}

.register__btn {
  margin: 0 auto;
  background: none;
  border: 1px solid #000;
  padding: 6px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-top: 25px;
}

.register__btn:hover {
  background: #000;
  color: #fff;
  transition: 0.4s ease-in;
}

.label-error {
  margin-bottom: 25px;
  font-size: 12px;
  color: #c93211;
  padding-top: 4px;
}
</style>
