<template>
  <v-app-bar app>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/">
              Home
            </router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/about">
              About
            </router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/posts/">
              Posts
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-toolbar-title>Header</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style lang="scss" scoped></style>
