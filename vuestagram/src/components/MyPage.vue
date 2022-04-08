<template>
  <div class="mypage">
    <h4 class="followers">팔로워</h4>
    <input
      class="search"
      @input="search($event.target.value)"
      placeholder="🔍"
    />
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
    let followersOriginal = ref([]);
    let followers = ref([]);

    onMounted(() => {
      axios.get("/followers.json").then((result) => {
        followersOriginal.value = result.data;
        followers.value = [...result.data];
      });
    });

    function search(input) {
      let filtered = followersOriginal.value.filter((follower) => {
        return follower.name.match(new RegExp(input, "i"));
      });
      // console.log(filtered);
      followers.value = [...filtered];
    }

    return { followers, search };
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
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>