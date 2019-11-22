<template>
  <div class="checkin-form">
    <label class="typo__label">
      <p>Efetuar Check-out</p>
    </label>
    <multiselect
      v-model="value"
      :options="clients"
      placeholder="Nome do Cliente"
      label="title"
      :multiple="false"
    >
      <template slot-scope="{ clients }">
        <strong>{{ clients }}</strong>
      </template>
    </multiselect>
    <pre class="language-json">
        <div class="information" v-if="value !== null">
          <p>Nome : {{value.id}}</p>
          <p>Quantidades de Quartos : {{value.title}}</p>
          <p>Data Entrada : {{value.userId}}</p>
          <p>Data Saída: {{value.userId}}</p>
          <p>Pagamento: R$ {{value.id}}</p>
        </div>
    </pre>
    <button class="button" type="submit">Check-out</button>
  </div>
</template>


<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  components: { Multiselect },
  data() {
    return {
      value: null,
      clients: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(response => (this.clients = response.data));
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
</style>