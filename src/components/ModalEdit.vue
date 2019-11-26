<template>
    <div v-if="showModal">
        <div id="modal">
            <FlashMessage></FlashMessage>
            <form class="register__form" @submit.prevent="validateForm" method="post">
                <p> Editar Cadastro do Cliente </p>
                <div id="client">
                    <div class="group">
                        <label for="name">* Nome:</label>
                        <input type="name" name="name" v-model="client.nome">
                        <span class="label-error" v-if="errorClass.nome">
                            {{errors.nome}}
                        </span>
                    </div>
                    <div class="group">
                        <label for="rg">* RG:</label>
                        <input type="text" name="rg" v-model="client.rg">
                        <span class="label-error" v-if="errorClass.rg">
                            {{errors.rg}}
                        </span>
                    </div>
                    <div class="group">
                        <label for="cpf">* CPF:</label>
                        <input type="text" name="cpf" v-model="client.cpf" v-mask="'###.###.###-##'">
                        <span class="label-error" v-if="errorClass.cpf">
                            {{errors.cpf}}
                        </span>
                    </div>
                    <div class="button-margin">
                        <button class="button button-details" type="submit">Cadastrar</button>
                        <button class="button" @click="hide">Fechar</button>
                    </div>
                </div> 
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

 export default {
    data() {
        return {
            showModal: false,
            client: {
                nome: '',
                rg: '',
                cpf: '',
            },
            errors: {
                nome: undefined,
                rg: undefined,
                cpf: undefined,
            },
            errorClass: {
                nome: false,
                rg: false,
                cpf: false,
            },
            message: undefined,
            clients: [],
            saveSuccess: false,
        }
    },
    methods: {
        show(fields) {
            this.showModal = true
            this.client = fields
        },
        hide(){
            this.showModal = false
        },
        validateForm(e) {
            e.preventDefault();
            const errorMessage = 'Campo obrigatório.';

            this.errors = {};

            if(!this.client.nome) {
                this.errorClass.nome = true;
                this.errors.nome = errorMessage;
            } else {
                this.errorClass.nome = false;
            }

            if(!this.client.rg) {
                this.errorClass.rg = true;
                this.errors.rg = errorMessage;
            } else {
                this.errorClass.rg = false;
            }

            if(!this.client.cpf) {
                this.errorClass.cpf = true;
                this.errors.cpf = errorMessage;
            } else {
                this.errorClass.cpf = false;
            }

            if(!!this.client.nome && !!this.client.rg && !!this.client.cpf) {
              this.updateClients();
              this.flashMessage.success({title: 'Mensagem de Sucesso', message: 'Cliente salvo com sucesso!'});
            }
        },

        updateClients() {
          axios.put("https://cadastro-de-cliente.herokuapp.com/customer", {
            nome: this.client.nome,
            rg: this.client.rg,
            cpf: this.client.cpf,
            })
            .catch(e => {
                this.flashMessage.error({title: 'Error Message Title', message: e});
            }); 
        },
    }
 }
</script>

<style scoped>
#modal {
  position: absolute;
  left: calc(50% - 150px);
  top: calc(50% - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
  color:black;
  flex-direction: column;
  border: 2px solid grey;
  background-color: #F0F8FF;
  border-radius: 8px;
  padding: 40px 50px;
}

p {
  font-size: 19px;
  font-weight: bold;
}

.button {
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #f44336;
}

.button-details {
  background-color: #4CAF50;
}

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
  color: #C93211;
  padding-top: 4px;
}

.button-margin {
  margin:30px;
}


.modal-success {
  background-color: green;
  color: #fff;
  width: 218px;
  border-radius: 10px;
  margin-top: 20px;
  padding-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

