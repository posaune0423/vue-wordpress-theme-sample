<template>
  <v-card class="mx-auto" max-width="344" :to="'/posts/' + post.id" hover>
    <v-img :src="post.featured_image.src" height="200px"></v-img>

    <v-card-title>
      {{ post.title.rendered }}
    </v-card-title>

    <v-card-text class="text-right">
      {{ post.date }}
    </v-card-text>

    <v-card-text>
      <v-chip v-for="(name, i) in post.category_name" :key="i" small>
        {{ name }}
      </v-chip>
    </v-card-text>

    <v-card-subtitle v-html="post.excerpt.rendered"> </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['post'],
  data: () => ({
    show: false
  })
};
</script>

<style lang="scss" scoped></style>
