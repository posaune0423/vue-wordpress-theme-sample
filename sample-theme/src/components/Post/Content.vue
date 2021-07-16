<template>
  <div v-html="content"></div>
</template>

<script>
export default {
  name: 'PostContent',
  props: ['content']
};
</script>

<style lang="scss" scoped></style>
