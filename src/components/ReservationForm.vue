<template>
  <div class="register-form">
    <form method="post">
        <div class="group">
          <label>Data Entrada / Saída:</label>
          <date-picker v-model="estadia" range lang="pt-br">{{estadia}}</date-picker>
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
          <select v-model="clientes">
            <option disabled value="">Selecione um cliente já cadastrado</option>
            <option v-for="client in clients" :key="client.id">
              {{client.name}}
            </option>
          </select>
        </div>
        <button class="reservation__btn" type="submit">Reservar</button>
    </form>
  </div>
</template>


<script>
import DatePicker from 'vue2-datepicker';

export default {
  name: 'register-form',
  components: {
    DatePicker
  },
  data(){
    return {
      bedrooms: '',
      clientes: '',
      rooms: [
        { key: 1, value: '1' },
        { key: 2, value: '2' },
        { key: 3, value: '3' },
      ],
      estadia: '',
      clients: [
        { id:1, name: "Tom Cruz"},
        { id:2, name: "Mike Mouse"},
        { id:3, name: "Mariya Giordani"},
        { id:4, name: "Will Smith"},
        { id:5, name: "Jon Jon"},
      ]
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

