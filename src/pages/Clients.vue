<template>
   <div class="clients">
      <h1>Lista de Clientes</h1>
      <ClientsTable />
  </div>
</template>

<script>
import ClientsTable from '../components/ClientsTable'

export default {
  name: 'clients',
  components: {
    ClientsTable,
  }
}
</script>


<style scoped>
  .clients {
      position: absolute;
      width: 76%;
      right: 0;
      padding:20px;
      color: black;
  }
</style>


