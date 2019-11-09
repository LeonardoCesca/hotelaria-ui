<template>
  <div class="reservation">
      <h1>Reservas</h1>
      <ReservationForm />
  </div>
</template>

<script>
import ReservationForm from '../components/ReservationForm'
export default {
  name: 'reservation',
  components: {
    ReservationForm
  },
}
</script>

<style scoped>
.reservation {
    position: absolute;
    width: 80%;
    right: 0;
}
</style>
