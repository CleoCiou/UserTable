<template>
  <header>
    <div class="message">
      Welcome! click 
      <button @click="changeTheme">
        {{ theme }}
      </button>
      to change theme!
    </div>
    <nav>
      <router-link :to="{name: 'Require'}"> Home </router-link> |
      <router-link :to="{name: 'UserTable'}"> UserTable </router-link> |
      <router-link :to="{name: 'Profile'}"> Profile </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    changeTheme(e) {
      e.target.innerText = (e.target.innerText === 'dark-theme') ? 'light-theme' : 'dark-theme'
      this.$emit('change-theme', e.target.innerText);
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>