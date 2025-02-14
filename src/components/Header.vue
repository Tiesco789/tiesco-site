<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import api from '../utils/api';

export default defineComponent({
  name: 'Header',
  setup() {
    const userData = ref<any>(null);
    const fetchGitHubUser = async () => {
      try {
        const response = await api.get('users/Tiesco789');
        userData.value = response.data;
      } catch (error) {
        console.error(`Ops, aconteceu alguma coisa: ${error}`);
      }
    };

    onMounted(fetchGitHubUser);

    return { userData };
  }
})
</script>

<template>
  <div class="header-container">
    <div class="links-container">
      <a class="link" :href="userData?.blog"><i class="ri-linkedin-fill"></i></a>
      <a class="link" href=""><i class="ri-discord-fill"></i></a>
      <a class="link" href=""><i class="ri-mail-send-fill"></i></a>
      <a class="link" :href="userData?.html_url"><i class="ri-github-fill"></i></a>
    </div>

    <button class="btn-download">Download CV <i class="ri-download-2-fill"></i></button>
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
  padding: 1rem 2rem;
  background-color: #171717;
  border: 1px solid rgb(44, 44, 44);
  border-radius: .5rem;
  margin-bottom: 1rem;

  .links-container {
    display: flex;
    list-style: none;
    justify-content: center;

    .link {
      text-decoration: none;
      color: #a3a3a3;
      padding: 16px 24px;
      border-radius: 8px;
      transition: all .2s ease-in-out;

      &:hover {
        color: $accent-color;
        background-color: $bg-btn-color;
      }

      i {
        font-size: 28px;
      }
    }
  }

  .btn-download {
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 16px 24px;
    border-radius: 8px;
    transition: all .2s ease-in-out;
    background-color: $accent-color;
    border: none;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #513794;
    }

    i {
      font-size: 1.5rem;
    }
  }
}
</style>