<template>
  <div>
    <h2>Repositórios Selecionados</h2>
    <div v-if="loading">Carregando...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="repos.length">
      <li v-for="repo in repos" :key="repo.id">
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
          <strong>{{ repo.name }}</strong>
        </a>
        <p>{{ repo.description || "Sem descrição" }}</p>
        <span><i class="ri-star-fill"></i> {{ repo.stargazers_count }} Stars</span>
        <span><i class="ri-git-fork-line"></i> {{ repo.forks_count }} Forks</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import api from '../utils/api';

export default defineComponent({
  name: 'RepoProfile',
  setup() {
    const repos = ref<any[]>([]);
    const repoNames = ["pokereact-ts", "sorteio-amigo-secreto", "tradeup-teste", "runes-game"];
    const loading = ref(false);
    const error = ref("");

    const fetchSelectedRepos = async () => {
      loading.value = true;
      try {
        const requests = repoNames.map((repo) =>
          api.get(`/repos/Tiesco789/${repo}`)
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
    return { repos, loading, error };
  },
});
</script>

<style></style>