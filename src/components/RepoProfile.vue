<template>
  <div>
    <h2>Some Projects</h2>
    <div v-if="loading">Carregando...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="repos.length">
      <li v-for="repo in repos" :key="repo.id">
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
          <strong>{{ repo.name }}</strong>
          <i class="ri-external-link-line"></i>
        </a>
        <p>{{ repo.description || "-" }}</p>
        <div>
          <span><i class="ri-star-fill"></i> {{ repo.stargazers_count }} Stars</span>
          <span><i class="ri-git-fork-line"></i> {{ repo.forks_count }} Forks</span>
        </div>
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

<style lang="scss" scoped>
h2 {
  color: white;
  margin-bottom: 1rem;
}

ul {
  li {
    list-style-type: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-self: center;

    &:not(:last-child)::after {
      content: "";
      display: block;
      margin: 1.5rem 0;
      border-bottom: 1px solid #3f434b;
    }

    span {
      margin-right: 1rem
    }

    a {
      text-decoration: none;
      text-transform: uppercase;

      strong {
        color: #7353c5;
        margin-right: 0.5rem;
      }

      i {
        color: #7353c5
      }
    }

    p {
      font-style: italic;
      margin: 0.5rem 0;
      font-size: 0.875rem;
    }
  }
}
</style>