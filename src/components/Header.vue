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
      <router-link :to="{name: 'Users'}"> UserTable </router-link> |
      <router-link :to="{name: 'Profile'}"> Profile </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    // TODO change button innerText and pass to App component
    changeTheme(e) {
      this.$emit('change-theme', e.target.innerText);
      e.target.innerText = (e.target.innerText === 'dark-theme') ? 'light-theme' : 'dark-theme'
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