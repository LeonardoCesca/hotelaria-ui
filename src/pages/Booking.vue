<template>
  <div class="booking">
      <h1>Reservas</h1>
      <BookingTable />
  </div>
</template>

<script>
  import BookingTable from '../components/BookingTable';

  export default {
    name: 'booking',
    components: {
      BookingTable,
    }
  }
</script>

<style scoped>
  .booking {
      position: absolute;
      width: 76%;
      right: 0;
      padding:20px;
      color: black;
  }
</style>