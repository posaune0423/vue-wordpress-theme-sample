<template>
  <div>
    <bread-list :title="post.title.rendered" />
    <h1 class="my-2">{{ post.title.rendered }}</h1>
    <div class="my-2 gray--text">{{ post.date }}</div>
    <div class="d-flex justify-center">
      <v-img :src="post.featured_image.src" max-width="400" />
    </div>
    <div class="my-3">
      <v-chip
        v-for="(name, i) in post.category_name"
        :key="i"
        small
        class="mx-2"
      >
        {{ name }}
      </v-chip>
    </div>
    <post-content :content="post.content.rendered" />
  </div>
</template>

<script>
import PostContent from '@/components/Post/Content';
import BreadList from '@/components/Post/BreadList';

export default {
  name: 'PostDetail',
  components: { PostContent, BreadList },
  data() {
    return {
      post: {}
    };
  },
  methods: {
    getPost() {
      this.$axios.get(`posts/${this.$route.params.id}`).then((res) => {
        this.post = res.data;
      });
    }
  },
  created() {
    this.getPost();
  }
};
</script>

<style lang="scss" scoped></style>
