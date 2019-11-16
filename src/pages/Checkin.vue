<template>
  <div class="checkin">
      <h1>Check-in do Cliente</h1>
       <CheckinForm />
  </div>
</template>

<script>
import CheckinForm from '../components/CheckinForm'
export default {
  name: 'checkin',
  components: {
    CheckinForm
  },
}
</script>

<style scoped>
.checkin {
    position: absolute;
    width: 80%;
    right: 0;
}
</style>