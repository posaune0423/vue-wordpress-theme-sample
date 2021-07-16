<template>
  <div>
    <bread-list />
    <v-container class="my-4">
      <post-list />
    </v-container>
  </div>
</template>

<script>
import PostList from '@/components/Post/List';
import BreadList from '@/components/Post/BreadList';

export default {
  name: 'Post',
  components: {
    PostList,
    BreadList
  }
};
</script>

<style lang="scss" scoped></style>
