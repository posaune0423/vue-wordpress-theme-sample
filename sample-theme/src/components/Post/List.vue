<template>
  <div class="container_post">
    <post-card v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostCard from '@/components/Post/Card';

export default {
  name: 'PostList',
  components: {
    PostCard
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getPosts() {
      this.$axios.get('posts').then((res) => {
        this.posts = res.data;
      });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style lang="scss" scoped>
.container_post {
  flex-wrap: wrap;
  display: flex;
  gap: 2rem;
}
</style>
