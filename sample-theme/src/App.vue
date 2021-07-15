<template>
  <div>
    <v-app>
      <the-header />
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <the-footer />
    </v-app>
  </div>
</template>

<script>
import TheHeader from '@/components/Header';
import TheFooter from '@/components/Footer';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
