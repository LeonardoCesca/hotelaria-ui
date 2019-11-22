<template>
  <div v-if="showModal">
    <div id="modal">
        <p> Detalhes Cadastro do Cliente </p>
        <div id="client">
          <p>Nome : {{client.name}}</p>
          <p>Quantidades de Quartos : {{client.quartos}}</p>
          <p>Data Entrada : {{client.dataEntrada}}</p>
          <p>Data Saída: {{client.dataSaida}}</p>
        </div>
      <button class="button" @click="hide">Fechar</button>
    </div> 
  </div>
</template>

<script>
 export default {
   data() {
     return {
      showModal: false,
      client: {}
     }
   },
   methods: {
     show(fields) {
      this.showModal = true
      this.client = fields
     },
     hide(){
      this.showModal = false
     }
   }
 }
</script>

<style scoped>
  #modal {
    position:absolute;
    left: calc(50% - 150px);
    top: calc(50% - 150px);
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:black;
    flex-direction: column;
    border: 2px solid grey;
    background-color: #F0F8FF;
    border-radius: 8px;
    padding: 40px;
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
  background-color: #f44336;
}

</style>