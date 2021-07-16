<template>
  <div class="pa-3">
    <h3>Current Count : {{ getCount }}</h3>
    <div class="my-3">
      <v-btn class="mr-2" @click="increment"> Increse </v-btn>
      <v-btn @click="decrement"> Decrese </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Counter',
  computed: {
    ...mapGetters('counter', ['getCount'])
  },
  methods: {
    ...mapMutations('counter', ['increment', 'decrement'])
  }
};
</script>

<style lang="scss" scoped></style>
