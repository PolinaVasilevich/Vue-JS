<template>
  <div class="pagination">
    <div
      class="pagination__item"
      :class="{ 'current-page': pageNumber === page }"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
    },
  },

  data() {
    return {
      page: 1,
    };
  },

  methods: {
    changePage(pageNumber) {
      this.page = pageNumber;
      this.$emit("changePage", pageNumber);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  margin-top: 15px;
}

.pagination__item {
  padding: 10px;
  border: 1px solid black;
}

.current-page {
  border: 2px solid teal;
}
</style>
