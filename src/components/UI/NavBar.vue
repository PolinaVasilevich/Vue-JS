<template>
  <div class="navbar">
    <di @click="$router.push('/')">App</di>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px"
        >About</my-button
      >
      <my-button @click="$router.push('/store')" style="margin-left: 20px"
        >store</my-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  padding: 15px;
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
}

.navbar__btns {
  margin-left: auto;
}
</style>
