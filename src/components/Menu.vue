<template>
  <div class="menu">
      <h1>Menu</h1>
      <nav class="nav">
          <ul class="nav__list">
              <li class="nav__item">
                <router-link to="/">Página Inicial</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/cadastro">Cadastro</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/reservas">Reservas</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/clientes">Clientes</router-link>
              </li>
          </ul>
      </nav>
        
  </div>
</template>

<script>
export default {
  name: 'menu',
 
}
</script>

<style scoped>
.menu {
    position: fixed;
    height: 100%;
    width: 20%;
    z-index: 1;
    top: 0;
    left: 0;
    color: #fff;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.nav {
    display: flex;
    justify-content: center;
}

.nav__list {
    list-style: none;
    padding: 0;

}

.nav__item {
    margin-bottom: 40px;
    color: #fff;
}

.nav__item > a {
    color: #fff;
    text-decoration: none;
}
</style>
