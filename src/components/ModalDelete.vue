<template>
  <div v-if="showModal">
    <FlashMessage></FlashMessage>
    <div id="modal">
        <div id="client">
            <p> Gostaria de Deletar {{client.nome}}?</p>
            <p> Clica no botão confirmar!</p>
        </div>
        <div calss="button-margin">
            <button class="button button-details" @click="deleteCliente(client.cpf)"  style="margin-right: 20px;">Confirmar</button>
            <button class="button" @click="hide">Fechar</button>
        </div>
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
      client: {}
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
    deleteCliente(cpf) {
    axios.delete("https://cadastro-de-cliente.herokuapp.com/customer", 
        {headers: {
        "Content-Type": "application/json"
        },
        data: { cpf },
    }).catch(e => {
        this.flashMessage.success({title: 'Mensagem de Erro', message: e});
    }); 

    setTimeout(() => {
        this.flashMessage.success({title: 'Mensagem de Sucesso', message: 'Cliente foi deletado com sucesso!'});
        this.showModal = false
        window.location.reload();
    }, 2000);
    }
   }
 }
</script>

<style scoped>
  #modal {
    position:absolute;
    left: calc(50% - 150px);
    top: calc(50% - 150px);
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:black;
    flex-direction: column;
    border: 2px solid grey;
    background-color: #F0F8FF;
    border-radius: 8px;
    padding: 40px;
  }

  p {
    font-family: "Times New Roman", Times, serif;
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

.button-margin {
  margin:30px;
}

</style>