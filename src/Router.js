import Vue from 'vue';
import VueRouter from 'vue-router';
import Require from './pages/Require';
import Users from './pages/Users';
import Profile from './pages/Profile';

Vue.use(VueRouter);

const routes = [
  {
    // git hub root path
    path: '/UserTable/',
    name: 'Require',
    component: Require,
    meta: {
      title: 'Home',
      description: 'Home page'
    }
  },
  {
    path: '/UserTable/Users',
    name: 'Users',
    component: Users,
    meta: {
      title: 'Users',
      description: 'Users page'
    }
  },
  {
    path: '/UserTable/Profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'AboutMe',
      description: 'AboutMe page'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
