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
$accent-color: #7353c5;
$bg-btn-color: rgba(110, 89, 165, 0.06);

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  background-color: #171717;
  border: 1px solid rgb(44, 44, 44);
  border-radius: .5rem;

  .links-container {
    display: flex;
    list-style: none;
    justify-content: center;

    .link {
      a {
        text-decoration: none;
        color: #a3a3a3;
        padding: 16px 24px;
        border-radius: 8px;
        transition: all .2s ease-in-out;

        &:hover {
          color: $accent-color;
          background-color: $bg-btn-color;
        }
      }
    }
  }
}
</style>