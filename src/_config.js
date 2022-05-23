export const process = {
  dev: true
}

export const site = {
  home: process.dev ? 'Dev' : 'Prod'
}
export const app = {
  title: 'Modals'
}
export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/'
  },
  {
    title: 'LogIn',
    alias: 'login',
    url: '/login'
  },
  {
    title: 'About',
    alias: 'about',
    url: '/about'
  }
]
