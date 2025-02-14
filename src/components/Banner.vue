<template>
  <div class="grid">
    <div class="profile-pic banner-container">
      <img v-if="userData?.avatar_url" :src="userData.avatar_url" :alt="userData.login" class="avatar" />
      <span>{{ userData?.bio }}</span>
    </div>

    <div class="texts banner-container">
      <div>
        <h5>
          Hi, I am <strong>{{ userData?.name }}</strong>, a passionate developer crafting beautiful digital experiences.
        </h5>
        <br>
        <h5>
          I'm a Front-End Developer with skills in <strong>HTML, CSS & JavaScript</strong>.
          Atualmente estudando <strong>PHP/Laravel & VueJS</strong> e adorando as possibilidades.
        </h5>
      </div>
    </div>

    <repo-profile class="repo-profile banner-container" />

    <div class="skills banner-container">
      <h4>Skills</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>PHP/Laravel</li>
        <li>VueJS</li>
      </ul>
    </div>

    <div class="form banner-container">
      <h4>Entre em Contato</h4>
      <form>
        <input type="text" placeholder="Seu Nome" /><br /><br />
        <input type="email" placeholder="Seu E-mail" /><br /><br />
        <textarea placeholder="Sua Mensagem"></textarea><br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import api from "../utils/api";
import RepoProfile from "./RepoProfile.vue";

export default defineComponent({
  components: { RepoProfile },
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
.grid {
  display: grid;
  grid-template-areas:
    "profile-pic texts repo-profile"
    "skills texts repo-profile"
    "skills form repo-profile";
  gap: 1rem;

  .profile-pic {
    grid-area: profile-pic;
  }

  .texts {
    grid-area: texts;
  }

  .repo-profile {
    grid-area: repo-profile;
  }

  .skills {
    grid-area: skills;
    color: white;

    ul {
      display: flex;
      li {
        list-style: none;
      }
    }
  }

  .form {
    grid-area: form;
  }

  .banner-container {
    align-items: start;
    padding: 1.5rem 2rem;
    background-color: #171717;
    border: 1px solid rgb(44, 44, 44);
    border-radius: 0.5rem;
    width: 25rem;
  }

  .texts {
    span {
      color: #737373;
      font-weight: 600;
      font-size: 0.875rem;
    }

    div {
      font-size: 1.25rem;
      color: rgb(238, 238, 238);
      font-weight: 300;

      strong {
        color: #7353c5;
      }
    }
  }

  .profile-pic {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar {
      width: 100px;
      border-radius: 50%;
      margin-top: 20px;
    }

    span {
      margin-left: 0.875rem;
      color: white;
      font-style: italic;
    }
  }
}
</style>