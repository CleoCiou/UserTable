<script>
import router from './Router';

// pages
import UserTable from './pages/UserTable';
import Profile from './pages/Profile';

// components
import Header from './components/Header';

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.description) {
    let el = document.createElement('meta');
    el.name = 'description';
    el.innerText = to.meta.description;
    document.head.append(el);
  }
  next();
})

export default {
  router,
  components: {
    UserTable,
    Profile,
    Header
  },
  data() {
    return {
      theme: 'dark-theme'
    }
  },
  methods: {
    changeTheme(theme) {
      this.theme = theme;
    }
  }
}
</script>

<template>
  <div :class="(theme === 'dark-theme') ? 'light-theme' : 'dark-theme'">
    <Header :theme="theme" @change-theme="changeTheme" />
    <router-view />
  </div>
</template>

<style lang="scss">
  @import './styles/_base.scss';

  body {
    > div {
      min-height: 100vh;
    }

    span, li {
      line-height: 1.2em;
      letter-spacing: .5px;
    }

    li:before {
      content: '';
      height: .5em;
      width: .5em;
      display: inline-block;
      margin-right: 0.5em;
      border-radius: 50%;
      background-color: #888;
    }

    .light-theme {
      @include theme(true);

      header, th {
        @include theme(false);
      }
    }
    .dark-theme {
      @include theme(false);
      
      header, th {
        @include theme(true);
      }
    }
    header {
      padding: 1em;
    }
    .page {
      padding: 1em;
    }
  }
</style>
