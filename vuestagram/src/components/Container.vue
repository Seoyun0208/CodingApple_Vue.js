<template>
  <div>
    <Post :post="post" v-for="(post, i) in posts" :key="i" />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  data() {},
  components: {
    Post: Post,
  },
  props: {
    posts: Array,
  },
};
</script>

<style>
</style>