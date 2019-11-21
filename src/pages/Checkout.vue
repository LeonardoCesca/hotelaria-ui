<template>
  <div class="checkout">
      <h1>Check-out do Cliente</h1>
       <CheckoutForm />
  </div>
</template>

<script>
import CheckoutForm from '../components/CheckoutForm'
export default {
  name: 'checkout',
  components: {
    CheckoutForm
  },
}
</script>

<style scoped>
.checkout {
    position: absolute;
    width: 80%;
    right: 0;
}
</style>