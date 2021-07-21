<template>
  <form @submit.prevent>
    <h1>Create post</h1>
    <my-input v-focus v-model="post.title" type="text" placeholder="Title" />
    <my-input v-model="post.body" type="text" placeholder="Body" />
    <my-button
      @click="createPost"
      style="align-self: flex-end; margin-top: 15px"
      >Create post</my-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  margin-top: 15px;
  padding: 10px 15px;
  border: 1px solid teal;
}
</style>
