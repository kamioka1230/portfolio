import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4af706f1 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _46480734 = () => interopDefault(import('../pages/works.vue' /* webpackChunkName: "pages/works" */))
const _6aaee1b6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4af706f1,
    name: "about"
  }, {
    path: "/works",
    component: _46480734,
    name: "works"
  }, {
    path: "/",
    component: _6aaee1b6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
