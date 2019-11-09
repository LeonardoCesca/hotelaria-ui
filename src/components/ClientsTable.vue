<template>
  <div>
    <vue-good-table
    :columns="columns"
    :rows="rows"
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
        <button>Disativa</button>
    </div>
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
      ],
      rows: [
        { id:1, name: "Tom Cruz", CPF: "646646464646464", RG: "63636363367", Ativo: "true" },
        { id:2, name: "Mike Mouse", CPF: "8865624624", RG: "23452314321", Ativo: "true"},
        { id:3, name: "Mariya Giordani", CPF: "351351534513", RG: "4354353453", Ativo: "false"},
        { id:4, name: "Will Smith", CPF: "353534534345", RG: "456345345", Ativo: "false"},
        { id:5, name: "Jon Jon", CPF: "345353535435", RG: "34535345353", Ativo: "true"},
      ],
    };
  },
};
</script>


