<script lang="ts">
export default {
  name: 'Header'
}
</script>

<template>
  <div class="header-container">
    <img src="" alt="Logo">

    <ul class="links-container">
      <li class="link"><a href="">Home</a></li>
      <li class="link"><a href="">About</a></li>
      <li class="link"><a href="">Projects</a></li>
      <li class="link"><a href="">Contact</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  background-color: white;
  box-shadow: 0 0 25px 0 rgb(249, 249, 252);

  .links-container {
    display: flex;
    list-style: none;
    justify-content: center;

    .link {
      a {
        text-decoration: none;
        margin-left: 2rem;
        color: #242424;
        
        &:hover {
          background-color: color.adjust(#6e59a5, $lightness: 30%);
        }
      }
    }
  }
}
</style>