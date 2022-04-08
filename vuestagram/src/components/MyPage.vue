<template>
  <div class="mypage">
    <h4 class="followers">팔로워</h4>
    <input class="search" placeholder="🔍" />
    <div class="post-header" v-for="(follower, i) in followers" :key="i">
      <div
        class="profile"
        :style="`background-image: url(${follower.image})`"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    let followers = ref([]);

    onMounted(() => {
      axios.get("/followers.json").then((result) => {
        followers.value = result.data;
      });
    });

    return { followers };
  },
  data() {
    return {};
  },
};
</script>

<style>
.followers,
.mypage {
  text-align: center;
  padding: 0 10px;
}

.search {
  width: 80%;
  margin-bottom: 20px;
}
</style>