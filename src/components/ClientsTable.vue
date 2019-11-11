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
    }"
    :select-options="{ 
        enabled: true,
    }">
    <div slot="selected-row-actions">
        <button class="button-desativo">Disativa</button>
    </div>
    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'buttons'">
        <button type="button" class="button button-edit" style="margin-right: 20px;"> Editar </button>
        <button type="button" class="button button-delete"> Deletar </button>
      </span>
      <span v-else>
          {{props.formattedRow[props.column.field]}}
      </span>
    </template>
    </vue-good-table>
  </div>
</template>


<script>
import { VueGoodTable } from 'vue-good-table'; 
import 'vue-good-table/dist/vue-good-table.css';

export default {
  name: 'clients',
    components: {
        VueGoodTable,
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
      rows: [
        { id:1, name: "Tom Cruz", CPF: "646646464646464", RG: "63636363367", Ativo: "true", buttons: "" },
        { id:2, name: "Mike Mouse", CPF: "8865624624", RG: "23452314321", Ativo: "true", buttons: ""},
        { id:3, name: "Mariya Giordani", CPF: "351351534513", RG: "4354353453", Ativo: "false", buttons: ""},
        { id:4, name: "Will Smith", CPF: "353534534345", RG: "456345345", Ativo: "false", buttons: ""},
        { id:5, name: "Jon Jon", CPF: "345353535435", RG: "34535345353", Ativo: "true", buttons: ""},
      ],
    };
  },
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


