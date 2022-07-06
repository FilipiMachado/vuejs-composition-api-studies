import { createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Directives from '../components/Directives.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/directives',
      name: 'directives',
      component: Directives,
    },
  ]
})