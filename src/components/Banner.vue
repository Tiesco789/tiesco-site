<template>
  <div class="grid">
    <div class="profile-pic banner-container">
      <img v-if="userData?.avatar_url" :src="userData.avatar_url" :alt="userData.login" class="avatar" />
      <span>{{ userData?.bio }}</span>
    </div>

    <div class="texts banner-container">
      <div>
        <h5>
          Hi, I am <strong>{{ userData?.name }}</strong>, I work as Full-Stack Developer <strong>HTML, CSS &
            JavaScript</strong>, at the moment I'm studying <strong>PHP/Laravel & VueJS</strong> and I've really enjoyed
          it, especially for creating more powerful applications.
        </h5>
      </div>
    </div>

    <repo-profile class="repo-profile banner-container" />

    <div class="skills banner-container">
      <h2>Skills</h2>
      <ul class="skill-list">
        <li><img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" alt=""></li>
        <li><img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt=""></li>
      </ul>
    </div>

    <div class="form banner-container">
      <h2>Experience</h2>
      <div class="experience-container">

        <!-- Logsmart -->
        <div class="exp">
          <div>
            <h4>LogSmart</h4>
            <small>August/2024 - Present</small>
          </div>
          <p>Dev Full-Stack Jr</p>
        </div>


        <!-- Copapel -->
        <div class="exp">
          <div>
            <h4>Copapel</h4>
            <small>March/2024 - August/2024</small>
          </div>
          <p>Web Designer</p>
        </div>

        <!-- FaceDigital -->
        <div class="exp">
          <div>
            <h4>Face Digital</h4>
            <small>Jan/2023 - Feb/2024</small>
          </div>
          <p>Web Designer</p>
        </div>

        <!-- Trackcash -->
        <div class="exp">
          <div>
            <h4>Trackcash</h4>
            <small>Oct/2020 - Oct/2022</small>
          </div>
          <p>Product Designer</p>
        </div>
      </div>
    </div>

    <div class="bmc banner-container">
      <p><i class="ri-code-s-slash-fill"></i>Building robust applications with modern technologies</p>
      <p><i class="ri-palette-line"></i>Creating beautiful and intuitive user interfaces</p>
      <p><i class="ri-global-line"></i>Developing responsive and scalable web applications</p>
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

    p {
      color: white;
      margin: .5rem 0;
      line-height: 1.8rem;

      i {
        margin-right: .5rem;
        background-color: #7353c5;
        padding: 6px;
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
    align-content: space-between;


    h2 {
      color: white;
      margin-bottom: 1rem;
    }

    .experience-container {
      grid-area: form;
      width: 100%;

      .exp {
        margin-top: 0.875rem;
        color: #7353c5;
        font-weight: bold;

        &:not(:last-child)::after {
          content: "";
          display: block;
          margin: 0.875rem 0;
          border-bottom: 1px solid #3f434b;
        }

        div {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          color: white;

          h4 {
            margin-right: 1rem;
          }
        }
      }
    }
  }

  .banner-container {
    align-items: start;
    padding: 1.5rem 2rem;
    border: 1px solid #3f434b;
    border-radius: 0.5rem;
    width: 25rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
  }

  .texts {
    span {
      color: #737373;
    }

    div {
      font-size: 1.25rem;
      color: rgb(238, 238, 238);
      line-height: 1.5rem;

      h5 {
        font-weight: normal;

        strong {
          color: #7353c5;
        }
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