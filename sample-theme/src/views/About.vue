<template>
  <div>
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <h1>About Page</h1>
    <counter />
    <router-link to="/">Top</router-link>
  </div>
</template>

<script>
import Counter from '@/components/Counter';
export default {
  name: 'About',
  components: {
    Counter
  }
};
</script>

<style lang="scss" scoped></style>
