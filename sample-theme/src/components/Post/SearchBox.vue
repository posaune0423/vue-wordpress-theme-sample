<template>
  <div class="search mb-4">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="検索"
      @keypress.enter="search"
    />
    <button type="submit" @click="search"><v-icon>mdi-magnify</v-icon></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      if (this.searchQuery.replace(/ |　/g, '')) {
        router.push(`/articles/search?q=${this.searchQuery}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/* Style the search field */
.search input[type='text'] {
  padding: 8px;
  font-size: 14px;
  border: 1px solid grey;
  float: left;
  width: 86%;
  background: #f1f1f1;
}
/* Style the submit button */
.search button {
  float: left;
  width: 14%;
  background: #c5c5c5;
  color: white;
  font-size: 14px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
  @include pc-screen() {
    padding: 6.7px;
  }
  @include sp-screen() {
    padding: 6.3px;
  }
}
.search button:hover {
  background: #7c7c7c;
}
/* Clear floats */
.search::after {
  content: '';
  clear: both;
  display: table;
}
</style>
