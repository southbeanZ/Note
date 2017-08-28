import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import NewNote from '@/pages/NewNote'
import NoteDetail from '@/pages/NoteDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'NoteDetail',
          component: NoteDetail
        },
        {
          path: '/search',
          name: 'Search',
          component: Search
        },
        {
          path: '/newnote',
          name: 'NewNote',
          component: NewNote
        }
      ]
    }
  ]
})
