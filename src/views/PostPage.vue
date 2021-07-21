<template>
  <div>
    <h1>Page with posts</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Search..."
      style="width: 100%"
    />
    <!-- <my-button @click="fetchPosts">Get posts</my-button> -->
    <!-- <input type="text" v-model.trim="modificatorValue" /> -->
    <div class="app__btns">
      <my-button @click="showDialog">Create post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="sortedAndSorchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>LOADING...</div>
    <!-- <my-pagination :totalPages="totalPages" @changePage="changePage" /> -->

    <!-- <div class="observer" ref="observer"></div> -->
    <div class="observer" v-intersection="{ loadMorePosts }"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorValue: "",
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,

      sortOptions: [
        {
          value: "title",
          name: "Title",
        },
        {
          value: "body",
          name: "Body",
        },
      ],
    };
  },
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

    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            { params: { _page: this.page, _limit: this.limit } }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );

          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000);
      } catch {
        alert("Error!");
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            { params: { _page: this.page, _limit: this.limit } }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );

          this.posts = [...this.posts, ...response.data];
        }, 1000);
      } catch {
        alert("Error!");
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },

  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue]);
    //   });
    // },
    // dialogVisible(newValue) {
    //   console.log(newValue);
    // },
    // page() {
    //   this.fetchPosts();
    // },
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSorchedPosts() {
      return this.sortedPosts.filter((p) =>
        p.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
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
