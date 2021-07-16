<template>
  <div>
    <ul class="d-flex bread-list">
      <li>
        <router-link to="/">
          Home
        </router-link>
        <span class="mx-2"> > </span>
      </li>
      <li>
        <router-link to="/posts/">
          Posts
        </router-link>
        <span class="mx-2"> > </span>
      </li>
      <li v-if="title">
        <router-link :to="`/posts/${this.$route.params.id}`">
          {{ title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BreadList',
  props: ['title']
};
</script>

<style lang="scss" scoped>
.bread-list {
  li {
    text-decoration: none;
    list-style: none;
  }
}
</style>
