<template>
  <div>
    <h1>{{ $store.state.postModule.limit }}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },

    changePage(page) {
      this.page = page;
    },
  },
};
</script>

<style scoped>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
