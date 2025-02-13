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
  </div>

  <RepoProfile />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import api from "../utils/api";
import RepoProfile from "./RepoProfile.vue";

export default defineComponent({
  name: "Banner",
  setup() {
    const userData = ref<any>(null);

    const fetchGitHubUser = async () => {
      try {
        const response = await api.get("users/Tiesco789");
        userData.value = response.data;
      } catch (error) {
        console.error(`Ops, aconteceu alguma coisa: ${error}`);
      }
    };

    onMounted(fetchGitHubUser);
    return { userData };
  },
});
</script>

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