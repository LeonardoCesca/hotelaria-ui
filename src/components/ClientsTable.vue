<template>
  <div>
    <vue-good-table
    :columns="columns"
    :rows="rows"
    class="styled"
    :search-options="{
        enabled: true,
        placeholder: 'Procura cliente',
    }"
    :pagination-options="{
        enabled: true,
        mode: 'records'
    }">
    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'name'">{{props.row.nome}}</span>
      <span v-if="props.column.field == 'CPF'">{{props.row.cpf}}</span>
      <span v-if="props.column.field == 'RG'">{{props.row.rg}}</span>
      <span v-if="props.column.field == 'buttons'">
        <button type="button" class="button button-edit" @click="openModal(props.row)" style="margin-right: 20px;"> Editar </button>
        <button type="button" class="button button-delete" @click="deleteCliente(props.row.cpf)" > Deletar </button>
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
import axios from 'axios';
import { VueGoodTable } from 'vue-good-table'; 
import 'vue-good-table/dist/vue-good-table.css';
import modal from './ModalEdit.vue'

export default {
  name: 'clients',
  components: {
      VueGoodTable,
      modal,
  },
  data(){
    return {
      columns: [
        {
          label: 'Nome',
          field: 'name',
        },
        {
          label: 'CPF',
          field: 'CPF',
        },
        {
          label: 'RG',
          field: 'RG',
        },
        {
          label: 'Ações',
          field: 'buttons',
        },
      ],
      rows: [],
    };
  },
  mounted() {
    this.getClients();
  },
  methods: {
    openModal: function (entry) {
      this.$refs.modal.show(entry) 
    },
    getClients() {
      return axios.get('https://cadastro-de-cliente.herokuapp.com/customer')
                .then(response => {
                  this.rows = response.data;
                });
    },
    deleteCliente(cpf) {
        axios.delete("https://cadastro-de-cliente.herokuapp.com/customer", 
          {headers: {
            "Content-Type": "application/json"
          },
           data: { cpf }
        }).catch(e => {
          alert(e);
        }); 
        
        setTimeout(() => {
          window.location.reload();
        }, 3000);
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

.button-edit {
    background-color: #4CAF50;
}

.button-desativo {
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 1px;
  background-color: #f44336;
}
</style>


