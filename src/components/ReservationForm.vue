<template>
  <div class="register-form">
    <FlashMessage></FlashMessage>
    <form @submit.prevent="postData">
        <div class="group">
          <label>Data Entrada / Saída:</label>
          <date-picker v-model="estadia" range lang="pt-br" valueType="format">{{estadia}}</date-picker>
        </div>
        <div class="group">
          <label>Quartos:</label>
          <select v-model="bedrooms">
            <option disabled value="">Selecione a quantidade de quartos</option>
            <option v-for="room in rooms" :key="room.key">
              {{room.value}}
            </option>
          </select>
        </div>
        <div class="group">
          <label>Cliente:</label>
          <select v-model="nameSelected">
            <option disabled value="">Selecione um cliente já cadastrado</option>
            <option v-for="(client,index) in clients" :key="index+1">
              {{client.name}}
            </option>
          </select>
        </div>
        <button class="reservation__btn" type="submit">Reservar</button>
    </form>
  </div>
</template>


<script>
import axios from 'axios';
import Vue from 'vue';
import DatePicker from 'vue2-datepicker';
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

export default {
  name: 'register-form',
  components: {
    DatePicker
  },
  data(){
    return {
      nameSelected: '',
      clients: [],  
      bedrooms: '',
      rooms: [
        { key: 1, value: '1' },
        { key: 2, value: '2' },
        { key: 3, value: '3' },
      ],
      estadia: '',
      dataEntrada: '',
      dataSaida: '',
    }
  },

   created() {
    axios.get("http://fadergs-reservation-service.herokuapp.com/costumers")
    .then(response => {
      this.clients = response.data.costumers
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  methods: {
    postData() {
     this.dataEntrada = this.estadia[0];
     this.dataSaida = this.estadia[1];
    
      axios.post("http://fadergs-reservation-service.herokuapp.com/reservations", {
        "name": this.nameSelected,
        "roomsQuantity": this.bedrooms,
        "checkin": this.dataEntrada,
        "checkout": this.dataSaida,

      }).catch(e => {
        this.flashMessage.success({title: 'Mensagem de Erro', message: e});
      });
      
      this.clearForm();
      this.flashMessage.success({title: 'Mensagem de Sucesso', message: 'Reserva Efetivada!'});

    },
    clearForm() {
      this.nameSelected = '';
      this.bedrooms = '';
      this.dataEntrada = '';
      this.dataSaida = '';
    }
  }
};
</script>

<style scoped>
.register-form {
  display: flex;
  justify-content: center;
}

.group {
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.group > label {
  font-weight: bold;
  padding-right: 10px;
}

.group > select {
  display: inline-block;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 34px;
  padding: 6px 10px;
  outline: none;
}

.group > select > option:disabled {
  color: #555;
}

.reservation__btn {
  margin: 0 auto;
  background: none;
	border: 1px solid #000;
	padding: 6px;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  margin-top: 25px;
}

.reservation__btn:hover {
  background: #000;
  color: #fff;
  transition: 0.4s ease-in;
}
</style>

