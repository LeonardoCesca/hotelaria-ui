<template>
  <div class="checkin-form">
    <FlashMessage></FlashMessage>
    <label class="typo__label">
      <p>Efetuar Check-out</p>
    </label>
    <multiselect
      v-model="value"
      :options="clients"
      placeholder="Nome do Cliente"
      label="name"
      :multiple="false"
    >
      <template slot-scope="{ clients }">
        <strong>{{ clients }}</strong>
      </template>
    </multiselect>
    <pre class="language-json">
        <div class="information" v-if="value !== null">
          <p>Nome : {{value.name}}</p>
          <p>Quantidades de Quartos : {{value.roomsQuantity}}</p>
          <div style="display: flex; justify-content: space-around;">
          <p>Data Entrada : {{value.checkin}}</p>
          <p>Data Saída: {{value.checkout}}</p>
          </div>
          <p>Pagamento: R$ {{value.payment}}</p>
          <table style="width:100%">
            <tr>
              <th>Produto</th>
              <th>Preço</th> 
            </tr>
            <tr>
              <td>Coca Cola</td>
              <td>Chocolate</td>
            </tr>
            <tr>
              <td>R$ 20</td>
              <td>R$ 40</td>
            </tr>
          </table>
        </div>
    </pre>
    <button class="button" type="submit" style="margin-right: 20px;" @click="getCpf()">Check-out</button>
    <button class="button button-cancelar" @click="getCpfCancel()" type="submit">Cancelar</button>
  </div>
</template>


<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import Vue from 'vue';
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

export default {
    components: { Multiselect },
    data() {
      return {
        showModal: true,
        value: null,
        clients: [],
        cpf: null,
      };
    },
    created() {
      axios
        .get("https://fadergs-reservation-service.herokuapp.com/costumers")
        .then(response => {
          this.clients = response.data.costumers
        });
    },

    methods: {
    getCpf() {
        axios
      .get("https://fadergs-reservation-service.herokuapp.com/costumers")
      .then(response => {
        this.cpf = response.data.costumers[0].cpf
        this.postData();
      });
    },

     getCpfCancel() {
        axios
      .get("https://fadergs-reservation-service.herokuapp.com/costumers")
      .then(response => {
        this.cpf = response.data.costumers[0].cpf
        this.cancelCheckout();
      });
    },

    postData() {
      this.dataEntrada = this.value.checkin;
      this.dataSaida = this.value.checkout;
    
      axios.post("http://fadergs-reservation-service.herokuapp.com/reservations/checkout", {
        "checkin": this.dataEntrada,
        "checkout": this.dataSaida,
        "cpf": this.cpf,

      }).catch(e => {
        return this.flashMessage.success({title: 'Mensagem de Erro', message: e});
      });
      this.flashMessage.success({title: 'Mensagem de Sucesso', message: 'Check-out efetuado com successo!'});
    }
    },
    hide(){
      this.showModal = false
    },
    cancelCheckout() {
      this.dataEntrada = this.value.checkin;
      this.dataSaida = this.value.checkout;

      axios.post("http://fadergs-reservation-service.herokuapp.com/reservations/cancel", {
        "checkin": this.dataEntrada,
        "checkout": this.dataSaida,
        "cpf": this.cpf,
      }).catch(e => {
        return this.flashMessage.success({title: 'Mensagem de Erro', message: e});
      });
      this.flashMessage.success({title: 'Mensagem de Sucesso', message: 'Check-out cancelado com successo!'});
    }
};

</script>

<style scoped>
.checkin-form {
  margin: 50px;
  padding: 40px 200px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: #e6e6fa;
}

.information {
  border: 2px solid grey;
  background-color: #f0f8ff;
  border-radius: 8px;
  padding: 10px;
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
  background-color: #4caf50;
}

.button-cancelar {
  background-color: #f44336;
}

table, th, td {
  border: 1px solid black;
  font-family: "Times New Roman", Times, serif;
}
</style>