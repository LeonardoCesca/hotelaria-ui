<template>
  <div>
    <vue-good-table
    :columns="columns"
    :rows="rows"
    class="styled"
    :search-options="{
        enabled: true,
        placeholder: 'Procura reserva',
    }"
    :pagination-options="{
        enabled: true,
        mode: 'records'
    }">
    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'buttons'">
        <button type="button" class="button button-details" style="margin-right: 20px;" @click="openModal(props.row)" > Detalhes </button>
        <button type="button" class="button button-delete"> Deletar </button>
      </span>
      <span v-else>
          {{props.formattedRow[props.column.field]}}
      </span>
    </template>
    </vue-good-table>
    <modal ref="modal"></modal>
  </div>
</template>


<script>
import { VueGoodTable } from 'vue-good-table'; 
import 'vue-good-table/dist/vue-good-table.css';
import modal from './ModalDetails.vue'

export default {
  name: 'booking',
  components: {
      VueGoodTable,
      modal,
  },
  data(){
    return {
      columns: [
        {
          label: 'Data de Entrada',
          field: 'dataEntrada',
          dateInputFormat: 'yyyy-MM-dd', // expects 2018-03-16
          dateOutputFormat: 'dd-MM-yyyy', // outputs Mar 16th 2018
        },
        {
          label: 'Data de Saida',
          field: 'dataSaida',
          dateInputFormat: 'yyyy-MM-dd', // expects 2018-03-16
          dateOutputFormat: 'dd-MM-yyyy', // outputs Mar 16th 2018
        },
        {
          label: 'Nome',
          field: 'name',
        },
        {
          label: 'Numero de Quartos',
          field: 'quartos',
        },
        {
          label: 'Ações',
          field: 'buttons',
        },
      ],
      rows: [
        { id:1, name: "Tom Cruz", quartos: "1", dataEntrada: "2019-11-20", dataSaida: "2019-11-22", buttons: "" },
        { id:2, name: "Mike Mouse", quartos: "1", dataEntrada: "2019-11-21", dataSaida: "2019-11-27", buttons: ""},
        { id:3, name: "Mariya Giordani",quartos: "4", dataEntrada: "2019-11-30", dataSaida: "2019-12-22", buttons: ""},
        { id:4, name: "Will Smith",quartos: "5", dataEntrada: "2019-11-10", dataSaida: "2019-11-22", buttons: ""},
        { id:5, name: "Jon Jon", quartos: "6", dataEntrada: "2019-11-04", dataSaida: "2019-11-20", buttons: ""},
      ],
    };
  },
  methods: {
    openModal: function (entry) {
      this.$refs.modal.show(entry) 
    }
  }
};
</script>

<style scoped>
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
}

.button-delete {
    background-color: #f44336;
}

.button-details {
    background-color: #4CAF50;
}
</style>