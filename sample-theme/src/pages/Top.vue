<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Top Page</h1>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script>
export default {
  name: 'Top'
};
</script>

<style lang="scss" scoped>
h1 {
  color: $c_red;
}
</style>
