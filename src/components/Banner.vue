<template>
  <div class="grid">
    <div class="profile-pic banner-container">
      <img v-if="userData?.avatar_url" :src="userData.avatar_url" :alt="userData.login" class="avatar" />
      <span>{{ userData?.bio }}</span>
    </div>

    <div class="texts banner-container">
      <div>
        <h5>
          Hi, I am <strong>{{ userData?.name }}</strong>, I'm a Front-End Developer <strong>HTML, CSS &
            JavaScript</strong>, I don't have a favorite framework, I like them all, but at the moment I'm studying
          <strong>PHP/Laravel & VueJS</strong> and I've really enjoyed it, especially for creating more powerful
          applications.
        </h5>
      </div>
    </div>

    <repo-profile class="repo-profile banner-container" />

    <div class="skills banner-container">
      <h2>Skills</h2>
      <ul class="skill-list">
        <li><img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt=""></li>
      </ul>
    </div>

    <div class="form banner-container">
      <h2>Let's talk</h2>
      <form class="form-container">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your E-mail" />
        <textarea placeholder="Message" rows="5" cols="13"></textarea>

        <button type="submit">Send message <i class="ri-send-plane-fill"></i></button>
      </form>
    </div>

    <div class="bmc banner-container">
      <a href="buymeacoffee.com/tiesco">
        <img src="https://www.vectorlogo.zone/logos/buymeacoffee/buymeacoffee-official.svg" alt="">
      </a>
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
    "skills form repo-profile"
    "skills form repo-profile"
    "bmc form repo-profile";
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

  .bmc {
    grid-area: bmc;

    a {
      display: flex;
      justify-content: center;
      
      img {
        padding: .5rem 1rem;
        background-color: #fae661;
        height: 100%;
        border-radius: .5rem;
      }
    }
  }

  .skills {
    grid-area: skills;
    color: white;

    h2 {
      margin-bottom: 1rem;
    }

    .skill-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        list-style: none;

        img {
          width: 4rem;
          margin: 4px 4px;
          padding: 0.5rem;
        }
      }
    }
  }

  .form {
    grid-area: form;
    display: flex;
    flex-direction: column;

    h2 {
      color: white;
      margin-bottom: 1rem;
    }

    .form-container {
      input,
      textarea {
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 1rem;
        border-radius: .5rem;
        border: none;
        background-color: #111111;
        color: white;
        font-size: 0.875rem;

        &:focus {
          outline: 1px solid #7353c5;
        }
      }

      button {
        background: #7353c5;
        margin-top: 1rem;
        width: 100%;
        font: 1.125rem sans-serif;
        border: none;
        padding: 1rem 0;
        border-radius: .5rem;
        color: white;
        cursor: pointer;

        &:hover {
          background-color: #513794;
        }
      }
    }
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