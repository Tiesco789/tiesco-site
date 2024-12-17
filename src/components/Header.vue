<script lang="ts">

export default {
  name: 'Header'
}
</script>

<template>
  <div class="header-container">
    <div class="links-container">
      <a class="link" href=""><i class="ri-linkedin-fill"></i></a>
      <a class="link" href=""><i class="ri-discord-fill"></i></a>
      <a class="link" href=""><i class="ri-mail-send-fill"></i></a>
      <a class="link" href=""><i class="ri-github-fill"></i></a>
    </div>

    <div class="btn-dark-mode">
      <i class="icon ri-sun-fill"></i>
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
      <i class="icon ri-moon-clear-fill"></i>
    </div>
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

  .btn-dark-mode {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon {
      font-size: 1.25rem;
      color: #a3a3a3;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked+.slider {
      background-color: #7353c5;
    }

    input:focus+.slider {
      box-shadow: 0 0 1px #7353c5;
    }

    input:checked+.slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
}
</style>