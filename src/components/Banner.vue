<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import api from "../utils/api";
import axios from "axios";

export default defineComponent({
  name: "Banner",
  setup() {
    const userData = ref<any>(null);

    const repos = ref<any[]>([]);
    const repoNames = ["pokereact-ts", "sorteio-amigo-secreto", "tradeup-teste", "runes-game"];
    const loading = ref(false);
    const error = ref("");

    const fetchGitHubUser = async () => {
      try {
        const response = await api.get("users/Tiesco789");
        userData.value = response.data;
      } catch (error) {
        console.error(`Ops, aconteceu alguma coisa: ${error}`);
      }
    };

    const fetchSelectedRepos = async () => {
      loading.value = true;
      try {
        const requests = repoNames.map((repo) =>
          axios.get(`https://api.github.com/repos/Tiesco789/${repo}`)
        );

        const responses = await Promise.all(requests);
        repos.value = responses.map((response) => response.data);
      } catch (err) {
        error.value = "Erro ao buscar repositórios selecionados.";
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchSelectedRepos);
    onMounted(fetchGitHubUser);

    return { repos, loading, error, userData };
  },
});
</script>

<template>
  <div class="banner-container">
    <div class="texts">
      <span>Welcome</span>
      <h1>
        Hi, I am <strong>{{ userData?.name }}</strong> A passionate developer
        crafting beautiful digital experiences
      </h1>
      <span>{{ userData?.bio }}</span>
    </div>

    <img v-if="userData?.avatar_url" :src="userData.avatar_url" :alt="userData.login" class="avatar" />

    <div>
      <h2>Repositórios Selecionados</h2>
      <div v-if="loading">Carregando...</div>
      <div v-if="error" class="error">{{ error }}</div>

      <ul v-if="repos.length">
        <li v-for="repo in repos" :key="repo.id">
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
            <strong>{{ repo.name }}</strong>
          </a>
          <p>{{ repo.description || 'Sem descrição' }}</p>
          <span>🌟 {{ repo.stargazers_count }} Stars</span>
          <span>🍴 {{ repo.forks_count }} Forks</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  display: flex;
  margin: 0 auto;
  align-items: start;
  padding: 1.5rem 3rem;
  flex-direction: rpw;
  background-color: #171717;
  border: 1px solid rgb(44, 44, 44);
  border-radius: 0.5rem;
  height: 32rem;

  .texts {
    span {
      margin-bottom: 0.875rem;
      color: #737373;
      font-weight: 300;
      font-size: 0.875rem;
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
}

.avatar {
  width: 100px;
  border-radius: 50%;
  margin-top: 20px;
}
</style>