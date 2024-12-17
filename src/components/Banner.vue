<script lang="ts">
export default {
  name: 'Banner'
}
</script>

<template>
  <div class="banner-container">
      <span>Welcome</span>
      <h1>Hi, I am <strong>Franccesco Bordon</strong> A passionate developer crafting beautiful digital experiences</h1>
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: start;
  padding: 1.5rem 3rem;
  flex-direction: column;
  background-color: #171717;
  border: 1px solid rgb(44, 44, 44);
  border-radius: .5rem;

  span {
    margin-bottom: .875rem;
    color: #737373;
    font-weight: 300;
    font-size: .875rem;
  }

  h1 {
    font-size: 1.25rem;
    color: rgb(238, 238, 238);
    font-weight: 300;

    strong {
      color: #7353c5;
    }
  }
}
</style>