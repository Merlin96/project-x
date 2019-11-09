<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" dark fixed >
      <v-list>
        <v-list-item v-for="item in menuItems" 
        :key="item.title">
          <v-list-item-icon>
            <v-btn
      :to="item.link"><v-icon>{{ item.icon }}</v-icon></v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app  dark class="Primary" >
        <v-app-bar-nav-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to = "/" tag="span" style="cursor: pointer">Project-x</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
      <v-btn text v-for="item in menuItems" :key="item.title"
      :to="item.link">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}</v-btn>
        </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>
<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
      { icon: 'mdi-cow', title: 'Sign up', link: '/signup'},
      { icon: 'mdi-lock', title: 'Sign in', link: '/signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
      { icon: 'mdi-bank', title: 'Check Bils', link: '/meetup'},
      { icon: 'mdi-door', title: 'Go inside', link: '/meetup/new'},
      { icon: 'mdi-account', title: 'Profile', link: '/profile'},
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>