<template>
  <div>
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <h1>Top Page</h1>
    <counter />
    <router-link to="/about">about</router-link>
  </div>
</template>

<script>
import Counter from '@/components/Counter';
export default {
  name: 'Top',
  components: {
    Counter
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: $c_red;
}
</style>
