<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Header</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader',
  data: () => ({ drawer: null })
};
</script>

<style lang="scss" scoped></style>
