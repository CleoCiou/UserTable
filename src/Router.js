import Vue from 'vue';
import VueRouter from 'vue-router';
import Require from './pages/Require';
import UserTable from './pages/UserTable';
import Profile from './pages/Profile';

Vue.use(VueRouter);

const routes = [
  {
    path: '/UserTable/',
    name: 'Require',
    component: Require,
    meta: {
      title: 'Home',
      description: 'Home page'
    }
  },
  {
    path: '/UserTable/UserTable',
    name: 'UserTable',
    component: UserTable,
    meta: {
      title: 'UserTable',
      description: 'UserTable page'
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
