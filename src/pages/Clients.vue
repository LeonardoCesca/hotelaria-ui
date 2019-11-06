<template>
  <div class="clients">
      <h1>Lista de Clientes</h1>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="search">
        <input type="text" class="searchTerm" placeholder="Nome">
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <table id="clients">
        <tr>
          <th>Nome</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
        <tr v-for="(data, index) in clients" :key='index'>
          <td>{{data.name}}</td>
          <td><button class="button button-editar" v-on:click="$delete(clients, index)">Editar</button></td>
          <td><button class="button button-excluir" v-on:click="$delete(clients, index)">Excluir</button></td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'clients',
    data() {
      return {
          clients: [
              { "name": "Tom Cruz"},
              { "name": "Mike Mouse"},
              { "name": "Mariya Giordani"},
              { "name": "Will Smith"},
              { "name": "Jon Jon"},
          ]
      }
  }
 
}
</script>

<style scoped>
.clients {
    position: absolute;
    width: 76%;
    right: 0;
    padding:20px;
    color: #1E90FF;
}

#clients {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#clients td, #clients th {
  border: 1px solid #ddd;
  padding: 8px;
}

#clients tr:nth-child(even){background-color: #f2f2f2;}

#clients tr:hover {background-color: #ddd;}

#clients th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #1E90FF;
  color: white;
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
}

.button-excluir {
    background-color: #f44336;
}

.button-editar {
    background-color: #4CAF50;
}

body{
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
}

.searchTerm {
  width: 50%;
  border: 3px solid #1E90FF;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: black;
  font-weight: bold;
}

.searchTerm:focus{
  font-weight: bold;
  color: black;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #1E90FF;
  background: #1E90FF;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

.wrap{
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
