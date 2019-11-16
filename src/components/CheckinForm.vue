<template>
<div class="checkin-form">
    <label class="typo__label">
     <p>Efetuar Check-in</p>
    </label>
    <multiselect v-model="value" 
        track-by="name" 
        label="name" 
        placeholder="Nome do Cliente" 
        :options="clients" 
        :searchable="false" 
        :allow-empty="false">
        <template slot-scope="{ client }">
        <strong>{{ client.name }}</strong>
        </template>
    </multiselect>
    <pre class="language-json">
        <div class="information" v-if="value !== null">
        <p>Nome : {{value.name}}</p>
        <p>Quantidades de Quartos : {{value.quartos}}</p>
        <p>Data Entrada : {{value.dataEntrada}}</p>
        <p>Data Saída: {{value.dataSaida}}</p>
        </div>
    </pre>
    <button class="button" type="submit">Check-in</button>
</div>
</template>


<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css';

export default {
  components: { Multiselect },
  data(){
    return {
      value: null,
      clients: [
        { id:1, name: "Tom Cruz", quartos: "1", dataEntrada: "2019-11-20", dataSaida: "2019-11-22"},
        { id:2, name: "Mike Mouse", quartos: "1", dataEntrada: "2019-11-21", dataSaida: "2019-11-27"},
        { id:3, name: "Mariya Giordani",quartos: "4", dataEntrada: "2019-11-30", dataSaida: "2019-12-22"},
        { id:4, name: "Will Smith",quartos: "5", dataEntrada: "2019-11-10", dataSaida: "2019-11-22"},
        { id:5, name: "Jon Jon", quartos: "6", dataEntrada: "2019-11-04", dataSaida: "2019-11-20"},
      ]
    }
  }
};
</script>
<style scoped>
.checkin-form {
    margin:50px;
    padding: 40px 200px;
    border: 2px solid black;
    border-radius: 8px;
    background-color: #E6E6FA;
}

.information {
    border: 2px solid grey;
    background-color: #F0F8FF;
    border-radius: 8px;
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
  background-color: #4CAF50;
}
</style>